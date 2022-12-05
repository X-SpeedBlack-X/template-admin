import Cookies from "js-cookie";
import router from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/User";

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  signUp?: (email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function userNormal(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

function manageCookie(logged: boolean) {
  if (logged) {
    Cookies.set("template-admin-udemy-auth", logged, {
      expires: 7,
    });
  } else {
    Cookies.remove("template-admin-udemy-auth");
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configSection(userFirebase) {
    if (userFirebase?.email) {
      const user = await userNormal(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSection(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await configSection(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function signUp(email, password) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await configSection(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSection(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("template-admin-udemy-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(configSection);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUp,
        loginGoogle,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

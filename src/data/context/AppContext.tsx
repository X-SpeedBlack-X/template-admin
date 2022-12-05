import { createContext, useEffect, useState } from "react";

//type Theme = "dark" | "";

type AppContextProps = {
  theme: string;
  changeTheme: () => void;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider(props) {
  const [theme, setTheme] = useState("");

  function changeTheme() {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const themeSave = localStorage.getItem("theme");
    setTheme(themeSave);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

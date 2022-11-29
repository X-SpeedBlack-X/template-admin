import { createContext, useState } from "react";

type Theme = "dark" | "";

type AppContextProps = {
  theme: Theme;
  changeTheme: () => void;
};

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState<Theme>("");
  function changeTheme() {
    setTheme(theme === "" ? "dark" : "");
  }
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

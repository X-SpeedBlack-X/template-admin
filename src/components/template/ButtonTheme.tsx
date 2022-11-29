import { MoonIcon, SunIcon } from "../icons";

type ButtonThemeProps = {
  theme: string;
  changeTheme: () => void;
};

export function ButtonTheme(props: ButtonThemeProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.changeTheme}
      className="sm:flex hidden items-center bg-gradient-to-r from-yellow-300 to-yellow-700 lg:w-24 w-14 h-8 cursor-pointer p-1 rounded-full"
    >
      <div className="flex items-center justify-center bg-white text-yellow-700  rounded-full w-6 h-6">
        {SunIcon(4)}
      </div>
      <div className="hidden lg:flex items-center ml-4 text-white">
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className="sm:flex hidden items-center justify-end bg-gradient-to-r from-gray-500 to-gray-700 lg:w-24 w-14 h-8 cursor-pointer p-1 rounded-full"
    >
      <div className="hidden lg:flex items-center mr-2 text-gray-300">
        <span>Escuro</span>
      </div>
      <div className="flex items-center justify-center bg-black text-yellow-300  rounded-full w-6 h-6">
        {MoonIcon(4)}
      </div>
    </div>
  );
}

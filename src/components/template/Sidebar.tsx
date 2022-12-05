import useAuth from "../../data/hook/useAuth";
import { AdjustmentsIcon, BellIcon, HomeIcon, LogoutIcon } from "../icons";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";

export function Sidebar() {
  const { logout } = useAuth();
  return (
    <aside className="flex flex-col dark:bg-slate-900">
      <div className="flex items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500  to-purple-800  ">
        <Logo />
      </div>

      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/adjustments" text="Ajustes" icon={AdjustmentsIcon} />
        <MenuItem url="/notification" text="Notificações" icon={BellIcon} />
      </ul>

      <ul>
        <MenuItem
          onClick={logout}
          text="Sair"
          url="/login"
          icon={LogoutIcon}
          className="text-red-600 hover:bg-red-400 hover:text-white cursor-pointer  dark:hover:bg-red-700 "
        />
      </ul>
    </aside>
  );
}

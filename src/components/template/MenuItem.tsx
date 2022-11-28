import Link from "next/link";

type MenuItemProps = {
  url?: string;
  text: string;
  icon: any;
  onClick?: (e: any) => void;
  className?: string;
};
export function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <span className="flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200">
        <i
          className={`${
            props.className ? "" : "text-black"
          } dark:text-gray-200`}
        >
          {props.icon}
        </i>
        <p className="text-xs font-light">{props.text}</p>
      </span>
    );
  }
  return (
    <li
      className={`hover:bg-gray-400 dark:hover:bg-gray-800 ${props.className}`}
      onClick={props.onClick}
    >
      {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
}

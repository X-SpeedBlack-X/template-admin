import useAppData from "../../data/hook/useAppData";
import { Content } from "./Content";
import { Heading } from "./Heading";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  title: string;
  subtitle: string;
  children?: any;
};

export function Layout(props: LayoutProps) {
  const { theme, changeTheme } = useAppData();
  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <Sidebar />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-slate-800">
        <Heading title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}

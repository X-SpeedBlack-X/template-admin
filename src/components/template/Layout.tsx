import { Content } from "./Content";
import { Heading } from "./Heading";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  title: string;
  subtitle: string;
  children?: any;
};

export function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen dark">
      <Sidebar />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-slate-800">
        <Heading title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}

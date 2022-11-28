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
    <div>
      <Sidebar />
      <Heading title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  );
}

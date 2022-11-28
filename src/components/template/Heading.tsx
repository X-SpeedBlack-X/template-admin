import { Title } from "./Title";

type HeadingProps = {
  title: string;
  subtitle: string;
};

export function Heading(props: HeadingProps) {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
}

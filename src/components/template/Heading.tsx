import useAppData from "../../data/hook/useAppData";
import { AvatarUser } from "./AvatarUser";
import { ButtonTheme } from "./ButtonTheme";
import { Title } from "./Title";

type HeadingProps = {
  title: string;
  subtitle: string;
};

export function Heading(props: HeadingProps) {
  const { theme, changeTheme } = useAppData();
  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <ButtonTheme theme={theme} changeTheme={changeTheme} />
        <AvatarUser className="ml-3" />
      </div>
    </div>
  );
}

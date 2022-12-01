import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

type AvatarUserProps = {
  className?: string;
};

export function AvatarUser(props: AvatarUserProps) {
  const { user } = useAuth();
  return (
    <Link href="/perfil">
      <img
        src={user?.imageUrl ?? "/avatar.svg"}
        alt="avatar do usuário"
        className={`${props.className} h-10 w-10 rounded-full cursor-pointer`}
      />
    </Link>
  );
}

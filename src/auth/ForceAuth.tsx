import Image from "next/image";
import router from "next/router";
import loading1 from "../../public/loading.gif";
import useAuth from "../data/hook/useAuth";

export function ForceAuth(props) {
  const { user, loading } = useAuth();
  function renderContent() {
    return <>{props.children}</>;
  }

  function renderLoading() {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Image src={loading1} alt="Carregando" />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push("/login");
    return null;
  }
}

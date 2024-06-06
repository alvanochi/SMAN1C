import ProfileEx from "../Elements/ProfileEx";
import Header from "./Header";

export default function Graduate() {
  return (
    <>
      <Header
        title={"Profile Alumni"}
        text={"Profil Alumni SMA 1 Negeri Ciampea."}
      />
      <div className="flex flex-wrap w-full py-16">
        <ProfileEx name={"Alvano Hastagina ST"} img={"/wilyam.png"} />
        <ProfileEx name={"Gisellia Maharani S.Kom"} img={"/windi.png"} />
      </div>
    </>
  );
}

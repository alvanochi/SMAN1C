import CardProgram from "../Elements/CardProgram";
import Header from "./Header";

export default function Program() {
  return (
    <Header
      title={"Jurusan"}
      text={"Pilihan program keahlian di SMA Negeri 1 Ciampea."}
    >
      <CardProgram />
    </Header>
  );
}

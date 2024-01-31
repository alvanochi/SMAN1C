import CardReason from "../Elements/CardReason";
import Header from "./Header";

export default function Reason() {
  return (
    <Header
      title={"Kenapa Harus"}
      text={
        "Alasan kenapa harus memilih untuk bergabung dengan SMA Negeri 1 Ciampea"
      }
    >
      <CardReason />
    </Header>
  );
}

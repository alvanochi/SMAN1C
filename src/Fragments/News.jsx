import Button from "../Elements/Button";
import CardNews from "../Elements/CardNews";
import Header from "./Header";

export default function News() {
  return (
    <>
      <Header
        title={"Berita Terbaru"}
        text={"Berita Terbaru Tentang SMA 1 Negeri Ciampea"}
      >
        <CardNews />
      </Header>
      <div className="flex justify-center">
        <Button
          classname={"bg-blue-700 mt-12 hover:bg-blue-500 text-white"}
          children={"Semua Berita"}
        />
      </div>
    </>
  );
}

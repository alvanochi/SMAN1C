import CardDoc from "../Elements/CardDoc";

export default function Doc() {
  return (
    <div className="w-full py-16 overflow-hidden bg-blue-700">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full pl-8 mb-8 mr-6 lg:w-1/3">
          <h1 className="text-4xl font-bold text-center text-white lg:text-start font-poppins">
            Foto Dokumentasi Kegiatan SMA Negeri 1 Ciampea
          </h1>
        </div>
        <CardDoc />
      </div>
    </div>
  );
}

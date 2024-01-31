import ScrollCarousel from "scroll-carousel-react";
export default function CardDoc() {
  const data = [
    {
      id: 1,
      img: "url('/doc1.png')",
      title: "Meja Karyawan Salah Satu Siswa",
    },
    {
      id: 2,
      img: "url('/doc2.png')",
      title: "Perpustakaan baru",
    },
    {
      id: 3,
      img: "url('/doc3.png')",
      title: "Reuni Akbar Angkatan 2023",
    },
    {
      id: 4,
      img: "url('/doc1.png')",
      title: "Meja Karyawan Salah Satu Siswa",
    },
    {
      id: 5,
      img: "url('/doc2.png')",
      title: "Perpustakaan baru",
    },
    {
      id: 6,
      img: "url('/doc3.png')",
      title: "Reuni Akbar Angkatan 2023",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-5 font-poppins">
      <ScrollCarousel autoplay direction="ltr">
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex w-[250px] items-end h-80 rounded-md bg-[${item.img}] bg-cover grayscale hover:grayscale-0 cursor-pointer transition duration-300`}
          >
            <div className="w-full px-4 py-2 h-1/3 bg-slate-100/70">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-xs">
                SMA Negeri 1 <span className="block">Ciampea</span>
              </p>
            </div>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}

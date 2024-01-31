import { motion } from "framer-motion";
export default function CardProgram() {
  const data = [
    {
      id: 1,
      img: "/program.png",
      title: "TEKNIK Komputer dan Jaringan",
    },
    {
      id: 2,
      img: "/hotel.png",
      title: "Perhotelan",
    },
    {
      id: 3,
      img: "/rpl.png",
      title: "Rekayasa Perangkat Lunak",
    },
    {
      id: 4,
      img: "/arsitektur.png",
      title: "Arsitektur",
    },
    {
      id: 5,
      img: "/program.png",
      title: "Teknik Elektronika Industri",
    },
    {
      id: 6,
      img: "/sound.png",
      title: "Teknik Audio Video",
    },
    {
      id: 7,
      img: "/listrik.png",
      title: "Teknik Instalasi Tenaga Listrik",
    },
    {
      id: 8,
      img: "/kendaraan.png",
      title: "Kendaraan Ringan Otomotif",
    },
    {
      id: 9,
      img: "/bangunan.png",
      title: "Permodelan dan Informasi Bangunan",
    },
    {
      id: 10,
      img: "/ngelas.png",
      title: "Teknik Pengelasan",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center w-full">
      {data.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: index * 0.1 }}
          key={index}
          className="flex flex-col items-start justify-around w-[180px] p-4 m-4 bg-blue-700 rounded-md shadow-lg hover:bg-blue-500 h-52"
        >
          <img src={item.img} alt={item.title} />
          <h3 className="font-semibold text-white text-start text-md">
            {item.title}
          </h3>
          <a href="#" className="mb-2 text-xs text-white hover:italic ">
            Details
          </a>
        </motion.div>
      ))}
    </div>
  );
}

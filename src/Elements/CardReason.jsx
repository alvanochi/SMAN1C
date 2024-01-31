import { motion } from "framer-motion";
export default function CardReason() {
  const data = [
    {
      id: 1,
      img: "/pc.png",
      title: "Fasilitas Lengkap",
      desc: "Penunjang belajar dengan kualitas terbaik",
    },
    {
      id: 2,
      img: "/lingkungan.png",
      title: "Lingkungan Nyaman",
      desc: "Berada di lingkungan yang nyaman dan asri",
    },
    {
      id: 3,
      img: "/pengajar.png",
      title: "Pengajar Kompeten",
      desc: "Guru terbaik dengan pengalaman yang menjanjikan",
    },
    {
      id: 4,
      img: "/kerjasama.png",
      title: "Kerja Sama Luas",
      desc: "Dapat kesempatan kerja yang lebih terjamin",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {data.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: index * 0.4 }}
          key={index}
          className="flex flex-col px-4 bg-white rounded-md shadow-lg w-52 font-inter h-52"
        >
          <img src={item.img} className="self-center my-6" />
          <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
          <p className="text-xs text-slate-500">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

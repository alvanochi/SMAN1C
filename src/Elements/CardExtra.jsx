import { motion } from "framer-motion";
export default function CardReason() {
  const data = [
    {
      id: 1,
      img: "/pramuka.png",
      title: "Praja Muda Karana",
      desc: "Pertama kali dibentuk team tahun 2002",
    },
    {
      id: 2,
      img: "/pmr.png",
      title: "Palang Merah Remaja",
      desc: "Pertama kali dibentuk team tahun 2003",
    },
    {
      id: 3,
      img: "/alam.png",
      title: "Pecinta Alam",
      desc: "Pertama kali dibentuk team tahun 2008",
    },
    {
      id: 4,
      img: "/sinema.png",
      title: "Sinematografi",
      desc: "Pertama kali dibentuk team tahun 2016",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: index * 0.4 }}
          key={index}
          className="flex flex-col items-start justify-around w-[200px] lg:w-[240px] h-64 p-4 bg-white rounded-md shadow-lg font-poppins text-start hover:bg-slate-200"
        >
          <img src={item.img} alt={item.title} />
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-md text-slate-600">{item.desc}</p>
          <a href="#" className="mb-2 text-sm hover:italic ">
            Details
          </a>
        </motion.div>
      ))}
    </div>
  );
}

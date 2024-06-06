import { motion } from "framer-motion";
export default function ProfileEx({ name, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between w-full px-4 mb-8 lg:w-1/2 lg:px-16 font-poppins"
    >
      <img
        src={img}
        width={"160px"}
        className="self-center min-h-64"
        alt={name}
      />
      <div className="flex flex-col items-start justify-around h-full mx-6">
        <h1 className="text-2xl font-black">{name}</h1>
        <p className="my-2 text-sm text-black">Angkatan 2009</p>
        <p className="text-sm text-slate-400">
          {name} adalah seorang Frontend Web Developer yang berada di Ohio saat
          ini dia adalah salah satu alumni yang berprestasi.
        </p>
        <a href="#" className="my-4 text-xs font-semibold text-blue-700">
          Baca Selengkapnya
        </a>
      </div>
    </motion.div>
  );
}

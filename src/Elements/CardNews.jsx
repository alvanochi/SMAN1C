import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CardNews = () => {
  const [selectedId, setSelectedId] = useState(null);
  const data = [
    {
      id: 1,
      img: "/news.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "Pendaftaran siswa baru untuk tahun ajaran 2024/2025 di SMA Negeri 1 Ciampea telah resmi dibuka, memberikan kesempatan kepada calon siswa untuk bergabung dengan salah satu sekolah unggulan di Ciampea. Segera daftarkan diri Anda dan jadilah bagian dari perjalanan pendidikan berkualitas di SMA Negeri 1 Ciampea!",
    },
    {
      id: 2,
      img: "/news2.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      img: "/news3.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      img: "/news4.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      img: "/news5.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      img: "/news6.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      id: 7,
      img: "/news7.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      id: 8,
      img: "/news8.png",
      date: "13 Desember 2023",
      title: "Pendaftaran SMA Negeri 1 Ciampea Telah Dibuka!",
      author: "By Admin SMAN1C",
      desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center w-full">
      {data.map((item) => (
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: item.id * 0.1 }}
          key={item.id}
          className="w-[280px] lg:w-[260px] m-2 rounded-md shadow-md relative"
        >
          <img src={item.img} alt={item.title} />
          <div className="flex flex-col items-start px-2 py-2 mx-2 font-poppins">
            <p className="text-xs text-slate-600">{item.date}</p>
            <h3 className="my-4 text-lg font-bold text-start">{item.title}</h3>
            <p className="text-xs text-slate-600">{item.author}</p>
            <motion.button
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className="my-4 text-xs font-semibold text-blue-700"
            >
              Baca Selengkapnya
            </motion.button>
          </div>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            // onClick={() => setSelectedId(null)}
            key={selectedId}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative z-50 p-6 bg-white rounded-md shadow-md w-72 lg:w-80"
              layoutId={selectedId}
            >
              {data.map(
                (item) =>
                  item.id === selectedId && (
                    <div key={item.id}>
                      <motion.img src={item.img} alt={item.title} />
                      <motion.div className="flex flex-col items-start px-2 py-2 mx-2 font-poppins">
                        <motion.p className="text-xs text-slate-600">
                          {item.date}
                        </motion.p>
                        <motion.h3 className="my-4 text-lg font-bold text-start">
                          {item.title}
                        </motion.h3>
                      </motion.div>
                      <motion.button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-0 right-0 px-3 py-2 m-2 text-xs font-bold text-blue-700 bg-blue-300 rounded-full"
                      >
                        X
                      </motion.button>
                      <motion.p className="text-xs text-slate-600">
                        {item.desc}
                      </motion.p>
                    </div>
                  )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardNews;

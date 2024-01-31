import Button from "../Elements/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full pt-20 lg:flex ">
      {/* Bagian Kiri Start */}
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full px-8 lg:px-16 lg:w-1/2"
      >
        <h1 className="font-black text-7xl text-slate-800 font-poppins">
          SMA <span className="text-blue-700">Negeri 1</span> Ciampea
        </h1>
        <p className="my-8 text-lg font-medium font-poppins text-slate-600">
          sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
          berprestasi di segala bidang yang dapat bersaing di dunia
          internasional
        </p>
        <div className="flex my-8">
          <Button classname={"bg-blue-700 hover:bg-blue-500 mr-4"}>
            Get Started {">"}
          </Button>
          <Button
            classname={
              "outline-blue-700 hover:outline-blue-400 outline outline-1 hover:text-blue-400 text-blue-800"
            }
          >
            Video {">"}
          </Button>
        </div>
        <div className="flex">
          <p className="text-lg font-bold font-inter">
            We are in Socials media :{" "}
          </p>
          <div className="flex mt-[6px] ml-4">
            <img src="/fb.png" className="w-4 h-4" alt="Facebook" />
            <img src="/twit.png" className="w-4 h-4 mx-2" alt="Twitter" />
            <img src="/yt.png" className="w-4 h-4" alt="Youtube" />
          </div>
        </div>
      </motion.div>
      {/* Bagian Kiri End */}

      {/* Bagian Kanan Start */}
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full select-none md:hidden lg:block lg:px-16 lg:w-1/2"
      >
        <div className="absolute left-0 w-48 p-3 text-center bg-white rounded-lg lg:w-56 bottom-24">
          <p className="text-xs italic font-bold lg:text-sm font-poppins">
            “ Belajar Itu Menyenangkan kuncinya jangan pernah menyerah oleh
            apapun itu ”
          </p>
        </div>

        <div className="absolute right-0 flex p-3 bg-white rounded-lg w-52 lg:w-60 font-poppins top-24">
          <img
            src="/marion.png"
            alt="Marion Alexis"
            className="w-6 h-6 mr-2 rounded-full "
          />
          <div className="flex flex-col items-start">
            <div className="flex">
              <img src="/star.png" alt="Star" />
              <img src="/star.png" alt="Star" />
              <img src="/star.png" alt="Star" />
              <img src="/star.png" alt="Star" />
              <img src="/star.png" alt="Star" />
            </div>
            <h1 className="my-1 text-xs font-bold ">
              Jika Ingin Sukses Belajarlah bersabar
            </h1>
            <p className="text-xs text-slate-400">Ceo Marion Lexis</p>
          </div>
        </div>
        <img src="/smk.png" alt="View SMK" />
      </motion.div>
      {/* Bagian Kanan End */}
    </div>
  );
};

export default Home;

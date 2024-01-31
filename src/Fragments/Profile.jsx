import Button from "../Elements/Button";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <h1 className="mb-12 text-4xl font-bold text-center font-poppins">
        Profil <span className="text-blue-700">SMA Negeri 1</span>
        <span className="block">Ciampea</span>
      </h1>
      <div className="w-full lg:flex">
        {/* Bagian Kiri Start */}
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="px-8 mb-4 lg:w-1/2"
        >
          <img src="/profile.png" alt="profile" />
        </motion.div>
        {/* Bagian Kiri End */}
        {/* Bagian Kanan Start */}
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="px-8 lg:w-1/2"
        >
          <h1 className="mb-8 text-3xl font-bold font-poppins">
            Sambutan Kepala Sekolah SMA Negeri 1 Ciampea
          </h1>
          <p className="text-lg font-medium font-poppins text-slate-600">
            sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
            berprestasi di segala bidang yang dapat bersaing di dunia
            internasional{" "}
            <span className="block mt-4">
              dan Sekolah adalah tempat anak-anak mendapatkan dukungan untuk
              melengkapi pembelajarannya di sekola
            </span>
          </p>
          <Button classname={"bg-blue-700 mt-8 hover:bg-blue-500"}>
            Baca Selanjutnya {">"}
          </Button>
        </motion.div>
        {/* Bagian Kanan End */}
      </div>
    </>
  );
};

export default Profile;

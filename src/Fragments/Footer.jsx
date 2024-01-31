export default function Footer() {
  return (
    <div className="w-full text-white bg-blue-700">
      <div className="flex flex-wrap px-10 py-12">
        <div className="w-full md:w-1/2 font-poppins">
          <div className="w-3/5">
            <h2 className="mb-4 text-3xl font-bold">SMAN1C</h2>
            <p className="mb-8 text-sm">
              sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
              berprestasi di segala bidang yang dapat bersaing di dunia
              internasional
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:text-end">
          <div className="flex mb-2 md:mb-6 md:justify-end">
            <img src="/facebook.png" className="w-8 mr-2" alt="Facebook" />
            <img src="/twitter.png" className="w-8 mr-2" alt="Twitter" />
            {/* <img src="/ig.png" className="w-8 mr-2" alt="Instagram" /> */}
            <img src="/youtube.png" className="w-8 mr-2" alt="Youtube" />
          </div>
          <h2 className="text-lg font-semibold">
            Dibuat Oleh{" "}
            <a
              href="https://linkedin.com/in/alvanoh"
              className="font-bold hover:text-slate-200"
            >
              Alvano Hastagina,
            </a>
            <span className="block">
              Menggunakan TailwindCSS dan ReactJS. @2024
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

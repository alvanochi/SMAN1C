export default function List({ variants }) {
  const data = [
    {
      id: 1,
      nama: "Beranda",
    },
    {
      id: 2,
      nama: "Tentang Kami",
    },
    {
      id: 3,
      nama: "Program",
    },
    {
      id: 4,
      nama: "Guru",
    },
    {
      id: 5,
      nama: "Siswa",
    },
    {
      id: 6,
      nama: "Berita",
    },
    {
      id: 7,
      nama: "Fitur",
    },
  ];
  return (
    <nav className="w-full overflow-hidden transition-all duration-300">
      <ul className={`justify-around text-lg font-medium ${variants}`}>
        {data.map((item) => (
          <li key={item.id} className="px-4 my-4">
            <a
              href="#"
              className={`hover:text-blue-600 ${
                item.nama === `Beranda` ? `text-blue-700` : `text-black`
              }`}
            >
              {item.nama}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

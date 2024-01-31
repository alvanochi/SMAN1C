export default function Header({ children, title, text }) {
  return (
    <div className="w-full px-2 text-center">
      {title.length > 7 ? (
        <>
          <h1 className="text-4xl font-bold font-poppins">
            {title} Di{" "}
            <span className="text-blue-700">
              SMA{" "}
              <span className="block">
                Negeri 1 <span className="text-black">Ciampea</span>
              </span>
            </span>
          </h1>
          <p className="mt-4 mb-8 text-lg font-medium font-poppins text-slate-600">
            {text}
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold font-poppins">
            {title} Di <span className="text-blue-700">SMA Negeri 1</span>
            <span className="block">Ciampea</span>
          </h1>
          <p className="mt-4 mb-8 text-lg font-medium font-poppins text-slate-600">
            {text}
          </p>
        </>
      )}

      {children}
    </div>
  );
}

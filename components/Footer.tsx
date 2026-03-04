export default function Footer() {
  return (

    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-xl font-semibold mb-4">
          Sansthita
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl">
          Sansthita is a registered non-profit organization working to
          support vulnerable communities, empower women and promote
          education and dignity in society.
        </p>

        <p className="text-gray-400 text-sm">
          B 23/1 Kalindi Housing Estate, Lake Town, Kolkata 700089
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Email: sansthita2025.kalindi@gmail.com
        </p>

      </div>

      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} Sansthita NGO
      </div>

    </footer>

  )
}
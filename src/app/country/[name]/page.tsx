import Link from 'next/link';
import { notFound } from 'next/navigation';


export default async function CountryDetails({ params }: { params: { name: string } }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);

  if (!res.ok) return notFound();

  const country = (await res.json())[0];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20200205/pngtree-3d-world-map-with-shadow-light-image_329158.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center text-green-950 bg-opacity-70 p-6  rounded ">
        <h1 className="font-serif text-slate-700 text-4xl sm:text-sm md:text-3xl lg:text-4xl font-bold mb-4">{country.name.common}</h1>

        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="h-44 w-80 mt-5 object-cover mb-4" />
        <div className='text-2xl sm:text-0.1xl md:text-1xl lg:text-2xl text-sky-800 p-2'>

          <p><strong >Capital :  </strong> {country.capital?.[0] || 'N/A'}</p>

          <p><strong>Region :</strong> {country.region}</p>

          <p><strong>Population :</strong> {country.population.toLocaleString()}</p>

          <p><strong>Languages :</strong> {Object.values(country.languages || {}).join(', ')}</p>
        </div>
      </div>
      <div className=' flex justify-center items-center'>
        <Link href="/">

          <button

            className="flex justify-center items-centermt-4 bg-sky-900 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go Back
          </button>

        </Link>
      </div>
    </div>
  );
}
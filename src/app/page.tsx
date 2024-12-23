"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {

      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      console.log(data)
      setCountries(data);

    };

    fetchCountries();
  }, []);

  return (
    <div

      className="min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20200205/pngtree-3d-world-map-with-shadow-light-image_329158.jpg')", // Add 'world-map.jpg' in public folder
      }}
    >
      <div className=" text-white p-10 bg-opacity-50 min-h-screen">

        <h1 className="text-4xl sm:text-sm md:text-2xl lg:text-4xl font-bold text-center text-sky-900 font-serif ">
          Explore Countries of the World
        </h1>

        <div className="text-sky-800 flex-1 flex justify-center text-center mb-10 gap-1 sm:text-left lg:text-center md:text-center text-xs">
          <p> Here you can find out the capital, region, population, and language of more than 200 countries.</p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">

          {countries.map((country) => (
            <div
              key={country.name.common}

              className="p-4 bg-white bg-opacity-20 rounded shadow-lg hover:scale-105 transition"
            >
              <Link href={`/country/${country.name.common}`}>
                <h1 className="flex flex-col items-center text-0.5xl text-center text-blue-800">

                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-16 h-12 mb-2 rounded"
                  />

                  <span className="font-medium">{country.name.common}</span>
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




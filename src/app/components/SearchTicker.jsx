"use client";

import { useEffect, useState } from "react";
import { getAllTickers } from "../controller/controller";
import { addTickers } from "../controller/dbController";

export default function Page() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    async function getData() {
      setCompanies(await getAllTickers());
      setIsLoading(false);
      console.log(1);
    }
    getData();
  }, []);

  useEffect(() => {
    if (searchValue.length === 0) {
      setFilteredCompanies([]);
    } else if (companies.length > 1) {
      setFilteredCompanies(
        companies.filter(
          (company) =>
            (company.symbol + " " + company.description).substring(0, searchValue.length) ===
              searchValue.toUpperCase() ||
            company.description.substring(0, searchValue.length) ===
              searchValue.toUpperCase()
        )
      );
    }
  }, [searchValue]);

  if (isLoading) return <h1>Loading . . .</h1>;
  if (!companies) return <h1> Loading . . .</h1>;

  return (
    <>
      <input
        className="border-2 m-3 p-2"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
      ></input>
      {console.log(searchValue)}
      <ul className="absolute w-full">
      {filteredCompanies
        .sort((a, b) => a.symbol.localeCompare(b.symbol))
        .map((company, index) => (
          <li onClick={(e)=>setSearchValue(e.target.innerHTML)} key={index} className={`${index%2 === 0? "bg-slate-100 ": "bg-slate-50 "} `}>
            {company.symbol + " " + company.description}
          </li>
        ))}
          </ul>
<button
onClick={()=> addTickers(searchValue.split(" ")[0])}
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>

    </>
  );
}

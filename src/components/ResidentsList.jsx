import React, { useEffect, useState } from "react";
import ResidentsCard from "./ResidentsCard";

const ResidentsList = ({location}) => {
    const [currentPage, setcurrentPage] = useState(1)

    const arrayPages = []
    const RESIDENTS_PER_PAGE = 20
    const quantityPerPage = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)
    for(let i = 1; i <= quantityPerPage; i++){
        arrayPages.push(i)
    }

    const firstCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
    const finalCut = currentPage * RESIDENTS_PER_PAGE

    const residents = location?.residents;

    useEffect(() => {
        setcurrentPage(1)
    }, [location])

  return (
    <>
    <section className="p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1080px] mx-auto"> 
        {
          residents?.slice(firstCut, finalCut).map((residents) => <ResidentsCard key={residents} residents = {residents}  />)
        }
    </section>
    
    <ul className="flex gap-4 justify-center p-4 ">
        {arrayPages.map(page => <li onClick={() => setcurrentPage(page)} className={`p-3 rounded-md cursor-pointer ${page === currentPage && "bg-green-800 text-white font-bold"}`} key={page}>{page}</li> )}
    </ul>
    </>
  )
  
};

export default ResidentsList;

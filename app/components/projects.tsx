"use client";

import axios from "axios";
import { useEffect, useState } from "react";


export default function Projects () {

const [Data, setData] = useState([])
  const getData = async () => {
  const respons = await axios.get('https://picsum.photos/v2/list?page=1&limit=10')
    

  

console.log(Data);
setData(respons.data)
    
  }
  useEffect(() => {
    getData();
  }, []);

 
  
  return (
    

    <div className="p-9" id="projects">
      <h2 className="text-2xl text-center pb-14 underline font-bold" >Project</h2>

      {/* <button onClick={getData} className=" bg-red-500 px-8 py-6 rounded active:scale-95 font-semibold text-2xl text-white">Get Data</button> */}
<div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"  data-aos="zoom-in-up">
{Data.map((elem:any) => (
  <div key={elem.id} className="bg-gray-50 rounded shadow p-4 text-center" >
    <img className="w-full h-auto rounded mb-2" src={elem.download_url} alt="" />
    <p className="text-gray-700 text-xl font-bold">{elem.author}</p>
  </div>
))}

</div>
    </div>
  );
}

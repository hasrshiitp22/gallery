import React, { useEffect, useState } from 'react'
import axios from "axios"


function App() {
  const [data, setdata] = useState([])
  const [idx, setidx] = useState(1)

 const getData= async()=>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=30`)
   setdata(response.data)
  
 }
 let pic_Data="here is nothing"
  if(data.length>0){
    pic_Data= data.map(function(elem,idx){
      return <div>
     <img className='w-50 h-50 rounded-xl overflow-hidden' src={elem.download_url} alt="" />
     <h2>{elem.author}</h2>
      </div>
    })
  }
 useEffect(() => {
   getData()
 }, [idx])
 

  return (
    <div className='overflow-auto'>
     
      
      <div className='flex flex-wrap gap-10 p-3'>
        {pic_Data}
      </div>
      <div className='flex justify-center gap-2 p-4'>
        <button  className={`px-4 py-2 bg-amber-400 rounded-xl ${(idx==1)?"opacity-40 cursor-not-allowed":" cursor-pointer active:scale-95" }font-semibold`} onClick={
          ()=>{
          if(idx>1){
           
            setidx(idx-1)
          }
          }
        }>Prev</button>
        
         <div className='text-2xl flex  font-bold p-2 rounded-full m-2'>page:-{idx}</div>
            <button className='px-4 py-2 bg-amber-400 rounded-xl  cursor-pointer active:scale-95 font-semibold' onClick={
          ()=>{
        
            setidx(idx+1)
            
          }
        }>Next</button>
        
      </div>
     
    </div>
  )
}

export default App

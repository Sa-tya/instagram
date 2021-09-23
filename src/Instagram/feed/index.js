import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
import './fStyle.css';

function Feed(){
    const [data,setData] = useState([])
    useEffect(()=>{
    fetch("/data.json",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        setData(data)
    })
},[])
    return <div className='feed'>
        {[...Array(data.length)].map((e,i)=> <Card key={i} id={i} data={data[i]} />)}
    </div>
}

export default Feed;
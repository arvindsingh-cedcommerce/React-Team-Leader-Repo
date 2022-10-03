import { useEffect, useState } from "react";


export default function useFetch(url){
  const [data,extractDataFromApi ] = useState('');
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>extractDataFromApi(data))
  },[url])

  return [data,extractDataFromApi]
}
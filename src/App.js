import { useState } from 'react';
import './App.css';
import { useEffect , useMemo } from 'react';
function App() {
  const [data , setData] = useState([])

  useEffect(()=>{
    const fetchData = async() =>{
      try{
      const url = 'https://dummyjson.com/products';
      const res = await fetch(url , {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!res.ok){
        throw new Error(`HTTP Error! ${res.status}`)
      }
    
      const fetchedData = await res.json();
     setData(fetchedData)  
    // console.log(fetchedData)
  } catch(error){
    console.error('error fetching data',error);
  }
    };
    fetchData();
  },[]);
const memoizedData = useMemo(() => data , [data]);
return (
  <div className="app">
      <h1>hello</h1>
      {memoizedData?.products?.map((item) => (
        <div key={item.id} >
          <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
export default App;

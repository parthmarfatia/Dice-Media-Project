import React, {useState,useEffect} from "react";
import CardsInfo from "./components/CardsInfo";
import FilterOptions from "./components/FilterOptions";
import SearchBar from "./components/SearchBar";

function App() {
  const [data,setData] = useState([])
  const [query,setQuery] = useState('')


  useEffect(()=>{
      async function getData(){
          const res = await fetch(`https://api.github.com/search/repositories?q=${query == '' ? 'parthmarfatia' : query}`)
          const val = await res.json()
          setData(val.items)
      }
      getData()   
  },[query])

  return <div className="App">
    <h1 className="header--tag">Search GitHub Repository</h1>
    <SearchBar query={query} setQuery={setQuery}/>
    {data && <FilterOptions data={data} setData={setData}/>}
    {data && <CardsInfo data={data}/>}
  </div>;
}

export default App;

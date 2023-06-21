import React, { useState } from "react"
import './App.scss'
import searchIcon from "./assets/searchIcon.png"
import data from "./data"

function App() {
  const[searchArr, setSearchArr] = useState([])

  const onSearch = (e) => {
    if(e.target.value === ""){
      setSearchArr([])
    }else{
        const searchString = e.target.value;
        const filteredFood = data.filter((item) => {
        return item.includes(searchString);
      });
      setSearchArr(filteredFood)
    }
    
  }
  return (
    <div className="App">
        <div className='searchBlock'>
          <div className="field">
              <input onChange={onSearch} placeholder="Search" type="text"/>
              <img width={25} src={searchIcon}/>
            </div>
        </div>
        <div className="listBlock">
          {searchArr.map(item => {
            return(
              <p key={item}>{item}</p>
            )
          })}
        </div>
    </div>
  );
}

export default App;

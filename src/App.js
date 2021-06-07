import React, { useState } from "react"
import ToDoList from "./ToDoList"


const App=()=>{
  const [inputList,setInputList]=useState("");
  const[items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }
  const listOfItems=()=>{
    setItems((olditem)=>{
      return [...olditem,inputList]
    })
    setInputList("")
  }
  const deleteitem=(id)=>{
    console.log("delete");

    setItems((oldval)=>{
      return oldval.filter((e,index)=>{
        return index!==id;
      })
    })
}
  

  
  return(
  <>
    <div className="main_div">
      <div className="center_div">
         <br />
         <h1>ToDo List</h1>
         <br />
         <input type="text"
         value={inputList}
         placeholder="Add an Items!"onChange={itemEvent}/>
         <button onClick={listOfItems}>+</button>

         <ol>
           {/* <li>{inputList}</li> */}
           {
           items.map((itemval,index)=>{
             return (
               <ToDoList text={itemval}
               key={index}
               id={index}
               onSelect={deleteitem}
               
               />
             
             )
           })
          }
         </ol>
      </div>
    </div>
  </>
  )
}

export default App
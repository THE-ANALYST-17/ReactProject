import React, { useState } from "react"
import ToDoList from "./ToDoList"


const App=()=>{
  const [inputList,setInputList]=useState("");
  const[items,setItems]=useState([]);
  // console.log(inputList);
  const itemEvent=(event)=>{
   
       setInputList(event.target.value)
     
  }

// console.log(inputList);

  const listOfItems=()=>{
    if(inputList!==""){
    setItems((olditem)=>{
      console.log(olditem);
      return [...olditem,inputList]
      
    })
    // console.log(items);
  }
    setInputList("")
  }
  // console.log(items);
  const deleteitem=(id)=>{
    console.log("delete");

    setItems((oldval)=>{
      return oldval.filter((e,index)=>{
        //  console.log(e);
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
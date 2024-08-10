import React, {useState} from "react";
import BaseHoc from '../hoc/BaseHoc';

// const FunctionComponent = ({name, age, author, setName }) => {
//     const [count, setCount] = useState(0);
//     const [changeName, setChangeName] = useState("");
//     const reduceCount = () =>{
//         setCount(count -1)
//     }
// return(
//     <div>
//         <p>This is Functional Component</p>
//         <button onClick = {()=>setCount(count+1)}>Click me to increment/add by 1 </button>
//         <button onClick = {reduceCount}>Click here to decrement </button>
//         <h2>{count}</h2>
//         <h4>My company is:{name} it is of {age} years old and the author would be {author} </h4>
//         {/* <input onChange={(e)=> console.log(e.target.value)} /> */}
//         <input onChange={(e)=> setChangeName(e.target.value)} />
//         <button onClick={()=> setName(changeName)}> Change name to...</button>
//     </div>
// )
// }






const FunctionComponent = (props) => {
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    const reduceCount = () =>{
        setCount(count -1)
    }
return(
    <div>
        <p>This is Functional Component</p>
        <button onClick = {()=>setCount(count+1)}>Click me to increment/add by 1 </button>
        <button onClick = {reduceCount}>Click here to decrement </button>
        <h2>{count}</h2>
        <h4>My company is:{props.name} it is of {props.age} years old and the author would be {props.author} </h4>
        {/* <input onChange={(e)=> console.log(e.target.value)} /> */}
        <input onChange={(e)=> setChangeName(e.target.value)} />
        <button onClick={()=> props.setName(changeName)}> Change name to...</button>
    </div>
)
}


export default BaseHoc(FunctionComponent);

// props:{
//     name: "DevTown",
//     age: 20,
//     author: "rk"
// }
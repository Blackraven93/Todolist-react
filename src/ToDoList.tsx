import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {

//     const [toDo, setToDo] = useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {currentTarget : {value}} = event;
//         setToDo(value);
//     };

//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//         console.log(toDo);
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do"/>
//                 <button>Add</button>
//             </form>
//         </div>
//     )
// }


const ToDoList = () => {

    const { register, watch } = useForm();
    
    console.log(watch());
    

    return (
        <div>
            <form>
                <input {...register("email")} placeholder="Email"/>
                <input {...register("firstName")} placeholder="FirstName"/>
                <input {...register("lastName")} placeholder="LastName"/>
                <input {...register("username")} placeholder="Username"/>
                <input {...register("password")} placeholder="Password"/>
                <input {...register("password1")} placeholder="Password1"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
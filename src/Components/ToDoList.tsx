import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {

    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState) // atom의 값과 그걸 수정하는 modifier 함수를 반환
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any)
    }
    
    return (
        <div>
            <h1 style={{color:"whitesmoke"}}>To Dos</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.HOLD}>Hold</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    )
}

export default ToDoList;

// const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     width: 350px;
//     height: 350px;
//     margin: 0 auto;
// `

// const Error = styled.span`
//     margin: 20px 0;
//     color: ${props => props.theme.accentColor};
//     font-size: 24px;
//     text-align: center;
// `

// interface IForm {
//     email:string;
//     firstName:string;
//     lastName:string;
//     username:string;
//     password:string;
//     password1:string;
//     extraError?:string;
// }

// const ToDoList = () => {
    

//     const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({
//         defaultValues: {
//             email:"Reblackraven@naver.com",
//             firstName:"Blackravenbird",
//             lastName:"parrot",
//             username:"Blackraventech",
//             password:"123123123123",
//             password1:"123123123123",
            
//         }
//     });
//     const onValid = (data: IForm) => {
//         if (data.password !== data.password1) {
//             setError (
//                 "password1",
//                 { message:"Password are not the same!"},
//                 {shouldFocus:true}
//             )
//         }
//         // setError("extraError", { message: "Server offline." })
//     }

//     console.log(errors)
//     return (
//         <Container>
//             <Form onSubmit={handleSubmit(onValid)}>
//                 <input {...register("email", {
//                         required: "Email is required",
//                         pattern: {
//                             value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                             message: "Only naver.com emails allowed"
//                         }
//                     })} placeholder="Email"/>
//                 <Error>
//                     {errors?.email?.message}
//                 </Error>
//                 <input {...register("firstName", {
//                     required: true,
//                     validate: {
                        
//                         noRaven: async (value) => value.includes("raven") ? "No raven allowed" : true
//                         // raven이 문자열에 포함 되어 있으면 통과시키지 말아라!

//                     }, 
//                     } )} placeholder="FirstName"/>
//                 <Error>
//                     {errors?.firstName?.message}
//                 </Error>
//                 <input {...register("lastName", {required: true})} placeholder="LastName"/>
//                 <Error>
//                     {errors?.lastName?.message}
//                 </Error>
//                 <input {...register("username", {
//                         required: true,
//                         minLength:10
//                     })} placeholder="Username"/>
//                 <Error>
//                     {errors?.username?.message}
//                 </Error>
//                 <input {...register("password", {
//                         required: true,
//                         minLength: 5 
//                     })} placeholder="Password"/>
//                 <Error>
//                     {errors?.password?.message}
//                 </Error>
//                 <input {...register("password1",{
//                         required: "Password is required",
//                         minLength: {
//                             value:5,
//                             message: "Your password is too short."
//                         }
//                     })} placeholder="Password1"/>
//                 <Error>
//                     {errors?.password1?.message}
//                 </Error>
//                 <button>Add</button>
//                 <Error>
//                     {errors?.extraError?.message}
//                 </Error>
//             </Form>
            
//         </Container>
//     );
// }

// export default ToDoList;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// reportWebVitals();

// const basis = {
//     name: "Bob"
// }
//
// const beginning = basis
//
// const coffee = {}
//
// const answer = {
//     name: "Bob"
// }
//
// if (XXX === beginning) {
//     console.log("Yo!!!")
// } else {
//     console.log("Hey!!!")
// }
//
// /*Какие переменные можно использовать вместо XXX, что бы в консоль вывелась строка "Hey"!!!"? Если их несколько, напишите через пробел.*/

// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onFocus = {addNote}
//             />
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map((n,i )=> <p key={i}>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при потере инпутом фокуса добавлялась заметка?

// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function AuthForm() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//
//         alert()
//     }
//     return (
//         <form>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Name:
//                     <input type={"email"} name={"email"}/>
//                 </label>
//             </div>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Password:
//                     <input type={"password"} name={"password"}/>
//                 </label>
//             </div>
//             <button
//                 onClick={onClickHandler}
//                 type={"submit"}>
//                 Log in
//             </button>
//         </form>
//     )
// }
//
// ReactDOM.render(
//     <AuthForm/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы данные из формы
// // не отправлялись на сервер и страница не перезагружалась
// // при клике по кнопке?

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Что надо написать вместо xxx, чтобы код работал?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

type UserPropsType = UserType & {
    deleteUser: (id: number) => void
}

function User(props: UserPropsType) {
    return (
        <li>
            <button onClick={() => props.deleteUser(props.id)}>x</button>
            User {props.name}: {props.age} y.o.
        </li>
    )
}

function UsersList() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 25},
        {id: 2, name: "Alex", age: 28},
        {id: 3, name: "Ann", age: 23},
        {id: 4, name: "John", age: 30},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    const deleteUser = (userID: number) => {
        const filteredUsers = users.filter(u => u.id !== userID)
        setUsers(filteredUsers)
    }
    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {users.map(u => <User
                    key={u.id}
                    {...u}
                    deleteUser={deleteUser}
                />)}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо написать вместо xxx, чтобы код работал?
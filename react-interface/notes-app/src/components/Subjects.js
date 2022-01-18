import React, { useRef, useState } from 'react'
import axios from 'axios';
import './Subjects.css'
var datas;


function Subjects() {
    const nameRef = useRef();
    const details = useRef();
    const score = useRef();
    const dateE = useRef();
    const create = useRef();
    const update = useRef();

    const postSubject  = ()=>{
       let id =  localStorage.getItem("userId") ;
        axios.post("http://localhost:8080/api/subjects", { 
            id:1,
         ////  userId : id,
           name: nameRef,
           details: details,
           score: score,
           examDate:dateE,
        //    createdAt:create,
        //    updatedAt: update
            })
                .then((res) => {
                    console.log(res.data)

                })
                .catch((err) => {
                    console.log(err);
                })
    }

    return (
        
        <div className='container'>
            <div className="input-group mb-3">
                <h1>Add a subject</h1> <br/>
                <input type="text" className="form-control" ref={nameRef} placeholder="name" aria-label="name" aria-describedby="basic-addon1" /> <br/>
                <input type="text" className="form-control"ref={details} placeholder="details" aria-label="details" aria-describedby="basic-addon1" /> <br/>
                <input type="number" className="form-control" ref={score}placeholder="score" aria-label="score" aria-describedby="basic-addon1" /> <br/>
                <label>Exam date</label> <br/>
                <input type="date" className="form-control"ref={dateE} aria-describedby="basic-addon1" /> <br/>
                <label>Created at</label> <br/>
                <input type="date" className="form-control" ref={create}aria-describedby="basic-addon1" /> <br/>
                <label>Updated at</label> <br/>
                <input type="date" className="form-control"ref={update} aria-describedby="basic-addon1" /> <br/>
                <br/>
                <button onClick={postSubject} className='btn-primary'>Add</button>
           </div>
        
            <ul className="subject-className">
                {/* {datas.map((key,value) => {
                    <li key={value}>
                        <span>
                            {key.toString()}
                        </span>
                    </li>
                })} */}
            </ul>
        </div>
    )
}
export default Subjects;

import React, {useState} from 'react'
import axios from 'axios';



axios.get('http://localhost:8080/api/subjects').then(res => {
    datas = res.data;
});
 function Subjects() {
    return (
        <div className='subjects'>
            <ul className="subject-class">
                {datas.map((key,value) => {
                    <li key={value}>
                        <span>
                            {key.toString()}
                        </span>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Subjects;

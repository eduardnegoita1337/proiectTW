import React from 'react'
import axios from 'axios';

var subjects;
axios.get('http://localhost:8080/api/subjects').then(res => {
    subjects = res.data;
});
 function Labs() {
    return (
        <div className='labs'>
            <h1>Labs</h1>
        </div>
    )
}
export default Labs;

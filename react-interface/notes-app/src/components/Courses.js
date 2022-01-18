import React from 'react'
import axios from 'axios'

function Courses() {

    const submitRegister = () => {
        axios.post("http://localhost:8080/api/courses", {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email
        })
            .then((res) => {
                alert(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            })

    }
    return (
        <div className='container'>
            <h1> Courses </h1>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    
                </div>
                <span>Usermane</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>

            <div class="input-group mb-3">
                <span>Parola</span>
                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    
                </div>
            </div>

            
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">Link ruta curs</span>
                </div>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">ID curs</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                <div class="input-group-append">
                </div>
            </div>

            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Text curs</span>
                </div>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nume</th>
                        <th scope="col">ID Curs</th>
                        <th scope="col">Link curs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Eduard</td>
                        <td>1</td>
                        <td>/courses/1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Catalina</td>
                        <td>2</td>
                        <td>/courses/2</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Costin</td>
                        <td>3</td>
                        <td>/courses/3</td>
                    </tr>
                </tbody>
            </table>


            <button className='btn-primary'>Add course</button>
        </div>
    )
}

export default Courses;

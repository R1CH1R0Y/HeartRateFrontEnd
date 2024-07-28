import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const UploadPAFile = () => {
    const [input, setInput] = new useState(
        { "userId": sessionStorage.getItem("userId"), "pafile": "", "filename": "" }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:3030/uploadPAFile", input, {
            headers: { "token": sessionStorage.getItem("token"), "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Upload Completed Successfully!!")
                } else {
                    alert("Something went wrong!!!")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div>
            <NavBar />
            <br />
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Upload PA File</h5>
                    <p></p><p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">File :</label>
                                        <input type="file" className="form-control" name="pafile" value={input.pafile} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">File Name :</label>
                                        <input type="text" className="form-control" placeholder='Enter filename' name="filename" value={input.filename} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success" onClick={readValue}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPAFile
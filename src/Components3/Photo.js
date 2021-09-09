import React, { useState } from 'react';
import axios from 'axios';

const Photo = () => {

    const [input, setInput] = useState('car');
    const [output, setOutput] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSumbit = async (e) => {
        console.log(input);

        let url = `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=WVgJj2iOE00TzsZb1S4TjADsrE7uz1peRqLyHr_3ReU`;
       
        axios.get(url).then(response => {
            console.log(response);
            setOutput(response.data.results)
        });
        alert("Thank for using::  Designd by Tej prakash")
    }
    console.log(output);

   
    



    return (
        <div>
            <h1 className="text-center">Flicker's Moment </h1>
            <div className="container">
               


                <div class="input-group mb-3 my-3">
                    <input type="text" class="form-control" onChange={handleChange} placeholder="Laptop or Phone" aria-label="Laptop or Phone" aria-describedby="button-addon2" />
                    <button class="btn btn-danger" onClick={handleSumbit} type="button" id="button-addon2">Button</button>
                </div>


                <div className="row mb-2">
                    {output.map((pic,key={key}) => (

                        <img className="card col-md-4 p-1 " src={pic.urls.small}></img>))}
                </div>
               

                <div class="card">
                    <h5 class="card-header text-center">Design and Developed by  <a href="https://flicker-web.github.io/flicker/" class="btn btn-danger"> Tej Prakash</a></h5> 
                    
                </div>

            </div>
        </div>
    )
}

export default Photo

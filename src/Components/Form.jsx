import React, { useState } from 'react';

const Form = () =>{
    const [userDetail, setUserDetail] = useState({
        Name: '',
        Desigination: '',
        rating: ''
    })
    const [user, setUser] = useState([]);
    const handleChange = (e) =>{
        // console.log(e.target.id);
        setUserDetail((prev)=>({...prev, [e.target.id]:e.target.value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userDetail);
        setUser((prev)=>([...prev, userDetail]));
        console.log(user)
    }
    return(
        <>
        <form>
            <label htmlFor="Name">Name</label>
            <input type="text" id='Name' placeholder='Enter Name'onChange={handleChange}/>
            <br /><br />
            <label htmlFor="Desigination">Desigination</label>
            <input type="text" id='Desigination' placeholder='Enter Desigination' onChange={handleChange}/>
            <br /><br />
            <label htmlFor="rating">Rating</label>
            <input type="text" id='rating' placeholder='Enter rating'onChange={handleChange}/>
            <br />
            <button type='Submit' onClick={handleSubmit}> Submit</button>
            <br />
            <h2>Output:</h2>
            {
                user.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>Name:  <b>{item.Name}</b></p>
                            <p>Desigination:  <b>{item.Desigination}</b></p>
                            <p>Rating:  <b>{item.rating}</b></p>
                        </div>
                    )
                })
            }
        </form>
        </>
    )
}
export default Form;
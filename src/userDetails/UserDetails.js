import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {

   const {userId} = useParams();
    const [details, setDetails]  = useState({});
   useEffect(()=>{
    const url =`https://jsonplaceholder.typicode.com/users/${userId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>setDetails(data));

   },[])

   const {name, email,website, phone,address} = details;
    return (
        <div style={{border:'1px solid gray' , padding: '10px', 
        margin: '20px',width:'400px',marginLeft: '30%',borderRadius: '10px'}}>
            
            <h1>This is user details {userId}</h1>
            <h2>User name : {name}</h2>
            <p>user email : {email}</p>
            <p>user website : {website}</p>
            <p>user phone : {phone}</p>
        </div>
    );
};

export default UserDetails;
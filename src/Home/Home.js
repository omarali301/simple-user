import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
   const [user, setUser] = useState([])
   useEffect(() =>{

    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))

    // console.log(url);

   },[]);

   const showDetails = () =>{
        console.log("click for details here")

   }
    return (
        <div>
            <h3>user length : {user.length}</h3>

            {

                user.map(user=><User user={user} showDetails={showDetails}></User>)
            }
        </div>
    );
};

export default Home;
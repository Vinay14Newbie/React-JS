import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    // all data which is returning to useLoaderData will be store at 'data'
    const data = useLoaderData()

//     const [data, setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then(val => {
//             setData(val)
//         })
//    }, [])

    return(
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
            Github Followers: {data.followers ? data.followers : 0}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
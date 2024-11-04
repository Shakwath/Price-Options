import { useEffect, useState } from "react";
const Phones = () => {
    return (
        const [phones,setPhones]=useState([]);
        useEffect(()=>{
            fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res =>res.json())
            .then(data =>setPhones(data.data))
        })
        <div>
            <h2 className="text-5xl">Phones :{phones.length}</h2>
        </div>
    );
};

export default Phones;

 //normally data anar jnno amra usestate banai erpor fetch

 //Example: https://openapi.programming-hero.com/api/phones?search=iphone
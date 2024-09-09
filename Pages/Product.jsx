import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function fetching(){
    return fetch('https://fakestoreapi.com/products')
    .then(response => response.json());
}

const Product = () => {
    const {data=[], error, isLoading} = useQuery({
    queryKey:['products'],
    queryFn:fetching
    })
    const [pID,setPID] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        navigate(`/product/${pID}`)
    },[pID])


    return (
        <div className='container'>{
            data.map((p)=>(
                <button key={p.id} className='product' onClick={(e)=>setPID(e.target.value)}>
                    <div key={pID}>
                        <img src = {p.image} width='200px' height='300px'/>
                        <h3>{p.title}</h3>
                        <h4>{p.description}</h4>

                    </div>
                </button>
            ))
        }
        </div>
    );
};

export default Product;
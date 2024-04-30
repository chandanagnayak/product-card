import React from 'react';
const mycards=[
    {
        img:img,
        title:"Product-1",
        info:"Latest product",
        price:"$34.25"
},
{
    img:img,
    title:"Product-1",
    info:"My product",
    price:"$26.85"
},

]
export default function Cards(){
    return(
        <div>
            <>
            <h2>My Products</h2>
            <div className='box-1'>
            {
                mycard.map((item))=>(
                    <div className='category'>
                    <h2>(item.title)</h2>
                    <img src={item.img} alt="img"/>
                    <h2>{item.info}</h2>
                    <h3>{item.price}</h3><br />
                    <button className='btn-cards' >Add to cart</button> 
<br></br>
                    
                    
                    </div>
                )
    )
        

            </div>
            
            
            </>
        </div>
    )
}
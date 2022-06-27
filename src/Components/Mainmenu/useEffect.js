import { React,useState,useEffect } from 'react'
import axios from 'axios';


const apiurl=`https://fakestoreapi.com/products`
export default (props) => {

    var [products,setStateProducts] = useState([]);
 
    useEffect(()=>{
        axios.get(apiurl).then( (result)=> setStateProducts(result.data) )
    },[])
   
    return(<>
       <div className="container p-5">
       <h1 className='text-center h2'>React hooks UseEffect for api calling</h1>
         

         <div className="row">
            {
                products.map((res,i) =>{
                    return(
                       <div className="col-lg-3" key={i}>
                       <div className="card">
  <img src={res.image} className="card-img-top w-50 mx-auto my-2" style={{height: '300px'}} alt={res.title}/>
  <div className="card-body text-center">
    <h5 className="card-title">{res.title}</h5>
    <p className="card-text-dark h3">${res.price}</p>
    <a href="#" className=" btn btn-outline-warning ">Go somewhere</a>
  </div>
</div>
                       </div>
                    )
                })
            }
         </div>
       </div>
      

    </>)
}
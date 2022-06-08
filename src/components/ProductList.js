import React ,{useState,useEffect} from 'react'

import { async } from 'q';

export default function ProductList(){
    const [data,setData]=useState([]);
    useEffect( async()=>{
        let result=await fetch("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=");
         result=await result.json()
        setData(result)
    },[])
    console.warn('result',data)
    return(
        <div>
            <h1>Product List</h1>
            <table striped bordered hover variant="dark">
                <tr>
                    <td> ID </td>
                    <td> Name </td>
                    <td> Price </td>
                    <td> Description </td>
                    <td> Image </td>

                </tr>
                {
                    data.map((item)=>
                        <tr>
                    <td> {item.id_product} </td>
                    <td> {item.name} </td>
                    <td> {item.price} </td>
                    <td> {item.description} </td>
                    <td> <img style={{width:100}} src={'http://localhost:8000/'+item.file_path}/> </td>

                </tr>
                    

                    )
                }
            </table>
        </div>
    )
}
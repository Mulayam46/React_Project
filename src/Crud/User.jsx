import { useEffect, useState } from "react"
import style from "./homepage.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
const User=()=>{
    let[content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/employee")
        .then((response)=>{
          console.log(response.data)
          setContent(response.data)
        })
    })
    let deletedata=(id)=>{
        axios.delete(`http://localhost:3000/employee/${id}`)
    }
    return(
        <div id={style.table}>
           {content.map((x)=>{
            return(
                <div id={style.userdata}>
                    <table border={2}>
                        <tr><th colSpan={2}>User:{x.id}</th></tr>
                        <tr>
                            <td>Name:</td>
                            <td>{x.name}</td>
                        </tr>
                        <tr>
                            <td>Salary:</td>
                            <td>{x.salary}</td>
                        </tr>
                        <tr>
                            <td>Company:</td>
                            <td>{x.company}</td>
                        </tr>
                        <tr>
                            <td><Link to={`/editusers/${x.id}`}>Edit</Link></td>
                            <td><Link onClick={()=>{deletedata(x.id)}}>Delete</Link></td>
                        </tr>
                    </table>
                </div>
            )
           })}
        </div>
    )
}
export default User
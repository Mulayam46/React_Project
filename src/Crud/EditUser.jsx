import { useEffect, useState } from "react"
import style from "./homepage.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const EditUser=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let {id}=useParams()
    let navi=useNavigate()
useEffect(()=>{
        axios.get(`http://localhost:3000/employee/${id}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("Erororor");
        })
},[])
    let namedata=(e)=>{
        setName(e.target.value)
}
let salarydata=(e)=>{
        setSalary(e.target.value)
}
let companydata=(e)=>{
        setCompany(e.target.value)
}
let formHandle=()=>{
    let payload={
        name:name,
        salary:salary,
        company:company
    }
    axios.put(`http://localhost:3000/employee/${id}`,payload)
    .then(()=>{
        console.log("update data")
    })
    .catch(()=>{
        console.log("ERROR TO GET DATA")
    })
    navi("/users")
}

    return(
            <section id={style.edituser}>
        <div className={style.edituserdata}>
              <h2>You can Edit Your Data</h2>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={namedata}/><br />
            <label htmlFor="">Salary</label>
            <input type="text" value={salary} onChange={salarydata}/><br />
            <label htmlFor="">CompanyName</label>
            <input type="text" value={company} onChange={companydata}/><br />
            <button onClick={formHandle} >Submit</button>
        </div>
        </section>
    )
}
export default EditUser
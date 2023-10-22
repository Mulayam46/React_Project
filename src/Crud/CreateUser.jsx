import { useState } from "react"
import style from "./homepage.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
 let navi=useNavigate()
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
        console.log(name,salary,company)// it is for print the data on console scrren
        axios.post("http://localhost:3000/employee",payload)
        .then(()=>{
            console.log("Data has been post successfully")
        })
        .catch(()=>{
            console.log("Data not posted bcz of error")
        })
        navi("/users")
    }
    return(
        <section id={style.form}>
        <div className={style.formdata}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name:" value={name} onChange={namedata}/><br />
            <label htmlFor="">Salary</label>
            <input type="text" placeholder="Enter your Salary:" value={salary} onChange={salarydata}/><br />
            <label htmlFor="">CompanyName</label>
            <input type="text" placeholder="Enter your Company Name:" value={company} onChange={companydata}/><br />
            <button onClick={formHandle}>Submit</button>
        </div>
        </section>
    )
}
export default CreateUser
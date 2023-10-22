import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Crud/HomePage"
import CreateUser from "./Crud/CreateUser"
import User from "./Crud/User"
import EditUser from "./Crud/EditUser"

const App=()=>{
    return(
        <div>
    <BrowserRouter> 
    <HomePage/>
       <Routes>
        <Route element={<CreateUser/>} path="/"></Route>
        <Route element={<User/>} path="/users"></Route>
        <Route element={<EditUser/>} path="/editusers/:id"></Route>

       </Routes>
       
    </BrowserRouter>
        </div>
    )
}
export default App
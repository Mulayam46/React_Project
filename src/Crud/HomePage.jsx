import { Link } from "react-router-dom"
import style from "./homepage.module.css"
const HomePage=()=>{
    return(
        <div id={style.nav} >
            <Link to={"/"}>Create-User</Link>
            <Link to={"/users"}>User</Link>
        </div>
    )
}
export default HomePage
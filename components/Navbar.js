import react from "react";
import NavbarStyles from '../styles/Navbar.module.css';

const Navbar = ()=>{
    return(
    <div>
        <ul className={NavbarStyles.ul}>
            <li className={NavbarStyles.li}><a href="/">Home</a></li>
            <li className={NavbarStyles.li}><a href="/Contact">Contact</a></li>

        </ul>
    </div>
    )
}
export default Navbar
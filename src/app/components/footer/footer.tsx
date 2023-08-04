// aca va el footer
import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={style.container}>
        
        <p> Copyright © 2023. All rights are reserved</p>  
        </footer>
    )
}
export default Footer;
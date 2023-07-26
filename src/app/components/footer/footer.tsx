// aca va el footer
import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={style.container}>
           Copyright © 2023. All rights are reserved
           <Image src="/assets/linkedinLogo.png" width={100} height={100} alt="PLACEHOLDER PHOTO" />
           <Image src="/assets/githublogo.png" width={100} height={100} alt="PLACEHOLDER PHOTO" />
        </footer>
    )
}
export default Footer;
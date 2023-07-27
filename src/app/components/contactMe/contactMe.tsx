//aca coloco todos mis datos de contacto
import Image from "next/image";
import style from "./contactMe.module.scss"

const ContactMe = () => {
    return (
        <section className={style.container}>
            <Image src="/assets/mail.png" width={100} height={100} alt="PLACEHOLDER PHOTO" />
            <label>francisco.insaurralde21@gmail.com</label>
            <Image src="/assets/githublogo.png" width={100} height={100} alt="PLACEHOLDER PHOTO" />
            <label>https://github.com/Francisco-783</label>
            <Image src="/assets/linkedinLogo.png" width={100} height={100} alt="PLACEHOLDER PHOTO" />
            <label>https://www.linkedin.com/in/francisco-insaurralde-539109220/</label>
        </section>
    )
}
export default ContactMe;
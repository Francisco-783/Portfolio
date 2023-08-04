//aca coloco todos mis datos de contacto
import Image from "next/image";
import style from "./contactMe.module.scss"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
    return (
        <section className={style.contacContainer}>

        <div className={style.contacData} >
            <Link href="https://github.com/Francisco-783" className={style.holderIcon}>
                <FontAwesomeIcon icon={faGithub} className={style.icon}/>
            </Link>
            <Link href="https://www.linkedin.com/in/francisco-insaurralde-539109220/" className={style.holderIcon} >
                <FontAwesomeIcon icon={faLinkedin} className={style.icon}/>
            </Link>
                <div className={style.contactMail}>
                    <label>
                        <FontAwesomeIcon icon={faEnvelope} className={style.icon}/>
                    </label>
                    <div>
                        <h4>Mail</h4>
                        <p>francisco.insaurralde21@gmail.com</p>
                    </div>
                </div>
            
        </div>
        </section>
    )
}
export default ContactMe;
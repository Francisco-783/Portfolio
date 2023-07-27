// descripcion mas estendida sobre vos
import Image from "next/image";
import style from "./aboutMe.module.scss"

const AboutMe = () => {
    return (
        <section className={style.container}>
            <Image src="/assets/Foto.jpeg" width={400} height={400} alt="PLACEHOLDER PHOTO" />
           <h1>About Me</h1>
           <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti nostrum asperiores illum architecto iusto cupiditate fuga earum obcaecati reprehenderit doloremque at illo, magnam autem aut optio, impedit delectus rerum.</label>
        </section>
    )
}
export default AboutMe;
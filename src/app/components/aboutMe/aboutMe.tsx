
import style from "./aboutMe.module.scss"
import Skills from "../skills/skills";


const AboutMe = () => {
    return (
        <section className={style.aboutMe} id='about'>
            <div className={style.aboutContainer}>
                <h1 className={style.aboutTitle}>Sobre Mi</h1>
                <label className={style.aboutText}>Soy un apasionado de la programación que busca Constantemente estar actualizado sobre las últimas tendencias y avances en programación. Disfruto explorando nuevas tecnologías y encontrando formas innovadoras de resolver problemas.
                Además, me destaco por mi capacidad para trabajar en equipo, colaborar efectivamente con otros profesionales y generar un ambiente positivo y productivo.</label>

            </div>
            <div className={style.skillsContainer}>
                <Skills />
            </div>
        </section>
    )
}
export default AboutMe;
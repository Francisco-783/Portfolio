import style from "./experience.module.scss"
import Image from 'next/image';

const Experience = () => {
    return (
        <div className={style.container}>
            <h2>Experiencia</h2>
            <div className={style.EXPcontainer}>
                <div className={style.top}>
                    <div className={style.topLeft}>
                        <Image src="/assets/Jobs/personalLogo.png" width={70} height={70} alt="linkedin logo" />
                        <h2>PersonalClass</h2>
                    </div>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className={style.mid}>
                    <section>
                        <div className={style.midTask}>
                            <p>Encargado del desarrollo y mantenimiento de una plataforma de venta de cursos en línea</p>
                            <h4>Tareas realizadas</h4>
                            <ul>
                                <li>Diseño de la interfaz de usuario (UX/UI)</li>
                                <li>Integración de PayPal como método de pago</li>
                                <li>Implementación de herramientas de gestión para permitir a los profesores administrar sus cursos</li>
                                <li>sistema de creacion y publicacion de examenes</li>
                                <li>Desarrollo e integración del backend y frontend</li>
                            </ul>
                        </div>
                        <div className={style.midTags}>
                            <h4>Tecnologia utilizadas</h4>
                            <ul><li>PostgreSQL</li><li>JavaScript</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>SASS</li><li>Node.js</li></ul>
                        </div>
                    </section>
                </div>
                <div className={style.down}>
                    <p>sept. 2023 - ene. 2024 · 5 meses</p>
                </div>
            </div>
        </div>
    )
}
export default Experience;
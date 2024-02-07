import Link from 'next/link';
import style from "./projects.module.scss"
import Slider from '../slider/slider';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faGlobe } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
        const bidWizSlider = [
            {url: "/assets/bidWiz/bidwiz1.png", title: 'bidwizPhoto1'},
            {url: '/assets/bidWiz/bidwiz2.png', title: 'bidwizPhoto2'},
            {url: '/assets/bidWiz/bidwiz3.png', title: 'bidwizPhoto3'}
        ]
        const dogsSlider = [
            {url: "/assets/dogs/dogs1.png", title: 'henryDogsPhoto1'},
            {url: '/assets/dogs/dogs2.png', title: 'henryDogsPhoto2'},
            {url: '/assets/dogs/dogs3.png', title: 'henryDogsPhoto3'}
        ]
    return (
        <section className={style.allProjects}>
            <h2>Proyectos</h2>
            
            <div className={style.projectContainer}>
            <div className={style.slider}>
                <Slider  photos={bidWizSlider}/>
            </div>
            <div className={style.panel}>
                <h3>Bidwiz</h3>
                <p>Bidwiz es una aplicacion web para contratar y ofrecer servicios de profesor particular<br/> Cuenta con pasarela de pago, calendario, login, entre otros</p>
                <ul><li>Nest.JS</li><li>React</li><li>MongoDB</li></ul>
                <div className={style.buttons}>
                    <Link href="https://github.com/Mr-Hache/bidWiz-Frontend" className={style.butt} target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                        <p> Code-Front</p>
                    </Link >
                    <Link href="https://github.com/Mr-Hache/bidWiz-Backend" className={style.butt} target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>Code-Back</p>
                    </Link >
                    <Link href="https://www.youtube.com/watch?v=2APO65Y9P08" className={style.butt} target="_blank">
                            <FontAwesomeIcon icon={faPlay} className={style.icon} />
                        <p>Demo</p>
                    </Link>
                    <Link href="https://bid-wiz-frontend.vercel.app/" className={style.butt} target="_blank">
                            <FontAwesomeIcon icon={faGlobe} className={style.icon} />
                        <p>Web</p>
                    </Link>
                </div>
            </div>
            
           </div>
           <div className={`${style.projectContainer} ${style.secondProjectContainer}`}>
           <div className={style.slider}>
            <Slider  photos={dogsSlider}/>
            </div>
            <div className={style.panel}>
                <h3>Henry's Dogs</h3>
                <p>Henry's Dogs es un catalogo sobre razas de perro, la cual puede ser actualizada agregando o editando otras ya existentes</p>
                <ul><li>React</li><li>PostgreSQL</li></ul>
                <div className={style.buttons}>
                    <Link href="https://github.com/Francisco-783/PI-Dogs" className={style.butt} target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>Code</p>
                    </Link >
                    <Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4" className={style.butt} target="_blank">
                        <FontAwesomeIcon icon={faPlay} className={style.icon} />
                        <p>Demo</p>
                    </Link>
            </div>
        </div>

           </div>
        </section>
    )
}
export default Projects;

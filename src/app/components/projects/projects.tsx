import Link from 'next/link';
import style from "./projects.module.scss"
import Slider from '../slider/slider';

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
           <div className={style.panel}>
                <h3>Bidwiz</h3>
                <p>DESCRIPCION DEL PROYECTO ASODFBASDKLFJASDBNFKJASBDLFKJABSDFKLJ</p>
                <Link href="https://github.com/Francisco-783/PI-Dogs">REPOSITORIO</Link ><Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4">VIDEO</Link>
            </div>
            <div className={style.slider}>
                <Slider  photos={bidWizSlider}/>
            </div>
           </div>
           <div className={style.projectContainer}>
           <div className={style.slider}>
            <Slider  photos={dogsSlider}/>
            </div>
           <div className={style.panel}>
            <h3>Henry's Dogs</h3>
            <p>DESCRIPCION DEL PROYECTO ASODFBASDKLFJASDBNFKJASBDLFKJABSDFKLJ</p>
            <Link href="https://github.com/Francisco-783/PI-Dogs">REPOSITORIO</Link ><Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4">VIDEO</Link>
            </div>

           </div>
        </section>
    )
}
export default Projects;

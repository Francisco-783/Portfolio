// colocar projectos
import Image from 'next/image';
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
        <div >
           <div className={style.projectContainer}>
            Bidwiz<h3>Bidwiz</h3>
            <Link href="https://github.com/Francisco-783/PI-Dogs">REPOSITORIO</Link ><Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4">VIDEO</Link>
            <Slider  photos={bidWizSlider}/>
           </div>
           <div className={style.projectContainer}>
            <h3>Henry's Dogs</h3>
            <Link href="https://github.com/Francisco-783/PI-Dogs">REPOSITORIO</Link ><Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4">VIDEO</Link>
            <Slider  photos={dogsSlider}/>
           </div>
        </div>
    )
}
export default Projects;


            {/* <Image src="/assets/dogs/dogs1.png" width={1360} height={768} alt="PLACEHOLDER PHOTO" />
            <Image src="/assets/dogs/dogs2.png" width={1360} height={768} alt="PLACEHOLDER PHOTO" />
            <Image src="/assets/dogs/dogs3.png" width={1360} height={768} alt="PLACEHOLDER PHOTO" /> */}
            {/* <Image src="/assets/bidWiz/bidwiz1.png" width={1360} height={768} alt="PLACEHOLDER PHOTO" />
            <Image src="/assets/bidWiz/bidwiz2.png" width={1360} height={768} alt="PLACEHOLDER PHOTO" />
            <Image src="/assets/bidWiz/bidwiz3.png" width={1360} height={768} alt="PLACEHOLDER PHOTO"  className={style.image}/> */}
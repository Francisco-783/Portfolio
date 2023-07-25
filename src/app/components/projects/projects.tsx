// colocar projectos
import Image from 'next/image';
import Link from 'next/link';
import style from "./projects.module.scss"

const Projects = () => {
    return (
        <div >
           <div className={style.projectContainer}>
            Bidwiz
            <Link href="https://github.com/Francisco-783/PI-Dogs">REPOSITORIO</Link ><Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4">VIDEO</Link>
           <Image src="/assets/Foto.jpeg" width={400} height={400} alt="PLACEHOLDER PHOTO" />
           </div>
           <div className={style.projectContainer}>
            Henry's Dogs
            <Link href="https://github.com/Francisco-783/PI-Dogs">REPOSITORIO</Link ><Link href="https://www.youtube.com/watch?v=hswl3Y5fdx4">VIDEO</Link>
           <Image src="/assets/Foto.jpeg" width={400} height={400} alt="PLACEHOLDER PHOTO" />
           </div>
        </div>
    )
}
export default Projects;
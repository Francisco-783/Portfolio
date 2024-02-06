
import style from "./skills.module.scss"
import Image from 'next/image';


const Skills = () => {
    return (
        <section className={style.skills} id="skills">
            <div className={`${style.skillsContainer} ${style.headSkillsContainer}`}>
                <Image src="/assets/Tech/front/reactLogo.png" width={55} height={50} alt="react logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/front/reduxLogo.png" width={50} height={50} alt="redux logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/front/sassLogo.png" width={60} height={50} alt="sass logo" className={style.skillPhoto}/>
            </div>
            <div className={`${style.skillsContainer} ${style.midSkillsContainer}`}>
                <Image src="/assets/Tech/back/mongodbLogo.png" width={30} height={50} alt="mongodb logo"   className={`${style.skillPhoto} ${style.mongoIcon}`}/>
                <Image src="/assets/Tech/back/expressJSLogo.png" width={50} height={50} alt="expressJS logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/back/nodeJSLogo.png" width={45} height={50} alt="nodeJS logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/back/postgreeSQLLogo.png" width={50} height={50} alt="postgreeSQL logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/back/sequelizeLogo.png" width={50} height={50} alt="sequelize logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/back/NestJS.png" width={50} height={50} alt="sequelize logo" className={style.skillPhoto}/>
            </div>
            <div className={`${style.skillsContainer} ${style.headSkillsContainer}`}>
                <Image src="/assets/Tech/gitlog.png" width={50} height={50} alt="git logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/js.png" width={50} height={50} alt="js logo" className={style.skillPhoto}/>
                <Image src="/assets/Tech/typescriptLog.png" width={50} height={50} alt="typescript logo" className={style.skillPhoto}/>
            </div >
            
        </section>
    )
}
export default Skills;
//aca van las tecnologias usadas
import style from "./skills.module.scss"
import Image from 'next/image';

const Skills = () => {
    return (
        <div className={style.container}>
            <div>Front
                <Image src="/assets/Tech/front/CSS.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/front/Figma.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/front/HTML.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/front/React.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/front/Redux.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/front/Sass.png" width={70} height={95} alt="github logo" />
            </div>
            <div>Back
                <Image src="/assets/Tech/back/Express.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/back/Firebase.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/back/mongoDB.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/back/NodeJS.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/back/postgreSQL.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/back/Sequelize.png" width={70} height={95} alt="github logo" />
            </div>
            <div>Programming Languages
                <Image src="/assets/githublogo.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/Git.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/JavaScript-logo.png" width={70} height={95} alt="github logo" />
                <Image src="/assets/Tech/ts-logo-512.png" width={70} height={95} alt="github logo" />
            </div>
        </div>
    )
}
export default Skills;
import style from "./navbar.module.scss"

const NavBar = () => {
    return (
        <div className={style.navbar}>
           <h2>Francisco.dev</h2>
           <ul>
            <li>Inicio</li>
            <li>Sobre Mi</li>
            <li>Habilidades</li>
            <li>Proyectos</li>
            <li>Cotacto</li>
            <li>Curriculum Vitae</li>
           </ul>
        </div>
    )
}
export default NavBar;
import AboutMe from "./components/aboutMe/aboutMe";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import NavBar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";

import style from "./page.module.scss"

export default function () {
    return (
      <main >
        <NavBar />
        <div className={style.container}>
          <Main />
          <AboutMe />
          <Projects />
          <ContactMe />
          <Footer />
          
        </div>
      </main>
    )
  }
  
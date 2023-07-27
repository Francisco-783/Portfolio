import AboutMe from "./components/aboutMe/aboutMe";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import NavBar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import style from "./page.module.scss"

export default function () {
    return (
      <main className={style.container}>
        <NavBar />
        <div >
          <Main />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
          <Footer />
          
        </div>
      </main>
    )
  }
  
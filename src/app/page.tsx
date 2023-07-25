import AboutMe from "./components/aboutMe/aboutMe";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import NavBar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

export default function () {
    return (
      <main >
        <div>
          <NavBar />
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
  
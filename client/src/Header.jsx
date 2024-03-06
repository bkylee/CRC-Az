import { useNavigate } from "react-router-dom"
import Visitors from "./components/Visitors"
import Uniques from "./components/Uniques";


const Header = () =>
{
  let navigate = useNavigate();
  
  const homeRoute = () => {
  let path = `/`
  navigate(path)
  }
  
  const resumeRoute = () => {
    let path = `/resume`
    navigate(path)
  }

  const blogRoute = () => {
    let path = `/blog`
    navigate(path)
  }

  const aboutRoute = () => {
    let path = `/about`
    navigate(path)
  }

  return (
    <header>
      <h1>Ki Yoon&apos;s Kool Website</h1>
      <Visitors />
      <Uniques />
      <div className="socials">
        <a href="https://www.linkedin.com/in/kiyoon-brian-lee/">LinkedIn</a>
      </div>
      <div className="headButtons">
        <button className="subsection" onClick={homeRoute} >Home</button>
        <button className="subsection" onClick={blogRoute}>Blog</button>
        <button className="subsection" onClick={resumeRoute}>Resume</button>
        <button className="subsection" onClick={() => window.open("https://github.com/bkylee?tab=repositories", '_blank')}>GitHub repos</button>
        <button className="subsection" onClick={aboutRoute}>About</button>
        <button className="subsection">Videos</button>
      </div>
    </header>
  )
}

export default Header
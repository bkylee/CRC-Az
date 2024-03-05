import { useNavigate } from "react-router-dom"
import Visitors from "./Visitors"
import Uniques from "./Uniques";


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

  return (
    <header>
      <h1>Ki Yoon&apos;s Kool Website</h1>
      <div className="socials">
        <a href="https://github.com/bkylee">Github</a>
        <a href="https://www.linkedin.com/in/kiyoon-brian-lee/">LinkedIn</a>
      </div>
      <div className="headButtons">
        <button className="subsection" onClick={homeRoute} >Home</button>
        <button className="subsection" onClick={blogRoute}>Blog</button>
        <button className="subsection" onClick={resumeRoute}>Resume</button>
        <button className="subsection" onClick={() => window.open("https://github.com/bkylee?tab=repositories", '_blank')}>GitHub repos</button>
        <button className="subsection">About</button>
        <button className="subsection">Videos</button>
      </div>
      <Visitors />
      <Uniques />
    </header>
  )
}

export default Header
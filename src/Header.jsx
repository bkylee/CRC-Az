import { useNavigate } from "react-router-dom"
import Visitors from "./Visitors"


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

  return (
    <header>
      <h1>Brian&apos;s Cool Website</h1>
      <div className="headButtons">
        <button className="subsection" onClick={homeRoute} >Home</button>
        <button className="subsection" >Blog</button>
        <button className="subsection" onClick={resumeRoute}>Resume</button>
        <button className="subsection">Projects</button>
        <button className="subsection">About</button>
        <button className="subsction">Videos</button>
      </div>
      <Visitors />
    </header>
  )
}

export default Header
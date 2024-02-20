import { useNavigate } from "react-router-dom"
import Visitors from "./components/Visitors"
import MyCurrentlyPlayingComponent from "./components/spotifyAPI/MyCurrentlyPlayingComponent";


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
      <h1>Ki Yoon&apos;s Cool Website</h1>
      <div className="socials">
        <a href="https://github.com/bkylee"></a>
        <a href="https://www.linkedin.com/in/kiyoon-brian-lee/"></a>
      </div>
      <div className="headButtons">
        <button className="subsection" onClick={homeRoute} >Home</button>
        <button className="subsection" >Blog</button>
        <button className="subsection" onClick={resumeRoute}>Resume</button>
        <button className="subsection">Projects</button>
        <button className="subsection">About</button>
        <button className="subsction">Videos</button>
      </div>
      <Visitors />
      <MyCurrentlyPlayingComponent />
    </header>
  )
}

export default Header
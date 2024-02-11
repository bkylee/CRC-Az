import Visitors from "./Visitors"

const Header = () => {
  return (
    <header>
      <h1>Brian&apos;s Cool Website</h1>
      <div className="headButtons">
        <button className="subsection">Home</button>
        <button className="subsection">Blog</button>
        <button className="subsection">Resume</button>
        <button className="subsection">Projects</button>
        <button className="subsection">About</button>
        <button className="subsction">Videos</button>
      </div>
      <Visitors />
    </header>
  )
}

export default Header
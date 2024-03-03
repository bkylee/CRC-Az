import Header from './Header'

const homeText = "Welcome to my cool website! The purpose of this site is to show projects I've completed and am currently working on (this site is always a WIP). Also, there's other hobby related content that you can view. Check out the Blog for more details posts on what I've been working on (also currently WIP)" 

const Home = () => {
    return (<>
        <Header />
        <p>
          {homeText}  
      </p>
      <p>This site uses React in the front end, Azure Static Website for hosting, Terraform for IaC, GitHub Actions for CI/CD, Python for the visitor count hosted by Azure Functions.</p>
      <p>Vist my Github for the repos!</p>
    </>
      
  )
}

export default Home
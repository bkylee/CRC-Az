import Header from './Header'

const homeText = "Welcome to my cool website! The purpose of this site is to show projects I've completed and am currently working on (this site is always a WIP). Also, there's other hobby related content that you can view. Check out the Blog for more details posts on what I've been working on" 

const Home = () => {
    return (<>
        <Header />
        <p>
          {homeText}  
      </p>
    </>
      
  )
}

export default Home
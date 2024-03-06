import Header from '../components/Header'

export const FirstPost = () => {
  return (
      <>
          <Header />
          <h2 className="blogTitle">First Post</h2>
          <div className="dateCreated">2024-03-05</div>
          <p className="post">
              Welcome to my the first post in my blog! I&apos;ve been working on this website since the beginning of the year. It&apos;s been a log journey and hasn&apos;t been easy, but I&apos;m going to continue to build the site and look to create other projects to share.
          </p>
          <p>
              I will be posting some challenges I had while creating this site as well as updates on progress for new projects. Stay tuned!
          </p>
    </>
  )
}

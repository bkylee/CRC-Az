import { useNavigate } from 'react-router-dom'
import Header from './Header'
const Blog = () => {

    let navigate = useNavigate();
  
  const firstPostRoute = () => {
  let path = `/blog/first-post`
  navigate(path)
  }
  
    
  return (
      <>
          <Header />
          <div className="blog">
              <h3 className="posts" onClick={firstPostRoute}>
                  First Post!
              </h3>
            </div>
      </>
  )
}

export default Blog
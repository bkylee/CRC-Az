import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
const Blog = () => {

    let navigate = useNavigate();
  
  const firstPostRoute = () => {
  let path = `/blog/first-post`
  navigate(path)
  }
  
    
  return (
      <>
          <Header />
          <div className="posts">
              <h3 className="blog" onClick={firstPostRoute}>
                  First Post!
              </h3>
            </div>
      </>
  )
}

export default Blog
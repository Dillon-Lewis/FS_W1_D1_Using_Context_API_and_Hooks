import { Route, Routes } from 'react-router-dom'
import PostList from './views/PostList'


const App = () => {

  


  return (
    <Routes>
      <Route path='/' element={ <PostList /> } />
    </Routes>
  )
}

export default App
import usePosts from '../hooks/usePosts'


const PostList = () => {
    const {PostLists} = usePosts()

  return (
    <div>
        <h2>{PostLists}</h2>
    </div>
  )
}

export default PostList
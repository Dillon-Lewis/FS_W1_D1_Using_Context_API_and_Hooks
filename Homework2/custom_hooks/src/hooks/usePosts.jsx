import { useEffect, useState } from 'react'

const usePosts = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {

        fetchPosts();
    }, [])

    const fetchPosts = async () => {
            const response = fetch ('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((data) => console.log(data));

            setPosts(response)
        }

    return posts
}

export default usePosts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./store/actions/postAction";

const PostList = ()=>{
    const dispatch = useDispatch();
    const {posts, loading, error} = useSelector((state)=> state.posts);

    useEffect(()=>{
        dispatch(fetchPosts());
    },[dispatch]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((allPost)=>(
                    <li key={allPost.id}>
                        <strong>{allPost.title}</strong>
                        <p>{allPost.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default PostList;
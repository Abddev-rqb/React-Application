export const fetchPostsRequest = ()=>({
    type: "FETCH_POST_REQUEST",
}); 
export const fetchPostsSuccess = (posts)=>({
    type: "FETCH_POST_SUCCESS",
    payload : posts,
});
export const fetchPostsFailure = (error)=>({
    type: "FETCH_POST_FAILURE",
    payload: error,
})

export const fetchPosts = ()=> async (dispatch)=> {
    dispatch(fetchPostsRequest());
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchPostsSuccess(data));
    }catch (error){
        dispatch(fetchPostsFailure(error.message));
    }

};

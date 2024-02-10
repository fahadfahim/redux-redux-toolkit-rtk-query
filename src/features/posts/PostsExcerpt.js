import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
//for preventing re render instead of const we add let here
//before normalization
// const PostsExcerpt = ({ post }) => {
//after normalization 
const PostsExcerpt = ({ postId }) => {
    const post = useSelector((state) => selectPostById(state, postId))
    return (
        <article>
            <h2>{post?.title}</h2>
            <p className="excerpt">{post?.body.substring(0, 100)}</p>
            <p className="postCredit">
                <Link to={`post/${post?.id}`}>View Post</Link>
                <PostAuthor userId={post?.userId} />
                <TimeAgo timestamp={post?.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

//what this does is it allows this component to not re render if the prop that is received has not changed this is on of the way 
// PostsExcerpt = React.memo(PostsExcerpt)
export default PostsExcerpt
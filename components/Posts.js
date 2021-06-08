import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post key={post.id} {...post.data()} />
      ))}
    </div>
  );
};

export default Posts;

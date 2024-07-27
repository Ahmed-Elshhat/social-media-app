
import Post from "../Post/Post";
import "./Posts.scss";

function Posts() {
  const poste: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div className="posts">
      {poste.map((post, i) => (
        <>
          <Post key={i} />
          <div>{post}</div>
        </>
      ))}
    </div>
  );
}

export default Posts;

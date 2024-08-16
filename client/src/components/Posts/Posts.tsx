import React, { useState } from "react";
import Post from "./Post/Post";
import "./Posts.scss";

function Posts() {
  const [indexSettingOpen, setIndexSettingOpen] = useState<number | null>(null);
  const poste: {
    id: number,
    name: string
  }[] = [
    {
      id: 1,
      name: ""
    },
    {
      id: 2,
      name: ""
    },
    {
      id: 3,
      name: ""
    },
    {
      id: 4,
      name: ""
    },
    {
      id: 5,
      name: ""
    },
    {
      id: 6,
      name: ""
    },
    {
      id: 7,
      name: ""
    },
    {
      id: 8,
      name: ""
    },
    {
      id: 9,
      name: ""
    },
    {
      id: 10,
      name: ""
    },
    {
      id: 11,
      name: ""
    },
    {
      id: 12,
      name: ""
    },
    {
      id: 13,
      name: ""
    },
    {
      id: 14,
      name: ""
    },
  ];
  return (
    <div className="posts">
      {poste.map((post, i) => (
        <React.Fragment  key={i}>
          <Post indexSettingOpen={indexSettingOpen} setIndexSettingOpen={setIndexSettingOpen} index={i} postId={post.id} />
          <div>{post.name}</div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Posts;

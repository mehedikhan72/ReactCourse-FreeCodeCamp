import React from "react";
import Data from "./Data";
import Post from "./Post";


export default function App() {
  const posts = Data.map(item => {
    return(
      <Post
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      {posts}
    </div>
  )
}
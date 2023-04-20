import React from "react";
import { useSelector } from "react-redux";

function NewPost() {
  const NewPost = useSelector(state => state.NewPost);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {NewPost.map(NewPost => (
            <tr key={NewPost.id}>
              <td>{NewPost.id}</td>
              <td>{NewPost.title}</td>
              <td>{NewPost.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default NewPost;
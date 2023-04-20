import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakePost } from "../redux/action";

function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [NewPost, setNewPost] = useState({ title: "", content: "" });
  const NewPostadd = useSelector(state => state.NewPostadd);
  const setValueForNewPost = (key, value) => {
    const newVal = { ...NewPost, [key]: value };
    setUser(newVal);
  };
  const Post = () => {
    dispatch(fakePost(NewPost));
  };
  useEffect(() => {
    if (NewPostadd.title) {
      navigate("/title");
    }
  }, [NewPostadd, navigate]);
  return (
    <form>
      <label>Title</label>
      <input
        id="title"
        onChange={e => setValueForUser("title", e.target.value)}
        type="text"
      />
      <label>Content</label>
      <input
        id="content"
        onChange={e => setValueForUser("content", e.target.value)}
        type="text"
      />
      <button
        type="button"
        onClick={() => {
            Post();
        }}
      >
       Add
      </button>
    </form>
  );
}
export default Post;
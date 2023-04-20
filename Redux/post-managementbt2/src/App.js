import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import { Provider } from "react-redux";
import store from "./redux/store";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/NewPost" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
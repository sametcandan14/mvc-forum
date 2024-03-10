import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.scss";
import ListPostsController from "./pages/ListPosts/ListPostsController";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPostsController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

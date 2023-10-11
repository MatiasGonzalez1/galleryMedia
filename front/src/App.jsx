import "./App.css";
import { PostProvider } from "./context/postContext.jsx";
import { HomePage, NotFound, PostForm } from "./pages/index.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
       <PostProvider>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact={true} path="/new" element={<PostForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </PostProvider>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Message from "./pages/messages/Message";
import Content from "./content/Content";
import LoginPage from "./pages/login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="content" element={<Content />}>
        <Route index element={<Message />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Message from "./pages/messages/Message";
import Content from "./content/Content";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/" element={<Message />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

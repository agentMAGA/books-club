import Newspaper from "./pages/newspaper";
import Header from "./components/Header";
import "./scss/app.scss";
import { Route , Routes } from "react-router";

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/newespaper" element={<Newspaper />} />
      </Routes>
    </>
  )
}

export default App

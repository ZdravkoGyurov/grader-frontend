import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Flex, Link as ChakraLink } from "@chakra-ui/layout";
import About from "./About";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Flex>
      <Sidebar />
      {/* <ul>
        <li>
          <Link to={"/about"}>
            <ChakraLink color={"red"}>About</ChakraLink>
          </Link>
        </li>
      </ul> */}
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Flex>
  );
}

export default App;

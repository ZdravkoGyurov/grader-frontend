import "./App.css";
import { Flex } from "@chakra-ui/layout";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Flex backgroundColor="#F3F3F3" h="100vh" p="1rem">
      <Sidebar />
      <Main />
    </Flex>
  );
}

export default App;

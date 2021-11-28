import "./App.css";
import { Flex } from "@chakra-ui/layout";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
import themeStyles from "./theme";

function App() {
  const getTheme = () => {
    let _theme = localStorage.getItem("theme");
    if (!_theme || (_theme !== "light" && _theme !== "dark")) {
      _theme = "light";
      localStorage.setItem("theme", _theme);
    }

    return _theme;
  };
  const [theme, setTheme] = useState(getTheme());

  const _setTheme = (_theme) => {
    setTheme(_theme);
    localStorage.setItem("theme", _theme);
  };

  return (
    <Flex backgroundColor="#F3F3F3" h="100vh" p="1rem">
      <Sidebar theme={theme} setTheme={_setTheme} />
      <Main styles={themeStyles(theme)} />
    </Flex>
  );
}

export default App;

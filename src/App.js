import "./App.css";
import { Flex } from "@chakra-ui/layout";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import themeStyles from "./theme";
import Home from "./components/Home";
import auth from "./api/auth";

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

  const [userInfo, setUserInfo] = useState(null);
  const [fetchingUserInfo, setFetchingUserInfo] = useState(true);
  useEffect(() => {
    auth.getUserInfo(setUserInfo, setFetchingUserInfo);
  }, []);

  if (fetchingUserInfo) {
    // add loading page
    return <div>loading...</div>;
  }

  return (
    <Flex backgroundColor="#F3F3F3" h="100vh" p="1rem">
      {userInfo ? (
        <>
          <Sidebar
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            theme={theme}
            setTheme={_setTheme}
          />
          <Main userInfo={userInfo} styles={themeStyles(theme)} />
        </>
      ) : (
        <Home userInfo={userInfo}></Home>
      )}
    </Flex>
  );
}

export default App;

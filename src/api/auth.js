import axios from "axios";

function login() {
  window.location.href = "http://localhost:8080/login/oauth/github";
}

function getUserInfo(setUserInfo, setFetchingUserInfo) {
  axios
    .get("http://localhost:8080/userInfo", {
      withCredentials: true,
    })
    .then((result) => {
      console.log(result.data);
      setUserInfo(result.data);
      setFetchingUserInfo(false);
    })
    .catch((error) => {
      setUserInfo(null);
      setFetchingUserInfo(false);
    });
}

function logout(callback) {
  axios
    .delete("http://localhost:8080/logout", {
      withCredentials: true,
    })
    .then(() => {
      callback();
    })
    .catch((error) => {
      callback(error);
    });
}

const auth = { login, getUserInfo, logout };
export default auth;

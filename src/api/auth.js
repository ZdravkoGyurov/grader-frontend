import axios from "axios";

const login = () => {
  window.location.href = "http://localhost:8080/login/oauth/github";
};

const getUser = async (setUser, setFetchingUser) => {
  try {
    const result = await axios.get("http://localhost:8080/userInfo", {
      withCredentials: true,
    });

    setUser(result.data);
    setFetchingUser(false);
  } catch (error) {
    console.error(error);
    setUser(null);
    setFetchingUser(false);
  }
};

const logout = async (callback) => {
  try {
    await axios.delete("http://localhost:8080/logout", {
      withCredentials: true,
    });

    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};

const authApi = { login, getUser, logout };
export default authApi;

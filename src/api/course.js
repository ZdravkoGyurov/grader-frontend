import axios from "axios";

const getCourses = async (setCourses, setFetchingCourses) => {
  setFetchingCourses(true);
  try {
    const result = await axios.get("http://localhost:8080/course", {
      withCredentials: true,
    });

    setCourses(result.data);
    setFetchingCourses(false);
  } catch (error) {
    console.error(error);
    setCourses(null);
    setFetchingCourses(false);
  }
};

const getCourse = async (courseId, setCourse, setFetchedCourse) => {
  try {
    const result = await axios.get(`http://localhost:8080/course/${courseId}`, {
      withCredentials: true,
    });

    setCourse(result.data);
    setFetchedCourse(true);
  } catch (error) {
    console.error(error);
    setCourse(null);
    setFetchedCourse(true);
  }
};

const courseApi = {
  getCourses,
  getCourse,
};

export default courseApi;

import axios from "axios";

const getAssignments = async (
  courseId,
  setAssignments,
  setFetchedAssignments
) => {
  try {
    const result = await axios.get(
      `http://localhost:8080/assignment?courseId=${courseId}`,
      {
        withCredentials: true,
      }
    );

    setAssignments(result.data);
    setFetchedAssignments(true);
  } catch (error) {
    console.error(error);
    setAssignments(null);
    setFetchedAssignments(true);
  }
};

const assignmentApi = {
  getAssignments,
};

export default assignmentApi;

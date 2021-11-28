import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Flex } from "@chakra-ui/layout";
import NotFound from "./NotFound";
import Users from "./Users";
import Courses from "./Courses";
import Submissions from "./Submissions";
import Assignments from "./Assignments";

export default function Main({ styles }) {
  return (
    <Flex
      backgroundColor={styles.backgroundColor}
      color={styles.color}
      w="100%"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius="15px"
    >
      <Routes>
        <Route exact strict path="/submissions" element={<Submissions />} />
        <Route exact strict path="/assignments" element={<Assignments />} />
        <Route exact strict path="/courses" element={<Courses />} />
        <Route exact strict path="/users" element={<Users />} />
        <Route exact strict path="/about" element={<About />} />
        <Route exact strict path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Flex>
  );
}

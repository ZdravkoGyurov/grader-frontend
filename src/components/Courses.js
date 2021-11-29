import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";

import { FiBook } from "react-icons/fi";
import Course from "./Course";

export default function Courses() {
  const courses = [];
  for (let i = 0; i < 30; i++) {
    courses.push(`course${i}`);
  }
  return (
    <Flex flexDir="column" w="100%">
      <Flex alignItems="center" marginBottom="1rem">
        <Icon marginRight="1rem" fontSize="3xl" as={FiBook} />
        <Text fontSize="3xl">Courses</Text>
      </Flex>
      <Flex overflowY="auto" flexDir="column" p="2rem">
        {courses.map((c) => (
          <Course key={c} title={c} />
        ))}
      </Flex>
    </Flex>
  );
}

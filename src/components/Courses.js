import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight, FiBook } from "react-icons/fi";
import Course from "./Course";

export default function Courses({ styles }) {
  const pageSize = 10;
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPageSize, setMaxPageSize] = useState(1);

  useEffect(() => {
    const fillCourses = [];
    for (let i = 0; i < 25; i++) {
      fillCourses.push(`course${i}`);
    }
    setCourses(fillCourses);
    setMaxPageSize(Math.ceil(fillCourses.length / pageSize));
  }, []);

  return (
    <Flex flexDir="column" w="100%">
      <Flex alignItems="center" marginBottom="1rem">
        <Text fontSize="2xl">Courses</Text>
      </Flex>
      <Flex m="0 5%" overflowY="auto" flexDir="column" p="2rem">
        <Table variant="unstyled">
          <Thead borderBottom={`2px solid ${styles.color}`}>
            <Tr>
              <Th>
                <Flex alignItems="center" justifyContent="space-between">
                  Name
                  <Flex alignItems="center">
                    <IconButton
                      disabled={page === 1}
                      icon={<FiArrowLeft />}
                      bg={styles.backgroundColor}
                      onClick={() => {
                        if (page > 1) setPage(page - 1);
                      }}
                    />
                    <Text m="0.5rem">Page {page} </Text>
                    <IconButton
                      disabled={page >= maxPageSize}
                      bg={styles.backgroundColor}
                      icon={<FiArrowRight />}
                      onClick={() => {
                        if (page < maxPageSize) setPage(page + 1);
                      }}
                    />
                  </Flex>
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {courses.slice((page - 1) * pageSize, page * pageSize).map((c) => (
              <Tr borderBottom={`1px solid ${styles.color}`} key={c}>
                <Td>
                  <Flex>
                    <Icon marginRight="1rem" fontSize="2xl" as={FiBook} />
                    <Course title={c} />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}

import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight, FiBook } from "react-icons/fi";
import ThemeContext from "../contexts/ThemeContext";
import courseApi from "../api/course";
import { useNavigate } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Courses = () => {
  const { styles } = useContext(ThemeContext);

  const pageSize = 5;
  const [courses, setCourses] = useState([]);
  const [fetchingCourses, setFetchingCourses] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPageSize, setMaxPageSize] = useState(1);

  let navigate = useNavigate();

  const fetchCourses = async () => {
    setFetchingCourses(true);
    try {
      const courses = await courseApi.getCourses();
      setCourses(courses);
      setFetchingCourses(false);
      setMaxPageSize(Math.ceil(courses.length / pageSize));
    } catch (error) {
      console.error(error);
      setCourses(null);
      setFetchingCourses(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Flex flexDir="column" w="100%">
      <Flex alignItems="center" marginBottom="1rem" fontSize="2xl">
        <Breadcrumb separator="→">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Courses</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex m="0 5%" overflowY="auto" flexDir="column" p="2rem">
        <Table variant="unstyled">
          <TableCaption placement="top">Courses</TableCaption>
          <Thead borderBottom={`2px solid ${styles.colorPrimary}`}>
            <Tr>
              <Th>
                <Flex alignItems="center" justifyContent="space-between">
                  Name
                  <Flex alignItems="center">
                    <IconButton
                      color="#FFFFFF"
                      disabled={page === 1}
                      icon={<FiArrowLeft />}
                      _focus={{ boxShadow: "none" }}
                      _hover={{ backgroundColor: styles.accentLight }}
                      _active={{ backgroundColor: styles.accentDark }}
                      bg={styles.accentLight}
                      onClick={() => {
                        if (page > 1) setPage(page - 1);
                      }}
                    />
                    <Text m="0.5rem">Page {page} </Text>
                    <IconButton
                      color="#FFFFFF"
                      disabled={page >= maxPageSize}
                      bg={styles.accentLight}
                      icon={<FiArrowRight />}
                      _focus={{ boxShadow: "none" }}
                      _hover={{ backgroundColor: styles.accentLight }}
                      _active={{ backgroundColor: styles.accentDark }}
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
            {courses
              .slice((page - 1) * pageSize, page * pageSize)
              .map((course) => (
                <Tr
                  borderBottom={`1px solid ${styles.colorPrimary}`}
                  key={course.id}
                >
                  <Td>
                    <Flex>
                      <Icon
                        color={styles.accentLight}
                        marginRight="1rem"
                        fontSize="2xl"
                        as={FiBook}
                      />
                      <Link
                        onClick={() =>
                          navigate(`/courses/${course.id}`, {
                            state: { course: course },
                          })
                        }
                      >
                        {course.name}
                      </Link>
                    </Flex>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
};

export default Courses;

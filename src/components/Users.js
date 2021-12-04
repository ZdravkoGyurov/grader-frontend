import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const Users = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Flex alignItems="center" marginBottom="1rem" fontSize="2xl">
        <Breadcrumb separator="→">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Users</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex m="0 5%" overflowY="auto" flexDir="column" p="2rem">
        {false ? (
          <Flex marginTop="10rem" justifyContent="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Text>Change role...</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Users;

import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function PostForm(props) {
  const {initialV, onSubmit, heading } = props
  return (
    <>
      
      <Flex 
      align="center" 
      justify="center" h="100vh">
      <Box bg="gray:50" p={6} rounded="md" w={80}>
      <Text
          fontSize='4xl'
          textAlign={"center"}
          >{heading}</Text>
        <Formik
          initialValues={initialV}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl>
                  <FormLabel textAlign={"center"}htmlFor="title">Title</FormLabel>
                  <Input
                    size={"sm"}
                    fontSize={"xs"}
                    id="title"
                    name="title"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel textAlign={"center"}htmlFor="caption">Caption</FormLabel>
                  <Textarea
                    size={"sm"}
                    fontSize={"xs"}
                    id="caption"
                    name="caption"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                
                <Button type="submit" colorScheme="purple" width="full">
                  {heading}
                </Button>

              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
    </>

  );
}

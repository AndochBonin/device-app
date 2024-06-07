import {
  Box,
  Center,
  Flex,
  Text,
  Select,
} from "@chakra-ui/react"
import React from "react"

export default function Device1236AB() {
  return (
    <Box marginTop={8}>
      <Box>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Serial # :{" "}
          </Text>
          <Text>1236AB</Text>
        </Flex>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Name :{" "}
          </Text>
          <Text>Main Oven</Text>
        </Flex>
      </Box>

      <Flex marginTop={10} marginBottom={10}>
        <Center>
          <Text marginRight={8}>Membership Plan: </Text>
        </Center>
        <Select placeholder="" width={"160px"}>
          <option value="basic">Basic</option>
          <option value="advanced">Advanced</option>
          <option value="premium">Premium</option>
        </Select>
      </Flex>
    </Box>
  )
}

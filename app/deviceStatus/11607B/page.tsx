import { Box, Button, Center, Flex, Heading, Progress, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export default function Device11607B() {
  return (
    <Box marginTop={8}>
      <Box>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Serial # :{" "}
          </Text>
          <Text>11607B</Text>
        </Flex>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Name :{" "}
          </Text>
          <Text>Main Oven</Text>
        </Flex>
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Status :{" "}
          </Text>
          <Text>Faulty</Text>
        </Flex>
      </Box>

      <Flex justify={"start"}>
        <Box>
          <Progress
            marginTop={20}
            height="80px"
            width="200px"
            style={{ transform: "rotate(270deg) translateY(-60px)" }}
            colorScheme="green"
            value={70}
          />
          <Heading size={"xl"} marginLeft={24}>
            70%
          </Heading>
        </Box>
        <Box marginTop={4} marginRight={4} position="absolute" left={40}>
          <Text>Will alert at: 20%</Text>
          <Text style={{ whiteSpace: "nowrap" }}>Last refill: 27/02/2022</Text>
        </Box>
      </Flex>
      <Center marginTop={20}>
        <Text>As at: 9:37 am 03/03/2022</Text>
      </Center>
      <Box position={"absolute"} bottom={8} right={4}>
        <Link href="/deviceHistory/11607B">
          <Button backgroundColor={"blue"} color="white">History</Button>
        </Link>
      </Box>
    </Box>
  )
}

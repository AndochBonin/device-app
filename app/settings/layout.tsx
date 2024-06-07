"use client"
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [value, setValue] = useState(15)
  const format = (val: any) => val + `%`
  const parse = (val: any) => val.replace(/^\$/, "")

  return (
    <Box height={"100vh"}>
      <Center backgroundColor={"blue"} paddingBottom={4}>
        <Heading size={"xl"} marginTop={4} color="white">
          Settings
        </Heading>
      </Center>

      <Box marginX={4}>

        {children}

        <Flex>
          <Text>Send Depletion Alert When Level Reaches: </Text>
          <NumberInput
            size="lg"
            maxW={32}
            value={format(value)}
            onChange={(valueString) => setValue(parse(valueString))}
            defaultValue={15}
            min={0}
            max={100}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        <Box position={"absolute"} bottom={8}>
          <Link href="/deviceList">
            <Button backgroundColor={"blue"} color="white">
              Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

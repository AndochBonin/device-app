"use client"
import {
  Box,
  Center,
  Flex,
  Text,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import React, { useState } from "react"

export default function Device11607B() {
  const [value, setValue] = useState(20)
  const format = (val: any) => val + `%`
  const parse = (val: any) => val.replace(/^\$/, "")
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
    </Box>
  )
}

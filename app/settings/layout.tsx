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

  return (
    <Box height={"100vh"}>
      <Center backgroundColor={"blue"} paddingBottom={4}>
        <Heading size={"xl"} marginTop={4} color="white">
          Settings
        </Heading>
      </Center>

      <Box marginX={4}>

        {children}

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

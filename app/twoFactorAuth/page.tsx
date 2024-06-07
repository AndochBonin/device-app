"use client"
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function TwoFactorAuth() {
  const router = useRouter()
  const [pin, setPin] = useState("")

  const handlePinChange = (e: any) => {
    console.log(e)
    setPin(e)
    if (e.length == 4) router.push("/deviceList")
  }

  return (
    <Box height={"100vh"}>
      <Center backgroundColor={"blue"} paddingBottom={4}>
        <Heading size={"4xl"} marginTop={4} color={"white"}>Adowa</Heading>
      </Center>

      <Center marginTop={20} marginX={4}>
        <Box>
          <Center>
            <Text marginBottom={4}>Enter Your Verification Code</Text>
          </Center>

          <Center>
            <Box marginBottom={4}>
              <HStack>
                <PinInput
                  otp
                  placeholder=""
                  size={"lg"}
                  onChange={handlePinChange}
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Center>
        </Box>
      </Center>

      <Box position={"absolute"} bottom={8} marginLeft={4}>
        <Link href="/">
          <Button backgroundColor="blue" color="white">Back</Button>
        </Link>
      </Box>
    </Box>
  )
}

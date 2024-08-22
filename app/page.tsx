"use client"
import {
  Box,
  Heading,
  Center,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handlePhoneChange = (e: any) => {
    console.log(e.target.value)
    setPhoneNumber(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (phoneNumber != "" && password != "") {
      router.push("/twoFactorAuth")
      console.log(phoneNumber)
      console.log(password)
    }
  }

  return (
    <Box>
      <Center backgroundColor={"blue"} paddingBottom={4}>
        <Heading size={"4xl"} marginTop={4} color={"white"}>Acutemetre</Heading>
      </Center>

      <Center marginTop={20} marginX={4}>
        <Box>
          {isClient ? (
            <Box>
              <Flex marginBottom={6}>
                <Center>
                  <Text
                    style={{ whiteSpace: "nowrap" }}
                    marginRight={8}
                    suppressHydrationWarning
                  >
                    Phone Number
                  </Text>
                </Center>
                <Input type="number" onChange={handlePhoneChange} />
              </Flex>

              <Flex marginBottom={6}>
                <Center>
                  <Text marginRight={8}>Password</Text>
                </Center>
                <Input type="password" onChange={handlePasswordChange} />
              </Flex>
            </Box>
          ) : (
            <></>
          )}
          <Flex justify={"flex-end"}>
            <Box>
              <Button onClick={handleSubmit} backgroundColor="blue" color="white">Login</Button>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  )
}

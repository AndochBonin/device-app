"use client"
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DeviceList() {
  const router = useRouter()
  let previousRow: any = null
  let selectedDevice = ""

  const handleTableRowClick = (e: any) => {
    const target = e.currentTarget
    if (previousRow) previousRow.style.backgroundColor = ""
    target.style.backgroundColor = "lightblue"
    previousRow = target
    const device = target.childNodes[0].innerHTML
    selectedDevice = device
    console.log(selectedDevice)
  }

  const handleStatusClick = () => {
    if (selectedDevice != "") {
      const path = "/deviceStatus/" + selectedDevice
      router.push(path)
    }
  }

  const handleHistoryClick = () => {
    if (selectedDevice != "") {
      const path = "/deviceHistory/" + selectedDevice
      router.push(path)
    }
  }

  const handleSettingsClick = () => {
    if (selectedDevice != "") {
      const path = "/settings/" + selectedDevice
      router.push(path)
    }
  }

  return (
    <Box height={"100vh"}>
      <Center backgroundColor={"blue"}>
        <Heading size={"xl"} marginTop={4} color="white" paddingBottom={4}>
          My Devices
        </Heading>
      </Center>

      <Box marginX={4}>
        <Center marginTop={20}>
          <Box>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Serial #</Th>
                    <Th>Status</Th>
                    <Th>Plan</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr cursor={"pointer"} onClick={handleTableRowClick}>
                    <Td>1236AB</Td>
                    <Td>Active</Td>
                    <Td>Basic</Td>
                  </Tr>
                  <Tr cursor={"pointer"} onClick={handleTableRowClick}>
                    <Td>FE154</Td>
                    <Td>Active</Td>
                    <Td>Premium</Td>
                  </Tr>
                  <Tr cursor={"pointer"} onClick={handleTableRowClick}>
                    <Td>11607B</Td>
                    <Td>Faulty</Td>
                    <Td>Basic</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <Center marginTop={6}>
              <ButtonGroup>
                <Button
                  onClick={handleStatusClick}
                  backgroundColor="blue"
                  color="white"
                >
                  Status
                </Button>
                <Button
                  onClick={handleHistoryClick}
                  backgroundColor="blue"
                  color="white"
                >
                  History
                </Button>
                <Button
                  onClick={handleSettingsClick}
                  backgroundColor="blue"
                  color="white"
                >
                  Settings
                </Button>
              </ButtonGroup>
            </Center>
          </Box>
        </Center>
        <Box position={"absolute"} bottom={8}>
          <Link href="/">
            <Button backgroundColor="blue" color="white">
              Sign Out
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

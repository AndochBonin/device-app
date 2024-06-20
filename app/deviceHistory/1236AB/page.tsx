"use client"
import ChartComponent from "@/app/components/chart"
import { Box, Flex, Text, Select } from "@chakra-ui/react"
import React from "react"
import dynamic from 'next/dynamic'
 
const DynamicChart = dynamic(() => import('../../components/chart'), {
  ssr: false,
})

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
        <Flex marginBottom={2}>
          <Text as="b" marginRight={2}>
            Timeframe :{" "}
          </Text>
          <Select placeholder="" width={28}>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </Select>
        </Flex>
      </Box>
      <Box marginTop={10}>
        <DynamicChart
          data={[
            100, 92, 84, 76, 68, 60, 52, 44, 36, 28, 20, 12, 100, 92, 84, 76,
            68, 60,
          ]}
          alert={150}
        />
      </Box>
    </Box>
  )
}

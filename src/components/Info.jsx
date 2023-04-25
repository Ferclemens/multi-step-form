import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Info() {
  return (
    <Flex h={'75vh'} w={'65vw'} justifyContent={'space-around'} bgColor={'#ffffff'} borderRadius={'10px'}>
        <Stack>
            <Text>Steps</Text>
        </Stack>
        <Stack>
            <Text>Personal Info</Text>
        </Stack>
    </Flex>
  )
}

export default Info
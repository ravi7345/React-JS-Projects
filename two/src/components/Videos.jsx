import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return (
   <Stack h={'100vh'}direction={['column','row']}>
    <VStack w={'full'}>
        <video></video>
    </VStack>
   </Stack>
  )
}

export default Videos

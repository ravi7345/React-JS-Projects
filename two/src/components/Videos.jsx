import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import v1 from '../assets/1.mp4'
import v2 from '../assets/2.mp4'
import v3 from '../assets/3.mp4'


const Videos = () => {
  const videoArr=[v1,v2,v3]
  const [videoSrc,setVideoSrc]=useState(videoArr[0])

  return (
   <Stack h={'100vh'}direction={['column','row']}>
    <VStack w={'full'}>
        <video 
        controls
        controlsList='nodownload'
        src={videoSrc} style={{width:'100%',}}></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample video 1</Heading>
          <Text>This is a simple video</Text>
        </VStack>
    </VStack>
    <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
  {
    videoArr.map((item,index)=>(
      <Button onClick={()=>setVideoSrc(item)}
      variant={'ghost'}
      colorScheme={'telegram'}
      >
        Lecture {index+1}
      </Button>
    ))
  }
    </VStack>
   </Stack>
  )
}

export default Videos

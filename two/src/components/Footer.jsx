import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'sm'} textTransform={'capitalize'} textAlign={'center'}> 
            Play The tube And know about ourself
          </Heading>
          <HStack 
          borderBottom={'2px solid white'}
          py={'2'}
          >
            <Input
              placeholder="Enter your Email here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'telegram'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
        >  
          <Heading textTransform={'uppercase'} textAlign={'center'}>
                PLAY TUBE
            </Heading>
            <Text>
                All Right recieved
            </Text>  


        </VStack>
        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target= {'_blank'}href="/">Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target= {'_blank'}href="/">Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target= {'_blank'}href="/">GItHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default footer;

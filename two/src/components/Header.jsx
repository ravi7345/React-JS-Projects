import React from 'react'
import {Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  return (
   <>
   <Button position={'fixed'} top={'4'} left={'4'} colorScheme='telegram'
   p={'0'}
   w={'10'}
   h={'10'}
   borderRadius={'full'}
   zIndex={'overlay'}
   onClick={onOpen}>
   <BiMenuAltLeft size={'20'}/>
   </Button>
   <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} >
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Play Tube</DrawerHeader>
        <DrawerBody>
          <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'} >
              <Link to='/'>Home</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
              <Link to='/videos'>Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
              <Link to='/videos?category=free'>Free Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme={'telegram'}>
              <Link to='/upload'>Upload Video</Link>
            </Button>
          </VStack>
          <HStack position={'absolute'} 
          bottom={"10"} 
          left={'0'} 
          w={'full'} 
          justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme={'telegram'}>
              <Link to='/login'>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme={'telegram'} variant={'outline'}>
              <Link to='/signup'>Sign Up</Link>
            </Button>
          </HStack>
        </DrawerBody>
      </DrawerContent>
   </Drawer>
   </>
  )
}

export default Header

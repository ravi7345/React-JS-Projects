import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/png1.jpg';
import img2 from '../assets/png2.jpeg';
import img3 from '../assets/png3.jpg';
import img4 from '../assets/png4.jpg';
import img5 from '../assets/png5.png';
const headingOptions = {
  pos: 'absolute',
  left: '20%',
  top: '50%',
  transfrom: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '2',
  size: '2xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image  src={img5} w={'60vh'}  h={['40','400']}/>
          <Text  letterSpacing={'widest'} lineHeight={'140%'} p={['3','9']} textAlign={'center'}> 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam est veniam autem, cumque totam qui nostrum commodi dignissimos perferendis aspernatur sint ut ducimus animi quae, corrupti deleniti neque quaerat.
           Tenetur quae deleniti vero enim dolorum vitae ducimus tempore quia quas aperiam error doloribus natus assumenda accusantium, quos ut hic facere ratione voluptatibus. Quis ipsam exercitationem tempore odio rerum ea.
           Quibusdam, nihil deserunt veritatis eveniet soluta praesentium aut recusandae in similique, numquam neque veniam laborum dolores autem nobis eaque voluptate quo vel eum voluptatibus magni placeat molestiae ipsa? Quo, facere.
           Quas suscipit fugiat obcaecati libero praesentium quisquam corporis aut quis, numquam dolores illum, maxime enim porro dicta temporibus earum rerum culpa. Culpa incidunt veritatis assumenda sed blanditiis. At, dolorem aut?
           Sequi velit cum vel? Tempore sit consequatur totam libero voluptas quod at animi debitis laborum. Alias nisi eligendi minus adipisci error rerum inventore beatae amet, nulla porro provident, expedita fugit.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'whiteAlpha.600'} color={'Black'}  {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is Web Devlopment
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        AIML
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Cloud
      </Heading>
    </Box>
  </Carousel>
);
export default Home;

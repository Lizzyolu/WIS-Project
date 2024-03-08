
import { Tabs, TabList, Tab, TabPanels } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


export const App = () => (
  <div>
    {/* Tabs component */}
  <Tabs height="42px" alignSelf="stretch">
    <TabList>
      <Tab>Home</Tab>
      <Tab>About</Tab>
      <Tab>Contact</Tab>
    </TabList>
    <TabPanels />
  </Tabs>

  {/* Image component */}
  <Image
    src="null"
    alt="INSERT_ALT"
    width="100%"
    height="498px"
    maxWidth="100%"
    objectFit="cover"
  />

{/* Box component */}
  <Box
    borderRadius="15px"
    width="494px"
    height="221px"
    maxWidth="100%"
    background="rgba(113, 128, 150, 0.5)"
  />
{/* Text component */}
  <Text
    fontFamily="Inter"
    lineHeight="1"
    fontWeight="bold"
    fontSize="48px"
    color="#FFFFFF"
  >
    Your Experience, Their Future
  </Text>

  <Text
    fontFamily="Inter"
    lineHeight="1.2"
    fontWeight="bold"
    fontSize="20px"
    color="#FFFFFF"
  >
    Propose a Guest Lecture for the WIS Club
  </Text>
  <Text
    fontFamily="Inter"
    lineHeight="1.2"
    fontWeight="bold"
    fontSize="30px"
    color="black"
  >
    Real-World Education
  </Text>
  <Text
    fontFamily="Inter"
    lineHeight="1.5"
    fontWeight="regular"
    fontSize="16px"
    color="black"
    width="652px"
    maxWidth="100%"
  >
    We believe true learning extends beyond the classroom. The WIS Club
    facilitates connections between students and industry professionals, giving
    students access to invaluable real-world expertise. Through guest lectures,
    office tours and more, we provide opportunities for students to gain
    insights, get career advice, and build their professional networks.
  </Text>


  {/* Input component */}
    <Input
    placeholder="your email address"
    size="sm"
    width="345px"
    height="32px"
    maxWidth="100%"
  />

{/* Button component */}
  <Button size="lg" colorScheme="blue" width="101px" height="48px">
    Sign up
  </Button>



  </div>
);

export default App;
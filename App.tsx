
import { Tabs, TabList, Tab, TabPanels } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

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
  </div>
);

export default App;
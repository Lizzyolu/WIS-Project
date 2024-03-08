import { Tabs, TabList, Tab, TabPanels } from '@chakra-ui/react'

export const App = () => (
  <Tabs height="42px" alignSelf="stretch">
    <TabList>
      <Tab>Home</Tab>
      <Tab>About</Tab>
      <Tab>Contact</Tab>
    </TabList>
    <TabPanels />
  </Tabs>
)
import { VStack, Flex, Link, Avatar } from "@chakra-ui/react";
import { Topbuttons } from "./Components/topbuttons";
import { About } from "./Components/about";
import { Tree } from "./Components/tree";

function App() {
  return (
    <div>
      <Topbuttons />
      <Flex
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        minHeight="90vh"
      >
        <VStack p="8" width="100%">
          <About />
          <Tree />
          <Link href="https://sequoiavans.com" pt="8" isExternal>
            <Avatar src="/1f332.svg" mx="auto" size="md" />
          </Link>
        </VStack>
      </Flex>
    </div>
  );
}

export default App;

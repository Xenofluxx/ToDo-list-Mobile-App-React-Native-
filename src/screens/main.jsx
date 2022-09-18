import * as React from "react";
import { Center, VStack } from "native-base";
import Language_Button from "../components/language_DropDown";
import ThemeToggle from "../components/theme-toggle";

// Box wraps CSS components
// VStack arranges elemenst in a vertical line
// Flex defines how items fill space (fraction wise)
const MainScreen = (props) => {
  const [update, setUpdate] = React.useState("");

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "indigo.50" }}
      px={10}
      flex={2}
    >
      <VStack space={2} alignItems="center">
        <Language_Button setUpdate={setUpdate} />
        <ThemeToggle />
      </VStack>
    </Center>
  );
};
export default MainScreen;

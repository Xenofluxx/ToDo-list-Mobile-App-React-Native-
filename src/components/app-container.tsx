import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";

// if component where this is called forgets to define children (passed through props) a compilation error will be shown
// React.ReactNode if we want almost any type
type Props = { children: React.ReactNode };
const AppContainer = (props: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;

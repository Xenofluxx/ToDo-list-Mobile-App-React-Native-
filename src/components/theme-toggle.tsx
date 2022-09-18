import * as React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";
import { i18n, changeLanguage } from "../i18n/translator";

// HStack used to alling elements horizontally
// isChecked changes switch  to  selected state
// onToggle changes color
interface Props {
  change: String;
}
const ThemeToggle = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={3} alignItems="center">
      <Text>{i18n.t("Light")}</Text>
      <Switch
        isChecked={colorMode === "dark"}
        onToggle={toggleColorMode}
        offTrackColor="indigo.100"
        onTrackColor="indigo.200"
      ></Switch>
      <Text>{i18n.t("Dark")}</Text>
    </HStack>
  );
};

export default ThemeToggle;

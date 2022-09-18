import { Select } from "native-base";
import { i18n, changeLanguage } from "../i18n/translator";
import { HStack, Circle, Box, Center, Text } from "native-base";
import React from "react";

const Language_Button = ({ setUpdate }) => {
  const [service, setService] = React.useState("");
  const [re, setRe] = React.useState("");

  return (
    <Center>
      <HStack>
        <Box maxW="300">
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel={i18n.t("ChooseLanguage")}
            placeholder={i18n.t("ChooseLanguage")}
            _selectedItem={{
              bg: "teal.600",
              //endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => {
              changeLanguage(itemValue);
              setUpdate(itemValue);
              if (itemValue === "en") {
                setRe(i18n.t("Language1"));
              } else {
                setRe(i18n.t("Language2"));
              }
            }}
          >
            <Select.Item label={i18n.t("Language1")} value="en" />
            <Select.Item label={i18n.t("Language2")} value="es" />
          </Select>
        </Box>
        <Circle
          px={2}
          //flex={20}
        >
          <Text>{re} </Text>
        </Circle>
      </HStack>
    </Center>
  );
};
export default Language_Button;

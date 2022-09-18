import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  onChange,
  onSubmitEditing,
  Button,
} from "react-native";

import { i18n, changeLanguage } from "../i18n/translator";
//import { Picker } from "@react-native-picker/picker";
import shortid from "shortid";
export const MyForm = ({ data, setData }) => {
  const [state, setState] = useState();
  const handlePress = () => {
    console.log(state);
  };
  //TODO: remember to check for repeated subjects
  return (
    <View>
      <Text> {i18n.t("NewInput")} </Text>
      <View>
        <TextInput
          onChange={(text) => {
            // text = text.persist();
            const update = [
              { id: shortid.generate(), subject: text.nativeEvent.text },
            ];
            setState(update);
          }}
          placeholder={i18n.t("PlaceHolder")}
        />
        <Button
          title="Submit"
          onPress={() => setData((prevData) => [...prevData, ...state])}
        ></Button>
      </View>
    </View>
  );
};

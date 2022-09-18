import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const CheckBox = (props) => {
 // console.log("soy props", props.text);
  return (
    <BouncyCheckbox
      size={25}
      //key={props.key}
      fillColor="#b28cf5"
      unfillColor="white"
      text={"Placeholder task"}
      innerIconStyle={{ borderWidth: 1.5 }}
      textStyle={{ fontFamily: "JosefinSans-Regular" }}
      onPress={(isChecked) => {}}
    />
  );
};

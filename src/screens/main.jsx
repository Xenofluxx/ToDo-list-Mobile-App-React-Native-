import React, { useRef, useState, useCallback } from "react";
import { Center, VStack } from "native-base";

import Language_Button from "../components/language_DropDown";
import ThemeToggle from "../components/theme-toggle";
import { Task } from "../components/task";
import shortid from "shortid";
import { MyForm } from "../components/new-element";

// Box wraps CSS components
// VStack arranges elemenst in a vertical line
// Flex defines how items fill space (fraction wise)
const MainScreen = (props) => {
  const refScrollView = useRef(null);
  const [update, setUpdate] = useState("");
  /*const initialData = [
    {
      id: shortid.generate(),
      subject: "Buy movie tickets for Friday",
      done: false,
    },
  ];*/
  const [data, setData] = useState([]);
  console.log(data);

  //console.log("soy el main", data[0].subject);

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "indigo.50" }}
      px={10}
      flex={2}
    >
      <VStack space={2} alignItems="center">
        <MyForm data={data} setData={setData} />
        <Language_Button setUpdate={setUpdate} />
        <ThemeToggle />
        <Task text={data.subject} key={data.id} />
      </VStack>
    </Center>
  );
};
export default MainScreen;

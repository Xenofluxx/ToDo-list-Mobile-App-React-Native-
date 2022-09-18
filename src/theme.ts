import { extendTheme } from "native-base";
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
const colors = {
  primary: {
    50: "#674653",
    100: "#108ab4",
    200: "#66cd8d",
    300: "#de9a4c",
    400: "#0a6dd9",
    500: "#bfc352",
    600: "#0a8b51",
    700: "#794e62",
    800: "#41a191",
    900: "#9d0e43",
  },
};
export default extendTheme({ config, colors });

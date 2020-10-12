import { theme } from "@chakra-ui/core";

// add custom colors
export default (customTheme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a202c",
      800: "#ecc94b",
      700: "#ffffff",
    },
  },
});

import { HStack, Text } from "@chakra-ui/react";
import HeaderMenu from "./menu/HeaderMenu";

const Header = ({ ...props }) => {
  return (
    <HStack
      width={"100%"}
      paddingX={24}
      paddingY={6}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"brand.font"}
      {...props}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Logo
      </Text>
      <HeaderMenu />
    </HStack>
  );
};

export default Header;

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const HeaderMenu = () => {
  return (
    <Menu>
      <MenuButton
        color={"white"}
        bg={"brand.primary"}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        _hover={{ bg: "brand.hover" }}
        _active={{ bg: "brand.hover" }}
      >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;

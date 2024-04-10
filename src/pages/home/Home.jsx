import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";

const Home = () => {
  return (
    <Box bg={"brand.bg"} width={"100vw"} minHeight={"100vh"}>
      <Header mb={"10vh"} />
      <Box className="hero">
        <HStack
          width={"100%"}
          gap={16}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          paddingX={36}
          paddingY={16}
        >
          <VStack
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            maxW={"40vw"}
            height={"100%"}
            py={16}
            color={"brand.font"}
            gap={2}
          >
            <Text fontWeight={"bold"} fontSize={48}>
              Análise geográfica de empresas
            </Text>
            <Text fontWeight={"light"} fontSize={24} mb={8}>
              A poucos passos de seus novos clientes
            </Text>
            <AutoComplete openOnFocus>
              {({ isOpen }) => (
                <>
                  <InputGroup>
                    <AutoCompleteInput
                      variant="filled"
                      bg={"white"}
                      placeholder="CNAE"
                      border="2px solid"
                      borderColor={"brand.font"}
                    />
                    <InputLeftElement>
                      <Icon as={isOpen ? FiChevronRight : FiChevronDown} />
                    </InputLeftElement>
                    <Button p={0}>
                      <InputRightAddon
                        border="1px solid"
                        borderColor={"brand.font"}
                        color={"white"}
                        fontWeight={"bold"}
                        bg={"brand.primary"}
                        _hover={{ bg: "brand.hover" }}
                      >
                        <SearchIcon />
                      </InputRightAddon>
                    </Button>
                  </InputGroup>
                  <AutoCompleteList>
                    <AutoCompleteItem value={"item 1"}>Item 1</AutoCompleteItem>
                    <AutoCompleteItem value={"item 2"}>Item 2</AutoCompleteItem>
                    <AutoCompleteItem value={"item 3"}>Item 3</AutoCompleteItem>
                  </AutoCompleteList>
                </>
              )}
            </AutoComplete>
            <Button
              variant={"solid"}
              color={"white"}
              bg="brand.primary"
              rightIcon={<FaFilter />}
              _hover={{ bg: "brand.hover" }}
              mt={2}
            >
              Mais Filtros
            </Button>
          </VStack>
          <Box boxSize="lg">
            <Image src="assets/images/map.svg" alt="MAP SVG" />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Home;

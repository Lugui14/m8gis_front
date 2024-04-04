import {
  Box,
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
                    <InputRightAddon
                      border="1px solid"
                      borderColor={"brand.font"}
                      color={"white"}
                      fontWeight={"bold"}
                      bg={"brand.primary"}
                    >
                      <SearchIcon />
                    </InputRightAddon>
                  </InputGroup>
                  <AutoCompleteList>
                    <AutoCompleteItem value={"item 1"}>Item 1</AutoCompleteItem>
                    <AutoCompleteItem value={"item 2"}>Item 2</AutoCompleteItem>
                    <AutoCompleteItem value={"item 3"}>Item 3</AutoCompleteItem>
                  </AutoCompleteList>
                </>
              )}
            </AutoComplete>
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

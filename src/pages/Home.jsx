import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Button bgColor="brand.primary" onClick={() => setCounter(counter + 1)}>
        {" "}
        Count: {counter}{" "}
      </Button>
    </>
  );
};

export default Home;

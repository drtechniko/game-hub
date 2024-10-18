import { Box } from "@chakra-ui/react";
import React from "react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

const GameCardContainer: React.FC<GameCardContainerProps> = ({
  children,
}: GameCardContainerProps) => {
  return (
    <Box width={"300px"} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;

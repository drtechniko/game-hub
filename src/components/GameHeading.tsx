import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games
  const heading = `${gameQuery.platform?.name || ""}${
    gameQuery.genre ? " " + gameQuery.genre.name : ""
  } Games`;

  return (
    <Heading marginBottom={2} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;

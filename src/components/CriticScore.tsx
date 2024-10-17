import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticScoreProps {
  score: number;
}

const CriticScore: React.FC<CriticScoreProps> = ({ score }) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

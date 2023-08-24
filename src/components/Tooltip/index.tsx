import { ReactNode, useState } from "react";
import {
  TooltipBox,
  TooltipCard,
  TooltipContainer,
  TooltipImage,
} from "./styles";
import Vector from "../../assets/Vector.png";

interface TooltipProps {
  children?: ReactNode;
  text?: string;
}

export function TooltipComponent({ text, children }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <TooltipCard>
          <TooltipBox>{text}</TooltipBox>
          <TooltipImage src={Vector} alt="seta apontando a data" />
        </TooltipCard>
      )}
    </TooltipContainer>
  );
}

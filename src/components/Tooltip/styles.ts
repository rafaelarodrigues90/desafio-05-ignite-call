import { styled } from "@ignite-ui/react";
import Image from "next/image";

export const TooltipBox = styled("div", {
  backgroundColor: "$gray900",
  color: "$gray100",
  width: "230px",
  textAlign: "center",
  lineHeight: "44px",
  borderRadius: "5px",
  cursor: "pointer",
});

export const TooltipCard = styled("div", {
  width: "150px",
  position: "absolute",
  zIndex: 1000,
  bottom: "100%",
  marginBottom: "-30px",
  marginLeft: "-75px",
});

export const TooltipContainer = styled("div", {
  position: "relative",
  "&:hover > $TooltipBox": {
    color: "$grey100",
    width: "230px",
    borderRadius: "4px",
  },
});

export const TooltipImage = styled(Image, {
  marginBottom: "7px",
  marginLeft: "100px",
});

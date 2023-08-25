import {styled} from '@ignite-ui/react';
import { X } from 'phosphor-react';

export const Container = styled("div",{
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: "9999",
})

export const Toast = styled("div",{
  width: "360px",
  height: "82px",
  position: "relative",
  padding: "12px 20px 12px 20px",
  borderRadius: "6px",
  border: "1px solid",
  borderColor: "$gray600",
  backgroundColor: "$gray800",
  display: "flex",
  flexDirection: "column",

  [`& > button`]: {
    position: "absolute",
    top: "12px",
    right: "12px",
    width: "20px",
    height: "20px",
    border: "none",
    background: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "$gray200",
  },
})

export const Title = styled("div", {
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "32px",
  textAlign: "left",
  color: "$white",
  fontFamily: "Roboto"
})

export const Message = styled("div", {
  fontFamily: "Roboto",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22px",
  textAlign: "left",
})

export const CloseButtonIcon = styled(X, {
  width: "100%",
  height: "100%",
});
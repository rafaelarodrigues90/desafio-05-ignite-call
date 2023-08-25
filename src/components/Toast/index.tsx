import { Text, Button } from "@ignite-ui/react";
import React, { useEffect } from "react";
import { CloseButtonIcon, Toast, Message, Title, Container } from "./styles";

interface ToastProps {
  title: string;
  message: string;
  onClose: () => void;
}

export function ToastComponent({ title, message, onClose }: ToastProps) {
  return (
    <Container>
      <Toast>
        <button onClick={onClose}>
          <CloseButtonIcon />
        </button>
        <Title>
          <Text size="lg">{title}</Text>
        </Title>
        <Message>
          <Text size="sm">{message}</Text>
        </Message>
      </Toast>
    </Container>
  );
}

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToastComponent } from "../components/Toast";

const meta = {
  title: "Components/Toast",
  component: ToastComponent,
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    onClose: { action: "onClose" },
  },
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toast: Story = {
  args: {
    title: "Toast title",
    message: "Toast message",
  },
};

import React from "react";
import { TooltipComponent, TooltipProps } from "../components/Tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

const meta = {
  title: "Components/Tooltip",
  component: TooltipComponent,
  argTypes: {
    text: { action: "text" },
  },
  args: {
    text: `${dayjs(new Date()).format("DD [de] MMMM")} - disponível`,
  },
} satisfies Meta<typeof TooltipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tooltip: Story = (args: TooltipProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <TooltipComponent text={args.text}>
      <div
        style={{
          width: "150px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          borderRadius: "5px",
          fontFamily: "sans-serif",
          backgroundColor: "gray",
        }}
      >
        <span>Hover over me</span>
      </div>
    </TooltipComponent>
  </div>
);

Tooltip.args = {
  children: <div></div>,
};

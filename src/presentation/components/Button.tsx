import React from "react";
import { Button as ShadButton } from "@/presentation/components/ui";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <ShadButton>{text}</ShadButton>;
};

export default Button;

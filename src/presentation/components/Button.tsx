import React from "react";
import { Button as ShadButton } from "@/presentation/components/ui";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <ShadButton
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {text}
    </ShadButton>
  );
};

export default Button;

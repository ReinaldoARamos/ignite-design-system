import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";
import { Pointer } from "lucide-react";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite300",

        "&:not(:disabled):hover": {
          backgroundcolor: "$ignite500",
        },

        "&:disabled": {
          background: "$gray200",
        },
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not(:disabled):hover": {
          backgroundcolor: "$ignite500",
          color: "#FFFFFF",
        },

        "&:disabled": {
          color: "$gray200",
          background: "$gray200",
        },
      },
      tertiary: {
        color: "$white",

        "&:not(:disabled):hover": {
          backgroundcolor: "$gray600",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },

        "&:focus": {
          boxShadow: '0 0 0 2px $colors$gray100'
        },
      },
    },
    size: {
      sm: {
        padding: "0 $4",
        height: 38,
      },
      md: {
        padding: "0 $4",
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

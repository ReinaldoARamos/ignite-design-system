import { ComponentProps, ElementType } from "react";
import { TooltipContainer } from "./style";

export interface ToolTipProps
  extends ComponentProps<typeof TooltipContainer> {
  as?: ElementType;
}

export function ToolTip() {
  return 
  <TooltipContainer>

  </TooltipContainer>
}

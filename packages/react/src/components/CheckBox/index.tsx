
import { Check } from "lucide-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./style";
import { ComponentProps } from "react";
import { Checks } from "phosphor-react";


export interface CheckBoxContainerPros extends ComponentProps<typeof CheckBoxContainer> {}
export function CheckBox(props : CheckBoxContainerPros) {
    return <CheckBoxContainer {...props} >
        <CheckBoxIndicator  asChild>
            <Checks weight="bold" />
        </CheckBoxIndicator>
    </CheckBoxContainer>
}
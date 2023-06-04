import { ComponentProps } from "react";
import {  Label, MultiStepContainer, Steps } from "./style";


export interface MultiStepContainerProps {
    size: number,
    currentStep?: number
}
export function MultiStep({size, currentStep} : MultiStepContainerProps) {
    return(
        <MultiStepContainer>
                <Label>Passo {currentStep} de {size} </Label>
                <Steps css={{'--steps-size' : size}}>
                    {Array.from({length : size}, (_, i) => i + 1)}
                </Steps>
        </MultiStepContainer>
    )
}
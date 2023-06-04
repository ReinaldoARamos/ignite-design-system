import { ComponentProps } from "react";
import {  Label, MultiStepContainer, Steps, Step } from "./style";


export interface MultiStepContainerProps {
    size: number,
    currentStep?: number
}
export function MultiStep({size, currentStep = 1} : MultiStepContainerProps) {
    return(
        <MultiStepContainer>
                <Label>Passo {currentStep} de {size} </Label>
                <Steps css={{'--steps-size' : size}}>
                    {Array.from({length : size}, (_, i) => i + 1).map(step => {
                        return <Step key={step} active={currentStep >= step}/>
                    })}
                </Steps>
        </MultiStepContainer>
    )
}
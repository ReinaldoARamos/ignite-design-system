import { ComponentProps, ElementRef, forwardRef } from "react";
import { TextInputContainer, Prefix, Input } from "./style";

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string;
} 


export const TextInput = forwardRef<ElementRef<typeof Input>, 

TextInputProps>( ({prefix, ...props} : TextInputProps, ref) =>
 {
    return (
        <TextInputContainer >
            {!!prefix &&  <Prefix>{prefix}</Prefix>}

            <Input ref={ref} {...props} />
        </TextInputContainer>
    )
})
import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const TextArea = styled('div', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'baseline',

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: 'regular',
    resize: 'vertical',
    minHeight: 80,
 
    '&:focus': {
        outline: 0,
        borderColor: '$ignite300'

    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed'
        

    },

    '&:placeholder': {
        color: "$gray100"
    }
})


export interface TextAreaProps extends ComponentProps<typeof TextArea> {} 
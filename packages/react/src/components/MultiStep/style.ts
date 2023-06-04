import { styled } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled('div', {

})

export const Label = styled(Text, {
    color: '$gray200',
    fontSize: '$xs',

    defaultVariants: {
        size: 'xs'
    }
})

export const Steps = styled('div', {
    display: 'grid',
    gap: '$2',
    marginTop:  "$1",
    gridTemplateColumns: 'repeat(var(--steps-size)), 1fr',
})
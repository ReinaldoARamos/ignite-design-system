import { styled } from "../../styles";
import * as CheckBox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled(CheckBox.Root, {
width: 22,
height: 22,
backgroundColor: '$gray900',
borderRadius: '$xs',
lineHeight: 0,

cursor: 'pointer',
overflow: 'hidden',
boxSizing: 'border-box',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
border: '1px solid $gray900',

'&:focus': {
    border: '1px solid $ignite300'

},

'&[data-state="checked"]': {
backgroundColor: '$ignite300'
}
})


export const CheckBoxIndicator = styled(CheckBox.Indicator, {
    color: '$white',
    width: '100%',
    height: 16
    
})
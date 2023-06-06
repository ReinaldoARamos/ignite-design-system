import { styled } from "../../styles";
import * as Avatar from '@radix-ui/react-avatar' 
export const AvatarContainer = styled(Avatar.Root, {
borderRadius: "$full",
display: 'inline-block',
width: '$16',
height:  '$16',
overflow: 'hidden',



})

export const AvatarImages = styled(Avatar.Image, {
    width: '100%',
    objectFit: 'cover',
    height: '100%',
    borderRadius: "$full",

})

export const AvatarFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray600',
    color: '$gray800',

    svg: {
        width: '$12',
        height: '$12',
    }
} )
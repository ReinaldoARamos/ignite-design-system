import { User } from "lucide-react";
import { AvatarContainer, AvatarFallback, AvatarImages } from "./styles";
import { ComponentProps } from "react";


export interface AvatarProps extends ComponentProps<typeof AvatarImages> {

}
export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer >
            <AvatarImages {...props} />
        <AvatarFallback  delayMs={600}>
            <User />
        </AvatarFallback>
        </AvatarContainer>
    )
}
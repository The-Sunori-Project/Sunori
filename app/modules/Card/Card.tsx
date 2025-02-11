import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
interface CardProps {
    Title?: string;
    Img?: string;
    Target?: string;
    Url?: string;
    Owner?: boolean;
    Diamond?: boolean;
    Gold?: boolean;
}
const Card: FC<CardProps> = ({ Img, Title, Url, Target, Owner, Diamond, Gold }) => {
    return(
        <Link target={props.Target} className={props.Owner ? 'owner' : props.Diamond ? 'diamond' : props.Gold ? 'gold' : 'card'} href={props.Url}>
            <Image alt={props.title + " Image"} className={props.Owner ? 'ownerImg' : props.Diamond ? 'diamondImg' : props.Gold ? 'goldImg' : 'cardImg'} src={"/img/" + props.Img} />
            <p className={props.Owner ? 'ownerTitle' : props.Diamond ? 'diamondTitle' : props.Gold ? 'goldTitle' : 'cardTitle'}>{props.Title}</p>
        </Link>
    );
}
export default Card;

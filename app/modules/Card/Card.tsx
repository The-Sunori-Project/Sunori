import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
type CardProps = {
    Title: string;
    Img: string;
    Target: string;
    Url: string;
    Owner: boolean;
    Diamond: boolean;
    Gold: boolean;
}
const Card: FC<CardProps> = ({ Img, Title, Url, Target, Owner, Diamond, Gold }) => {
    return(
        <Link target={Target} className={Owner ? 'owner' : Diamond ? 'diamond' : Gold ? 'gold' : 'card'} href={Url}>
            <Image alt={Title + " Image"} className={Owner ? 'ownerImg' : Diamond ? 'diamondImg' : Gold ? 'goldImg' : 'cardImg'} src={"/img/" + Img} />
            <p className={Owner ? 'ownerTitle' : Diamond ? 'diamondTitle' : Gold ? 'goldTitle' : 'cardTitle'}>{Title}</p>
        </Link>
    );
}
export default Card;

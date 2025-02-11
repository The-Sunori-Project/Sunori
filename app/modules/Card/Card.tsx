import Link from 'next/link'
import Image from 'next/image'
export default function Card: React.FC<MyComponentProps> = ({ Title, Img, Target, Url, Owner, Diamond, Gold }) => {
    return(
        <Link target={props.Target} className={props.Owner ? 'owner' : props.Diamond ? 'diamond' : props.Gold ? 'gold' : 'card'} href={props.Url}>
            <Image className={props.Owner ? 'ownerImg' : props.Diamond ? 'diamondImg' : props.Gold ? 'goldImg' : 'cardImg'} src={"/img/" + props.Img} />
            <p className={props.Owner ? 'ownerTitle' : props.Diamond ? 'diamondTitle' : props.Gold ? 'goldTitle' : 'cardTitle'}>{props.Title}</p>
        </Link>
    );
}

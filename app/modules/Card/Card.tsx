export default function Card(props: any){
    return(
        <a target={props.Target} className={props.Owner ? 'owner' : props.Diamond ? 'diamond' : props.Gold ? 'gold' : 'card'} href={props.Url}>
            <img className={props.Owner ? 'ownerImg' : props.Diamond ? 'diamondImg' : props.Gold ? 'goldImg' : 'cardImg'} src={"/img/" + props.Img} />
            <p className={props.Owner ? 'ownerTitle' : props.Diamond ? 'diamondTitle' : props.Gold ? 'goldTitle' : 'cardTitle'}>{props.Title}</p>
        </a>
    );
}

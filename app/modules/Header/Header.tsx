import Link from 'next/link';
export default function Header(){
    return(
        <header>
            <img id="favicon" src="./favicon.ico" width="48px"/>
            <h1 id="title">Sunori</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/games">Games</Link></li>
                    <li><Link href="github.com/the-sunori-project/Sunori_NextJS">Github</Link></li>
                    <li><Link href="https://docs.sunori.org">Docs</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}
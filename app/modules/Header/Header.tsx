import Link from 'next/link';
export default function Header(){
    return(
        <header>
            <a href="/">
            <img id="favicon" src="./favicon.ico" width="48px"/>
            <h1 id="title">Sunori</h1>
            </a>
            <nav>
                <ul>
                    <li><Link href="/games">Games</Link></li>
                    <li><Link href="https://github.com/The-Sunori-Project/Sunori">Github</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

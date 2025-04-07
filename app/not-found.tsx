import Link from 'next/link'
export default function NotFound() {
    return (
        <div>
            <div id="ErrPage">
                <h1 id="Err404">Error 404 - Page Not Found - Click to go to home</h1><br />
                <Link href="/">
                    <h1 id="Err404">Return Home</h1>
                </Link>
            </div>
        </div>
    );
  }
import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
}

const Header = () => (
    <header className="site-header">
        <div className="logo">
            <h1><Link href="/"><a>Logo</a></Link></h1>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a title="Home page">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a title="About us">About us</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
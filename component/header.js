import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
}

const Header = () => (
    <header className="site-header">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 logo">
                    <h1><Link href="/"><a>Logo</a></Link></h1>
                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a style={linkStyle} title="Home page">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a title="About us">About us</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>        
    </header>
);

export default Header;
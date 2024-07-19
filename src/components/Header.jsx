
// components/Header.js
import Link from "next/link";
const Header = () => {
  return (
<header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

        <div className="logo">
            <Link href="/"><img src="assets/img/logo.png" alt="" className="img-fluid"/></Link>
        </div>

        <nav id="navbar" className="navbar">
            <ul>
                <li><Link className="nav-link scrollto active" href="#hero">Home</Link></li>
                <li><Link className="nav-link scrollto" href="#about">About</Link></li>
                <li><Link className="nav-link scrollto" href="#services">Services</Link></li>
                <li><Link className="nav-link scrollto" href="#team">Team</Link></li>
                <li><Link className="nav-link scrollto" href="#sustainability">Sustainability</Link></li>
                {/* <!-- <li><Link> className="nav-link scrollto" href="#">Blog</Link></li> --> */}
                <li><Link className="nav-link scrollto" href="#contact">Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    </div>
</header>
  );
};

export default Header;

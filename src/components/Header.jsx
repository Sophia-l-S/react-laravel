export default function Header() {
    return (
    <header id="header">
        <h2 id="site-name"><a href="/">Sophia's Portfolio</a>
        </h2>
        <ul className="menu">
                <li>
                    <a  href="/">Home</a>
                </li>
                <li>
                    <a  href="/about">About</a>
                </li>
                <li>
                    <a  href="#Education">Education</a>
                </li>
                <li>
                    <a  href="#Projects">Projects</a>
                </li>
                <li>
                    <a  href="#Social">Socials</a>
                </li>
            </ul>
    </header>
   
    );
}
import { } from "react";
import Logo from "@c/Logo";
import Nav from '@c/Nav';
import "@s/Home.css";

const Home = () => {
    return (
        <>
            <div className="container">
                <header>
                    <div className="banner">
                        <Nav />
                    </div>
                </header>
                <footer>
                    <Logo />
                </footer>
            </div>
        </>
    )
};

export default Home;

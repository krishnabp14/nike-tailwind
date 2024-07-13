import { hamburger } from "../assets/icons/index.js";
import headerLogo from "../assets/images/header-logo.svg";
import {navLinks} from '../constants.js';

const NavBar = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between max-container items-center">
                <a href="#">
                    <img src={headerLogo} width="130px" height="30px"></img>
                </a>
                <ul className="flex flex-1 justify-center gap-28 items-center max-lg:hidden">
                    {
                        navLinks.map((navLink) => {
                            return (
                                <li>
                                    <a href={navLink.href} className="text-lg text-slate-gray leading-normal">
                                        {navLink.label}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} width="30px" height="30px">
                    </img>
                </div>
            </nav>
        </header>
    )
};

export default NavBar;
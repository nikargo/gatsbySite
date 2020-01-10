import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.css"

const ListLink = ({ to, children }) => (
    <li className={headerStyles.listlinkitem}>
        <Link 
            to={to}
        >
            <h4 className={headerStyles.linktext}>{children}</h4>
        </Link>
    </li>
)

const Header = () => (
    <header>
            <Link to="/" className={headerStyles.titlelink}>
                <h3 className={headerStyles.linktext}>On confusion...</h3>
            </Link>
            <ul className={headerStyles.headerlinklist}>
                <ListLink to="/blog">Blog</ListLink>
                <ListLink to="/about">About</ListLink>                
            </ul>
    </header>
);

export default Header;
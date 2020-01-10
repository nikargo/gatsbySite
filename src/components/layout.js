import React from "react"
import "../styles/global.css"
import layoutStyles from "../styles/layout.module.css"
import Header from "./header"

export default ({ children }) => (
    <div className={layoutStyles.layout}>        
        <Header/>
        {children}
    </div>
)
import TheNavBar from './TheNavBar'
import React, { ReactNode } from "react";

interface TheNavProps {
    onShowCart: () => void;
}

const TheNav :React.FC<TheNavProps> = (props) => {
    return(
        <header>
            <TheNavBar onShowCart={props.onShowCart} />
        </header>
    );
}

export default TheNav;
import React, {Fragment} from "react";

import styles from './add-screen.component.scss'

import { AddScreenNavbarComponent } from "../../components";

export default ({headerProps}) => 
    <Fragment>
        <AddScreenNavbarComponent headerProps={headerProps}/>
    </Fragment>;

import React, {Fragment} from "react";

import styles from './add-screen-navbar.component.scss'

export default ({headerProps}) => {
    const {items, onAddScreen} = headerProps;

    return (
        <aside className="left-sidebar">
            <p>Screens</p>
            <header>
                <button className="btn-blue" onClick={ev => onAddScreen('Screen 1')}>+ Add</button>
            </header>
            <section>
                {
                    items.map(
                        (item, key) => <div key={key}><p>{item}</p></div>
                    )
                }
            </section>
        </aside>
    );
}

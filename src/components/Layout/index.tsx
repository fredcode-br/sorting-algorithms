import styles from "./Layout.module.css"

import MainHeader from "../MainHeader"
import Aside from "../Aside"
import Content from "../Content"

const Layout = () => {
    return (
        <div 
            className="grid"
            style={{ 
                gridTemplateColumns: '300px auto',
                gridTemplateAreas: `'AS MH'
                                    'AS CT'`
            }}
        >
            <MainHeader />
            <Aside />
            <Content />
        </div>
    )
}

export default Layout
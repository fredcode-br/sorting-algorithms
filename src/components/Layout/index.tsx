import styles from "./Layout.module.css"

import MainHeader from "../MainHeader"
import Aside from "../Aside"
import Content from "../Content"

const Layout = () => {
    return (
        <div className={styles.grid}>
            <MainHeader />
            <Aside />
            <Content />
        </div>
    )
}

export default Layout
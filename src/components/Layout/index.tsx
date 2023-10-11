import MainHeader from "../MainHeader"
import Aside from "../Aside"
import Content from "../Content"

const Layout = () => {
    return (
        <div 
            className="grid grid-rows-phone md:grid-rows-default grid-cols-1 md:grid-cols-default grid-areas-phone md:grid-areas-default w-full h-full"
        >
            <MainHeader />
            <Aside />
            <Content />
        </div>
    )
}

export default Layout
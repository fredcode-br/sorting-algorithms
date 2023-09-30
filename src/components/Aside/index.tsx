import logo from './logo.svg'

const Aside = () => {
    return (
        <div className="px-6 py-8 text-center flex flex-col justify-between bg-dark-200  dark:bg-fredcode-200 text-white" style={{ gridArea: 'AS'}}>
            <h1>Algorithms</h1>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
    )
};

export default Aside
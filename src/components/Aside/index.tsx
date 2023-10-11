import Form from '../Form';
import logo from './logo.svg'

const Aside = () => {
    return (
        <div 
            className="grid-in-aside px-6 py-8 text-center flex flex-col items-center justify-between bg-dark-200 text-white h-full" 
        >
            <Form />
            <div className='hidden md:block'>
                <img src={logo} alt="" />
            </div>
        </div>
    )
};

export default Aside
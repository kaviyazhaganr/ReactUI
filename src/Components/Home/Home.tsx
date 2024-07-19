
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <div className='container '>
                <div className='d-menu'>
                    <div className='menu-1 in-dis' >
                        <div>
                            <h1 style={{fontSize:'20px',marginBlock:'15px'}}>Lyf-)</h1>
                        </div>
                        <div>
                            <p className='p-home'>/isurance@tiropay.au</p>
                        </div>
                    </div>
                    <div className='menu-2'>
                        <button className='btn-1'>Log In</button>
                        <button className='btn-2'>Get started</button>
                        <div style={{display:'inline'}}>
                        <FontAwesomeIcon icon={faBars} />
                        </div>
                        
                        
                       
                    </div>
                </div>
            </div>




        </>
    )
}

export default Home
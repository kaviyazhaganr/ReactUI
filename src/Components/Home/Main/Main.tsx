
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Main.css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <>
      <div className="container">

        <h1 className='title-1'>
          Life Planing,Making
        </h1>
        <h1 className='title-2'>
          Easy to Turn Dreans a Reality.
        </h1>
        <p className='para-1'>
          Get Exclusive offers on purchase of any plans
        </p>

        <div className='input-div'>
          <form action="" style={{ textAlign: 'center' }}>

            <div className='icon-rel'>
              <input className='input' type="text" placeholder=' Enter Your Email' />
              <button className='btn-1-1'>Sign up</button>

              <div className='icon-ab'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>

            </div>



          </form>
        </div>
      </div>

    </>
  )
}

export default Main
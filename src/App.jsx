import './App.css'
import icon from '/src/assets/icon.webp';

function App() {

  return (
    <>
      <div className='text-white'>
        <div className=' flex justify-between text-white w-full p-5'>
          <div className=' flex items-center'>
            <img  src={icon}></img>
            <div className="ml-4 text-5xl font-bold" >Texts</div>
          </div>
          <div className='items-center hidden sm:flex mr-4 gap-5'>
            <div>FAQ</div>
            <div>Support</div>
          </div>
        </div>
        <div className=' mt-64 flex flex-col text-center z-10 text-6xl sm:text-7xl font-semibold 2xl:text-8xl m-0"'>
          <div className=''>All of your <span className=' text-blue-600'>messages</span></div>
          <div> in one inbox</div>
        </div>
      </div>
    </>
  )
}

export default App

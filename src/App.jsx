import './App.css'

function App() {

  return (
    <>
      <div className=' flex justify-between text-white w-full p-5'>
        <div className=' flex items-center'>
          <img  src='./src/assets/icon.webp'></img>
          <div className="ml-4 text-5xl font-bold" >Texts</div>
        </div>
        <div className='items-center hidden sm:flex mr-4 gap-5'>
          <div>FAQ</div>
          <div>Support</div>
        </div>
      </div>
    </>
  )
}

export default App

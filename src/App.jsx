
import './App.css'
import LeftImageSection from './component/LeftImageSection'
import Loginform from './component/Loginform'

function App() {
  

  return (
    <>
  
    <div className='main-logo flex justify-start p-2'>
      
    <img className="h-24 mr-4" src="india-logo.png" alt="image description" />
    
    <img className="h-8 mt-6" src="nicmeet-logo.svg" alt="image description" />
    </div>
    <div id="content" className='grid sm:grid-cols-2'>
<LeftImageSection/>

    <div className='bg-white shadow-lg'>    

    <Loginform/>
    
</div>

    </div>

    </>
 
  )
}

export default App

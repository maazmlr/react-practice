import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import {Content} from './components/Content' 
import { data } from './components/data'

function App() {
  
  const element=data.map(ele => (<Content key={ele.googleMapsUrl} {...ele}
  title={ele.title}
  location={ele.location}
  mapsUrl={ele.googleMapsUrl}
  start={ele.startDate}
  end={ele.endDate}
  des={ele.description}
  img={ele.imageUrl}
  />))
  console.log()

  return (
      <div>
        <Navbar/>
        {element}
      </div>
  )
}

export default App

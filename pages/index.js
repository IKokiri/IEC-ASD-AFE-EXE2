import 'bootstrap/dist/css/bootstrap.css'
import Navi from './src/Components/Nav/Nav'
import Sobre from './src/Components/Sobre/Sobre'
import Body from './src/Components/Body/Body'

export default function Home() {
  return (
      <div  className="container">
        <Navi/>        
        <Sobre/>
        <Body/>
    </div>
  )
}

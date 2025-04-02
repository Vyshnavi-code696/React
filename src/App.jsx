
import Sidebar from "./components/sidebar"
import ColorSchemesExample from "./components/navbar"
import Hello from "./components/addsubtract"
import Add from "./components/plusminus"
function App() {
  

  return (
    <div>
    <ColorSchemesExample></ColorSchemesExample>
    <div className="d-flex">
    <Sidebar></Sidebar>
    <div className="ms-2">
    <Hello></Hello>
    <Add></Add>

    </div>
    
    
    </div>
    </div>
    
    
  )
}
  export default App;

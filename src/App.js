import "./App.css"
import Leftbar from "./pages/wysiwyg editor/leftbar/leftbar.js";
import Iframe from "./pages/wysiwyg editor/iframe/iframe.js"
import Props from "./pages/wysiwyg editor/prop_panel/properties.js"
import "./props.css"

//to this point
function App() {


  return (
    <div id="leftbar">
       <Leftbar />
       <Iframe/>
        <div id = "prop_panel"></div>
       
       
    </div>
    
  );
}

export default App;

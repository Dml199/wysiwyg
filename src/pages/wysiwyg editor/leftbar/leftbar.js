import {ReactComponent as Add_elem} from "./resources/Add.svg";
import {ReactComponent as Sections} from "./resources/Sections.svg";
import {ReactComponent as Applications} from "./resources/Applications.svg";
import {ReactComponent as Pages} from "./resources/Pages.svg";
import {ReactComponent as Themes} from "./resources/Custom themes.svg";
import {ReactComponent as Coloring} from "./resources/Site coloring.svg";
import Add_elem_panel from "./add_elem.js";
import "./leftbar.css";
import {useState} from "react";


export default function Leftbar (){


    const [state, setState_1] = useState(0);

const  togglePanel = () => {
setState_1(!state);
}

    return (
<div >
        <div id="leftbar_container">
            <ul id="leftbar_list">
                <li className="svg" onClick={()=>{togglePanel()}} ><Add_elem  /></li>
                <li className="svg"><Sections/></li>
                <li className="svg"><Applications/></li>
                <li className="svg"><Pages/></li>
                <li className="svg"><Themes/></li>
                <li className="svg"><Coloring/></li>
            </ul>
        </div>
        <div>
            <Add_elem_panel style={state} />
        </div>
        </div>
    )
}












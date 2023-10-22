
import "./add_container.css";
import {add_elem} from "./leftbar_functions/leftbar_functions.js"


export default function Add_elem_panel( {style} ) {
    


    return( <div id="add_container" className={style? "anim_panel" : "anim_panel1" } >
        <ul >
        
            <li onClick={()=>{add_elem("text")}}>Text</li>
            <hr className="separation" ></hr>
            <li onClick={()=>{add_elem("image")}}>Image</li>
            <hr className="separation"></hr>
            <li onClick={()=>{add_elem("video")}}>Video</li>
            <hr className="separation"></hr>
            <li onClick={()=>{add_elem("SVG")}}>SVG</li>
            <hr className="separation"></hr>
            <li onClick={add_elem("IFC")}>Container</li>


        </ul>
    </div>)
}
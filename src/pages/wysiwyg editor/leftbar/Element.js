import { state } from "../Classes/stateManager/state.js";
import { Style } from "../Classes/styleManager/styleManger.js";
import { FileManager } from "../Classes/fileManager/fileManager.js";
import { VAR } from "../Classes/CONSTANTS.js";
import { Elem_func_append,Elem_func_remove } from "../Classes/Element_func/Element_func.js";
import {createProps} from "../prop_panel/properties.js";

import "../Classes/Element_func/Element_func.css";

export default function Element(type) {

    console.log("element_function_running")

    const style= new Style();
    const fm = new FileManager();

    let element = function (elem, URL) {
      switch( elem ) 
      {
        case "video":{ const video = document.createElement("video");
                       const source = document.createElement("source");
                       video.controls = "controls";
                       video.style.height="100%"
                       video.style.width="100%"
                       source.src= URL;
                       video.appendChild(source);
                       return video
                       }
                       
        case "text": {
                       const text=document.createElement("p");
                       text.innerText="Hello";
                       return text;
        }
        case "image": {
                       const img=document.createElement("img");
                       img.src=URL;
                       img.style.minHeight="30px";
                       img.style.minWidth="30px";
                       return img;
                       }
                       
        case "SVG": {
                      const svg = document.createElement("svg");
                      svg.src=URL;
                      svg.style.minHeight="30px";
                      svg.style.minWidth="30px";
                     return svg
        }
        
        default: return alert("Wrong element name")
                  
      }

    
      
    };

    let container = function (elem) {
      console.log("container_func")
      const container = document.createElement("div");
      container.appendChild(elem);
      style.start_style(container);

      return container;
    };
  
    let createNode = function (el_type,url) {
      console.log("node_func")
      const elem = element(el_type, url);
      const contain = container(elem);
      contain.addEventListener("mousedown", (ev) => {
        state.setState(ev)
        createProps();
        if(!state.isResizing) {ev.preventDefault()}
        
        
        ev.currentTarget.focus()

       
        
        if(!state.isResizing)
        {document
          .getElementById("ifr")
          .contentWindow.document.addEventListener(
            "mousemove",

           style.changePos
          );}
      });

      contain.addEventListener("mouseup", (ev) => {

        document
          .getElementById("ifr")
          .contentWindow.document.removeEventListener(
            "mousemove",

            style.changePos
          );
      });

      contain.onfocus=( e ) =>{
          e.currentTarget.style.outline="none"
          style.focusStyle(e.currentTarget)
          let element_1= Elem_func_append(contain)
          state.setContainer(element_1)
          
      }
      contain.onblur = (e) =>{
        Elem_func_remove(state.container)
        style.blurStyle(e.currentTarget);
       state.lastElement.style.overflow="visible"
       state.isResizing=false;
      }
      return contain;
    };
   
    let appendChild= function (elem) {document.getElementById("ifr").contentWindow.document.body.appendChild(elem);}
  
    let init = async function () {

      switch (type){
        case "text":
          { 
            const node= createNode(VAR.types.TXT);
             appendChild(node)}
        break;
        case "video":{
            const url = await fm.getObjectsAsURL(fm.getParam().video);
            const node= createNode(VAR.types.VID,url)
            appendChild(node);
        }
        break;
        case "img":{
          const url = await fm.getObjectsAsURL(fm.getParam().image);
          const node= createNode(VAR.types.IMG,url)
         appendChild(node);
      }
      break;
      case "SVG":{
        const url = await fm.getObjectsAsURL(fm.getParam().image);
        const node= createNode(VAR.types.IMG,url)
        appendChild(node);
    }
    break;
        default:alert("Not specified default code")
          
       
     ;}
      

 
  }
  init();
  return(<div>

     


  </div>)

  
}









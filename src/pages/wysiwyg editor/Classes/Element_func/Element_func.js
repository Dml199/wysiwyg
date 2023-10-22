import resize from "../../resources/resize.svg"
import crop from "../../resources/crop.svg"
import editable from "../../resources/editable.svg"
import deleteComp from "../../resources/delete.svg"
import "./Element_func.css"
import "./Element_func.css";
import {state} from "../stateManager/state.js"




function Elem_func_append (container) {

const div_style="background-color:rgb(235, 229, 226); border-radius:30px; position:absolute ;top:-65px; z-index:11; box-shadow:1px 1px 5px rgb(116,114,114);";

const li_style="background-color: rgb(209, 205, 200);border-radius:20px;box-shadow:1px 2px 9px rgb(105, 104, 104);margin:10px;margin-top:-5px;margin-bottom:-5px;";

function createComponentResize () {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.style=li_style;
    img.src=resize;
    img.style="width:20px;height:20px;padding:5px;tabindex=0";
    li.appendChild(img);

    li.onclick= () => {

    state.isResizing=true;
    state.lastElement.style.width="fit-content";
    state.lastElement.style.resize="both";
    state.lastElement.style.overflow="hidden";
    state.lastElement.lastChild.style.width="100%"
    state.lastElement.lastChild.style.height="100%"
    
  }
    


    return li;
}
function createComponentCrop () {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.style=li_style;
    img.src=crop;
    img.style="width:20px;height:20px;padding:5px;"
    li.appendChild(img);
    return li;
}
function createEditable() {
    const li = document.createElement("li");
    const img = document.createElement("img");
    
    li.style=li_style;
    img.src=editable;
    img.onclick = (e) =>{
        state.lastElement.lastChild.contentEditable="true"
        state.lastElement.lastChild.focus()
        
    }

    
    state.lastElement.lastChild.onblur= () =>{
    console.log("blur")
    state.isDefault=false;
    state.lastElement.lastChild.contentEditable=false;

    }
     img.style="width:20px;height:20px;padding:5px;"
    li.appendChild(img);
    return li;
     
}
function  createListContainer ( elements) {
    const ul= document.createElement("ul");
    ul.style = " display:flex;flex-direction:row;list-style:none;transform:translateX(-19px) "
    elements.forEach ((element) =>{ ul.appendChild(element)})
    let div = document.createElement("div");
    div.style=div_style;
    div.appendChild(ul);

    return div;
}
function deleteComponent () {
    const li =document.createElement("li")
    const img= document.createElement("img");
    li.style=li_style;
    img.style="width:20px;height:20px;padding:5px;";
    img.src=deleteComp;
    li.appendChild(img);
    li.onclick= ( ) => {
        state.lastElement.remove()
    }
    return li
}

let div=null;

   switch(container.firstChild.nodeName)

   {
    case "IMG":
        const crop = createComponentCrop();
        const resize =createComponentResize();
        const delComp = deleteComponent();
        const box=createListContainer([crop,resize,delComp]);
        div=box;
   break;
   case "P":
         const ed = createEditable()
         const delComp_1=deleteComponent()
         const box_1= createListContainer([ed,delComp_1]);
         div=box_1;
   break;
    case "VIDEO":
        const resize_1=createComponentResize()
        const delComp_2=deleteComponent()
        const box_2=createListContainer([resize_1,delComp_2]);
        div=box_2;
   break;
   default: alert("Default message at elem_func str_60")
   }





container.prepend(div)
return div;
}


function Elem_func_remove (element) {

element.remove()

    }


    export {Elem_func_append,Elem_func_remove}
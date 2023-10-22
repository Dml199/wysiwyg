
import {state} from "../../wysiwyg editor/Classes/stateManager/state.js"
import "./prop.css";


export default function createProps ( )

{   
    
    const fonts = ["Arial", "Times New Roman", "Helvetica", "Georgia","System-ui" ]
    
    
    
    
    
    function removeComponent( element) {
    element.remove()
}

    function createColorPicker ( ) {
        const label= document.createElement("p");
        label.innerText="Select text color:"
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type="color";
        input.addEventListener("change", (ev)=>{state.lastElement.lastChild.style.color=ev.currentTarget.value})
        li.appendChild(label);
        li.appendChild(input);
        return li;
    }

    function createFontChange ( )  {
        const br = document.createElement("br");
        const descr= document.createElement("p");
        descr.innerText="Select option to change fonts";
       const select = document.createElement("select");
       select.onchange= ( ev ) =>{state.lastElement.lastChild.style.fontFamily=ev.currentTarget.value}
       fonts.forEach((font)=>{
        const option = document.createElement("option");
        option.value=font;
        option.innerText=font;
        select.appendChild(option)})
        const div = document.createElement("div");
        div.appendChild(select);
        div.appendChild(descr);
        return div
       
    }
    function createFontSizeChange () {
        const input = document.createElement("input");
        const text = document.createElement("p");
        text.innerText="Type in font size:";
        text.style="font-size:14px; color:#636363"
        input.onchange= (ev) =>{state.lastElement.lastChild.style.fontSize=ev.currentTarget.value};
        input.onfocus = (ev) => {ev.currentTarget.style.outline="none";
                                 ev.currentTarget.style.backgroundColor="#a3a3a3" }
        input.onblur= (ev) => {ev.currentTarget.style="background-color:grey;border-radius:5px;border:#636363 2px solid"}
        input.style="background-color:grey;border-radius:5px;border:#636363 2px solid"
        const div = document.createElement("div");
       
        const br = document.createElement("br")
        const br_2 = document.createElement("br")
        const br_Style="height:3px; width:4px; margin:10px;padding:5px; backround-color:black;"
        br.style=br_Style;

        br_2.style=br_Style;
        div.appendChild(br);
        
        div.appendChild(text);
        div.appendChild(input);
        div.appendChild(br_2);
        div.style="background-color:#a89d9d; text-align:center;margin-top:15px;padding:15px;"
                   
                   
        document.getElementById("prop_panel").appendChild(div)
    }
        createFontSizeChange()
}

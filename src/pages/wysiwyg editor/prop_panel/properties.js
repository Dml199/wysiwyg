import { state } from "../../wysiwyg editor/Classes/stateManager/state.js";
import "./prop.css";

function createProps() {


  const fonts = [
    "Arial",
    "Times New Roman",
    "Helvetica",
    "Georgia",
    "System-ui",
  ];
  const br_Style =
    "height:3px; width:4px; margin:10px;padding:5px; backround-color:black;";
  const inp_style =
    "background-color:grey;border-radius:5px;border:#636363 2px solid";
  const text_style = "font-size:14px; color:#636363";
  const div_style =
    "background-color:#a89d9d; text-align:center;margin-top:15px;padding:15px";

  function removeComponent(element) {

       if (state.container_div_props===null) {return }
       else{ element.remove();}
     
    
  }

  function defineDiv() {
    switch (state.lastElement.lastChild.nodeName) {
      case "P":
        const div = document.createElement("div");
        const el_1 = createColorPicker();
        const el_2 = createBackgorundColorChange();
        const el_3 = createFontChange();
        const el_4 = createFontSizeChange();
        div.appendChild(el_1);
        div.appendChild(el_2);
        div.appendChild(el_3);
        div.appendChild(el_4);
        state.container_div_props = document.getElementById("prop_panel").appendChild(div);
    }
  }

  function createColorPicker() {
    const label = document.createElement("p");
    label.innerText = "Select text color:";
    label.style = text_style;
    const li = document.createElement("li");
    
    const input = document.createElement("input");
    input.style = inp_style;
    input.type = "color";
    input.addEventListener("change", (ev) => {
      state.lastElement.lastChild.style.color = ev.currentTarget.value;
    });
    li.appendChild(label);
    li.appendChild(input);
    li.style = div_style;
    li.style.listStyle = "none";
    return li;
  }

  function createFontChange() {
    const br = document.createElement("br");
    const descr = document.createElement("p");
    descr.innerText = "Select option to change fonts";
    const select = document.createElement("select");
    select.style = inp_style;
    descr.style = text_style;
    select.onchange = (ev) => {
      state.lastElement.lastChild.style.fontFamily = ev.currentTarget.value;
    };
    fonts.forEach((font) => {
      const option = document.createElement("option");
      option.value = font;
      option.innerText = font;
      select.appendChild(option);
    });
    const div = document.createElement("div");
    div.style = div_style;
    div.appendChild(descr);
    div.appendChild(select);

    return div;
  }
  function createFontSizeChange() {
    const input = document.createElement("input");
    const text = document.createElement("p");
    text.innerText = "Type in font size:";
    text.style = "font-size:14px; color:#636363";
    input.onchange = (ev) => {
      state.lastElement.lastChild.style.fontSize = ev.currentTarget.value;
    };
    input.onfocus = (ev) => {
      ev.currentTarget.style.outline = "none";
      ev.currentTarget.style.backgroundColor = "#a3a3a3";
    };
    input.onblur = (ev) => {
      ev.currentTarget.style =
        "background-color:grey;border-radius:5px;border:#636363 2px solid";
    };
    input.style =
      "background-color:grey;border-radius:5px;border:#636363 2px solid";
    const div = document.createElement("div");

    const br = document.createElement("br");
    const br_2 = document.createElement("br");

    br.style = br_Style;

    br_2.style = br_Style;
    div.appendChild(br);

    div.appendChild(text);
    div.appendChild(input);
    div.appendChild(br_2);
    div.style =
      "background-color:#a89d9d; text-align:center;margin-top:15px;padding:15px;";

    return div;
  }
  function createBackgorundColorChange() {
    const input = document.createElement("input");
    const text = document.createElement("p");
    text.innerText = "Pick background color for the element.";
    const div = document.createElement("div");
    const br = document.createElement("br");
    const br_2 = document.createElement("br");
    input.type = "color";
    input.onchange = (ev) => {
      state.lastElement.lastChild.style.backgroundColor =
        ev.currentTarget.value;
    };
    br.style = br_Style;
    br_2.style = br_Style;
    div.style = div_style;
    text.style = text_style;
    input.style = inp_style;
    div.appendChild(br);
    div.appendChild(text);
    div.appendChild(input);
    div.appendChild(br_2);

    return div;
  }

  if (state.oldValue !== state.lastElement.lastChild) {
    removeComponent(state.container_div_props);
    defineDiv();
    state.oldValue = state.lastElement.lastChild;
  } else {
  }
  return state.container_div_props;
}

export { createProps };

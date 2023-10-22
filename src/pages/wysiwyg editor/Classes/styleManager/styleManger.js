import {state} from "../stateManager/state.js"






export class Style { 

   
  

   changePos (ev) {


      state.lastElement.style.top = ev.clientY - state.shiftY + "px";
      state.lastElement.style.left = ev.clientX - state.shiftX + "px";
    };

   start_style (element) {
element.tabIndex=0;
element.style.position="absolute";

element.style.top=window.innerHeight/3+ "px";
element.style.left=window.innerWidth/3 +"px";

}



        focusStyle (ev) {
         ev.style.zIndex=1000;
         ev.style.border="2px solid #028ec4"
         ev.style.padding= "0px"
         ev.style.backgroundColor="#30C5FF";
         ev.style.borderRadius="5px"
         ev.style.opacity="0.8"
        }

        blurStyle(ev ) {
        ev.style.border="none"
        ev.style.padding="2px"
        ev.style.backgroundColor="transparent"
        ev.style.opacity="1"
        ev.style.zIndex=0;}




        dragStart(ev) {
         ev.currentTarget.style.opacity="0.7";
         
        }

        dragEnd (ev) {
         ev.currentTarget.style.opacity="1";
        }
        
}











class State  {
    constructor (){
this.isActive=false;
this.lastElement= null;
this.shiftX=null;
this.shiftY=null;
this.isResizing=false;
this.props_div=null;
this.oldValue=null;
this.container_div_props=null;
}

    setContainer (container) {this.container= container;
}

    setState(ev) {
        

        this.lastElement=ev.currentTarget;

        this.shiftX=ev.clientX-this.lastElement.getBoundingClientRect().left;
        this.shiftY=ev.clientY-this.lastElement.getBoundingClientRect().top;

        }
    getState () {return this}

    
}

const state = new State();

export {state}
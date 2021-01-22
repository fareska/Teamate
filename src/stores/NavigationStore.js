const { makeObservable, observable, action, computed } = require("mobx")

class NavigationStore {
    constructor(page) {
        this.history = [page]
        this.floatingAction=true 
        makeObservable(this,{
            history:observable,
            floatingAction:observable, 
            redirect: action,
            previous:action,
            showFloating:action,
            hideFloating:action,
            currentPage:computed
        })
    }
    get currentPage(){ 
        const i = this.history.length - 1
        return this.history[this.history.length-1]
    }
    redirect= (page) => {
        this.history.push(page)
    }
    previous= ()=>{
        if(this.history.length>2){
            const i = this.history.length - 1
            this.history.splice(i,1)
        }
    }
    showFloating= ()=>{
        this.floatingAction = true
    }
    hideFloating= ()=>{
        this.floatingAction = false
    }
}
 export default NavigationStore
const { makeObservable, observable, action, computed } = require("mobx")

class NavigationStore {
    constructor(page) {
        this.history = [page]
        this.user_id=0
        this.EventMenu = false
        makeObservable(this,{
            history:observable, 
            EventMenu:observable, 
            user_id:observable,
            redirect: action,
            previous:action,
            showEventMenu:action,
            hideEventMenu:action,
            currentPage:computed,

        }) 
    }
    get currentPage(){ 
        const i = this.history.length - 1
        return this.history[this.history.length-1]
    }
    redirect= (page,user_id) => {
        this.history.push(page)
       
        this.user_id= user_id ? user_id : 0 
    }
    previous= ()=>{
        if(this.history.length>2){
            const i = this.history.length - 1
            this.history.splice(i,1)
        }
    }
    showEventMenu= ()=>{
        this.EventMenu = true
    }
    hideEventMenu= ()=>{
        this.EventMenu = false
    }
  
}
 export default NavigationStore
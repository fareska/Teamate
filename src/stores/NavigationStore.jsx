const { makeObservable, observable, action, computed } = require("mobx")

class NavigationStore {
    constructor(page) {
        this.history = [page]
        makeObservable(this,{
            history:observable,
            redirect: action,
            currentPage:computed
        })
    }
    get currentPage(){
        const i = this.history.length - 1
        return this.history[this.history.length-1]
    }
    redirect(page) {
        this.history.push(page)
    }
    previous(){
        if(this.history.length>2){
            const i = this.history.length - 1
            this.history.splice(i,1)
        }
    }
}
export default NavigationStore
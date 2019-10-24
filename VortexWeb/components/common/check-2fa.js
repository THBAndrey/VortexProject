import Vue from 'vue'
import TwofaCheck from './twofa-check'

export default {
    open: function({parentElement, animationDuration}){
        let parent = parentElement || document.body
        let anim = animationDuration || 500
        return new Promise((resolve, reject) => {
            let TwoFaWindow = Vue.extend(TwofaCheck)
            let instance = new TwoFaWindow({
                propsData: { 
                    animDuration: anim,
                    positiveResult: () => {
                        resolve()
                        setTimeout(() => {
                            instance.$destroy()
                            parent.removeChild(instance.$el)
                        }, anim)
                    }, 
                    negativeResult: () => {
                        reject()
                        setTimeout(() => {
                            instance.$destroy()
                            parent.removeChild(instance.$el)
                        }, anim)
                    } 
                }
            })
            instance.$mount()
            parent.appendChild(instance.$el)
        })
    }
}
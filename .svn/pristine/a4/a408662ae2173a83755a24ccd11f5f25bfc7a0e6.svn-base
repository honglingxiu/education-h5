import Vue from 'vue';
import Profile from "./success.vue";

const Success = Vue.extend(Profile);

let instance;

export default {
    /*open() {
        if (!instance) {
            instance = new Success({
                el: document.createElement('div')
            });
        }
        if (instance.visible) return;
        document.body.appendChild(instance.$el);

        Vue.nextTick(() => {
            instance.visible = true;
        });
    },*/
    open() {//用法：open('152','0123'),open(),open('012')
        if (!instance) {
            instance = new Success({
                el: document.createElement('div')
            });
        }
        if (instance.visible) return;
        document.body.appendChild(instance.$el);

        Vue.nextTick(() => {
            if(arguments.length>0){//根据传参，目前只支持两个手机号码
                if(arguments.length>1){//传两个手机号码
                    instance.phone1=arguments[0];
                    instance.phone2=arguments[1];
                }else {
                    instance.phone1=arguments[0];
                    instance.phoneFlag=false;
                }
            }
            instance.visible = true;
        });
    },
    close() {
        if (instance) {
            instance.visible = false;
        }
    }
};
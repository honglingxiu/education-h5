import Vue from 'vue';
import Profile from "./toast.vue";
const ToastConstructor = Vue.extend(Profile);
let toastPool = [],
	timer = "";

let getAnInstance = () => {
	if (toastPool.length > 0) {
		toastPool[0].visible = false;
		toastPool = []
	}
	return new ToastConstructor({
		el: document.createElement('div')
	});
};

let Toast = (options = {}) => {
	let instance = getAnInstance();
	toastPool.push(instance);
	clearTimeout(timer);
	let duration = options.duration || 2000;
	instance.text = typeof options === 'string' ? options : options.text;
	document.body.appendChild(instance.$el);
	Vue.nextTick(function() {
		instance.visible = true;
		timer = setTimeout(() => {
			instance.visible = false;
		}, duration);
	});
	return instance;
};

export default Toast;
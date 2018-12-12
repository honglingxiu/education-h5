import Vue from 'vue';
import Profile from "./message-box.vue";

const MessageBoxConstructor = Vue.extend(Profile);

let instance;

export default {
	alert(options = {}) {
		if (!instance) {
			instance = new MessageBoxConstructor({
				el: document.createElement('div')
			});
		}
		if (instance.visible) return;
		instance.message = typeof options === 'string' ? options : options.message || '';
		document.body.appendChild(instance.$el);

		Vue.nextTick(() => {
			instance.visible = true;
		});
	},

	close() {
		if (instance) {
			instance.visible = false;
		}
	}
};
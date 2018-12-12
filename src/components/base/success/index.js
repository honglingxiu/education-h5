import Vue from 'vue';
import Profile from "./success.vue";

const Success = Vue.extend(Profile);

let instance;

export default {
	open() {
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
	},

	close() {
		if (instance) {
			instance.visible = false;
		}
	}
};
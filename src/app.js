import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			todos: [
			{job: 'Buy Shopping', completed: true, priority: 'High'},
			{job: 'Clean Bathroom', completed: false, priority: 'Low'},
			{job: 'Car MOT', completed: false, priority: 'Low'}
			],
			newTodo: '',
			// newPriority: function (index)
      // this.todos[index].priority
		},
		methods: {
			saveNewTodo: function (e) {
				e.preventDefault();
				this.todos.push({
					job: this.newTodo,
					priority: this.newPriority,
					completed: false

				});
				this.newTodo = '';
			},
			completeJob: function (index) {
				this.todos[index].completed = true;
			}
		}
	});
});

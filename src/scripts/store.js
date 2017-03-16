import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data:{
		intellect: 0,
		strength: 0,
		health: 0,
		spirit: 0,
		value: 0
	},

	set: function(obj){
		this.data[obj] += 1
		this.data.value += 1
		this.data = Object.assign(this.data, this.data[obj], this.data.value)
		this.trigger('dataUpdated')
	}
})

export default STORE
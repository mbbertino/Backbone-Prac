var MainView = Backbone.View.extend({

	className: 'main-item',

	createTemplate: _.template($('#main-item-template').text()),

	events: {
		"click .js-close": "closeMainView",
	},

	initialize: function(){
			$('.js-main-list').html( this.el );
			this.render()
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	closeMainView: function(){
		this.remove()
	}
})
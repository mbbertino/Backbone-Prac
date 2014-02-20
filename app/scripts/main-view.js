var MainView = Backbone.View.extend({

	className: 'main-item',

	createTemplate: _.template($('#main-item-template').text()),

	events: {
		"click .js-close": "closeMainView",
		"click .js-edit-btn": "edit",
		// "dblclick .js-main-phone": "edit",
		// "dblclick .js-main-bio": "",

	},

	initialize: function(){
			$('.js-main-list').html( this.el );
			this.render()
			this.listenTo(this.model, 'change', this.render)
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	closeMainView: function(){
		this.remove()
	},

	edit: function() {
		new EditView({model: this.model})
	}
})
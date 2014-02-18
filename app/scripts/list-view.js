var ListView = Backbone.View.extend({

	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		"click .js-list-item-tainer": "toggleMainView"
	},

	initialize: function(){
		$('.js-contact-list').prepend( this.el )
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))

		// optionall two step 
			// var  renderedTemplate = createTemplate(this.model.attributes)
			// this.$el.html(renderedTemplate)
	},

	toggleMainView: function(){
		new MainView({model: this.model})
	}
})
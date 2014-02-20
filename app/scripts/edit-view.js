var EditView = Backbone.View.extend({

	className: 'main-item',

	createTemplate: _.template($('#edit-item-template').text()),

	events: {
		"click .js-close": "closeMainView",
		"click .js-save-btn": "save"
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
	},

	save: function(){
		var name = $(this.$el.find('.js-main-name-edit')).val();
		var phone = $(this.$el.find('.js-main-phone-edit')).val();
		var bio = $(this.$el.find('.js-main-bio-edit')).val();

		this.model.set({
			name: name,
			phone: phone,
			bio: bio
		});

		// var modelInstance = contacts.add(this.model);
		// modelInstance.save();

		new MainView({model: this.model})
	}
})
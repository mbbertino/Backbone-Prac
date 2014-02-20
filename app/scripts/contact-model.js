// a model shouldn't have to know about its siblings or anything about its collection
// or what view they are in
// Models shouldn't do something in the DOM
var Contact = Backbone.Model.extend({
	defaults: {
		name: 'Matt',
		phone: '561.543.7466',
		avatar: 'http://www.californiabeat.org/wordpress/wp-content/uploads/2010/01/hipster2.jpg',
		bio: 'Writing a personal bio can be a really fun way to put yourself out there, and there’s nothing like having a say in what people think about you. To write either a general bio or a bio for a college application, use the tips and sample text below.',
	},
});


 
var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'
});


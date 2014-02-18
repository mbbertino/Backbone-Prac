console.log('I am special');

$(document).ready(function(){

	// start the app
	window.contacts = new ContactsCollection( data );

	// simple version: takes the data from the contacts database 
	// passes through the contact variable and puts it in the model with all of their variables
	contacts.each(function(contact){
		new ListView({model: contact});
	});

});
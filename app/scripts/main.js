console.log('I am special');

$(document).ready(function(){

	// start the app
	window.contacts = new ContactsCollection();

	// simple version: takes the data from the contacts database 
	// passes through the contact variable and puts it in the model with all of their variables

		var listViewFunction = function() {
			contacts.fetch({
				success: function(){
					contacts.each(function(contact){
						new ListView({model: contact});
					});
				},
				error: function(){
					console.log('WHAT THE ERROR')
				}
			});
		}

		// listViewFunction()

		contacts.on('change', listViewFunction())


		$('.get-started').on('click','.js-submit-new-avatar-btn', function(){
			console.log('did this click?');

			var newperson = new Contact();

			if($('.js-name-input').val()) {newperson.set({name: $('.js-name-input').val()})};
			if($('.js-phone-input').val()) {newperson.set({phone: $('.js-phone-input').val()})};
			if($('.js-bio-input').val()) {newperson.set({bio: $('.js-bio-input').val()})}
			
			var modelInstance = contacts.add(newperson);
			new ListView({model: modelInstance});
			modelInstance.save()
		});

		$('.get-started').on('click','.js-delete-server', function(){
			console.log('hello I worked'),
			
			deleteFunction()

			$('.js-contact-list').html('')
			$('.js-main-list').html('')
		})

		window.deleteFunction = function(){
			contacts.each(function(dataStuff){
				console.log(dataStuff)
				$.ajax({
					type: 'delete',
					url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
				})
			})
		}


});
Vue.component( 'contactLine', {
	template : '<li>{{ name }} | {{ phoneNumber }} | {{ email }} |<button class="btn btn-sm btn-danger" v-on:click="removeContact( id )">X</button></li>',

	props : [ 'id', 'name', 'phoneNumber', 'removeContact', 'email' ]
});


var contactList = new Vue( {

	el : '#contactList',

	data : {
		newName : '',
		newPhoneNumber : '',
		newEmail: '',

		contacts : [
			{
				id : 1,
				name : 'Albus Dumbledore',
				phoneNumber : '859-123-4567',
				email: 'doombaldora@hogwartz.com'
			},
			{
				id : 2,
				name : 'Minerva McGonagall',
				phoneNumber : '606-234-9876',
				email: 'minerva.mcGonagall@gmail.com'
			},
			{
				id : 3,
				name : 'Severus Snape',
				phoneNumber : '502-444-1010',
				email:'snakesnapesnakesnap@slythern.com'
			},
		],
		nextContactId : 4
	},

	methods : {
		addContact : addContact,
		removeContact : removeContact,
		findContact : findContact,
	}

});

// function validatePhoneNumber() {
// 	var phoneRe = /^[0-9\-\+\s\(\)]*$/;

// 	var isValid = phoneRe.test( this.newPhoneNumber );

// 	console.log( 'validatePhoneNumber-isalid:', isValid );

// 	return isValid;
// }

function addContact() {

	this.contacts.push(
		{
			id : this.nextContactId++,
			name : this.newName,
			phoneNumber : this.newPhoneNumber,
			email : this.newEmail
		}
	);

	this.newName = '';
	this.newPhoneNumber = '';
	this.newEmail = '';
}



function removeContact( id ) {
	var contactIndex = this.findContact( id );
	this.contacts.splice( contactIndex, 1 );
}

function findContact( id ) {
	return this.contacts.findIndex( 
		function( contact ) { 
			return ( id === contact.id ); 
		} 
	);
}


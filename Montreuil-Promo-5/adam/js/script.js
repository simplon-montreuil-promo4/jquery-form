$(document).ready(function() {


    var validator = $('#registration-form').validate({
        rules: {

            username: {
                minlength: 5,
                required: true
            },

            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },

            email: {
                required: true,
                email: true
            },


        },
        highlight: function(element) {
				$(element).closest('.control-group').removeClass('error').addClass('success');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
    });


}); // end document.ready

var form = $('#profile_form');
var current_avatar = $('.preview_img').css('background-image');

jQuery.validator.addMethod('notEqual', function(value, element, params) {
	return  value != params;
});

$(document).ready(function(){
	form.validate({
		rules: {
			first_name: {
				required: true,
				minlength: 3
			},
			gender: {
				notEqual: 0
			},
			birth_date: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 8
			},
			addr1: {
				required: true
			},
			country: {
				notEqual: 0
			},
			zip: {
				required: true,
				digits: true
			},
			old_password: {
				required: true,
				minlength: 6
			},
			new_password: {
				required: true,
				minlength: 6,
				
			},
			confirm_new_password: {
				required: true,
				minlength: 6,
				equalTo: '#new_password',
			}
		},

		messages: {
			first_name: {
				required: 'Please enter your first name',
				minlength: jQuery.validator.format('Please enter at least {0} characters')
			},
			gender: {
				notEqual: 'Please select your gender'
			},
			birth_date: {
				required: 'Please choose your birth date'
			},
			email: {
				required: 'Please enter your email',
				email: 'Please enter a valid email'
			},
			phone: {
				required: 'Please enter your phone number',
				number: 'Please enter number only ( without "-" )',
				minlength: 'Please enter at least {0} number'
			},
			addr1: {
				required: 'Please enter your address'
			},
			country: {
				notEqual: 'Please select your country'
			},
			zip: {
				required: 'Please enter your zip',
				digits: 'Please enter number only'
			},
			old_password: {
				required: 'Please enter your current password',
				minlength: jQuery.validator.format('Please enter at least {0} characters')
			},
			new_password: {
				required: 'Please enter your new password',
				minlength: jQuery.validator.format('Please enter at least {0} characters')
			},
			confirm_new_password: {
				required: 'Please enter your new password again',
				minlength: jQuery.validator.format('Please enter at least {0} characters'),
				equalTo: 'Please enter the same new password again'
			}
		},

		errorPlacement: function(error, element) {
			if ($(element).closest('.input-group').find('.input-group-append').length > 0) {
				element.closest('.input-group').after(error);
			} else {
				element.after(error);
			}
		},

		invalidHandler: function(event, validator) {
			$('html,body').animate({scrollTop: $(this).closest('div.form_section').offset().top -50},'800');
		},

		submitHandler: function(form) {
			// form.submit();
			console.log('submitted');
		},
	})

	$('.update_btn').click(function(e){
		e.preventDefault();

		var section = $(this).closest('div.form_section');
		var fields = section.find(':input');

		if (fields.valid() == false) {
			$('html,body').animate({scrollTop: $(this).closest('div.form_section').offset().top -50},'800');
			return false;
		} else {
			console.log('submitted');
		}

		// $.ajax({
		// 	type: 'post',
		// 	url: '/',
		// 	success: function(response){
		// 
		// 	}
		// });
	});

	$('.cancel_btn').click(function(e){
		form[0].reset();
		form.validate().resetForm();
		
		if ($(this).closest('div.form_section').find('.avatar').length > 0) {
			$('.preview_img').css('background-image', current_avatar);
		}

		$('html,body').animate({scrollTop: $(this).closest('div.form_section').offset().top -50},'800');
	});

	// Upload Avatar
	$('#upload_img').change(function(){
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.preview_img').css('background-image', 'url(' + e.target.result + ')');
			}
			reader.readAsDataURL(this.files[0]);
		}
	});

	// Datepicker
	$('.datepicker').datepicker({
		format: 'dd/mm/yyyy',
		endDate: '0d',
		clearBtn: true
	});
});

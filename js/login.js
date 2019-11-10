$(document).ready(function(){
    $('.input_text').keyup(function(){
        if ($('#username').val().length == 0 || $('#password').val().length < 6) {
            $('#submit_login').attr('disabled', 'disabled');
        } else {
            $('#submit_login').attr('disabled', false);
        }

        if ($('#forget_password_username').val().length == 0) {
            $('#submit_forgot').attr('disabled', 'disabled');
        } else {
            $('#submit_forgot').attr('disabled', false);
        }
    });

    $('#forget_password').click(function(e){
        $('.login_login').addClass('d-none');
        $('.login_forgot').addClass('d-block');
        $('#username').val('');
        $('#password').val('');
        $('#submit_login').attr('disabled', 'disabled');
    });

    $('#cancel_forgot').click(function(e){
        $('.login_login').removeClass('d-none');
        $('.login_forgot').removeClass('d-block');
        $('#forget_password_username').val('');
        $('#submit_forgot').attr('disabled', 'disabled');
    });

    $('#submit_login').click(function(e){
        e.preventDefault();
        
        console.log('submitted');
//         $.ajax({
//             type: 'post',
//             url: '/',
//             success: function(response){
//
//             }
//         });
    });

    $('#submit_forgot').click(function(e){
        e.preventDefault();
        
        console.log('submitted');
//         $.ajax({
//             type: 'post',
//             url: '/',
//             success: function(response){
//
//             }
//         });
    });
});

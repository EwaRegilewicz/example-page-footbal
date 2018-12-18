// $.validator.setDefaults( {
//     submitHandler: function () {
//         alert( "submitted!" );
//     }
// } );


$( document ).ready( function () {
    $( "#signupForm" ).validate({
        rules: {
            firstname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                password_some: true,
                required: true,
                minlength: 8
            },
            email: {
                required: true,
                email: true
            },

        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },

        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

            console.log('add err');
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
            console.log('highlight');
        },
        unhighlight: function (element, errorClass, validClass) {

            console.log(element, errorClass, validClass);
            $(element).addClass("is-valid").removeClass("is-invalid");
            console.log('unhighlight');
        },
    });

    $.validator.addMethod ("password_some", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional( element ) || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test( value );
    }, 'Please enter a correct password.');

});

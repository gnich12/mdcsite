$(document).ready(function() {
    $('#env').on({
        click: function() {
            console.log('hello world')
        },
        mouseenter: function(event) {
            event.preventDefault();
            $('#email').removeClass('disable-icons')
            $('#email').addClass('active-mail')
            $('#mailcircle').addClass('has-text-grey')

        },
        mouseleave: function(event) {
            event.preventDefault();
            $('#email').addClass('disable-icons')
            $('#mailcircle').removeClass('has-text-grey')
        }
    })
    $('#phone').on({
        click: function() {
            console.log('hello world')
        },
        mouseenter: function(event) {
            event.preventDefault();
            $('#phonenum').removeClass('disable-icons')
            $('#phonenum').addClass('active-phone')
            $('#phonecircle').addClass('has-text-grey')

        },
        mouseleave: function() {
            $('#phonenum').addClass('disable-icons')
            $('#phonecircle').removeClass('has-text-grey')
        }
    })
})
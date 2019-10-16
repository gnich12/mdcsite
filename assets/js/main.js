$(document).ready(function() {
    $('#env').on({
        click: function() {
            event.preventDefault();
            if($('#phonenum').hasClass('active-mail')) {
                $('#phonenum').removeClass('active-mail').addClass('disable-icons')
                $('#mobi').removeClass('white').addClass('drk-blue')
                $('#phonecircle').removeClass('drk-blue').addClass('white')
                $('#email').removeClass('disable-icons').addClass('active-mail')
                $('#envicon').removeClass('drk-blue').addClass('white')
                $('#mailcircle').addClass('drk-blue')

            } else {
                $('#email').removeClass('disable-icons').addClass('active-mail')
                $('#envicon').removeClass('drk-blue').addClass('white')
                $('#mailcircle').addClass('drk-blue')
            }
            setTimeout(function(){
                $('#email')
                    .removeClass('active-mail')
                    .addClass('disable-icons')
                    .fadeOut('slow')
                    $('#envicon').removeClass('white').addClass('drk-blue')
                    $('#mailcircle').removeClass('drk-blue').addClass('white')
            }, 10000)
        },
        mouseenter: function(event) {
            event.preventDefault();
            if(!$('#email').hasClass('active-mail')) {    
                $('#envicon').removeClass('drk-blue').addClass('white')
                $('#mailcircle').addClass('drk-blue')
            }
        },
        mouseleave: function(event) {
            event.preventDefault();
            if(!$('#email').hasClass('active-mail')) { 
                $('#envicon').removeClass('white').addClass('drk-blue')
                $('#mailcircle').removeClass('drk-blue').addClass('white')
            }
        }
    })
    $('#phone').on({
        click: function() {
            event.preventDefault();
            if($('#email').hasClass('active-mail')) {
                $('#email').removeClass('active-mail').addClass('disable-icons')
                $('#phonenum').removeClass('disable-icons').addClass('active-mail')
                $('#mobi').removeClass('drk-blue').addClass('white')
                $('#envicon').removeClass('white').addClass('drk-blue')
                $('#mailcircle').removeClass('drk-blue').addClass('white')
                $('#phonecircle').addClass('drk-blue')
            } else {
                $('#phonenum').removeClass('disable-icons').addClass('active-mail')
                $('#mobi').removeClass('drk-blue').addClass('white')
                $('#phonecircle').addClass('drk-blue')
            }
            setTimeout(function(){
                $('#phonenum')
                    .removeClass('active-mail')
                    .addClass('disable-icons')
                    .fadeOut('slow')
                    $('#mobi').removeClass('white').addClass('drk-blue')
                    $('#phonecircle').removeClass('drk-blue').addClass('white')
            }, 10000)
        },
        mouseenter: function(event) {
            event.preventDefault();
            if(!$('#phonenum').hasClass('active-mail')) {    
                $('#mobi').removeClass('drk-blue')
                $('#mobi').addClass('white')
                $('#phonecircle').addClass('drk-blue')
            }

        },
        mouseleave: function() {
            event.preventDefault();
            if(!$('#phonenum').hasClass('active-mail')) {    
                $('#mobi').removeClass('white').addClass('drk-blue')
                $('#phonecircle').removeClass('drk-blue').addClass('white')
            }
        }
    })
    
})
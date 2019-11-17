$(document).ready(function() {
    $('#box1').on({
        click: function() {
            if(!$('#email').hasClass('active-mail')){
                $('#email').removeClass('disable-icons').addClass('active-mail')
                console.log(event.target)
            } else {
                $('#email').removeClass('active-mail').addClass('disable-icons')
                console.log(event.target)
            }
            
            // if($('#phonenum').hasClass('active-mail')) {
            //     $('#phonenum').removeClass('active-mail').addClass('disable-icons')
            //     $('#mobi').removeClass('white').addClass('drk-blue')
            //     $('#phonecircle').removeClass('drk-blue').addClass('white')
               

            //     $('#email').removeClass('disable-icons').addClass('active-mail')
            //     $('#envicon').removeClass('drk-blue').addClass('white')
            //     $('#mailcircle').addClass('drk-blue')
               

            // } else {
            //     $('#email').removeClass('disable-icons').addClass('active-mail')
            //     $('#envicon').removeClass('drk-blue').addClass('white')
            //     $('#mailcircle').addClass('drk-blue')
            //     $('#mailcircle').attr('class', 'fas fa-circle fa-stack-2x drk-blue')
            //     $('#envicon').attr('class', 'fas fa-envelope fa-stack-1x white')
            // }
            // setTimeout(function(){
            //     $('#email')
            //         .removeClass('active-mail')
            //         .addClass('disable-icons')
            //         .fadeOut('slow')
            //         // $('#envicon').removeClass('white').addClass('drk-blue')
            //         // $('#mailcircle').removeClass('drk-blue').addClass('white')
            //         $('#mailcircle').attr('class', 'fas fa-circle fa-stack-2x white')
            //         $('#envicon').attr('class', 'fas fa-envelope fa-stack-1x drk-blue')
            // }, 10000)
        },
        mouseenter: function(event) {
            event.preventDefault();
            if(!$('#email').hasClass('active-mail')) {    
                // $('#envicon').removeClass('drk-blue').addClass('white')
                // $('#mailcircle').addClass('drk-blue')
                $('#mailcircle').attr('class', 'fas fa-circle fa-stack-2x drk-blue')
                $('#envicon').attr('class', 'fas fa-envelope fa-stack-1x white')
            }
        },
        mouseleave: function(event) {
            event.preventDefault();
            if(!$('#email').hasClass('active-mail')) { 
                // $('#envicon').removeClass('white').addClass('drk-blue')
                // $('#mailcircle').removeClass('drk-blue').addClass('white')
                $('#mailcircle').attr('class', 'fas fa-circle fa-stack-2x white')
                $('#envicon').attr('class', 'fas fa-envelope fa-stack-1x drk-blue')
            }
        }
    })
    
    // $('#env').on('mouseover', function() {
    //         event.preventDefault();
    //         if(!$('#email').hasClass('active-mail')) {    
    //             // $('#envicon').removeClass('drk-blue').addClass('white')
    //             // $('#mailcircle').addClass('drk-blue')
    //             $('#mailcircle').attr('class', 'fas fa-circle fa-stack-2x drk-blue')
    //             $('#envicon').attr('class', 'fas fa-envelope fa-stack-1x white')
    //         }
    //     });
    // $('#env').on('mouseout', function(event) {
    //         event.preventDefault();
    //         if(!$('#email').hasClass('active-mail')) { 
    //             // $('#envicon').removeClass('white').addClass('drk-blue')
    //             // $('#mailcircle').removeClass('drk-blue').addClass('white')
    //             $('#mailcircle').attr('class', 'fas fa-circle fa-stack-2x white')
    //             $('#envicon').attr('class', 'fas fa-envelope fa-stack-1x drk-blue')
    //         }
    //     })
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
            // setTimeout(function(){
            //     $('#phonenum')
            //         .removeClass('active-mail')
            //         .addClass('disable-icons')
            //         .fadeOut('slow')
            //         $('#mobi').removeClass('white').addClass('drk-blue')
            //         $('#phonecircle').removeClass('drk-blue').addClass('white')
            // }, 10000)
        },
        mouseenter: function(event) {
            event.preventDefault();
            if(!$('#phonenum').hasClass('active-mail')) {    
                // $('#mobi').removeClass('drk-blue')
                // $('#mobi').addClass('white')
                // $('#phonecircle').addClass('drk-blue')
                $('#phonecircle').attr('class', 'fas fa-circle fa-stack-2x drk-blue')
                $('#mobi').attr('class', 'fas fa-mobile-alt fa-stack-1x white')
            }

        },
        mouseleave: function() {
            event.preventDefault();
            if(!$('#phonenum').hasClass('active-mail')) {    
                // $('#mobi').removeClass('white').addClass('drk-blue')
                // $('#phonecircle').removeClass('drk-blue').addClass('white')
                $('#phonecircle').removeAttr('class').attr('class', 'fas fa-circle fa-stack-2x white')
                $('#mobi').removeAttr('class').attr('class', 'fas fa-mobile-alt fa-stack-1x drk-blue')
            }
        }
    })
    $('#env-mobile').bind( "tap", tapHandler );
    $('#env-phone').bind( "tap", tapHandler2 );
    function tapHandler (event){
        event.preventDefault()
        if($('#pmobile').hasClass('active-mail')) {
            $('#pmobile').removeClass('active-mail').addClass('disable-icons')
            $('#mobicircle').attr('class', 'fas fa-circle fa-stack-2x drk-blue')
            $('#eicon').attr('class', 'fas fa-envelope fa-stack-1x white')    
            $('#mobiphone')
                .attr('class', 'fas fa-circle fa-stack-2x')
            $('#emobi')
                .attr('class', 'fas fa-mobile-alt fa-stack-1x drk-blue')
            $("#emobile").removeClass('disable-icons').addClass('active-mail')
        } else {
            $("#emobile").removeClass('disable-icons').addClass('active-mail')
            $('#mobicircle').attr('class', 'fas fa-circle fa-stack-2x drk-blue')
            $('#eicon').attr('class', 'fas fa-envelope fa-stack-1x white')    
        }
        setTimeout(function(){
            $("#emobile").removeClass('active-mail').addClass('disable-icons')
            $('#mobicircle').attr('class', 'fas fa-circle fa-stack-2x')
            $('#eicon').attr('class', 'fas fa-envelope fa-stack-1x drk-blue')
        },15000)
    }
    function tapHandler2 (event) {
        event.preventDefault()
        if($('#emobile').hasClass('active-mail')){
            $('#emobile')
                .removeClass('active-mail')
                .addClass('disable-icons')
            $('#pmobile')
            .removeClass('disable-icons')
            .addClass('active-mail')
            $('#mobiphone')
                .attr('class', 'fas fa-circle fa-stack-2x drk-blue')
            $('#emobi')
                .attr('class', 'fas fa-mobile-alt fa-stack-1x white')
            $('#mobicircle').attr('class', 'fas fa-circle fa-stack-2x')
            $('#eicon').attr('class', 'fas fa-envelope fa-stack-1x drk-blue')    
        } else{
            $('#pmobile')
            .removeClass('disable-icons')
            .addClass('active-mail')
            $('#mobiphone')
                .attr('class', 'fas fa-circle fa-stack-2x drk-blue')
            $('#emobi')
                .attr('class', 'fas fa-mobile-alt fa-stack-1x white')
        }
        setTimeout(function(){
            $("#pmobile").removeClass('active-mail').addClass('disable-icons')
            $('#mobiphone').attr('class', 'fas fa-circle fa-stack-2x')
            $('#emobi').attr('class', 'fas fa-mobile-alt fa-stack-1x drk-blue')
        },15000)
    }
})
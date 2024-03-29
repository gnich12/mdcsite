

$(document).ready(function() {
    $('.has-dropdown').on('click', function(){
        $('#menunavbar').toggleClass('hide-menu')
    })
    $('.navbar-burger').on('click', function(){
        $('#mobimenu').toggleClass('hide-menu')
        $('.navbar-burger').toggleClass('is-active')
    })
    $('#mobimenu a').on('click', function(){
        $('#mobimenu').toggleClass('hide-menu')
        $('.navbar-burger').toggleClass('is-active')
    })
    $('#env-navbar').on('click', function(){
        if(!$('#deskphone').hasClass('hide-phone')) {
           togglePhone();
           toggleEmail();
        } else {
           toggleEmail();
        }
    })
    $('#phone-navbar').on('click', function(){
        if(!$('#deskemail').hasClass('hide-email')){
            toggleEmail();
            togglePhone();
        } else {
            togglePhone();
        }
    })
    function togglePhone(){
        $('#deskphone').toggle('slow').toggleClass('hide-phone')
        var phonecir = $('#pc path')
        var mobicon = $('#mi path')
        if(phonecir.attr('style')){
            phonecir.removeProp('style')
        } else {
            phonecir.prop('style',"fill: #3b5382")
        }
        if(mobicon.attr('style')){
            mobicon.removeProp('style')
        } else {
            mobicon.prop('style',"fill: #fff")
        }    
    }
    function toggleEmail(){
        $('#deskemail').toggle('slow').toggleClass('hide-email')
        var mail = $('#mc path')
        var envelope = $('#envi path')
        if(mail.attr('style')){
            mail.removeProp('style')
        } else {
            mail.prop('style',"fill: #3b5382")
        }
        if(envelope.attr('style')){
            envelope.removeProp('style')
        } else {
            envelope.prop('style',"fill: #fff")
        } 
    }


    var envtime;
    var phonetime;
    var mobienv;
    var mobiphone;
    $('#env').on('click', function(){
        clearTimeout(phonetime)
        if(!$('#phonenum').hasClass('disable-icons')){
            $('#phonenum').toggleClass('disable-icons');
            $('#email').toggleClass('disable-icons')
            //turn off phone
            $('#mobi').removeAttr('style').attr('style', 'color:#3B5382')
            $('#phonecircle').removeAttr('style').attr('style', 'color:#fff')
            //turn on mail
            $('#mailcircle').removeAttr('style').attr('style', 'color:#3B5382')
            $('#envicon').removeAttr('style').attr('style', 'color:white')
        } else {
            if(!$('#email').hasClass('disable-icons')) {
                $('#email').toggleClass('disable-icons')
                $('#mailcircle').removeAttr('style').attr('style', 'color:#fff')
                $('#envicon').removeAttr('style').attr('style', 'color:#3B5382')
                
            } else {
                $('#email').toggleClass('disable-icons')
                $('#mailcircle').removeAttr('style').attr('style', 'color:#3B5382')
                $('#envicon').removeAttr('style').attr('style', 'color:white')
            }
        }
        envtime=setTimeout(function(){
            $('#email').toggleClass('disable-icons')
            $('#mailcircle').removeAttr('style').attr('style', 'color:#fff')
            $('#envicon').removeAttr('style').attr('style', 'color:#3B5382')
        },15000)
    })
    $('#phone').on('click', function(){
        clearTimeout(envtime)
        if(!$('#email').hasClass('disable-icons')){
            $('#email').toggleClass('disable-icons');
            $('#phonenum').toggleClass('disable-icons');
            //turf off mail
            $('#mailcircle').removeAttr('style').attr('style', 'color:#fff')
            $('#envicon').removeAttr('style').attr('style', 'color:#3B5382')
            //turn on phone
            $('#phonecircle').removeAttr('style').attr('style', 'color:#3B5382')
            $('#mobi').removeAttr('style').attr('style', 'color:#fff') 

        } else {
            if(!$('#phonenum').hasClass('disable-icons')) {
                $('#phonenum').toggleClass('disable-icons')
                $('#phonecircle').removeAttr('style').attr('style', 'color:#fff')
                $('#mobi').removeAttr('style').attr('style', 'color:#3B5382')
            }else {
                $('#phonenum').toggleClass('disable-icons')
                $('#phonecircle').removeAttr('style').attr('style', 'color:#3B5382')
                $('#mobi').removeAttr('style').attr('style', 'color:#fff') 
            }
        }
        phonetime=setTimeout(function(){
            $('#phonenum').toggleClass('disable-icons')
            $('#phonecircle').removeAttr('style').attr('style', 'color:#fff')
            $('#mobi').removeAttr('style').attr('style', 'color:#3B5382')
        },15000)
    })
    $('#phone').hover(over2,out2)
    function over2(){
        $('#phonecircle').removeAttr('style').attr('style', 'color:#3B5382')
        $('#mobi').removeAttr('style').attr('style', 'color:#fff') 
    }
    function out2(){
        if($('#phonenum').hasClass('disable-icons')) {
            $('#phonecircle').removeAttr('style').attr('style', 'color:#fff')
            $('#mobi').removeAttr('style').attr('style', 'color:#3B5382')
        }
    }
    $('#env').hover(over,out)
    function over(){
        $('#mailcircle').removeAttr('style').attr('style', 'color:#3B5382')
        $('#envicon').removeAttr('style').attr('style', 'color:white')
    }
    function out(){
        if($('#email').hasClass('disable-icons')) {
           $('#mailcircle').removeAttr('style').attr('style', 'color:#fff')
            $('#envicon').removeAttr('style').attr('style', 'color:#3B5382')
        }
    }
    $('#env-mobile').on( "click", tapHandler );
    $('#env-phone').on( "click", tapHandler2 );
    function tapHandler (event){
        event.preventDefault()
        clearTimeout(mobiphone)
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
        mobienv=setTimeout(function(){
            $("#emobile").removeClass('active-mail').addClass('disable-icons')
            $('#mobicircle').attr('class', 'fas fa-circle fa-stack-2x')
            $('#eicon').attr('class', 'fas fa-envelope fa-stack-1x drk-blue')
        },15000)
    }
    function tapHandler2 (event) {
        event.preventDefault()
        clearTimeout(mobienv)
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
        mobiphone=setTimeout(function(){
            $("#pmobile").removeClass('active-mail').addClass('disable-icons')
            $('#mobiphone').attr('class', 'fas fa-circle fa-stack-2x')
            $('#emobi').attr('class', 'fas fa-mobile-alt fa-stack-1x drk-blue')
        },15000)
    }
})

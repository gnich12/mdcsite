
$(document).ready(function() {
    $('#deskmenu').on('click', function(){
        $('#menunavbar').toggleClass('hide-menu')
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
        phonecir.toggleClass('white-bg').toggleClass('drk-blue-bg')
        var mobicon = $('#mi path')
        mobicon.toggleClass('green-bg').toggleClass('white-bg')
    }
    function toggleEmail(){
        $('#deskemail').toggle('slow').toggleClass('hide-email')
        var mail = $('#mc path')
        mail.toggleClass('white-bg').toggleClass('drk-blue-bg')
        var envelope = $('#envi path')
        envelope.toggleClass('green-bg').toggleClass('white-bg')
    }
});
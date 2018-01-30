function toggleClass(element, className) {
    $(element).toggleClass(className);
}

$(document).ready(function(){
    if (window.location.hash) {
        $(window.location.hash).removeClass('scrolled');
    }
});

$(document).on('submit','form',function(event) {
    var name = event.target[1].value;
    var phone = event.target[2].value;
    var message = name + ", " + phone;
    console.log(message);
    $.get( "https://api.telegram.org/bot536740514:AAFCPBUfgoabiFO-alU2Dz_WGiPWqmoKehc/sendMessage?chat_id=-1001232389952&parse_mode=html&text="+message, function() {
        alert("Ваша заявка принята, мы перезвоним вам в ближайшее время");
    });
    return false;
});
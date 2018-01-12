;(function() {
    var countersAnimate = function() {
        var counters = $('#counters');
        if ( counters.length > 0 ) {

            counters.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    setTimeout(function() {
                        counters.find('.js-counter').countTo({
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            },
                        });
                    }, 400);

                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    countersAnimate();
})();

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
    $.get( "https://api.telegram.org/bot536740514:AAFCPBUfgoabiFO-alU2Dz_WGiPWqmoKehc/sendMessage?chat_id=-183675593 &parse_mode=html&text="+message, function() {
        alert("Ваша заявка принята, мы перезвоним вам в ближайшее время");
    });
    return false;
});
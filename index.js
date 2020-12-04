function flip12() {
    var audio = new Audio('https://www.soundjay.com/misc/sounds/page-flip-01a.mp3');
    audio.volume = 0.3
    audio.play();
    
    setTimeout(
    function() 
    {
        //do something special
        $('#card1').hide();
        $('#card2').show();
    }, 1000);
    
    // $('#card1').css({'z':'10'})
    // $('#card1').addClass('move')
}
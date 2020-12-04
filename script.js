function flip12() {
    $('#next12').prop('disabled', true)
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
    
}

function flip23() {
    $('#next23').prop('disabled', true)
    var audio = new Audio('https://www.soundjay.com/misc/sounds/page-flip-01a.mp3');
    audio.volume = 0.3
    audio.play();
    
    setTimeout(
    function() 
    {
        //do something special
        $('#card2').hide();
        $('#card3').show();
    }, 1000);
    
}

function flip34() {
    $('#next34').prop('disabled', true)
    var audio = new Audio('https://www.soundjay.com/misc/sounds/page-flip-01a.mp3');
    audio.volume = 0.3
    audio.play();
    
    setTimeout(
    function() 
    {
        //do something special
        $('#card3').hide();
        $('#card4').show();
    }, 1000);
    
}
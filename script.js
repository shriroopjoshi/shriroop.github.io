$('#projectdiv').click(function() {
    $('#projectsdiv').show();
    $('#profilediv').hide();
    $('html, body').animate({
        scrollTop: $("#projectsdiv").offset().top
        }, 500);
});

$('#backdiv').click(function() {
    $('#profilediv').show();
        $('#projectsdiv').hide();
        $('html, body').animate({
            scrollTop: $("#imagediv").offset().top
            }, 500);
});

$('#resumebtn').click(function() {
    window.open('Resume.pdf');
    return false;
});
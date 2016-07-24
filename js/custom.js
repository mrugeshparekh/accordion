$(document).ready(function() {
                $('.info').hide();
            $('.main h2').click(function () {
                var $info = $(this).next('.info');
                if ($info.is(':hidden')) {
                    $info.slideDown();
                    $(this).addClass('close');
                } else {
                    $info.fadeOut();
                    $(this).removeClass('close');
                }
            }); //end of click
            $('.main #submit').click(function () {
                $('#first_div.info').fadeOut();
                $('#first_h2').removeClass('close')
                $('#second_div.info').slideDown();
                $('#second_h2').addClass('close');
                return false;
            }); //end of submit click
            $('#send').click(function(){
                return false;
            });//end of send click
            $('#receive').click(function(){
                return false;
            });//end of receive click
});

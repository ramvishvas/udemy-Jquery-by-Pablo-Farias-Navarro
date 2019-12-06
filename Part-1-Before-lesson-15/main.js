// // console.log('Hello World!');
// $(document).ready(function(){
//     console.log('Hey we are ready');
//     // console.log(document);
//     // console.log($(document));
//     // $('body').text('Hey I am body');
//     // $('body').text('<strong>Hey I am body</strong>');
//     $('body').html('<strong>Hey I am body</strong>');
// });


// $(document).ready(function(){
//     $('#fire').addClass('highlight');
// });


// $(document).ready(function () {
//     // $('.solid, .non-solid').addClass('highlight');
//     // $('li').addClass('highlight');
//     // $('#container .non-solid').addClass('highlight');
//     $('#container >>> .non-solid').addClass('highlight');
// });


// $(document).ready(function () {
//     // $('#container input').addClass('highlight');
//     // $('#container input:required').addClass('highlight');
//     // $('#container input[placeholder="Name"]').addClass('highlight');
//     // $('#container input[placeholder*="Name"]').addClass('highlight');
//     $('#container input[required]').addClass('highlight');
// });

$(document).ready(function () {
    // const elem = $('#container').find('.hot');
    // console.log(elem);

    // const elem = $('#container').find('.hot').children();
    // console.log(elem);

    // const elem = $('#container').find('.hot').children('.non-solid');
    // console.log(elem);

    // $('#container').find('.hot')
    //     .children('.non-solid')
    //     .addClass('highlight')

    // $('#container').find('.hot')
    //     .children()
    //     .first()
    //     .addClass('highlight')

    // $('#container').find('.hot')
    //     .children()
    //     .last()
    //     .addClass('highlight')

    // $('#container').find('.hot')
    //     .children()
    //     .first()
    //     .next()
    //     .addClass('highlight')

    // $('#container').find('.hot')
    //     .children()
    //     .last()
    //     .pre()
    //     .addClass('highlight')

    // $('#snow')
    //     .parent()
    //     .addClass('highlight')

    // $('#snow')
    // .parent()
    // .prev()
    // .addClass('highlight')

    // const elem = $('#snow').parents();
    // console.log(elem);

    // $('#snow').closest('#container').addClass('highlight')

    // $('.box').on('click', function () {
    //     console.log('click');
    //     // $('.box').addClass('highlight')
    //     // $(this).addClass('highlight')
    //     $(this).toggleClass('highlight')
    // });


    // $('.box').on('click', '.box-button', function () {
    //     $(this).parent().toggleClass('highlight')
    // });

    $('#select-menu').on('change', function () {
        // $('#feedback-message').text($(this).val())
        $('#feedback-message').text($(this).val() + ' ' +$(this).text())
    });

});
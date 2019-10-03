$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        nextArrow: ' <div class="next-arrow">',
        prevArrow: '<div class="prev-arrow">',
        cetnerMode: true  ,
        responsive:[
            {
            breakpoint: 1220,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });
});
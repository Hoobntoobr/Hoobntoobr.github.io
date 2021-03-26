new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 570,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: 'auto',
                exactWidth: 350,
                itemWidth: 350,
                duration: 0.25,
                draggable: true
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1200,
            settings: {
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                exactWidth: 350,
                itemWidth: 350,
                duration: 0.25,
                draggable: true
            }
        }
    ]
});
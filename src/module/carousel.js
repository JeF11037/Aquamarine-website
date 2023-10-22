function activateSlider()
{
    const buttons = document.querySelectorAll('[data-carousel-button]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
            const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

            const activeSlide = slides.querySelector('[data-active]');
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
}

function getCarousel()
{
    const path_to_images = 
    [
        './../src/static/img/main.jpg',

    ];

    let slides = '';
    for (let i = 0; i < path_to_images.length; i++)
    {
        const is_active = i === 0 ? 'data-active' : '';
        slides += `
            <li
                data-slide
                ${is_active}
            >
                <div
                    class='temp_car'
                    style="background-image: url(${path_to_images[i]});"
                ></div>
            </li>
        `;
    }

    let buttons = '';
    if(path_to_images.length > 1)
    {
        buttons += `
        <button
            data-carousel-button='next'
        >
            <svg
                css-width='5_rem'
                css-height='5_rem'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
            >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
            </svg>
        </button>
        <button 
            data-carousel-button='previous'
        >
            <svg
                css-width='5_rem'
                css-height='5_rem'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
            >
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
            </svg>
        </button>
        `;
    }
    
    return `
    <div
        data-carousel
    >
        <ul data-slides>
            ${slides}
        </ul>
        ${buttons}
    </div>
    `;
}
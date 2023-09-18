function getCarousel()
{
    const path_to_images = 
    [
        './../src/static/img/banner/reference_1.jpg',
        './../src/static/img/banner/a_kto_tut_u_nas.jpg',
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
                    style="background-image: url(${path_to_images[i]});"
                ></div>
            </li>
        `;
    }
    return `
    <div
        data-carousel
    >
        <ul data-slides>
            ${slides}
        </ul>
        <button
            data-carousel-button='next'
        >
            <svg
                css-width='5_rem'
                css-height='5_rem'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
            />
            </svg>
        </button>
        <button 
            data-carousel-button='previous'
        >
            <svg
                css-width='5_rem'
                css-height='5_rem'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
            />
            </svg>
        </button>
    </div>
    `;
}
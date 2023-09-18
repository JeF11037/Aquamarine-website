function buildSlider()
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

function activateCursor()
{
    const cursor = document.querySelector(".cursor");
    const circles_count = 50; 

    for (let i = 0; i < circles_count; i++)
    {
        var divElement = document.createElement("div");
        divElement.classList.add("cursor_circle_trail");
        divElement.style.transitionDuration = ((i + 1) / circles_count) / 5 + 's';
        divElement.style.scale = (circles_count - i) / circles_count;
        if (i === 0)
            divElement.classList.add("cursor_circle_trail_first");
        cursor.appendChild(divElement);
    }

    document.addEventListener("mousemove", (e) => {
        const coords = { x: e.clientX, y: e.clientY };
        const circles = document.querySelectorAll(".cursor_circle_trail");

        circles.forEach(function (circle) {
            circle.style.left = coords.x - 6 + "px";
            circle.style.top = coords.y - 6 + "px";
        });
    })
}
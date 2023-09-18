function mouseOver()
{
    const circles = document.querySelectorAll(".cursor_circle_trail");

    circles.forEach(function (circle) {
        circle.classList.add('invisible');
    });
}

function mouseOut()
{
    const circles = document.querySelectorAll(".cursor_circle_trail");

    circles.forEach(function (circle) {
        circle.classList.remove('invisible');
    });
}
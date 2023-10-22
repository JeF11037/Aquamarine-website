function activateCursor()
{
    const cursor = document.querySelector(".cursor");
    const circles_count = 20; 

    for (let i = 0; i < circles_count; i++)
    {
        var divElement = document.createElement("div");
        divElement.classList.add("cursor_circle_trail");
        divElement.style.transitionDuration = ((i + 1) / circles_count) / 10 + 's';
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
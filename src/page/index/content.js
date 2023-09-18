function getIndexContent(language)
{
    let bricks = '';
    for(let i = 0; i < 8; i++)
    {
        bricks += `
            <div
                css-flex='vertical'
            >
                <div class='temp_content_icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z"/></svg>
                </div>
                <h2
                    css-color='text'
                    css-text='poppins uppercase 32_px bold capitalize'
                >
                    header text
                </h2>
                <p
                    css-color='text'
                    css-text='poppins uppercase 18_px uppercase'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        `;
    }
    return `
        <div
            css-height='100_vh'
            css-color='background'
            id="content1"
        >
            ${getCarousel()}
        </div>
        <div
            css-height='100_vh'
            css-color='primary'
            id="content2"
        >
            <div
                css-flex='content vertical'
                css-height='100_%'
                css-padding='top_10_rem bottom_10_rem'
            >
                <div
                    css-margin='bottom_2_rem'
                >
                    <h1
                        css-color='text'
                        css-text='poppins uppercase 60_px bold uppercase'
                    >
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p
                        css-color='text'
                        css-text='poppins uppercase 20_px capitalize'
                        css-opacity='0_8'
                    >
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div
                    css-padding='1_rem'
                    class='temp_content'
                >
                    ${bricks}
                </div>
            </div>
        </div>
        <div
            css-height='100_vh'
            css-color='secondary'
            id="content2"
        >
            <div
                css-flex='content justify_content_center align_items_center'
                css-height='100_%'
            >
                <div
                css-flex='vertical justify_content_center align_items_center gap_2_rem'
                >
                    <div
                        css-flex='vertical justify_content_center align_items_center gap_1_rem'
                    >
                        <h1
                            css-color='text'
                            css-text='poppins uppercase 50_px bold uppercase'
                        >
                            header text
                        </h1>
                        <p
                            css-color='text'
                            css-text='poppins uppercase 18_px bold uppercase center'
                            css-width='80_%'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <button
                        css-color='text accent'
                        css-text='poppins uppercase 18_px bold uppercase'
                        css-flex='justify_content_center'
                        css-width='10_rem'
                        onmouseover='mouseOver()'
                        onmouseout='mouseOut()'
                        css-hoverable='box'
                        onclick="window.location.href='#content1'"
                    >
                        learn more
                    </button>
                </div>
            </div>
        </div>
    `
}

content_pages['index'] = getIndexContent;
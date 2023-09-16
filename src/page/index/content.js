function getIndexContent(language)
{
    return `
        <div
            css-height='100_vh'
            css-background-image='sea'
            id="content1"
        >
            <div
                css-flex='content justify_content_center align_items_center'
                css-height='100_%'
            >
                <div
                css-flex='vertical justify_content_center align_items_center gap_2_rem'
                css-width='50_%'
                css-padding='2_rem'
                >
                    <div
                        css-flex='vertical justify_content_center align_items_center gap_1_rem'
                    >
                        <h1
                            css-color='text_counter '
                            css-text='poppins uppercase 50_px bold uppercase shadow_dark'
                        >
                            header text
                        </h1>
                        <p
                            css-color='text'
                            css-text='poppins uppercase 18_px bold uppercase center'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <button
                        css-color='text background'
                        css-text='poppins uppercase 18_px bold uppercase'
                        css-flex='justify_content_center'
                        css-width='10_rem'
                        onmouseover='mouseOver()'
                        onmouseout='mouseOut()'
                        class='hoverable_box'
                        onclick="window.location.href='#content2'"
                    >
                        learn more
                    </button>
                </div>
            </div>
        </div>
        <div
            css-height='100_vh'
            css-color='background'
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
                        class='hoverable_box'
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
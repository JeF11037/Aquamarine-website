function getFooterTemplate(language)
{
    return `
        <div
            css-flex='content vertical'
            css-height='100_%'
        >
            <div
                css-flex='align_items_center justify_content_space_evenly'
                css-width='100_%'
                css-height='70_%'
            >
                <div
                    css-flex='justify_content_space_evenly'
                    css-width='50_%'
                    css-height='100_%'
                    css-margin='top_3_rem'
                    css-color='text_counter'
                >
                    <div
                        css-flex='vertical gap_1_rem'
                    >
                        <h3
                            css-text='uppercase centered bold 24_px'
                        >
                            contact us
                        </h3>
                        <p
                            css-text='capitalize centered 18_px'
                        >
                            +372 123 456 78
                        </p>
                        <p
                            css-text='capitalize centered 18_px'
                        >
                            info@gmail.com
                        </p>
                    </div>
                    <div
                        css-flex='vertical gap_1_rem'
                    >
                        <h3
                            css-text='uppercase centered bold 24_px'
                        >
                            our location
                        </h3>
                        <p
                            css-text='capitalize centered 18_px'
                        >
                            some street 8
                        </p>
                        <p
                            css-text='capitalize centered 18_px'
                        >
                            12345 tallinn
                        </p>
                        <p
                            css-text='capitalize centered 18_px'
                        >
                            estonia
                        </p>
                    </div>
                </div>
                <div
                    css-flex='vertical align_items_center gap_1_rem'
                    css-width='50_%'
                    css-height='100_%'
                    css-margin='top_3_rem'
                    css-color='text_counter'
                >
                    <h3
                        css-text='uppercase centered bold 24_px'
                    >
                        follow us on social media
                    </h3>
                    <ul
                        css-list=''
                        css-flex='justify_content_center align_items_center gap_1_rem'
                    >
                        <li
                            css-flex='justify_content_center align_items_center'
                            css-width='3_rem'
                            css-height='3_rem'
                            css-border='2px solid radius_5px light'
                        >
                            <a>1</a>
                        </li>
                        <li
                            css-flex='justify_content_center align_items_center'
                            css-width='3_rem'
                            css-height='3_rem'
                            css-border='2px solid radius_5px light'
                        >
                            <a>2</a>
                        </li>
                        <li
                            css-flex='justify_content_center align_items_center'
                            css-width='3_rem'
                            css-height='3_rem'
                            css-border='2px solid radius_5px light'
                        >
                            <a>3</a>
                        </li>
                        <li
                            css-flex='justify_content_center align_items_center'
                            css-width='3_rem'
                            css-height='3_rem'
                            css-border='2px solid radius_5px light'
                        >
                            <a>3</a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul
                css-list=''
                css-flex='align_items_center justify_content_space_evenly'
                css-width='100_%'
                css-height='30_%'
                css-color='text_counter'
                css-text='poppins uppercase 14_px'
            >
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
                <li>link 4</li>
                <li>link 5</li>
                <li>link 6</li>
            </ul>
        </div>
    `
}
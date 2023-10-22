function getFooterTemplate(language)
{
    const media = 
    [
        ['https://www.facebook.com/', getIcon('facebook', ['fill_text_counter', '5_rem', '5_rem'])],
        ['https://www.instagram.com/', getIcon('instagram', ['fill_text_counter', '5_rem', '5_rem'])],
        ['https://github.com/', getIcon('github', ['fill_text_counter', '5_rem', '5_rem'])],
        ['https://www.youtube.com/', getIcon('youtube', ['fill_text_counter', '5_rem', '5_rem'])]
    ];

    const contacts =
    [
        [getIcon('phone', ['fill_text_counter', '2_rem', '2_rem']), '+372 123 456 78'],
        [getIcon('mail', ['fill_text_counter', '2_rem', '2_rem']), 'info@gmail.com'],
    ];

    const top_links =
    [
        ['#', `home page`],
        ['#', `about us`],
        ['#', `training`],
        ['#', `groups`],
        ['#', `price`],
        ['#', `registration`],
        ['#', `competition calendar`],
        ['#', `competition`],
        ['#', `contact us`],
        ['#', `our rules`],
    ];

    const bottom_links =
    [
        [`© 20xx - ${new Date().getFullYear()}`, '#', `aquamarine.ee`],
        [``, '#', `sitemap`],
        [``, '#', `Some link`],
        [``, '#', `Some link`],
        [``, '#', `Some link`],
    ];

    let media_options = '';
    media.forEach(icon => {
        media_options += `
            <li
                css-flex='justify_content_center align_items_center'
                css-opacity='0_8 normal_on_hover'
                css-hoverable='icon'
                onmouseover='mouseOver()'
                onmouseout='mouseOut()'
            >
                <a
                    href=${icon[0]}
                    target='_blank'
                >
                    ${icon[1]}
                </a>
            </li>
        `;
    });

    let contact_options = '';
    contacts.forEach(contact => {
        contact_options += `
            <p
                css-flex='align_items_center gap_1_rem'
                css-text='22_px poppins'
                css-opacity='0_8'
            >
                ${contact[0]}
                ${contact[1]}
            </p>
        `;
    });

    let top_links_options = '';
    top_links.forEach(link => {
        top_links_options += `
        <a 
            href=${link[0]}
            css-flex='align_items_center gap_1_rem'
            css-text='capitalize 22_px poppins'
            css-opacity='0_8'
            css-hoverable='text'
            css-opacity='0_8 normal_on_hover'
            onmouseover='mouseOver()'
            onmouseout='mouseOut()'
        >${link[1]}</a>
        `;
    });

    let bottom_links_options = '';
    bottom_links.forEach(link => {
        bottom_links_options += `
            <li>
                ${link[0]}
                <a 
                    href=${link[1]}
                    css-text='poppins'
                    css-hoverable='text'
                    css-opacity='0_8 normal_on_hover'
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                >${link[2]}</a>
            </li>
        `;
    });

    return `
        <div
            css-flex='content vertical gap_2_rem'
            css-height='100_%'
            class='footer_container'
        >
            <div
                css-flex='justify_content_space_evenly gap_1_rem'
                css-width='100_%'
                css-mobile-1200='column'
            >
                <div
                    css-flex='vertical gap_1_rem'
                    css-height='100_%'
                >
                    <span
                        css-text='uppercase center bold 22_px poppins'
                        css-width='100_%'
                        css-color='text_counter'
                    >
                        <a
                            href='https://maps.app.goo.gl/nxVxxWvjo25X6LDS9'
                            target='_blank'
                            css-flex='align_items_center'
                            css-hoverable='text_with_icon'
                            css-text='poppins'
                            onmouseover='mouseOver()'
                            onmouseout='mouseOut()'
                        >
                            ${getIcon('location', ['fill_text_counter', '2_rem', '2_rem'])}
                            юридический адрес
                        </a>
                    </span>
                    <div
                        css-flex='vertical gap_1_rem'
                        css-height='100_%'
                        css-color='text_counter'
                        css-text='capitalize 22_px poppins'
                        css-opacity='0_8'
                    >
                        <span>Punane tee 6-12</span>
                        <span>Tallinn, Harjumaa</span>
                        <span>12345</span>
                    </div>
                </div>
                <div
                    css-flex='vertical gap_1_rem'
                    css-height='100_%'
                    css-color='text_counter'
                >
                    <div
                        class='temp_grid'
                    >
                        ${top_links_options}
                    </div>
                </div>
                <div
                    css-flex='vertical gap_3_rem'
                    css-height='100_%'
                    css-color='text_counter'
                >
                    <div
                        css-flex='vertical gap_1_rem'
                    >
                        <h3
                            css-text='uppercase center bold 24_px poppins'
                            css-border='bottom_5_px bottom_solid bottom_light bottom_radius_5_px'
                            css-width='100_%'
                        >
                            свяжитесь с нами
                        </h3>
                        <div
                            class='temp_grid'
                        >
                            ${contact_options}
                        </div>
                    </div>
                    <div
                        css-flex='vertical gap_1_rem'
                    >
                        <h3
                            css-text='uppercase center bold 24_px poppins'
                            css-border='bottom_5_px bottom_solid bottom_light bottom_radius_5_px'
                            css-width='100_%'
                        >
                            следите за нами в социальных сетях
                        </h3>
                        <ul
                            css-list=''
                            css-flex='justify_content_center align_items_center gap_1_rem'
                            css-mobile-1450='flex_column'
                        >
                            ${media_options}
                        </ul>
                    </div>
                </div>
            </div>
            <div
                css-flex=''
                css-width='100_%'
                css-height='5_px'
                css-color='background'
                css-margin='top_1_rem bottom_1_rem'
                css-border='radius_5_px'
            ></div>
            <ul
                css-list=''
                css-flex='align_items_center justify_content_space_between'
                css-width='100_%'
                css-color='text_counter'
                css-text='poppins uppercase 14_px'
            >
                ${bottom_links_options}
            </ul>
        </div>
    `
}
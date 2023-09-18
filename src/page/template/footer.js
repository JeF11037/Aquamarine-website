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
                css-text='capitalize 22_px'
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
        <p
            css-flex='align_items_center gap_1_rem'
            css-text='capitalize 22_px'
            css-opacity='0_8'
        >
            <a 
                href=${link[0]}
                css-hoverable='text'
                css-opacity='0_8 normal_on_hover'
                onmouseover='mouseOver()'
                onmouseout='mouseOut()'
            >${link[1]}</a>
        </p>
        `;
    });

    let bottom_links_options = '';
    bottom_links.forEach(link => {
        bottom_links_options += `
            <li>
                ${link[0]}
                <a 
                    href=${link[1]}
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
                css-flex='align_items_center justify_content_space_evenly gap_1_rem'
                css-width='100_%'
                css-mobile-1200='column'
            >
                <div
                    css-flex='vertical gap_2_rem justify_content_space_between'
                    css-height='100_%'
                    css-color='text_counter'
                >
                    <div
                        css-flex='vertical gap_1_rem'
                    >
                        <h3
                            css-text='uppercase center bold 24_px'
                            css-border='bottom_5_px bottom_solid bottom_light bottom_radius_5_px'
                            css-width='100_%'
                        >
                            useful links
                        </h3>
                        <div
                            class='temp_grid'
                        >
                            ${top_links_options}
                        </div>
                    </div>
                    <div
                        css-flex='vertical gap_1_rem'
                    >
                        <h3
                            css-text='uppercase center bold 24_px'
                            css-border='bottom_5_px bottom_solid bottom_light bottom_radius_5_px'
                            css-width='100_%'
                        >
                            contact us
                        </h3>
                        <div
                            class='temp_grid'
                        >
                            ${contact_options}
                        </div>
                    </div>
                </div>
                <div
                    css-flex='vertical align_items_center gap_1_rem'
                    css-height='100_%'
                    css-color='text_counter'
                >
                    <h3
                        css-text='uppercase center bold 24_px'
                        css-border='bottom_5_px bottom_solid bottom_light bottom_radius_5_px'
                        css-width='100_%'
                    >
                        our location
                    </h3>
                    <p
                        css-flex='align_items_center gap_1_rem'
                        css-text='capitalize 22_px'
                        css-opacity='0_8'
                        css-hoverable='text'
                    >
                        ${getIcon('location', ['fill_text_counter', '2_rem', '2_rem'])}
                        <a
                            onmouseover='mouseOver()'
                            onmouseout='mouseOut()'
                            href='https://maps.app.goo.gl/S6hWNvU7L1vP2xar5'
                            target="_blank"
                        >Somewhere over the rainbow</a>
                    </p>
                    <iframe
                        css-border='radius_5_px'
                        onmouseover='mouseOver()'
                        onmouseout='mouseOut()'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4828.373120060286!2d24.80747753897053!3d59.4150425121932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2see!4v1694884803499!5m2!1sru!2see" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div
                    css-flex='vertical align_items_center gap_1_rem'
                    css-height='100_%'
                    css-color='text_counter'
                >
                    <h3
                        css-text='uppercase center bold 24_px'
                        css-border='bottom_5_px bottom_solid bottom_light bottom_radius_5_px'
                        css-width='100_%'
                    >
                        follow us on social media
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
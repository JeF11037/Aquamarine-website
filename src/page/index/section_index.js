function getStaticHeaderTemplate(language)
{
    const media = 
    [
        ['https://www.facebook.com/', getIcon('facebook', ['fill_text_counter', '3_rem', '3_rem'])],
        ['https://www.instagram.com/', getIcon('instagram', ['fill_text_counter', '3_rem', '3_rem'])],
        ['https://github.com/', getIcon('github', ['fill_text_counter', '3_rem', '3_rem'])],
        ['https://www.youtube.com/', getIcon('youtube', ['fill_text_counter', '3_rem', '3_rem'])]
    ];

    const left_links = 
    [
        ['Главная страница', 'index.html'],
        ['О нас', 'about_us.html'],
        ['Тренировки', 'training.html']
    ];

    const right_links = 
    [
        ['Выбрать группу', 'group.html'],
        ['Соревнования', 'competition.html'],
        ['Контакт', 'contact_us.html']
    ];

    let club_name = '';
    'AquaMarine'.split('').forEach(c => {
        club_name += `
        <span>${c}</span>`;
    });

    let media_options = '';
    media.forEach(icon => {
        media_options += `
            <li
                css-flex='justify_content_center align_items_center'
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

    let left_link_options = '';
    let right_link_options = '';

    left_links.forEach(link => {
        left_link_options += `
            <li
                onmouseover='mouseOver()'
                onmouseout='mouseOut()'
                css-hoverable='text'
            >
                <a href='${link[1]}'>${link[0]}</a>
            </li>
        `;
    });

    right_links.forEach(link => {
        right_link_options += `
            <li
                onmouseover='mouseOver()'
                onmouseout='mouseOut()'
                css-hoverable='text'
            >
                <a href='${link[1]}'>${link[0]}</a>
            </li>
        `;
    });

    return `
        <div
            css-flex='vertical'
            css-width='100_%'
            css-position='absolute'
            css-z-index=''
            css-gradient='shadow'
            css-padding='1_rem'
            style="max-height: 200px";
        >
            <div
                css-flex='content justify_content_center'
            >
                <ul
                    css-list=''
                    css-flex='align_items_center gap_2_rem justify_content_end'
                    css-color='text_counter'
                    css-text='acme uppercase 22_px 500'
                >
                    ${left_link_options}
                </ul>
                <div
                    css-flex='vertical'
                    css-margin='left_2_rem right_2_rem'
                >
                    <span
                        css-flex='justify_content_center'
                        css-padding='top_2_rem'
                    >
                        ${getLogo()}
                    </span>
                    <h1
                        css-flex='justify_content_center'
                        css-color='text'
                        css-text='karla 44_px 800 center'
                        class='header_club_name_container'
                    >
                        ${club_name}
                    </h1>
                    <p
                        css-color='text_counter'
                        css-text='poppins uppercase 20_px end'
                    >
                        sportclub
                    </p>
                </div>
                <ul
                    css-list=''
                    css-flex='align_items_center gap_2_rem justify_content_baseline'
                    css-color='text_counter'
                    css-text='acme uppercase 22_px 500'
                >
                    ${right_link_options}
                </ul>
            </div>
            <div
                class='temp_media'
            >
                <ul
                    css-flex='gap_1_rem'
                >
                    ${media_options}
                </ul>
            </div>
        </div>
    `;
}

index_sections['index'] = `
    <section
        css-height='100_vh'
        css-position='relative'
        css-color='background'
        id="content1"
    >
        ${getStaticHeaderTemplate()}
        ${getCarousel()}
        <button
            class='temp_arrow'
        >
            <a
                href='#training'
            >
                ${getIcon('down', ['fill_text_counter', '5_rem', '5_rem'])}
            </a>
        </button>
    </section>
`;
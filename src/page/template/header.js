function getHeaderTemplate(language)
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
        '',
        '',
        ''
    ];

    const right_links = 
    [
        '',
        '',
        ''
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
                ${link}
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
                ${link}
            </li>
        `;
    });

    return `
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
    `;
}
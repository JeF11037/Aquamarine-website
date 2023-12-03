function getHeaderTemplate(language, display = true)
{
    const media = 
    [
        ['https://www.facebook.com/', getIcon('facebook', ['fill_text_counter', '3_rem', '3_rem'])],
        ['https://www.instagram.com/', getIcon('instagram', ['fill_text_counter', '3_rem', '3_rem'])],
        ['https://github.com/', getIcon('github', ['fill_text_counter', '3_rem', '3_rem'])],
        ['https://www.youtube.com/', getIcon('youtube', ['fill_text_counter', '3_rem', '3_rem'])]
    ];

    const links = 
    [
        ['Главная страница', 'index.html'],
        ['О нас', 'about_us.html'],
        ['Тренировки', 'training.html'],
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

    let link_options = '';

    links.forEach(link => {
        link_options += `
            <li
                onmouseover='mouseOver()'
                onmouseout='mouseOut()'
                css-hoverable='text'
            >
                <a href='${link[1]}'>${link[0]}</a>
            </li>
        `;
    });

    if (!display)
    {
        document.querySelector('header').classList.add('display_none');
        window.addEventListener('scroll', function() {
            let header = document.querySelector('header');
            if (window.scrollY >= 200)
                header.classList.remove("display_none");
            else
                header.classList.add('display_none');
        });
    }
    window.addEventListener('scroll', function() {
        let header_section = document.querySelector('[data-header-section]');
        if (window.scrollY >= 200)
            header_section.classList.add('opacity_0');
        else
            header_section.classList.remove("opacity_0");
    });
    return `
        <section
            css-flex=''
            css-width='100_%'
            css-height='100_%'
            css-color='primary'
            style='box-shadow: 0 0 10px black;'
            data-header-section
        >
            <div
                css-flex='vertical'
                css-width='100_%'
                css-z-index=''
                css-padding='1_rem'
                style="max-height: 200px";
            >
                <div
                    css-flex='content'
                >
                    <div
                        css-flex='vertical'
                        css-margin='right_10_rem'
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
                    <div
                        css-flex='vertical align_items_center gap_2_rem justify_content_end'
                    >
                        <ul
                            css-list=''
                            css-flex='align_items_center gap_2_rem'
                            css-color='text_counter'
                            css-text='acme uppercase 22_px 500'
                            style="white-space: nowrap; flex-wrap: wrap;"
                        >
                            ${link_options}
                        </ul>
                    </div>
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
        </section>
    `;
}
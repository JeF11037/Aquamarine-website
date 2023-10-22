index_sections['index'] = `
    <section
        css-height='100_vh'
        css-position='relative'
        css-color='background'
        id="content1"
    >
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
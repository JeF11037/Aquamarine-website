function getPageTemplate()
{
    return `
        <div class="cursor"></div>
        <header
            css-flex='vertical'
            css-width='100_vw'
            css-position='absolute'
            css-z-index=''
            css-gradient='shadow'
            css-padding='1_rem'
        ></header>
        <main
            css-flex='vertical'
            css-width='100_vw'
            css-color='background'
        ></main>
        <footer
            css-flex='vertical'
            css-width='100_vw'
            css-color='background_counter'
            css-padding='5_rem'
        ></footer>
    `;
}
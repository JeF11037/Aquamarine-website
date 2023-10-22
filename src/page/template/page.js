function getPageTemplate()
{
    return `
        <div class="cursor"></div>
        <header
            css-flex='vertical'
            css-width='100_%'
            css-position='absolute'
            css-z-index=''
            css-gradient='shadow'
            css-padding='1_rem'
        ></header>
        <main
            css-flex='vertical'
            css-width='100_%'
            css-color='background'
        ></main>
        <footer
            css-flex='vertical'
            css-width='100_%'
            css-color='background_counter_alter'
            css-padding='5_rem'
        ></footer>
    `;
}
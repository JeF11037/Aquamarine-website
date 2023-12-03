function getPageTemplate()
{
    return `
        <div class="cursor"></div>
        <header
            css-flex=''
            css-width='100_%'
            css-height='12_rem'
            css-z-index='top'
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
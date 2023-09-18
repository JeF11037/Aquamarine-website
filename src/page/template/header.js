function getHeaderTemplate(language)
{
    let club_name = '';
    'AquaMarine'.split('').forEach(c => {
        club_name += `
        <span>${c}</span>`;
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
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    css-hoverable='text'
                >
                    option 1
                </li>
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    css-hoverable='text'
                >
                    option 2
                </li>
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    css-hoverable='text'
                >
                    option 3    
                </li>
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
                    css-color='text_darkmode'
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
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    css-hoverable='text'
                >
                    option 4
                </li>
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    css-hoverable='text'
                >
                    option 5
                </li>
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    css-hoverable='text'
                >
                    option 6
                </li>
            </ul>
        </div>
    `;
}
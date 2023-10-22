function changeLink(li)
{
    let active_li = document.querySelector('[data-pool-active]');
    delete active_li.dataset.poolActive;
    let frame = document.querySelector('[data-pool-frame]');
    frame.src = li.dataset.poolLink;
    li.dataset.poolActive = true;
}

let pool_links = 
[
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11149.272512630632!2d24.691350326220554!3d59.43833933353771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929474235f88d5%3A0x52b4935a7aa530b2!2sStroomi%20rand!5e0!3m2!1sru!2see!4v1697980954664!5m2!1sru!2see',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6084.038190174303!2d24.62727502137535!3d59.41132060110786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294338dd0d967%3A0xae7e3db2e7b6fc9b!2sHarku%20j%C3%A4rve%20rand!5e0!3m2!1sru!2see!4v1697981014042!5m2!1sru!2see',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16214.832609082867!2d24.744871171968267!3d59.46885803108858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293d238dc4299%3A0x66770fb0d151a458!2sPaljassaare%20rand!5e0!3m2!1sru!2see!4v1697982058134!5m2!1sru!2see',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16217.982946239577!2d24.828672293114792!3d59.46229249820986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469292d1cd017c2b%3A0xb8046d04e7872d22!2sPirita%20Beach!5e0!3m2!1sru!2see!4v1697982078945!5m2!1sru!2see',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16189.30699865822!2d24.905332822381414!3d59.52203892252536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46928d4d2597d5ab%3A0xe68578f3baacccdc!2sT%C3%A4du%20loodus%C3%B5pperada%20(RMK)!5e0!3m2!1sru!2see!4v1697982117751!5m2!1sru!2see',
];

index_sections['pools'] = `
    <section
        css-height=''
        css-padding='top_10_rem bottom_10_rem'
        css-color='secondary_alter'
        id="pools"
    >
        <div
            css-flex='content'
            data-pool-map
        >
            <div>
                <h1>Наши бассейны</h1>
                <ul>
                    <li
                        data-pool-active = 'true'
                        data-pool-link=${pool_links[0]}
                        onclick='changeLink(this)'
                        css-hoverable='text'
                    >
                        Название бассейна 1 - адрес 1
                    </li>
                    <li
                        data-pool-link=${pool_links[1]}
                        onclick='changeLink(this)'
                        css-hoverable='text'
                    >
                        Название бассейна 2 - адрес 2
                    </li>
                    <li
                        data-pool-link=${pool_links[2]}
                        onclick='changeLink(this)'
                        css-hoverable='text'
                    >
                        Название бассейна 3 - адрес 3
                    </li>
                    <li
                        data-pool-link=${pool_links[3]}
                        onclick='changeLink(this)'
                        css-hoverable='text'
                    >
                        Название бассейна 4 - адрес 4
                    </li>
                    <li
                        data-pool-link=${pool_links[4]}
                        onclick='changeLink(this)'
                        css-hoverable='text'
                    >
                        Название бассейна 5 - адрес 5
                    </li>
                </ul>
            </div>
            <iframe 
                onmouseover='mouseOver()'
                onmouseout='mouseOut()'
                data-pool-frame
                src=${pool_links[0]}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder='0'
            >
            </iframe>
        </div>
    </section>
`;
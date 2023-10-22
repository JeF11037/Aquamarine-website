index_sections['training'] = `
    <section
        css-height='100_vh'
        css-padding='top_10_rem bottom_10_rem'
        css-color='secondary'
        id="training"
    >
        <div
            css-flex='content justify_content_center align_items_center'
            css-height='100_%'
        >
            <div
                css-flex='vertical justify_content_center align_items_center gap_2_rem'
            >
                <h1
                    css-color='text'
                    css-text='poppins 50_px bold uppercase'
                >
                    направления подготовки
                </h1>
                <p
                    css-color='text'
                    css-text='poppins 32_px capitalize_first_letter'
                >
                    виды тренировок в наших бассейнах
                </p>
                <div
                    data-cards
                >
                    <div
                        data-card
                        style="background-image: url('./../src/static/img/2.jpeg')"
                    >
                        <div
                            data-card-content
                        >
                            <h2>начальное обучение</h2>
                            <div
                                data-card-bottom
                            >
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                <a
                                    css-flex='justify_content_center align_items_center'
                                >
                                    <span>Узнать больше</span>${getIcon('right', ['fill_text_secondary', '25_px', '25_px'])}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        data-card
                        style="background-image: url('./../src/static/img/3.jpeg')"
                    >
                        <div
                            data-card-content
                        >
                            <h2>продвинутое обучение</h2>
                            <div
                                data-card-bottom
                            >
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                <a
                                    css-flex='justify_content_center align_items_center'
                                >
                                    <span>Узнать больше</span>${getIcon('right', ['fill_text_secondary', '25_px', '25_px'])}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        data-card
                        style="background-image: url('./../src/static/img/2.jpeg')"
                    >
                        <div
                            data-card-content
                        >
                            <h2>спортивная группа</h2>
                            <div
                                data-card-bottom
                            >
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                <a
                                    css-flex='justify_content_center align_items_center'
                                >
                                    <span>Узнать больше</span>${getIcon('right', ['fill_text_secondary', '25_px', '25_px'])}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        data-card
                        style="background-image: url('./../src/static/img/3.jpeg')"
                    >
                        <div
                            data-card-content
                        >
                            <h2>индивидуальные тренировки</h2>
                            <div
                                data-card-bottom
                            >
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                <a
                                    css-flex='justify_content_center align_items_center'
                                >
                                    <span>Узнать больше</span>${getIcon('right', ['fill_text_secondary', '25_px', '25_px'])}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
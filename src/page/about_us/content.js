function getAboutUsContent(language)
{
    return `
        ${about_us_sections['index']}
    `
}

content_pages['about_us'] = getAboutUsContent;
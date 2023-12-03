function getContactUsContent(language)
{
    return `
        ${contact_us_sections['index']}
    `
}

content_pages['contact_us'] = getContactUsContent;
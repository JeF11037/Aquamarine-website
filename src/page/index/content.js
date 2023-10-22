function getIndexContent(language)
{
    return `
        ${index_sections['index']}
        ${index_sections['training']}
        ${index_sections['pools']}
        ${index_sections['coaches']}
    `
}

content_pages['index'] = getIndexContent;
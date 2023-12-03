function getGroupContent(language)
{
    return `
        ${group_sections['index']}
    `
}

content_pages['group'] = getGroupContent;
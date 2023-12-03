function getCompetitionContent(language)
{
    return `
        ${competition_sections['index']}
    `
}

content_pages['competition'] = getCompetitionContent;
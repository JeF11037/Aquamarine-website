function getTrainingContent(language)
{
    return `
        ${training_sections['index']}
    `
}

content_pages['training'] = getTrainingContent;
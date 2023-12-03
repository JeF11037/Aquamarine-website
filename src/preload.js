const src_path = './../src/'
const page_path = src_path+'page/';

let index_sections = {};
let group_sections = {};
let training_sections = {};
let competition_sections = {};
let about_us_sections = {};
let contact_us_sections = {};

const modules =
{
    'index':
    [
        src_path+'module/icon.js',
        src_path+'module/carousel.js',
        src_path+'module/cursor.js',
    ],
    'group':
    [
        src_path+'module/icon.js',
        src_path+'module/carousel.js',
        src_path+'module/cursor.js',
    ],
    'training':
    [
        src_path+'module/icon.js',
        src_path+'module/carousel.js',
        src_path+'module/cursor.js',
    ],
    'competition':
    [
        src_path+'module/icon.js',
        src_path+'module/carousel.js',
        src_path+'module/cursor.js',
    ],
    'about_us':
    [
        src_path+'module/icon.js',
        src_path+'module/carousel.js',
        src_path+'module/cursor.js',
    ],
    'contact_us':
    [
        src_path+'module/icon.js',
        src_path+'module/carousel.js',
        src_path+'module/cursor.js',
    ],
};

const templates =
{
    'index': 
    [
        page_path + 'template/page.js',
        page_path + 'template/header.js',
        page_path + 'template/footer.js',
        page_path + 'index/section_index.js',
        page_path + 'index/section_training.js',
        page_path + 'index/section_pools.js',
        page_path + 'index/section_coaches.js',
        page_path + 'index/content.js',
    ],
    'group':
    [
        page_path + 'template/page.js',
        page_path + 'template/header.js',
        page_path + 'template/footer.js',
        page_path + 'group/section_index.js',
        page_path + 'group/content.js',
    ],
    'training':
    [
        page_path + 'template/page.js',
        page_path + 'template/header.js',
        page_path + 'template/footer.js',
        page_path + 'training/section_index.js',
        page_path + 'training/content.js',
    ],
    'competition':
    [
        page_path + 'template/page.js',
        page_path + 'template/header.js',
        page_path + 'template/footer.js',
        page_path + 'competition/section_index.js',
        page_path + 'competition/content.js',
    ],
    'about_us':
    [
        page_path + 'template/page.js',
        page_path + 'template/header.js',
        page_path + 'template/footer.js',
        page_path + 'about_us/section_index.js',
        page_path + 'about_us/content.js',
    ],
    'contact_us':
    [
        page_path + 'template/page.js',
        page_path + 'template/header.js',
        page_path + 'template/footer.js',
        page_path + 'contact_us/section_index.js',
        page_path + 'contact_us/content.js',
    ],
};
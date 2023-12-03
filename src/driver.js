let content_pages = {};

function loadScript(url) 
{
	return new Promise(function(resolve, reject) 
    {
		let script = document.createElement('script');
		script.src = url;
		script.type = 'text/javascript';
        script.defer = true;
		script.onload = function() 
        {
			resolve(url);
		};
		script.onerror = function() 
        {
			reject(url);
		};
		document.head.appendChild(script);
	});
}

function loadPage(language, content)
{
    var modules_to_load = [];
    var templates_to_load = [];
    modules[content].forEach(function(url)
    {
        modules_to_load.push(loadScript(url));
    });
    Promise.all(modules_to_load)
    .then(function()
    {
        templates[content].forEach(function(url)
        {
            templates_to_load.push(loadScript(url));
        });
        Promise.all(templates_to_load)
        .then(function()
        {
            document.body.innerHTML += getPageTemplate();
            document.querySelector('header').innerHTML = content == 'index' ? getHeaderTemplate(language, false) : getHeaderTemplate(language);
            document.querySelector('main').innerHTML = content_pages[content](language);
            document.querySelector('footer').innerHTML = getFooterTemplate(language);
            activateCursor();
            activateSlider();
        }).catch(function(script)
        {
            console.log(content + ' | ' + script + ' | template script failed to load');
        });
    }).catch(function(script)
    {
        console.log(content + ' | ' + script + ' | module script failed to load');
    });
}
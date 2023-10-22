let content_pages = {}
let index_sections = {};

function loadScript(url) 
{
	return new Promise(function(resolve, reject) {
		let script = document.createElement('script');
		script.src = url;
		script.type = 'text/javascript';
        script.defer = true;
		script.onload = function() {
			resolve(url);
		};
		script.onerror = function() {
			reject(url);
		};
		document.head.appendChild(script);
	});
}

function loadPage(language, content)
{
    var scripts_to_load = [];
    var modules_to_load = [];
    var templates_to_load = [];
    scripts.forEach(function(url)
    {
        scripts_to_load.push(loadScript(url));
    });
    Promise.all(scripts_to_load)
    .then(function()
    {
        modules.forEach(function(url)
        {
            modules_to_load.push(loadScript(url));
        });
        Promise.all(modules_to_load)
        .then(function()
        {
            templates.forEach(function(url)
            {
                templates_to_load.push(loadScript(url));
            });
            Promise.all(templates_to_load)
            .then(function()
            {
                document.body.innerHTML += getPageTemplate();
                document.querySelector("header").innerHTML = getHeaderTemplate(language);
                document.querySelector("main").innerHTML = content_pages[content](language);
                document.querySelector("footer").innerHTML = getFooterTemplate(language);
                activateCursor();
                activateSlider();
            }).catch(function(script)
            {
                console.log(script + ' | template script failed to load');
            });
        }).catch(function(script)
        {
            console.log(script + ' | module script failed to load');
        });
    }).catch(function(script)
    {
        console.log(script + ' | script failed to load');
    });
}
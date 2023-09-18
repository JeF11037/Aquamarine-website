let content_pages = {}

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
    var promises = [];
    scipts_to_load.forEach(function(bundle)
    {
        bundle.forEach(function(url)
        {
            promises.push(loadScript(url));
        });
    });
    Promise.all(promises)
    .then(function() 
    {
        document.body.innerHTML += getPageTemplate();
        document.querySelector("header").innerHTML = getHeaderTemplate(language);
        document.querySelector("main").innerHTML = content_pages[content](language);
        document.querySelector("footer").innerHTML = getFooterTemplate(language);
        activateCursor();
        buildSlider();
    }).catch(function(script)
    {
        console.log(script + 'failed to load');
    });
}
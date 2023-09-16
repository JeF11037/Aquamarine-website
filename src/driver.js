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
        document.body.innerHTML += `
        <div class="cursor"></div>
        <header
            css-flex='vertical'
            css-width='100_%'
            css-position='absolute'
            css-z-index=''
            css-gradient='fade_black'
        ></header>
        <main
            css-flex='vertical'
            css-width='100_%'
            css-color='background'
        ></main>
        <footer
            css-flex='vertical'
            css-width='100_%'
            css-height='20_rem'
            css-color='background_counter'
            css-separator-shadow=''
        ></footer>
        `;
        document.querySelector("header").innerHTML = getHeaderTemplate(language);
        document.querySelector("main").innerHTML = content_pages[content](language);
        document.querySelector("footer").innerHTML = getFooterTemplate(language);
        activateCursor();
        activateBackground();
    }).catch(function(script)
    {
        console.log(script + 'failed to load');
    });
}
(function() {
var data = [
{
name: 'emmet',
	description: 'Emmet is the number one code snippet tool.', 
	author: 'emmetio', 
	url: 'https://atom.io/packages/emmet', 
	downloads: 1662209, 
	stars: 2534, 
	price: 10.50, 
	selector: 'pi'
},
	{
name: 'atom-beautify', 
	description: 'The atom-beautify package will clean up your code, and make it more readable.',
	author: 'Glavin001', 
	url: 'https://atom.io/packages/atom-beautify', 
	downloads: 4228040, 
	stars: 4541, 
	price: 6.75, 
	selector: 'p2'
	}
	];
function Package(data) {
this.name = data.name; 
	this.description = data.description; 
	this.author = data. author; 
	this.url = data.url;  
	this.downloads = data.downloads; 
	this.stars = data. stars; 
	this.selector = data. selector;

	this.getFormattedDownloads = function () {
		return this.downloads.toLocaleDateString();
		
	};
	
	this.getFormattedStars = function() {
	return this.stars.toLocaleDateString();	
		
	};
}

}());
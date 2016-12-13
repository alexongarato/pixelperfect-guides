'use strict';

function Guides(columns, pattern, layoutwidth)
{
	var body = document.getElementsByTagName('body')[0];
	var container = document.createElement('div');
	container.id = 'pixelperfect-guides-container';
	container.style.cssText = 'position:fixed; width:100%; height:100%; left:0px; top:0px; z-index:10000;';
	body.appendChild(container);

	var wrapper = document.createElement('div');
	wrapper.style.cssText = 'position: relative;top: 0px; height: 100%; width: 100%; max-width: '+layoutwidth+'; margin: 0px auto; display: block;';
	container.appendChild(wrapper);

	var spaceX = parseInt(wrapper.offsetWidth)/parseInt(columns);
	for(var i = 0; i < columns+1; i++)
	{
		var pat = pattern[i%2===0?0:1];
		var posX = parseInt(spaceX*i) - spaceX + (spaceX*(pat/100));
		// var posX = parseInt(spaceX*i);
		posX = posX < 0 ? 0 : posX;
		var line = document.createElement('div');
		line.style.cssText = 'position: relative; top: 0px; height: 100%; width: 1px; display: inline-block; margin-left:-1px; background: cyan; left:'+posX+'px';
		wrapper.appendChild(line);
	}
}

module.exports = Guides;
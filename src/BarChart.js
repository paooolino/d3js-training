/*
	external imports
*/

import * as d3 from 'd3';

/*
	class definition
*/

export default class {
	
	constructor(rootElement) {
		this.rootElement = rootElement;
	}
	
	render() {
		d3
			.select(this.rootElement)
			.selectAll('div')
				.data([10,9,6,11])
			.enter().append('div')
				.style('width', function(d){ return d * 10 + 'px'; })
				.text(function(d){ return d; });
	}
	
}
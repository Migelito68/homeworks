function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(', '); 
		let resultInCache = cache.findIndex(item => item.hash === hash);
	    
		if (resultInCache !== -1) {
				console.log("Из кэша: " + cache[resultInCache].result); 
				return "Из кэша: " + cache[resultInCache].result;
		} 

		let result = func(...args); 
		cache.push({hash, result}); 
		if (cache.length > 5) { 
			cache.shift(); 
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;  
		}
	return wrapper;
}

function debounceDecoratorNew(func, ms) {
	let interval = null;

	function wrapper (...args) {
		if (interval === null) {
			func(...args);
	  }
	  clearTimeout(interval);
	  interval = setTimeout(() => func(...args), ms);
	}
	return wrapper;
}

function debounceDecorator2(func, ms) {
	let interval = null;
	
	function wrapper (...args) {
		if (interval === null) {
			func(...args);
		}
    clearTimeout(interval);
		interval = setTimeout(() => func(...args), ms);
		wrapper.count++;
	} 
	return wrapper;
}
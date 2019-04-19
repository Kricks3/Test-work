var endIndexProduct = 10,
 template = document.getElementById("template-product").innerHTML;
 templateSale = document.getElementById("template-product-sale").innerHTML;
function getDataHTML(begin, end, data) {
	var dataHTML = "",
		dataForHTML = data.slice(begin, end);
	dataForHTML.forEach(function(item) {
			var itemHTML = (item.sale === true) ? templateSale : template;	
			for (var key in item) {
				itemHTML = itemHTML.replace("{{ " + key + " }}", item[key]);
			}
			dataHTML += itemHTML;
	
});
	return dataHTML

}

document.getElementById("main-products").innerHTML = getDataHTML(0, 10, data);

document.getElementById("show-more").onclick = function(event) {
	document.getElementById("main-products").insertAdjacentHTML('beforeend', getDataHTML(endIndexProduct, endIndexProduct+10, data));
	endIndexProduct += 10;
	if (endIndexProduct > data.length) {
		document.getElementById("show-more").classList.add("hidden");
	}
}


//обработчик события на поле поиска

document.getElementById("input-main-search").onkeyup = function(event) {
	var text = event.target.value.toLowerCase();
	words = text.split(' ');

	// либо так
	// var foundProducts = [];
	// data.forEach(function(item) {
	// 	if (item.title.toLowerCase().indexOf(text) >=0) 
	// 		foundProducts.push(item);
	// });




	// либо вот так
	if (text.length >= 3) {
			var foundProducts = data.filter(function(item) {
				item.countFoundWords = 0;
				for (var i = 0 ; words.length ; i++) { 
						if (item.title.toLowerCase().indexOf(words[i]) >=0) {
							item.countFoundWords++;
						}
			return(item.countFoundWords > 0 );
		}});
		document.getElementById('main-products').innerHTML = getDataHTML(0, 10, foundProducts.sort(function(a, b) {
			return b.countFoundWords - a.countFoundWords;
		}));
		if (foundProducts.length == 0) {
			document.getElementById('main-products').innerHTML = '<div style="text-align: center">По вашему запросу товары не найдены</div>';
			document.getElementById("show-more").classList.add("hidden");
		};
	} else {
		document.getElementById('main-products').innerHTML = getDataHTML(0, 10, data);
	}
	
};

// опишем алгоритм поиска по наименованию товара

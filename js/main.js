// localStorage.clear();
var template = document.getElementById("template-product").innerHTML,
	todoList = [];
	if (localStorage.getItem('films') == undefined) {
	localStorage.setItem('films', JSON.stringify(data));
	} 
	todoList = JSON.parse(localStorage.getItem('films'));
	function getDataHTML(begin, end, data) {
		var dataHTML = "",
			dataForHTML = todoList.slice(begin, end);
		dataForHTML.forEach(function(item) {
				var itemHTML = template;	
				for (var key in item) {
					itemHTML = itemHTML.replace("{{ " + key + " }}", item[key]);
				}
				dataHTML += itemHTML;
		
	});
		return dataHTML
	
	}
	
	document.getElementById('add').onclick =function(){
		var film={};
		film.title = document.getElementById('title').value;;
		film.year = document.getElementById('year').value;
		film.duration = document.getElementById('duration').value;
		film.creator = document.getElementById('creator').value;
		film.rating = document.getElementById('rating').value;
		todoList.unshift(film);
		console.log(todoList);
		localStorage.setItem('films', JSON.stringify(todoList));
		document.getElementById("main-products").innerHTML = getDataHTML(0, 10, data);		
	}




var endIndexProduct = 10,
 z = 100;

document.getElementById("main-products").innerHTML = getDataHTML(0, 10, data);

document.getElementById("show-more").onclick = function(event) {
	document.getElementById("main-products").insertAdjacentHTML('beforeend', getDataHTML(endIndexProduct, endIndexProduct+10, data));
	endIndexProduct += 10;
	if (endIndexProduct > todoList.length) {
		document.getElementById("show-more").classList.add("hidden");
	}
}

// document.getElementById("input-main-search").onkeyup = function(event) {
// 	var text = event.target.value.toLowerCase();
// 	words = text.split(' ');

// 	if (text.length >= 3) {
// 			var foundProducts = data.filter(function(item) {
// 				item.countFoundWords = 0;
// 				for (var i = 0 ; words.length ; i++) { 
// 						if (item.title.toLowerCase().indexOf(words[i]) >=0) {
// 							item.countFoundWords++;
// 						}
// 			return(item.countFoundWords > 0 );
// 		}});
// 		document.getElementById('main-products').innerHTML = getDataHTML(0, 10, foundProducts.sort(function(a, b) {
// 			return b.countFoundWords - a.countFoundWords;
// 		}));
// 		if (foundProducts.length == 0) {
// 			document.getElementById('main-products').innerHTML = '<div style="text-align: center">По вашему запросу товары не найдены</div>';
// 			document.getElementById("show-more").classList.add("hidden");
// 		};
// 	} else {
// 		document.getElementById('main-products').innerHTML = getDataHTML(0, 10, data);
// 	}
	
// };

// алгоритм поиска по наименованию товара


window.scrollTo(0,0);

document.getElementById('up').onclick = function(event){
	scrolled = window.pageYOffset;
		scrollToTop();
	}
function scrollToTop(){	
	if (scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 50; //скорость прокрутки
		timer = setTimeout(scrollToTop, 50);	
	}
	else {
		clearTimeout(timer);
		window.scrollTo(0,0);
		console.log("scrollToTop ext");
	}
}
document.getElementById('dawn').onclick = function(event){

	window.scrollTo(0,ScrollHeight());
			
}

function ScrollHeight(){
	return Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
}


var link = document.querySelector(".login-link");
var popup = document.querySelector(".registration");
var close = popup.querySelector(".form-close");
link.addEventListener("click", function (evt) {
	evt.preventDefault("");
	popup.classList.add("modal-show");
	// nameField.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });




document.getElementById('delete-film').onclick=function() { 
	for(i = 0; i < todoList.length; i++){
		if(document.getElementById("input-main-search").value === todoList[i].title){
			todoList.splice(i, 1);
			localStorage.setItem('films', JSON.stringify(todoList));
			document.getElementById("main-products").innerHTML = getDataHTML(0, 10, data);
		}
	}									
}


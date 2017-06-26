// $(document).ready(function() {
// 	var ajaxcall = function () {
// 		var input1 = $("#searchbar").val();
// 		$.ajax ({
// 			url: "https://pixabay.com/api/",
// 			method: "GET",
// 			data: {
// 				key: "2409187-ee958c2d8895c6eb14d3ce314",
// 				q: input1,
// 			},
// 			success: handleResults
// 		});
// 		function handleResults(response_body) {
// 			console.log(response_body)
// 			response_body.hits.forEach(function(item) {
// 				var url = item.previewURL;
// 				var image = $(document.createElement("img"));
// 				image.attr("src", url);
// 				image.attr("class", "resultImage");
// 				image.appendTo("#photo-container")
// 			});
// 		};
// 	};
// 	document.getElementById("#searchbar").onkeydown = function(e){
// 		if(e.keyCode == 13){
// 			ajaxcall;
// 		}
// 		else {
// 		$("#searchbutton").click(ajaxcall)
// 		}
// 	};	

	// $("#searchbar").bind("keydown", (function(enter) {
	// 	if(enter.keyCode == 13) {
	// 		enter.preventDefault();
	// 		ajaxcall;
	// 	}
	// });
$(document).ready(function() {
	$("button").click(function () {
		var input1 = $("#searchbar").val();
		$.ajax ({
		url: "https://pixabay.com/api/",
		method: "GET",
		data: {
			key: "2409187-ee958c2d8895c6eb14d3ce314",
			q: input1,
		},
		success: handleResults
		});
		function handleResults(response_body) {
			console.log(response_body)
			response_body.hits.forEach(function(item) {
				var url = item.previewURL;
				var image = $(document.createElement("img"));
				image.attr("src", url);
				image.attr("class", "resultImage");
				image.appendTo("#photo-container")
			});
		}
	})
})
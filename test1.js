
var node1 = [];
var creation = function(word){
	
	for(var i = 0; i<word.length; i++) {
		var category = word.charAt(i);
		var node = {};
		node.type = category;
		node.children = [];

		node1[i] = node;
		console.log(node);
	}
	console.log(node1);
}

sentence = "!erdf1223";
creation(sentence);


/**
 *
 */

var items = [
	{name: 'りんご',price: 100, count: 3},
	{name: 'ぶどう',price: 200, count: 1},
	{name: 'ばなな',price: 100, count: 1},
	{name: 'いちご',price: 200, count: 2},
	{name: 'みかん',price: 300, count: 3},
];

higherPrice(250);

function higherPrice (targetPrice) {

	for(var i=0; i<5; i++){
		if(items[i].price * items[i].count < targetPrice){
						continue;
		}else{
						console.log(items[i].name);

		}

	}

	return;


}
var
indexesForSearch,
searchTerms;

switch (sessionStorage.theme) {
case 'Food':
	indexesForSearch = [8,9,10,11,12,15,17,23,24,31,32,33,34,35];
	searchTerms = [
		'chinese food images',
		'indian food images',
		'mexican food images',
		'italian food images',
		'fruits and vegetables',
		'desserts images',
		'meat types',
		'healthy foods list',
		'unhealthy foods list',
		'cinema foods list',
		'what is cheese made of',
		'what is yoghurt made of',
		'apple orchard images',
		'what do rabbits eat'
	];
	break;
	
case 'Space':
	indexesForSearch = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	searchTerms = [
		'compare speed of light and sound',
		'time to reach light from sun to earth',
		'near side of the moon',
		'how many people have walked on the moon',
		'first satellite in space',
		'is the sun a star',
		'biggest planet in the solar system',
		'second biggest planet in the solar system',
		'planets in order from the sun',
		'farthest planet from the sun',
		'time taken for moon to orbit earth',
		'earth rotation time',
		'time taken for earth to orbit the sun',
		'planets from smallest to largest',
		'why are mercury and venus hotter than earth',
		'is the moon a planet',
		'biggest volcano in the solar system',
		'moons of mars',
		'first person on the moon',
		'first person in space',
		'planet mars nickname',
		'most famous space telescope',
		'earth neptune size comparison',
		'distance between earth and sun',
		'fifth planet from the sun',
		'number of planets in the solar system',
		'rings of saturn',
		'when was pluto discovered',
		'how many earths can fit in the sun',
		'earth\'s sister planet',
		'how many gas giants',
		'first chimpanzee in space'
	];
	break;
	
case 'Sport':
	indexesForSearch = [3,4,8,9,10,11,17,18,19,20,22,23,24,25,26,27,28,29,30,31];
	searchTerms = [
		'crazy golf images',
		'snow sports',
		'bodyboard images',
		'most popular sports',
		'most dangerous sports in the world',
		'most expensive sports in the world',
		'sports played with a bat',
		'sports played with a racket',
		'how often are the olympic games',
		'three medal colours',
		'time of each half in a football',
		'most world cup wins',
		'which country hosted the last world cup',
		'last world cup winners',
		'ten pin bowling images',
		'fastest person in the world',
		'most medals in olympics by a single person',
		'tennis grand slam winners',
		'goalkeeper',
		'olympic flag'
	];
	break;
	
case 'Halloween':
	indexesForSearch = [0,4,5,6,7,10,11,12,13,14,15,19,22,23,26,27,28,31,33];
	searchTerms = [
		'date of halloween',
		'halloween costumes images',
		'halloween costumes images',
		'halloween costumes images',
		'halloween costumes images',
		'colours of halloween',
		'scary films for kids',
		'halloween games',
		'halloween foods images',
		'ghost train fairground ride',
		'haunted house images fairground',
		'halloween monsters list',
		'jack o lantern images',
		'jack o lantern images',
		'bat animal',
		'history of halloween for kids',
		'haunt wordreference translation',
		'casting spell clipart',
		'which animal is a witch\'s best friend'
	];
	break;
	
case 'Christmas':
	indexesForSearch = [0,1,2,3,7,18,20,22,23,25,30,32];
	searchTerms = [
		'where does santa live',
		'christmas day',
		'colours of christmas',
		'history of christmas for kids',
		'tan santa suit',
		'christmas stocking',
		'three wise men images',
		'christmas songs for kids',
		'christmas films for kids',
		'relative wordreference translation',
		'snowball fight images',
		'names of santa\'s reindeer'
	];
	break;
	
case 'Clothes':
	indexesForSearch = [11,18,21,22,29,36,38,39];
	searchTerms = [
		'ripped clothes images',
		'leather and fur coat',
		'smart casual images',
		'shoelaces images',
		'tracksuit images',
		'footwear images',
		'zips images',
		'sleeves images'
	];
	break;
	
case 'Animals':
	indexesForSearch =[12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	searchTerms = [
		'endangered species',
		'how many animal species',
		'fastest land animal',
		'fastest bird',
		'fastest animal in water kph',
		'heaviest living animal',
		'animal with most teeth',
		'animal with most powerful bite',
		'most venomous animals',
		'longest living animal',
		'oldest animal species',
		'longest living tortoise',
		'most dangerous animals',
		'continent with most animal species'
	];
	break;
	
}
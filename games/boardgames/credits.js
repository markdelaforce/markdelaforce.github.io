var
images = Array.from(document.getElementsByClassName('image')),
descriptions = Array.from(document.getElementsByClassName('description')),
sites = Array.from(document.getElementsByClassName('site')),
anchors = Array.from(document.getElementsByClassName('a-link')),
fixed_images = ['game/6', 'game/back icon', 'game/question mark'],
fixed_descriptions  = ['dice (modified)', 'back arrow', 'question mark'],
fixed_sites = ['pixabay.com', 'onlinewebfonts.com', 'freesvg.org'],
fixed_hrefs = [
	'https://pixabay.com/vectors/cube-one-two-three-four-five-six-335026/',
	'https://www.onlinewebfonts.com/icon/72513',
	'https://freesvg.org/clipart-0117'
],
variable_images,
variable_descriptions,
variable_sites,
variable_hrefs,
count = 0;

switch (theme) {
case 'Food':
	variable_images = [
		'food/apple', 'food/banana', 'food/carrot', 'food/cheese', 'food/egg', 'food/juice', 'food/pepper', 'food/sausage'
	];
	variable_descriptions = [
		'apple (modified)', 'banana', 'carrot', 'cheese', 'egg', 'juice', 'pepper', 'sausage'
	];
	variable_sites = [
		'needpix.com', 'freestockphotos.biz', 'pixabay.com', 'publicdomainvectors.org', 'freestockphotos.biz',
		'publicdomainvectors.org', 'publicdomainvectors.org', 'publicdomainfiles.com'
	];
	variable_hrefs = [
		'https://www.needpix.com/photo/download/1553313/clipart-clipart-illustration-graphic-cartoon-food-tasty-delicious-edible',
		'http://www.freestockphotos.biz/stockphoto/15912',
		'https://pixabay.com/vectors/carrot-vegetable-healthy-red-161014/',
		'https://publicdomainvectors.org/en/free-clipart/Medium-cheese-slice/76688.html',
		'http://www.freestockphotos.biz/stockphoto/11448',
		'https://publicdomainvectors.org/en/free-clipart/Vector-drawing-of-juice-in-box/3996.html',
		'https://publicdomainvectors.org/en/free-clipart/Red-bell-pepper/66124.html',
		'http://www.publicdomainfiles.com/show_file.php?id=13938258622103'
	];
	break;
	
case 'Space':
	variable_images = [
		'space/alien', 'space/astronaut', 'space/comet', 'space/earth', 'space/moon', 'space/planet', 'space/rocket', 'space/ufo'
	];
	variable_descriptions = [
		'alien', 'astronaut (modified)', 'comet', 'earth', 'moon', 'planet', 'rocket', 'ufo'
	];
	variable_sites = [
		'pixabay.com', 'freesvg.org', 'freesvg.org', 'pixabay.com',
		'needpix.com', 'freesvg.org', 'freesvg.org', 'freesvg.com'
	];
	variable_hrefs = [
		'https://pixabay.com/es/vectors/extraterrestre-dibujos-animados-1295828/',
		'https://freesvg.org/astronaut-in-space',
		'https://freesvg.org/comet',
		'https://pixabay.com/es/vectors/la-tierra-espacio-planeta-universo-1296078/',
		'https://www.needpix.com/photo/28808/moon-craters-lunar-surface-sphere-satellite-cartoon',
		'https://freesvg.org/saturn-planet',
		'https://freesvg.org/cartoon-moon-rocket-vector-clip-art',
		'https://freesvg.org/colored-ufo-vector-clip-art'
	];
	break;
	
case 'Sport':
	variable_images = [
		'sport/baseball', 'sport/basketball', 'sport/bowling ball', 'sport/cricket ball', 'sport/football', 'sport/golf ball', 'sport/pool ball', 'sport/tennis ball'
	];
	variable_descriptions = [
		'baseball', 'basketball', 'bowling ball', 'cricket ball', 'football', 'golf ball', 'pool ball', 'tennis ball'
	];
	variable_sites = [
		'pixy.org', 'pixy.org', 'pixy.org', 'pixy.org',
		'pixy.org', 'pixy.org', 'pixy.org', 'pixy.org'
	];
	variable_hrefs = [
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/',
		'https://pixy.org/4157039/'
	];
	break;
	
}
variable_images.push('game/sound-wave');
variable_descriptions.push('( sound ) dice roll');
variable_sites.push('zapsplat.com');
variable_hrefs.push('https://www.zapsplat.com/music/cartoon-climb-rise-ascend-glissando-thats-slightly-discordant-magical-2/');

var
all_images = fixed_images.concat(variable_images),
all_descriptions = fixed_descriptions.concat(variable_descriptions),
all_sites = fixed_sites.concat(variable_sites),
all_hrefs = fixed_hrefs.concat(variable_hrefs);

for (let i = 0; i < 12; i++) {
	images[i].src = `images/${all_images[i]}.png`;
	descriptions[i].innerHTML = all_descriptions[i];
	sites[i].innerHTML = all_sites[i];
	anchors[count++].href = all_hrefs[i];
	anchors[count++].href = all_hrefs[i];
}

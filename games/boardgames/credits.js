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
	
case 'Halloween':
	variable_images = [
		'halloween/black cat', 'halloween/cauldron', 'halloween/ghost', 'halloween/poison', 'halloween/pumpkin', 'halloween/tombstone', 'halloween/witch\'s hat', 'halloween/zombie hand'
	];
	variable_descriptions = [
		'black cat', 'cauldron', 'ghost', 'poison', 'pumpkin', 'tombstone', 'witch\'s hat', 'zombie hand'
	];
	variable_sites = [
		'pixabay.com', 'pixabay.com', 'pixabay.com', 'pixabay.com',
		'pixabay.com', 'pixabay.com', 'pixabay.com', 'pixabay.com'
	];
	variable_hrefs = [
		'https://pixabay.com/illustrations/cat-halloween-silhouette-mieze-1775543/',
		'https://pixabay.com/vectors/bubble-cauldron-green-magic-potion-2022390/',
		'https://pixabay.com/vectors/ghosts-ghost-halloween-spooky-cute-1775548/',
		'https://pixabay.com/vectors/poison-toxic-bottle-liquid-green-146494/',
		'https://pixabay.com/vectors/pumpkin-jack-o-lantern-1293079/',
		'https://pixabay.com/vectors/tombstone-rip-dead-death-funeral-159792/',
		'https://pixabay.com/vectors/witch-hat-sorceress-stripes-purple-312352/',
		'https://pixabay.com/vectors/cartoon-isolated-zombie-hand-green-5039153/'
	];
	break;
	
case 'Christmas':
	variable_images = [
		'christmas/bauble', 'christmas/candy cane', 'christmas/xmas tree', 'christmas/gingerbread', 'christmas/present', 'christmas/santa', 'christmas/snowman', 'christmas/stocking'
	];
	variable_descriptions = [
		'bauble (modified)', 'candy cane', 'xmas tree (modified)', 'gingerbread', 'present', 'santa (modified)', 'snowman', 'stocking (modified)'
	];
	variable_sites = [
		'pixabay.com', 'openclipart.org', 'pixabay.com', 'pixabay.com',
		'pixabay.com', 'openclipart.org', 'pixabay.com', 'pixabay.com'
	];
	variable_hrefs = [
		'https://pixabay.com/de/vectors/weihnachten-christbaumkugel-4715972/',
		'https://openclipart.org/detail/189393/candy-cane',
		'https://pixabay.com/nl/vectors/kerstmis-de-kerstboom-bell-sok-4644705/',
		'https://pixabay.com/nl/illustrations/peperkoek-man-gember-kind-kerst-944521/',
		'https://pixabay.com/de/vectors/box-blau-paket-farbband-geschenk-40178/',
		'https://openclipart.org/detail/233802/simple-santa-claus-christmas-scene',
		'https://pixabay.com/vectors/snow-snowman-winter-cold-hat-red-161423/',
		'https://pixabay.com/de/illustrations/christmas-stocking-weihnachtskerze-3774075/'
	];
	break;
	
case 'Clothes':
	variable_images = [
		'clothes/red sock', 'clothes/orange sock', 'clothes/yellow sock', 'clothes/green sock', 'clothes/turquoise sock', 'clothes/blue sock', 'clothes/purple sock', 'clothes/pink sock'
	];
	variable_descriptions = [
		'red sock (modified)', 'orange sock (modified)', 'yellow sock (modified)', 'green sock (modified)', 'turquoise sock (modified)', 'blue sock (modified)', 'purple sock (modified)', 'pink sock (modified)'
	];
	variable_sites = [
		'pixabay.com', 'pixabay.com', 'pixabay.com', 'pixabay.com',
		'pixabay.com', 'pixabay.com', 'pixabay.com', 'pixabay.com'
	];
	variable_hrefs = [
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/',
		'https://pixabay.com/es/vectors/calcetines-prendas-de-vestir-24411/'
	];
	break;
	
case 'Animals':
	variable_images = [
		'animals/bee', 'animals/cow', 'animals/dog', 'animals/fish', 'animals/frog', 'animals/panda', 'animals/penguin', 'animals/seal'
	];
	variable_descriptions = [
		'bee', 'cow', 'dog', 'fish (modified)', 'frog (modified)', 'panda (modified)', 'penguin (modified)', 'seal'
	];
	variable_sites = [
		'pixabay.com', 'pixabay.com', 'pixabay.com', 'pixabay.com',
		'pixabay.com', 'pixabay.com', 'pixabay.com', 'pixabay.com'
	];
	variable_hrefs = [
		'https://pixabay.com/de/vectors/honig-biene-fliegen-insekt-311047/',
		'https://pixabay.com/de/vectors/kuh-gras-essen-tier-159893/',
		'https://pixabay.com/de/vectors/hund-tiere-terrier-häuslich-humor-47957/',
		'https://pixabay.com/de/vectors/goldfisch-fisch-koi-karpfen-30837/',
		'https://pixabay.com/de/vectors/cartoon-frog-lustig-amphibien-2479796/',
		'https://pixabay.com/de/vectors/panda-bär-niedlich-baby-tier-312197/',
		'https://pixabay.com/de/vectors/tier-niedlich-pinguin-tux-160760/',
		'https://pixabay.com/de/vectors/siegel-tiere-aquarium-zirkus-meer-161264/'
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

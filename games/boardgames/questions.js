switch (sessionStorage.theme) {
case 'Food':
	var questions = [
		'What time do you usually have breakfast ?',
		'What time do you usually have lunch ?',
		'What time do you usually have dinner ?',
		'What do you usually have for breakfast ?',
		'What did you have for lunch yesterday ?',
		'What did you have for dinner yesterday ?',
		'What did you have for lunch today ?',
		'What will you have for dinner today ?',
		'Have you ever tried Chinese food ?',
		'Have you ever tried Indian food ?',
		'Do you like Italian food ?',
		'Do you like fruits and vegetables ?',
		'Which are your favourite desserts ?',
		'Which are your favourite drinks ?',
		'Which is your favourite meat ?',
		'Which is your favourite ice-cream flavour ?',
		'How often do you eat Take-away food ?',
		'How often do you eat at a restaurant ?',
		'Are there any foods you hate ?',
		'How many healthy foods can you think of ?',
		'How many unhealthy foods can you think of ?',
		'How many pizza toppings can you think of ?',
		'How many hamburger ingredients can you think of ?',
		'How many vegetables can you name ?',
		'How many fruits can you name ?',
		'What foods do you eat at a Birthday party ?',
		'What foods do you eat at Christmas ?',
		'What foods do you eat at the cinema ?',
		'What is cheese made of ?',
		'What is yoghurt made of ?',
		'Where do apples grow ?',
		'What do rabbits eat ?'
	];
	break;
	
case 'Space':
	var questions = [
		'Which travels faster: light or sound ?',
		'How long does light take to travel from the Sun to Earth ?<br><br>8 minutes - 10 minutes - 12 minutes',
		'We always see the same side of the Moon. True or false ?',
		'How many people have walked on the moon ?<br><br>six - twelve - eighteen',
		'When was the first satelitte launched into space ?<br><br>1947 - 1957 - 1967',
		'The Sun is a star. True or false ?',
		'Name the planet closest to the Sun.<br><br>Earth - Mercury - Mars',
		'Name the biggest planet in our Solar System.',
		'Which is the second biggest planet in the Solar System',
		'Which is the closest planet to the Sun ?<br><br>Venus - Mercury - Mars',
		'Which is the furthest planet from the Sun ?<br><br>Uranus - Saturn - Neptune',
		'How long does it take the Moon to orbit the Earth ?<br><br>A year - 28 days - A day',
		'How long does it take Earth to rotate on its axis ?<br><br>24 hours - A month - A year',
		'How long does it take Earth to orbit the Sun ?<br><br>24 hours - A month - A year',
		'Order these planets from smallest to biggest:<br><br>Earth - Jupiter - Mercury',
		'Why are the planets Mercury and Venus hotter than Earth ?',
		'Which is not a planet ? The Earth or the Moon ?',
		'On which planet is the biggest volcano in the Solar System ?<br><br>Jupiter - Earth - Mars',
		'How many moons does Mars have ?<br><br>one - two - three',
		'Who was the first person to walk on the Moon ?',
		'Who was the first person to go into space ?',
		'Which planet is known as the red planet ?',
		'What is the name of NASA’s most famous space telescope ?',
		'Is the planet Neptune bigger than Earth ?',
		'What is the distance from the Earth to the Sun ?<br><br>50 million km - 100 million km - 150 million km',
		'Which is the fifth planet from the Sun ?<br><br>Jupiter - Saturn - Neptune',
		'How many planets are in our Solar System ?',
		'What are the rings around Saturn made of ?<br><br>Gas - Ice and Rock - Gold and Silver',
		'When was Pluto discovered ?<br><br>1870 - 1900 - 1930',
		'How many Earths could fit inside the Sun ?<br><br>1 million - 10 million - 100 million'
	];
	break;
	
case 'Sport':
	var questions = [
		'Which sports do you like to practice ?',
		'Do you play in any sports teams ?',
		'Do you like to watch sports ? Which ones ?',
		'Have you ever played crazy golf ?',
		'Do you practice any snow sports ?',
		'Have you ever watched a sport at a sports stadium ?',
		'Do you think everybody should practice sports ? Why ?',
		'Do you do sports with your family ?',
		'Have you ever done surfing or bodyboarding ?',
		'Which do you think are the most popular sports in your country ?',
		'Which sports are the most dangerous ?',
		'Which sports are the most expensive to do ?',
		'Who is your favourite sports person ? Why ?',
		'Which new sports would you like to try ?',
		'Are there any sports that you don\'t like ?',
		'How often do you watch sports on TV ?',
		'When did you learn how to swim ?',
		'In which sports do you use a bat ?',
		'In which sports do you use a racket ?',
		'How often do the Olympic games take place ?',
		'What colours are the medals for first, second and third place ?',
		'In which sports do you NOT use a ball ?',
		'How long is each half in a game of football ?',
		'Which country has won the football World Cup most times ?',
		'Where was the last football World Cup held ?',
		'Which country won the last football World Cup ?',
		'Have you ever done ten pin bowling ?',
		'Who is the fastest person in the world ?',
		'Which athlete has won most medals in the Olympic games ?',
		'Which player has won most titles in Tennis ?',
		'Who is the only player allowed to touch the ball with their hands in football ?',
		'How many rings does the Olympic flag have ?'
	];
	break;
	
case 'Halloween':
	var questions = [
		'What is the date of Halloween ?',
		'How do you celebrate Halloween ?',
		'Do you like to go Treak-or-Treating ?',
		'What wouldn\'t you like to get if you went Trick-or-Treating ?',
		'What "Fancy dress costumes" do people wear at Halloween ?',
		'Do you usually wear a "Fancy dress costume" at Halloween ?',
		'Which is the best "Fancy dress costume" you remember seeing ?',
		'Which is the worst "Fancy dress costume" you remember seeing ?',
		'What is the difference between the words "Witch" and "Which" ?',
		'How old is too old to go Trick-or-Treating ?',
		'Which colours are associated with Halloween and why ?',
		'Do you like watching scary movies ?',
		'Do you know any Halloween games ?',
		'What food would you eat at a Halloween party ?',
		'Have you ever ridden a Ghost Train ?',
		'Have you ever entered a Haunted House ?',
		'Do you like to "play tricks" on people at Hallloween ?',
		'Have you ever eaten Pumpkin ?',
		'Do you decorate your house at Halloween ?',
		'How many Halloween "monsters" can you think of ?',
		'Do you believe in ghosts ?',
		'What would you do if you saw a ghost ?',
		'Do you make a Jack-o\'-Lantern at Halloween ?',
		'Do you prefer friendly or scary Jack-o\'-Lanterns ? Why ?',
		'What is the most scared you have ever been ?',
		'Are you afraid of spiders ?',
		'Have you ever seen a bat in "real life" ?',
		'Do you know anything about the history of Halloween ?',
		'Who would you like to "Haunt" if you could ?',
		'Which Halloween monster would you like to be if you could ?',
		'Would you like to live forever as a Vampire ?',
		'Would you like to "cast spells" on people like a Witch ?'
	];
	break;
	
}

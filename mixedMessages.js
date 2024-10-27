const randomStrings = ['Take a hike, asshole!', 'Thunderbirds are GO!', 'Will you still need me, will you still feed me, when Im 64?'];



const randomMessage = () => {

return randomStrings[Math.floor(Math.random() * randomStrings.length)];

};



console.log(randomMessage());
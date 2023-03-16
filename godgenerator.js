// Define the dogs array with ASCII art and descriptions
const dogs = [
    {
        asciiArt: "\n|\\_/|  \n|o o|__\n \\_^_/  \n",
        name: "Max",
        age: 3,
        description: "He's a happy-go-lucky pup who loves playing fetch and going for long walks.",
    },
    {
        asciiArt: "\n  __      _\no-''))_____\\ \n--__)/ --__)/-- @\n",
        name: "Buddy",
        age: 5,
        description: "Buddy is a loyal companion who loves to cuddle up with his humans and play tug-of-war.",
},
{
        asciiArt: "\n __      __\n/  \\~~~/  \\\n\\__/  O \\__/\n  |\\__/|  \n /     /\\_\n/_|___|\\ \n",
        name: "Bailey",
        age: 2,
        description: "Bailey is a playful pup who loves running around in the park and chasing after toys.",
},
{
    asciiArt: "\n   /\\___/\\  \n  (=^ .^=)~\n  c   \"   c\n",
        name: "Luna",
    age: 4,
    description: "Luna is a curious cat-dog who loves to explore new places and meet new people.",
},
{
    asciiArt: "\n  __      __\n/  \\____/  \\\n\\__/ .. \\__/\n   /_/\\_\n  /_/|\\_\n |__/ \\__|\n",
        name: "Rocky",
    age: 6,
    description: "Rocky is a brave and loyal dog who loves to protect his family and play with his favorite ball.",
},
{
    asciiArt: "\n   _    _\n /~`\\ /`~\\\n|    |    |\n\\    |    /\n `\\  |  /` \n   `\\|/`\n",
        name: "Charlie",
    age: 7,
    description: "Charlie is a gentle giant who loves to snuggle up with his humans and play with his favorite toys.",
},
{
    asciiArt: "\n     _\n    / )  _\n ,-^^ /^ /' \n/   \\__|      \n\\   /      \n \\_/\\____,_\n",
        name: "Daisy",
    age: 1,
    description: "Daisy is a playful and energetic puppy who loves to run around and play with her favorite toys.",
},
    {
        asciiArt: "\n    /\\      \n   /  \\     \n  /    \\    \n /      \\   \n/_______\\  \n",
        name: "Buddy",
        age: 2,
        description: "He's a loyal companion who will follow you wherever you go.",
    },
    {
        asciiArt: "\n     __\n\\/\\  _((\\o/))_\n \\==/   /\\  \n     |---|`\n     /   \\ \n",
        name: "Rocky",
        age: 5,
        description: "He's a tough dog with a heart of gold who loves going on adventures.",
    },
    {
        asciiArt: "\n   /\\___/\\ \n  (  o   o  )\n (   =^=   )\n  (\"\")_(\"\")  \n",
        name: "Luna",
        age: 1,
        description: "She's a playful pup who loves snuggles and getting into mischief.",
    },
    {
        asciiArt: "\n     /\\_/\\   \n    / o o \\ \n   /   -   \\ \n  / \\___/ \\ \n /        / \\ \n",
        name: "Charlie",
        age: 4,
        description: "He's a friendly dog who loves meeting new people and playing with other dogs.",
    },
    {
        asciiArt: "\n    /\\_/\n   ( o.o )\n    > ^ <\n",
        name: "Buddy",
        age: 2,
        description: "Buddy is a little shy at first, but once he gets to know you, he's a total sweetheart.",
    },
    {
        asciiArt: "\n  __      _\no'')}____//\n \"\" * * * )O)\n   (*--(*--'-'",
        name: "Rocky",
        age: 5,
        description: "Rocky is a tough little dog with a heart of gold. He loves to play and is always up for an adventure.",
    },
    {
        asciiArt: "\n   __\no-''||||''-o\n   '''",
        name: "Daisy",
        age: 4,
        description: "Daisy is a sweet and gentle soul who loves nothing more than cuddling up with her favorite humans.",
    },
    {
        asciiArt: "\n /\\     /\\\n{  `---'  }\n{  O   O  }\n  \\\~(*)~/\n   \\_\\|/_/\n    \" \" \" \" ",
        name: "Charlie",
        age: 1,
        description: "Charlie is a bundle of energy who loves to play and is always up for a game of fetch.",
    },
    {
        asciiArt: "\n    ____\n  /      \\\n |  x   x  |\n(|    ^    |)\n |  \\___/  |\n   \\_____/  \n",
        name: "Spot",
        age: 2,
        description: "He's a very energetic dog and loves to chase after squirrels and birds in the park.",
    },
    {
        asciiArt: "\n        __\n    .--()'`;\n  ./ ()     \\ \n  |`-.._____.'|\n  \\; \'-..____/ \n   `\\    _;\n    '---'`\n",
        name: "Ace",
        age: 5,
        description: "He's a fearless dog and loves to go on adventures with his human, whether it's hiking or swimming.",
    },
    {
        asciiArt: "\n      __\n\\'\\/ o\\_\\_    ___\n(   <   \\.`'---._/|_\n/       )  '\\_/'/ \n\\_/\\  ( /\\/     /\\ \n      \\ |     _ | )\n      /\\|\\ _-\\|\\ \n     /||\\\\_\\`|\\_\\\n    / ||/     \\/_\\\n      \n",
        name: "Buddy",
        age: 4,
        description: "He's a bit of a daredevil and loves to skateboard with his human. He's also a great cuddler.",
    },
    {
        asciiArt: "\n   /\\  ___  /\\   \n  // \\/   \\/ \\\\ \n  \\\\ /\\   /\\ // \n   \\/  \\_/  \\/   \n",
        name: "Ziggy",
        age: 1,
        description: "She's a shy dog and prefers to spend most of her time snuggling up with her human on the couch.",
    }];


// Define a new array to keep track of which dogs have been seen
let seenDogs = [];

// Define the generateDog function
function generateDog() {
    // If we've seen all the dogs, reset the seenDogs array
    if (seenDogs.length === dogs.length) {
        seenDogs = [];
    }

    // Generate a random index that hasn't been seen yet
    let index;
    do {
        index = Math.floor(Math.random() * dogs.length);
    } while (seenDogs.includes(index));

    // Add the index to the seenDogs array
    seenDogs.push(index);

    // Get the dog with the random index
    const dog = dogs[index];

    // Set the ASCII art and description
    document.getElementById("ascii-art").textContent = dog.asciiArt;
    document.getElementById("description").innerHTML = `Name: ${dog.name}<br>Age: ${dog.age}<br>Description: ${dog.description}`;
    
    startAnimation();
    
}

// Function to start the animation
function startAnimation() {
    var element = document.getElementsByClassName("description")[0];
    element.style.animation = "none"; // reset animation
    void element.offsetWidth; // trigger reflow
    element.style.animation = "type 4s steps(40, end) forwards"; // start animation

    const textElement = document.getElementById("ascii-art");
    const words = textElement.innerText.split(" ");

    textElement.innerHTML = "";

    for (const word of words) {
        const span = document.createElement("span");
        span.innerText = word + " ";
        textElement.appendChild(span);
    }

    let currentIndex = 0;
    setInterval(() => {
        const currentSpan = textElement.children[currentIndex];
        currentSpan.classList.add("bounce");
        currentIndex = (currentIndex + 1) % textElement.children.length;
    }, 10);
}

// Call the generateDog function to display the first dog
generateDog();
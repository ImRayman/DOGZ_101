// Define the dogs array with ASCII art and descriptions
const dogs = [
    {
        asciiArt: "\n|\\_/|  \n|o o|__\n \\_^_/  \n",
        description: "This is Max. He's a happy-go-lucky pup who loves playing fetch and going for long walks."
    },
    {
        asciiArt: "     ,--,\n     ( o ^ o )\n   _   \\\\//\n  /  \\_/_\\\n /_/_|_\\_\\\n    ' ' ' '",
        description: "Meet Charlie, the energetic pup who always loves to play and run around."
    },
    {
        asciiArt: "    __      _\n o'')}____//\n '--/    / | \\\n   \\\\___(_|_|_)",
        description: "This is Luna, the loyal pup who always follows you wherever you go."
    },
    {
        asciiArt: "     /\\_/\\   \n    ( o.o )  \n     > ^ <   \n",
        description: "This is Bella, the sweet pup who loves to cuddle and play with toys."
    },
    {
        asciiArt: "      /\\_/\n     / o o \\\n    (   \"   )\n     \\~(*)~/\n      '---'",
        description: "Meet Duke, the fun-loving pup who loves to play fetch and go on long walks."
    },
    {
        asciiArt: "     /\\_/\\ \n   =( o.o )=\n    )_\"\"\"_(\\\n   /       \\\n  / /   \\ \\ \\\n   \\ \\   / /\n",
        description: "This is Marley, a quirky dog who loves to play and make you laugh."
    },
    {
        asciiArt: "      /\\_/\n     / o o \\\n    |   \"   |\n     \\~(*)~/\n      '---'",
        description: "Meet Ginger, the curious pup who loves to"
    },
    {
        asciiArt: "     /\\___/\\\n    /        \\\n   / /\\    /\\ \\\n  / /  \\  /  \\ \\\n |          | \n  \\        /\n   \\  /\\  /\n    \\/__\\/",
        description: "Introducing Riley, the adventurous pup who loves to explore new places and try new things."
    },
    {
        asciiArt: "  /\\_____/\\  \n /  o     o  \\ \n( ==  ^  == )\n )   (_)   (\n(          )\n \\        / \n  \\  __  / \n   \\____/",
        description: "Meet Sparky, the affectionate pup who loves to cuddle and be close to their owner."
    },
    {
        asciiArt: "     /\\_/\\  \n    / o o \\\n   (   \"   )\n    \\~(*)~/\n     '---'",
        description: "Introducing Bandit, the mischievous pup who loves to play pranks on their owner but is always ready for a good snuggle."
    },
    {
        asciiArt: "      ,__\n  (___()'`;\n     /,    /\n    \\\"---\\\"\n",
        description: "Meet Tilly, the adventurous pup who loves exploring the great outdoors and playing in the water."
    },
    {
        asciiArt: "       /\\__/\\ \n     /`    '\\\n   === 0  0 ===\n     \\  --  /\n    /        \\\n   /          \\\n",
        description: "Say hello to Cooper, the happy-go-lucky pup who loves playing fetch and snuggling up on the couch."
    },
    {
        asciiArt: " /\\__/\\\n/`    '\\\n| () () |\n \\  ^  /\n  \\/\\/",
        description: "This is Rosie, a curious and adventurous pup who loves exploring new places and meeting new friends."
    },
    {
        asciiArt: "  __\n{~._.'}\n ( Y )\n()~*~()\n(_)-(_)",
        description: "Meet Rufus, the goofy and fun-loving pup who is always up for a game of tug-of-war or fetch."
    },
    {
        asciiArt: "  .--.\n  |__|\n  |  |\n  |  |\n  |  |\n  |  |\\ \n  |  | \\ \n  |  |  \\ \n  |__|   \\_)",
        description: "This is Gus, the loyal and protective pup who will always stand by your side no matter what."
    },
    {
        asciiArt: "     /\\_\\\n    / o o \\\n   (   \"   )\n    \\~(*)~/\n     '---'\\ \n           \\ \n           /\\ \n          /  \\ \n         /    \\",
        description: "Meet Jasper, the energetic and playful pup who loves chasing after balls and playing with his favorite toys."
    },
    {
        asciiArt: "   ______\n (|      |\n  | ^__^ |\n  |  O   |\n  |   o  |\n  | ||_||\n  |______|",
        description: "This is Milo, the sweet and affectionate pup who loves snuggling up with his favorite humans and giving lots of kisses."
    },
    {
        asciiArt: "   _    _\n /` `--' `\\\n/  _      _\\ \n|_/ \\----/ \\_\n    /`\\  /`\\\n    \\__/  \\__/",
        description: "Meet Willow, the gentle and calm pup who loves long walks in nature and cuddling up with a good book."
    },
    {
        asciiArt: "        __   /\\ \n    .-.'  `; `-._  __  / \n   (_,         .-:'  `; `-._\n ,'o\"(        (_,           )\n(__,-'      ,'o\"(            )>\n   (       (__,-'            \n    `-'._.--._(             ",
        description: "Meet Sir Barkington, the regal canine with a distinguished bark that echoes through the halls."
    },
    {
        asciiArt: "            ,---,\n          ,/  .`|   \n      ,`   `.`'    \n  ,--.`.  .-' .--.   ,--.--.\n  |   \\`' /   /  _    |  .--'\n  |    |  |   ,`:`:`.|  |   \n  `--' `--'   `.`.   ,'  '--'\n                 `--`'         ",
        description: "Meet Pugsley, the playful pug with a love for belly rubs and napping in cozy blankets."
    },
    {
        asciiArt: "   (\\__/)\n   /     \\ \n  /  _  _\\   \n  \\  _  _/   \n   ( / )( \\ \n    \\|/__\\| \n    //||\\\\\n   // || \\\\",
        description: "Meet Slinky, the stretchy dachshund who loves to chase balls and burrow under blankets."
    },
    {
        asciiArt: "      ,#####,\n      #_   _#\n      |a` `a|\n      |  u  |\n      \\  =  / \n     |\`\"\"\"`/|\n     |     | \n",
        description: "Meet Fido, the fun-loving mutt with a talent for catching frisbees and performing tricks on command."
    },
    {
        asciiArt: "       /\\_/\\\n  ____/ o o \\ \n/~____  =ø= / \n(______)__m_m)",
        description: "Introducing Gizmo, the tiny robot dog who loves to fetch and cuddle."
    },
    {
        asciiArt: "       /\\_/\\\n /~     \\\n|   /\\_/\\\n|  / o o \\\n \\_\\~_~_/~ )\n   \\~_~_~_~ /\n    [____] ",
        description: "Say hello to Frisky, the mischievous feline who loves to climb and play with toys."
    },
    {
        asciiArt: "         /\\_/\\    \n        ( o o )\n        ==_Y_==\n       /  |  \\\n      (   |   )\n     /|`-^-`|\\\n    \\| `=^= `|/",
        description: "Meet Rocky, the energetic bunny who loves to hop around and nibble on carrots."
    },
    {
        asciiArt: "     /\\___/\\    \n    ( o   o )   \n   (  =^=  )   \n    (      )    \n   (        )   \n  (          )",
        description: "This is Zeus, the strong and powerful pup who loves to play and explore the outdoors."
    }
];

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
    document.getElementById("description").textContent = dog.description;
    startAnimation();
    
}

// Function to start the animation
function startAnimation() {
    var element = document.getElementsByClassName("description")[0];
    element.style.animation = "none"; // reset animation
    void element.offsetWidth; // trigger reflow
    element.style.animation = "type 4s steps(40, end) forwards"; // start animation
}

// Call the generateDog function to display the first dog
generateDog();
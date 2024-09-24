function findMatching(arr, search) {
    const searchMap = new Map();

    // Create a frequency map for the search string
    for (let i = 0; i < search.length; i++) {
        const isAlreadyPresent = searchMap.get(search[i]);
        if (isAlreadyPresent) {
            searchMap.set(search[i], searchMap.get(search[i]) + 1);
        } else {
            searchMap.set(search[i], 1);
        }
    }

    const answerStrings = [];

    // Traverse each word in the array
    for (let i = 0; i < arr.length; i++) {
        const wordMap = new Map();
        let uniqcharacters = 0;

        // Create a frequency map for the current word
        for (let j = 0; j < arr[i].length; j++) {
            const isAlreadyPresent = wordMap.get(arr[i][j]);
            if (isAlreadyPresent) {
                wordMap.set(arr[i][j], wordMap.get(arr[i][j]) + 1);
            } else {
                wordMap.set(arr[i][j], 1);
                uniqcharacters++;
            }
        }

        // Convert wordMap keys into an array and iterate over it
        const wordKeysArray = Array.from(wordMap.keys());
        let checkUniq = 0;

        // Check if all the characters in wordMap match the searchMap
        for (let k = 0; k < wordKeysArray.length; k++) {
            const wordKey = wordKeysArray[k];
            if (searchMap.get(wordKey) && searchMap.get(wordKey) >= wordMap.get(wordKey)) {
                checkUniq++;
            }
        }

        // If all characters and frequencies match, add the word to answerStrings
        if (uniqcharacters === checkUniq) {
            answerStrings.push(arr[i]);
        }
    }

    return answerStrings.length ? answerStrings : '-';
}

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax"];
const string1 = "ctay";

console.log(findMatching(words, string1));  // Output: ["cat"]

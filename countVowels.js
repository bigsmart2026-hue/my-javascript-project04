function countVowels(numOfVowels) {
    let count = 0;
    const vowels = "gsfenbwdkasreyuiobjhoieaAEIOU";

    for (let i = 0; i < numOfVowels.length; i++){
        if (vowels.includes(numOfVowels[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello Word"));
console.log(countVowels("I love JavaScript"));
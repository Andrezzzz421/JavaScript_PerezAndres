function replaceWords(dictionary, sentence) {
    const dictionarySet = new Set(dictionary);
    
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let shortestRoot = word; 
        
        for (let root of dictionary) {
            if (word.startsWith(root) && root.length < shortestRoot.length) {
                shortestRoot = root; 
            }
        }
        words[i] = shortestRoot;
    }
    
    return words.join(' ');
}
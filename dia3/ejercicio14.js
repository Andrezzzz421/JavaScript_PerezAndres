
var longestCommonPrefix = function(strs) {
    let start = []

    if (strs && strs.length > 0){
        strs = strs.sort();
        let first = strs[0], last = strs[strs.length - 1];
        for (let i = 0; i < first.length; i++){
            if (last.length >i && last[i] === first[i]){
                start.push(last[i]);
            } else{
                return start.join("");
            }
        }
    }
    return start.join("");
};
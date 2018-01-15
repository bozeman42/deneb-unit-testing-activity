function makeTitle(str) {
    if (typeof(str) !== 'string'){
        throw new TypeError('makeTitle expects a string','capitalize.js');
    }
	return str
        .split(' ')
        .map(function(word) {
            if (word[0]) {
                return word[0].toUpperCase() + word.substr(1);
            } else {
                return word;
            }
        })
        .join(' ');
}

module.exports = makeTitle;

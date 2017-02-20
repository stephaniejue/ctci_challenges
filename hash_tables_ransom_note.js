function main() {
    var m = 6;
    var n = 4;
    var magazine = [ 'give', 'me', 'give', 'one', 'grand', 'today', 'night' ];
    var ransom = [ 'give', 'grand', 'me', 'grand', 'today' ];

    if (n > m) {
      return console.log('No');
    }

    var map = {};

    for (var i = 0; i < magazine.length; i++) {
      var word = magazine[i];

     if (map.hasOwnProperty(word)) {
        map[word]++;
      } else {
        map[word] = 1;
      }
      // console.log(map);
    }

    for (var j = 0; j < ransom.length; j++) {
      var ransomWord = ransom[j];

      if( !map.hasOwnProperty(ransomWord) || map[ransomWord] <= 0) {
        return console.log("No");
      } else {
        map[ransomWord]--;
      }
      // console.log(map);
    }
    console.log("Yes");



}

main();

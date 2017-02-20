function main() {
    var a = "cde";
    var b = "abc";

    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < b.length; j++) {
        if (a.charAt(i) === b.charAt(j)) {
          a = a.replace(a.charAt(i),"");
          b = b.replace(b.charAt(j),"");
          i = 0;
          j = 0;
        }
      }
    }
    console.log(a.length + b.length);
}
main();

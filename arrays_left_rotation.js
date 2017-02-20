function main() {
    var n = 5;
    var k = 4;
    a = "1 2 3 4 5";

    for (var i = 0; i < k ; i ++) {
        var rotatingNum = a.shift();
        a.push(rotatingNum);
    }
    console.log(a.join(" "));
}
main();

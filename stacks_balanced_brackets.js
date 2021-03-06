21
// YES : ()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}
// NO : {][({(}]][[[{}]][[[())}[)(]([[[)][[))[}[]][()}))](]){}}})}[{]{}{((}]}{{)[{[){{)[]]}))]()]})))[
// NO : [)](][[([]))[)
// NO : ]}]){[{{){
// NO : {[(}{)]]){(}}(][{{)]{[(((}{}{)}[({[}[}((}{()}[]})]}]]))((]][[{{}[(}})[){()}}{(}{{({{}[[]})]{((]{[){[
// NO : ()}}[(}])][{]{()([}[}{}[{[]{]](]][[))(()[}(}{[{}[[]([{](]{}{[){()[{[{}}{[{()(()({}([[}[}[{(]})
// NO : ){[])[](){[)}[)]}]]){](]()]({{)(]])(]{(}(}{)}])){[{}((){[({(()[[}](]})]}({)}{)]{{{
// NO : [(})])}{}}]{({[]]]))]})]
// NO : [{
// YES : {}([{()[]{{}}}])({})
// YES : {({}{[({({})([[]])}({}))({})]})}
// YES : ()[]
// NO : {)[])}]){){]}[(({[)[{{[((]{()[]}][([(]}{](])()(}{(]}{})[)))[](){({)][}()((
// YES : [][(([{}])){}]{}[()]{([[{[()]({}[])()()}[{}][]]])}
// NO : (}]}
// YES : (([{()}]))[({[{}{}[]]{}})]{((){}{()}){{}}}{}{{[{[][]([])}[()({}())()({[]}{{[[]]([])}})()]]}}
// NO : [(([){[](}){){]]}{}([](([[)}[)})[(()[]){})}}]][({[}])}{(({}}{{{{])({]]}[[{{(}}][{)([)]}}
// YES : ()()[()([{[()][]{}(){()({[]}[(((){(())}))]()){}}}])]
// NO : ({)}]}[}]{({))}{)]()(](])})][(]{}{({{}[]{][)){}{}))]()}((][{]{]{][{}[)}}{)()][{[{{[[
// NO : )}(()[])(}]{{{}[)([})]()}()]}(][}{){}}})}({](){([()({{(){{
// NO : }([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}


function main() {
    var t = 21;
    var arrayExp = ['()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}','{][({(}]][[[{}]][[[())}[)(]([[[)][[))[}[]][()}))](]){}}})}[{]{}{((}]}{{)[{[){{)[]]}))]()]})))[','[)](][[([]))[)',']}]){[{{){','{[(}{)]]){(}}(][{{)]{[(((}{}{)}[({[}[}((}{()}[]})]}]]))((]][[{{}[(}})[){()}}{(}{{({{}[[]})]{((]{[){[','()}}[(}])][{]{()([}[}{}[{[]{]](]][[))(()[}(}{[{}[[]([{](]{}{[){()[{[{}}{[{()(()({}([[}[}[{(]})','){[])[](){[)}[)]}]]){](]()]({{)(]])(]{(}(}{)}])){[{}((){[({(()[[}](]})]}({)}{)]{{{','[(})])}{}}]{({[]]]))]})]','[{','{}([{()[]{{}}}])({})','{({}{[({({})([[]])}({}))({})]})}','()[]','{)[])}]){){]}[(({[)[{{[((]{()[]}][([(]}{](])()(}{(]}{})[)))[](){({)][}()((','[][(([{}])){}]{}[()]{([[{[()]({}[])()()}[{}][]]])}','(}]}','(([{()}]))[({[{}{}[]]{}})]{((){}{()}){{}}}{}{{[{[][]([])}[()({}())()({[]}{{[[]]([])}})()]]}}','[(([){[](}){){]]}{}([](([[)}[)})[(()[]){})}}]][({[}])}{(({}}{{{{])({]]}[[{{(}}][{)([)]}}','()()[()([{[()][]{}(){()({[]}[(((){(())}))]()){}}}])]','({)}]}[}]{({))}{)]()(](])})][(]{}{({{}[]{][)){}{}))]()}((][{]{]{][{}[)}}{)()][{[{{[[',')}(()[])(}]{{{}[)([})]()}()]}(][}{){}}})}({](){([()({{(){{','}([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}'];
    // console.log(arrayExp);

    var map = {
      "{": "}",
      "(": ")",
      "[": "]"
      };

    for (var a = 0; a < t; a++) {
      console.log("---");
      var expression = arrayExp[a];
      var stack = [];
      // console.log(expression);

      // if (expression.length % 2 !== 0) {
      //   console.log("NO");
      // }
      for (var i = 0; i < expression.length; i++) {
        var currentBracket = expression.charAt(i)
        if (map.hasOwnProperty(currentBracket)) {
          stack.push(map[currentBracket]);
        } else if (stack.length === 0) {
          console.log("NO")
          break;
        } else {
          if (stack.pop() !== currentBracket) {
            console.log("NO");
            break;
          }
        }
        if (i === expression.length - 1) {
          if (stack.length === 0) {
            console.log("YES");
          } else {
            console.log("NO");
          }
        }
      }

    }

}

main();

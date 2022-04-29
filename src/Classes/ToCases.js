class ToCases {
  static UpperCase(text) {
    return text.toUpperCase();
  }

  static LowerCase(text) {
    return text.toLowerCase();
  }

  static TitleCase(text) {
    return text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  static SentenceCase(text) {
    var chars = text.toLowerCase().split("");

    let stringInit = 0;
    for (var i = 0; i < chars.length; i++) {

      if (chars[i] !== " " && stringInit === 0) { 
        chars[i] = chars[i].toUpperCase();
        stringInit = 1;
      }

      if (chars[i - 1] === "\n" && (stringInit === 1)) {
        chars[i] = chars[i].toUpperCase();
      } 
    }

    chars[0] = chars[0].toUpperCase();


    return chars.join("");
  }

  static ToggleCase(text) {
    return text.toUpperCase().split(' ').map(function (word) {
        return (word.charAt(0).toLowerCase() + word.slice(1));
    }).join(' ');
  }

  static AlternativeCase(text) {
    var chars = text.toLowerCase().split("");

    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
  }
}

export default ToCases;
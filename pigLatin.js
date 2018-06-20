function translatePigLatin(str) {
const vowelRegex = /[aeiou]/;

if(!vowelRegex.test(str)){
    return str + "ay";
  } else {
    return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay')
  }
}

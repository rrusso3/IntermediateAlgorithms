function convertHTML(str) {
  // set new string container to input
  let newStr = str;
  // replace the characters checked by a regex with corresponding HTML code
  newStr = str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&apos;");

  // return the new string
  return newStr;
}

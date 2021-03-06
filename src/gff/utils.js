export function extractKeys(attr) {
  // extract key-value definitions
  var attributes = {};
  var attrArr = attr.split(";");
  attrArr.forEach(function(el) {
    var keyArr, key, val;
    if (el.indexOf("=") > 0) {
      keyArr = el.split("=");
      key = keyArr[0];
      val = keyArr[1];
      attributes[key] = val;
    } else if (el.indexOf(" ") > 0) {
      keyArr = el.split(" ");
      key = keyArr[0];
      val = keyArr[1].replace(/"/g, '');
      attributes[key] = val;
    }
  });
  return attributes;
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  if(r.length === 3){
    return rgbToHex(r[0],r[1], r[2]);
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// exporting with star is expensive
export default {
    extractKeys: extractKeys,
    rgbToHex: rgbToHex
}

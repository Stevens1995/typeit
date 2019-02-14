export function isVisible(element) {
  let coordinates = element.getBoundingClientRect();

  //-- Element extends past bottom or right.
  if (
    coordinates.right > window.innerWidth ||
    coordinates.bottom > window.innerHeight
  ) {
    return false;
  }

  //-- Element extends past top or left.
  if (coordinates.top < 0 || coordinates.left < 0) {
    return false;
  }

  return true;
}

export function randomInRange(value, range) {
  return Math.abs(
    Math.random() * (value + range - (value - range)) + (value - range)
  );
}

export function appendStyleBlock(styles, id = "") {
  let styleBlock = document.createElement("style");
  styleBlock.id = id;
  styleBlock.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleBlock);
}

export function generateHash() {
  // Math.random() 产生两个相同的随机数的概率非常非常小 所以这里用他来产生hash值没什么问题
  // TODO: 需要深入一下Math.random()
  return Math.random()
    .toString(36)
    .substring(2, 15);
}

export function removeComments(arrayOfStrings) {
  return arrayOfStrings.map(string => {
    return string.replace(/<\!--.*?-->/g, "");
  });
}

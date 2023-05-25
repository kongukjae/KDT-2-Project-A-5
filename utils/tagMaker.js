"use strict";
function default_1(tagName, parent, attribute) {
  var element = document.createElement(tagName);
  parent.appendChild(element);
  if (attribute && typeof attribute === "object") {
    Object.assign(element, attribute);
  }
  return element;
}
const _default = default_1;
export { _default as default };

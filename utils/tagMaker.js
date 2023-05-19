export default function (tagName, parent, attribute) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  if (attribute && typeof attribute === "object") {
    Object.assign(element, attribute);
  }
  return element;
}

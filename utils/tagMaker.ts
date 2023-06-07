export default function (
  tagName: string,
  parent: HTMLElement,
  attribute: Record<string, string>
) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  if (attribute && typeof attribute === "object") {
    Object.assign(element, attribute);
  }
  return element;
}

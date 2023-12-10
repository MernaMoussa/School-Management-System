export function contentTemplate(content) {
  return `
    <div class="container">
      <div class="row">
          <div id="content-container">${content}</div>
      </div>
    </div>
    `;
}
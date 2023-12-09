export function contentTemplate(content) {
    return `
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div id="content-container">${content}</div>
      </div>
    </div>
    </div>
    `;
}
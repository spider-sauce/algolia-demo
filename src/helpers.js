export function hitTemplate(hit) {
    return `
    <div class="hit">
      <!--<div class="hit-image">
        <img src="${hit.image}" />
      </div>-->
      <div class="hit-content">
        <div>
          <div class="hit-name"><a  href="${hit.url}">${hit._highlightResult.name.value}</a></div>
          <div class="hit-description">${hit._snippetResult.description.value}</div>
        </div>
      </div>
    </div>
  `
}

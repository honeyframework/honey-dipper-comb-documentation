export default function generateSpacing(descriptor) {

  let x = [];
  const spacingItems = descriptor.groups.map((group) => {
    return group.map((groupItem) => {
      x.push(`.bubble-spacing-${groupItem.name}`);
    });
  });

  const rowSpacing = x.map((spacing) => {
    return `<code>.scaffold .row ${spacing}</code>`;
  }).join('\n');

  const colSpacing = x.map((spacing) => {
    return `<code>.scaffold .col ${spacing}</code>`;
  }).join('\n');

  return `
  <div class='hny-spec'>
    <h2>Spacing (Scaffold)</h2>
    <div class='hny-spec-details'>

      <div class='scaffold col spacing-definition'>
        <div class='api'>
          ${rowSpacing}
        </div>
        <div class='spacing-parent row'>
          <div class='spacing-child-wrap'>
            <div class='spacing-child'></div>
            <div class='spacing-child'></div>
            <div class='spacing-child'></div>
          </div>
        </div>

      </div>

      <div class='scaffold col spacing-definition'>
        <div class='api'>
          ${colSpacing}
        </div>
        <div class='spacing-parent col'>
          <div class='spacing-child-wrap'>
            <div class='spacing-child'></div>
            <div class='spacing-child'></div>
            <div class='spacing-child'></div>
          </div>
        </div>
      </div>

      <div class='scaffold col spacing-definition'>
        <div class='api'>
          <code>.fill</code>
          <code>.center</code>
          <code>.stretch-row</code>
          <code>.stretch-col</code>
          <code>.dead-center</code>
          <code>.space-between</code>
        </div>
      </div>

    </div>
  </div>
  `
}

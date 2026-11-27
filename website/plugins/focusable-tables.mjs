// Starlight makes wide tables horizontally scrollable. Include them in the
// keyboard order so Safari users can reach and scroll every column.
export default function focusableTables() {
  return function transform(tree) {
    function visit(node) {
      if (node.type === 'element' && node.tagName === 'table') {
        node.properties = { ...node.properties, tabIndex: 0 };
      }
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
}

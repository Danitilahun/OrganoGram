const collapseNode = (node) => {
  if (node.children) {
    node._children = node.children;
    node._children.forEach(collapseNode);
    node.children = null;
  }
};

export default collapseNode;

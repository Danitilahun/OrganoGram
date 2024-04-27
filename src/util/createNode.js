// createNode.js
function createNode(
  nodeId,
  nodeImageUrl,
  parentNodeId,
  name,
  role,
  department,
  office,
  totalSubordinates
) {
  const dynamicTemplate = `<div>
        <div style="margin-left:70px;
                    margin-top:10px;
                    font-size:20px;
                    font-weight:bold;">${name}</div>
        <div style="margin-left:70px;
                    margin-top:3px;
                    font-size:16px;">${role}</div>
        <div style="margin-left:70px;
                    margin-top:3px;
                    font-size:14px;">${department}</div>
        <div style="margin-left:196px;
                    margin-top:15px;
                    font-size:13px;
                    position:absolute;
                    bottom:5px;">
            <div>${office}</div>
            <div style="margin-top:5px">Corporate</div>
        </div>
    </div>`;

  const node = {
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    borderRadius: 5,
    borderWidth: 1,
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    directSubordinates: 4,
    expanded: false,
    height: 146,
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    nodeId: nodeId,
    nodeImage: {
      url: nodeImageUrl,
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 },
      borderWidth: 0,
      cornerShape: "CIRCLE",
      shadow: false,
    },
    parentNodeId: parentNodeId,
    template: dynamicTemplate,
    totalSubordinates: totalSubordinates,
    width: 342,
  };

  return node;
}

module.exports = createNode;

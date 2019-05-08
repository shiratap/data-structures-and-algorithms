'use strict';

module.exports = function getEdge(graph, arr) {
  let val = 0;
  arr.forEach(item => {
    if (!graph.nodes.includes(item) || item.adj.length === 0) { return 0; }
  });

  let curr = arr[0];
  let adj;
  for (let counter = 1; counter < arr.length; counter++) {
    adj = curr.adj.map(item => { return item[0]; });
    if (adj.includes(arr[counter])) {
      val += curr.adj[0][1];
    } else { return 0; }
    curr = arr[counter];
  }
  return val;
};
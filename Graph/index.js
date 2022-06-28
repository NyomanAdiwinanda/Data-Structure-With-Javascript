class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) {
      this.AdjList.set(vertex, []);
    } else {
      throw `vertex ${vertex} is already exist!`;
    }
  }

  addEdge(vertex, node) {
    if (this.AdjList.has(vertex)) {
      if (this.AdjList.has(node)) {
        let arr = this.AdjList.get(vertex);
        if (!arr.includes(node)) {
          arr.push(node);
        }
      } else {
        throw `can't add edge to non-existed node => ${node}`;
      }
    } else {
      throw `you need to add this vertex first => ${vertex}`;
    }
  }

  print() {
    for (let [key, value] of this.AdjList.entries()) {
      console.log(key, value);
    }
  }

  // HELPER FUNCTION
  createVisitedObject() {
    let arr = {};
    for (let key of this.AdjList.keys()) {
      arr[key] = false;
    }
    return arr;
  }

  // Breadth First Search
  bfs(startingNode) {
    let visited = this.createVisitedObject();
    let q = [];

    visited[startingNode] = true;
    q.unshift(startingNode);

    while (q.length) {
      let current = q.pop();
      console.log(current);

      let arr = this.AdjList.get(current);

      for (let element of arr) {
        if (!visited[element]) {
          visited[element] = true;
          q.unshift(element);
        }
      }
    }
  }

  dfs(startingNode) {
    let visited = this.createVisitedObject();
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited) {
    visited[startingNode] = true;
    console.log(startingNode);

    let arr = this.AdjList.get(startingNode);

    for (let elem of arr) {
      if (!visited[elem]) {
        this.dfsHelper(elem, visited);
      }
    }
  }
}

let g = new Graph();
let arr = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < arr.length; i++) {
  g.addVertex(arr[i]);
}
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");
g.print();

// g.bfs("A");
g.dfs("A");

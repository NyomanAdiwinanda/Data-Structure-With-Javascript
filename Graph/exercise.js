const airport = "JAKARTA BANDUNG BOGOR MALANG BATAM BALI BENGKULU MEDAN PALEMBANG PEKANBARU BALIKPAPAN".split(" ");

const routes = [
  ["JAKARTA", "BATAM"],
  ["JAKARTA", "MALANG"],
  ["MALANG", "BOGOR"],
  ["MALANG", "MEDAN"],
  ["MALANG", "PALEMBANG"],
  ["BALI", "BATAM"],
  ["BALI", "BANDUNG"],
  ["BALI", "BALIKPAPAN"],
  ["BALI", "BENGKULU"],
  ["BALIKPAPAN", "BANDUNG"],
];

class Graph {
  constructor() {
    this.adjancencyList = new Map();
  }

  addVertex(airport) {
    this.adjancencyList.set(airport, []);
  }

  addEdge(origin, destination) {
    this.adjancencyList.get(origin).push(destination);
    this.adjancencyList.get(destination).push(origin);
  }

  bfs(start) {
    console.log(start);
    const visited = new Set();
    visited.add(start);
    const queue = [start];

    while (queue.length) {
      const airport = queue.shift();

      const destinations = this.adjancencyList.get(airport);

      for (const destination of destinations) {
        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
          console.log(destination);
        }
      }
    }
  }

  dfs(start, visited = new Set()) {
    console.log(start);

    visited.add(start);

    const destinations = this.adjancencyList.get(start);

    for (const destination of destinations) {
      if (!visited.has(destination)) {
        this.dfs(destination, visited);
      }
    }
  }

  print() {
    console.log(this.adjancencyList);
  }
}

const graph = new Graph();

airport.forEach((airport) => graph.addVertex(airport));
routes.forEach((route) => graph.addEdge(...route));

graph.print();

console.log("");
console.log("BFS");
console.log("");

graph.bfs("JAKARTA");

console.log("");
console.log("DFS");
console.log("");

graph.dfs("JAKARTA");

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// the graph
const adjancencyList = new Map();

// add node
function addNode(airport) {
  adjancencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
  adjancencyList.get(origin).push(destination);
  adjancencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// console.log(adjancencyList);

// breadth first search
function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();

    const destinations = adjancencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log("BFS found it");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

// bfs("PHX");

// depth first search

function dfs(start, visited = new Set(), steps = 0) {
  steps++;
  console.log(start);

  visited.add(start);

  const destinations = adjancencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found bangkok in ${steps} steps`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited, steps);
    }
  }
}

dfs("PHX");

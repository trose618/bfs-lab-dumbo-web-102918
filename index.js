function bfs(rootNode, vertices, edges){

}


function findAdjacent(rootNode, vertices, edges){
  let adjacentNodes = []
  for (let i = 0; i < edges.length; i++){
    let current = edges[i]
    if(current[0]===rootNode){
      adjacentNodes.push(current[1])
    }
    if(current[1]===rootNode){
      adjacentNodes.push(current[0])
    }
  }
  let adjacent = []
  for(let i = 0; i < vertices.length; i++){
    if(adjacentNodes.includes(vertices[i].name)){
      if(!vertices[i].distance){
      adjacent.push(vertices[i])
      }
    }
  }
  return adjacent;
}

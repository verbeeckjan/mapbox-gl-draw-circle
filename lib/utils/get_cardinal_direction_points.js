function minBy(arr, func) {
    const min = Math.min(...arr.map(func));
    return arr.find(item => func(item) === min);
  }
  
  function maxBy(arr, func) {
    const max = Math.max(...arr.map(func));
    return arr.find(item => func(item) === max);
  }
  
  function getCardinalDirectionVertex(vertices, latOrLng){
  return [
    maxBy(vertices, (vertex) => vertex[latOrLng]),
    minBy(vertices, (vertex) => vertex[latOrLng])
  ]
  }
  
  function getNorthSouthVertex(vertices){
    return getCardinalDirectionVertex(vertices, 0)
  }
  function getEastWestVertex(vertices){
    return getCardinalDirectionVertex(vertices, 1)
  }
  
  function getCardinalDirectionPoints(vertices){
    const northAndSouthPoints = getNorthSouthVertex(vertices)
    const eastAndWestPoints = getEastWestVertex(vertices)
    return {
      northAndSouthPoints,
      eastAndWestPoints
    }
  }

module.exports = getCardinalDirectionPoints;
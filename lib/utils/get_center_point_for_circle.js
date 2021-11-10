
const getCardinalDirectionPoints = require('./get_cardinal_direction_points')

function getCenterPointForCircle(vertices){
    const cardinalDirectionPoints = getCardinalDirectionPoints(vertices);
    const westPoint = cardinalDirectionPoints.eastAndWestPoints[1][0]
    const southPoint = cardinalDirectionPoints.northAndSouthPoints[0][1]
    return [westPoint, southPoint]
  }

module.exports = getCenterPointForCircle;
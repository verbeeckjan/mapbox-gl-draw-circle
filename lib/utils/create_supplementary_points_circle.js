import MapboxDraw from '@mapbox/mapbox-gl-draw';
const createVertex = MapboxDraw.lib.createVertex;
const getCardinalDirectionPoints = require('./get_cardinal_direction_points');
const getCenterPointForCircle = require('./get_center_point_for_circle');

function getCardinalDirectionPointsForCircle(vertices){
  const circlePoints = getCardinalDirectionPoints(vertices)
  return [...circlePoints.northAndSouthPoints, ...circlePoints.eastAndWestPoints]
}

function createSupplementaryPointsForCircle(geojson) {
  const { properties, geometry } = geojson;

  if (!properties.user_isCircle) return null;

  const vertices = geometry.coordinates[0].slice(0, -1);
  const cardinalDirectionPoints = getCardinalDirectionPointsForCircle(vertices);
  const centerPoint = getCenterPointForCircle(vertices)
  
  const supplementaryPoints = [...cardinalDirectionPoints, centerPoint].map(point=> createVertex(properties.id, point, `0.${vertices.indexOf(point) !== -1 ? vertices.indexOf(point) : (vertices.length - 1)}`, false))

  return supplementaryPoints;
}

module.exports = createSupplementaryPointsForCircle;
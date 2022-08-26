jest.mock('@mapbox/mapbox-gl-draw/src/lib/create_vertex', ()=>jest.fn());
jest.mock('../../lib/utils/get_cardinal_direction_points', ()=>jest.fn());
jest.mock('../../lib/utils/get_center_point_for_circle', ()=>jest.fn());

describe('CreateSupplementaryPointsForCircle tests', () => {
  const createSupplementaryPointsForCircle = require('../../lib/utils/create_supplementary_points_circle');
  const createVertex = require('@mapbox/mapbox-gl-draw/src/lib/create_vertex');
  const getCardinalDirectionPoints = require('../../lib/utils/get_cardinal_direction_points');
  const getCenterPointForCircle = require('../../lib/utils/get_center_point_for_circle');

  it('should generate four supplementary points when the feature is a circle', () => {
    const mockGeoJSON = {
      properties: {
        user_isCircle: true
      },
      geometry: {
        coordinates: [[ {}, {}, {}, {}, {} ]] // 64 vertices will be present for the circle
      }
    }
    createVertex.mockReturnValue({});
    getCardinalDirectionPoints.mockReturnValue({
      northAndSouthPoints: [[], []],
      eastAndWestPoints: [[], []]
    });
    getCenterPointForCircle.mockReturnValue([0, 0]);
    expect(createSupplementaryPointsForCircle(mockGeoJSON).length).toEqual(5);
  });

  it('should return null if the feature is not a circle', () => {
    const mockGeoJSON = {
      properties: {
        user_isCircle: false
      }
    }
    expect(createSupplementaryPointsForCircle(mockGeoJSON)).toEqual(null);
  });
});
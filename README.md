# mapbox-gl-draw-rounded-circle

We have forked the custom draw circle mode to fix the issues and add some features (see Changelog below):

* forked repo on Github: https://github.com/iamanvesh/mapbox-gl-draw-circle
* published package on NPM: https://www.npmjs.com/package/mapbox-gl-draw-circle

## Usage

### Installation

```
npm install mapbox-gl-draw-rounded-circle
```

```
import {
    CircleMode,
    DragCircleMode,
    DirectMode,
    SimpleSelectMode
} from 'mapbox-gl-draw-rounded-circle';


// userProperties has to be enabled
const draw = new MapboxDraw({
  defaultMode: "draw_circle",
  userProperties: true,
  modes: {
    ...MapboxDraw.modes,
    draw_circle  : CircleMode,
    drag_circle  : DragCircleMode,
    direct_select: DirectMode,
    simple_select: SimpleSelectMode
  }
});

// Add this draw object to the map when map loads
map.addControl(draw);
```

The default radius units are in **kilometers** and initial radius is **2km**.

```
// Provide the default radius as an option to CircleMode
draw.changeMode('draw_circle', { initialRadiusInKm: 0.5 });
```

It fires the same events as the mapbox-gl-draw library. For more information follow this [link](https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md#events).

Sample feature object returned in `draw.create` event
```
{
  "id": "e184898e58feaa5c2c56f20a178ffe2c",
  "type": "Feature",
  "properties": {
    "isCircle": true,
    "center": [
      -0.2472604947478203,
      51.53200220026099
    ],
    "radiusInKm": 2
  },
  "geometry": {
    "coordinates": [], // populated with 64 vertices used to render the circle
    "type": "Polygon"
  }
}
```

## Changelog

### v2.0.0

* Fixed the issue with an exception thrown when center coordinates are missing.
* Fixed the issue with dragPan handler staying disabled when the draw control is removed from map.
* Fixed the issue with the circle points not being strictly at 12, 3, 6, 9 o'clock.
* Add the center point to the circle in edit and drag mode: Orange dot with a white border.
/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
var {
  Component,
  RectPath,
  Shape
} = scene

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'number',
    label: 'depth',
    name: 'depth',
    property: 'depth'
  }]
}

export default class Person extends RectPath(Shape) {

  is3dish() {
    return true
  }

  _draw(context) {
    var {
      left,
      top,
      width,
      height
    } = this.bounds;

    var {
      x: cx,
      y: cy
    } = this.center

    var rx = width / 2
    var ry = height / 2

    context.beginPath()
    context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
    context.fillStyle = '#39b44a'
    context.fill()

    context.beginPath()
    context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
    this.model.fillStyle = {
      type: 'pattern',
      fitPattern: true,
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACgCAYAAACc7ffkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQzJERUQ0MTE5OEMxMUU2ODc5QkUwNTJCQUYxRUI5QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQzJERUQ0MjE5OEMxMUU2ODc5QkUwNTJCQUYxRUI5QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJDMkRFRDNGMTk4QzExRTY4NzlCRTA1MkJBRjFFQjlDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJDMkRFRDQwMTk4QzExRTY4NzlCRTA1MkJBRjFFQjlDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JVB48AAADjtJREFUeNrsnQmU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"
    }
    this.drawFill(context)
  }

  get nature() {
    return NATURE
  }
}

Component.register('person', Person)


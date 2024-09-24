AFRAME.registerComponent('draggable', {
  init: function () {
    var el = this.el;
    el.addEventListener('mousedown', function (evt) {
      el.addEventListener('mousemove', onMouseMove);
    });

    el.addEventListener('mouseup', function (evt) {
      el.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(evt) {
      var newPosition = evt.detail.intersection.point;
      el.setAttribute('position', newPosition);
    }
  }
});

AFRAME.registerComponent('rotatable', {
  init: function () {
    var el = this.el;
    el.addEventListener('mousedown', function (evt) {
      el.addEventListener('mousemove', onRotate);
    });

    el.addEventListener('mouseup', function (evt) {
      el.removeEventListener('mousemove', onRotate);
    });

    function onRotate(evt) {
      var rotation = el.getAttribute('rotation');
      rotation.y += 1;  // Rotate horizontally
      el.setAttribute('rotation', rotation);
    }
  }
});

AFRAME.registerComponent('resizable', {
  init: function () {
    var el = this.el;
    el.addEventListener('wheel', function (evt) {
      var scale = el.getAttribute('scale');
      var delta = evt.deltaY * -0.01;  // Scroll to resize
      scale.x += delta;
      scale.y += delta;
      scale.z += delta;
      el.setAttribute('scale', scale);
    });
  }
});

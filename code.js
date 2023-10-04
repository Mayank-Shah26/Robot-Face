var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background("gold");

var shape1 = ellipse;
var leftSide = 125;
var middle = 200;
var rightSide = 275;
var yValue = 150;
var eyeSize = (randomNumber(1, 30));



fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
shape1(75, 125, 50, 50);
shape1(325, 125, 50, 50);

fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
rect(75, 100, 250, 200);

fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
shape1(leftSide, yValue, eyeSize);
shape1(middle, yValue, eyeSize);
shape1(rightSide, yValue, eyeSize);


fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(leftSide, yValue, 6, (randomNumber(1,8)));
regularPolygon(middle, yValue, 6, (randomNumber(1,8)));
regularPolygon(rightSide, yValue, 6, (randomNumber(1,8)));

fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
rect((randomNumber(100, 200)), 245, 100, 50);

fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
rect(185, 200, 30, 30);




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

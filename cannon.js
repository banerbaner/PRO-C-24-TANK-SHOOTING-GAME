class Cannon {
  constructor(x, y, baseWidth, baseHeight, headWidth, headLength) {
    var baseOptions = { isStatic: true }
    var topOptions = { isStatic: true }
    var headOptions = { isStatic: true, angle: 100 }

    this.base = Bodies.rectangle(x, y, baseWidth, baseHeight, baseOptions)
    this.baseWidth = baseWidth;
    this.baseHeight = baseHeight;

    this.top = Bodies.circle(x, y, (baseWidth / 2) - 10, topOptions);

    this.head = Bodies.rectangle(x + (baseWidth / 2), y, headLength, headWidth, headOptions);
    this.headLength = headLength;
    this.headWidth = headWidth;

    World.add(world, this.base);
    World.add(world, this.top);
    World.add(world, this.head);

  }
  display() {
    var basePos = this.base.position;
    var topPos = this.top.position;
    var headPos = this.head.position;
    var headAngle = this.head.angle;

    rectMode(CENTER);
    fill("rgb(075,082,088)");

    strokeWeight(1);
    ellipse(topPos.x, topPos.y, this.baseWidth - 10);

    rect(headPos.x, headPos.y, this.headWidth, this.headLength);
    
    rect(basePos.x, basePos.y, this.baseWidth, this.baseHeight);

  }
};

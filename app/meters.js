const one = function (i) {
  if (i === 1) {
    this.accent.current.play();
  }
};

const two = function (i) {
  if (i === 1) {
    this.accent.current.play();
  } else if (i === 2) {
    this.regular.current.play();
  }
};

const three = function (i) {
  if (i === 1) {
    this.accent.current.play();
  } else if (i === 2) {
    this.regular.current.play();
  } else if (i === 3) {
    this.regular.current.play();
  }
};

const five = function (i) {
  if (i === 1) {
    this.accent.current.play();
  } else if (i === 2) {
    this.regular.current.play();
  } else if (i === 3) {
    this.regular.current.play();
  } else if (i === 4) {
    this.accent.current.play();
  } else if (i === 5) {
    this.regular.current.play();
  }
};

const fourFour = function (i) {
  if (i === 1) {
    //current is necessary for ref
    this.accent.current.play();
  } else if (i === 2) {
    this.regular.current.play();
  } else if (i === 3) {
    this.regular.current.play();
  } else if (i === 4) {
    this.regular.current.play();
  }
};

const sixEight = function (i) {
  if (i === 1) {
    //current is necessary for ref
    this.accent.current.play();
  } else if (i === 2) {
    this.regular.current.play();
  } else if (i === 3) {
    this.regular.current.play();
  } else if (i === 4) {
    this.accent.current.play();
  } else if (i === 5) {
    this.regular.current.play();
  } else if (i === 6) {
    this.regular.current.play();
  }
};

const meters = [
  //this is 0, it will never be a function
  () => {},
  one,
  two,
  three,
  fourFour,
  five,
  sixEight,
];

export default meters;

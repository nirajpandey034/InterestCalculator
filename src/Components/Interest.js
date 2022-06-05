//functions for simple interest
const getSimpleInterest = (principle, time, roi) => {
  if (principle !== "" && time !== "" && roi !== "") {
    return (principle * time * roi) / 100;
  }
};

const getSimpleTime = (principle, interest, roi) => {
  if (principle !== "" && interest !== "" && roi !== "") {
    return (interest * 100) / (principle * roi);
  }
};

const getSimpleROI = (principle, interest, time) => {
  if (principle !== "" && interest !== "" && time !== "") {
    return (interest * 100) / (principle * time);
  }
};

const getSimplePrinciple = (roi, interest, time) => {
  if (roi !== "" && interest !== "" && time !== "") {
    return (interest * 100) / (roi * time);
  }
};

//functions for compound interest
const getCompoundInterest = (principle, time, roi) => {
  if (principle !== "" && time !== "" && roi !== "") {
    const interest = principle * Math.pow(1 + roi / 100, time);
    return interest;
  }
};

const getCompoundTime = (principle, interest, roi) => {
  if (principle !== "" && interest !== "" && roi !== "") {
    return (interest * 100) / (principle * roi);
  }
};

const getCompoundROI = (principle, interest, time) => {
  if (principle !== "" && interest !== "" && time !== "") {
    return (interest * 100) / (principle * time);
  }
};

const getCompoundPrinciple = (roi, interest, time) => {
  if (roi !== "" && interest !== "" && time !== "") {
    return (interest * 100) / (roi * time);
  }
};

export {
  getSimpleInterest,
  getSimpleTime,
  getSimpleROI,
  getSimplePrinciple,
  getCompoundInterest,
  getCompoundTime,
  getCompoundROI,
  getCompoundPrinciple,
};

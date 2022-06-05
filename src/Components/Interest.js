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
    let interest = principle * Math.pow(1 + roi / 100, time*1);
    return interest;
  }
};

//wrong
const getCompoundTime = (principle, interest, roi) => {
  if (principle !== "" && interest !== "" && roi !== "") {
    let result = (Math.log(interest/principle)) / (1 * (Math.log(1 + (roi))));
    return result;
  }
};

//wrong
const getCompoundROI = (principle, interest, time) => {
  if (principle !== "" && interest !== "" && time !== "") {
    let result = 1 * (Math.pow( (interest/principle), (1/(time) ) ) - 1 );
    console.log(result)
    return result;
  }
};
 //wrong
const getCompoundPrinciple = (roi, interest, time) => {
  if (roi !== "" && interest !== "" && time !== "") {

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

//functions for simple interest
const getSimpleInterest = (principle, time, roi) => {
  if (principle !== "" && time !== "" && roi !== "") {
    return (principle * time * roi) / 100;
  }
};

const getTime = (principle, interest, roi) => {
  if (principle !== "" && interest !== "" && roi !== "") {
    return (interest * 100) / (principle * roi);
  }
};

const getROI = (principle, interest, time) => {
  if (principle !== "" && interest !== "" && time !== "") {
    return (interest * 100) / (principle * time);
  }
};

const getPrinciple = (roi, interest, time) => {
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

export { getSimpleInterest, getTime, getROI, getPrinciple, getCompoundInterest };

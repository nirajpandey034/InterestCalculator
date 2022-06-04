const getSimpleInterest = (principle, time, roi) => {
  if (principle !== "" && time !== "" && roi !== "") {
    return (principle * time * roi) / 100;
  }
};

const getCompoundInterest = (principle, time, roi) => {
  if (
    principle !== "" &&
    time !== "" &&
    roi !== ""
  ) {
    const interest = principle * (Math.pow((1 + roi / 100), time));
    return interest;
  }
};

export { getSimpleInterest, getCompoundInterest };

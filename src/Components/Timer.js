import React, { useState, useEffect } from "react";

function Timer(props) {
  const [time, setTime] = useState(props.time);

  let myTimeout;
  useEffect(() => {
    if(time > 0)
        countdown();

    return (()=>{
        clearTimeout(myTimeout);
    })
  }, [time]);
  function countdown(){
    if (time > 0) {
        myTimeout = setTimeout(() => {
        console.log(time);
        setTime(time - 1);
        countdown();
      }, 1000);
    }
    else{
        return;
    }

  };
  return <p>Redirecting to home in {time} Seconds..</p>;
}

export default Timer;

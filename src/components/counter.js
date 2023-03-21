import React, { useEffect, useState } from 'react';

function Count() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const limit1 = 200;
  const limit2 = 100;
  const limit3 = 250;

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount + 1 === limit1) {
          clearInterval(intervalId1);
        }
        return prevCount + 1;
      });
    }, 8);

    const intervalId2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount + 1 === limit2) {
          clearInterval(intervalId2);
        }
        return prevCount + 1;
      });
    }, 15);

    const intervalId3 = setInterval(() => {
      setCount3((prevCount) => {
        if (prevCount + 1 === limit3) {
          clearInterval(intervalId3);
        }
        return prevCount + 1;
      });
    }, 5);

    // cleanup function to clear intervals
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [limit1, limit2, limit3]);

  return (
    <div className="counters">
      <div className="counter1">
        <div className="count-container">
          <span className="count1">+{count1}</span>
        </div>
        <span className="text">Clients</span>
      </div>
      <div className="counter2">
        <div className="count-container">
          <span className="count2">+{count2}</span>
        </div>
        <span className="text">Compounds</span>
      </div>
      <div className="counter3">
        <div className="count-container">
          <span className="count3">+{count3}</span>
        </div>
        <span className="text">Inquiries</span>
      </div>
      <div className="banner-shape"></div>
    </div>
  );
}

export default Count;

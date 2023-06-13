import React, { useState, useEffect } from "react";

export default function License() {
  const [username, setUsername] = useState("");
  const [driverCount, setDriverCount] = useState(0);
  const [noAccidentCount, setNoAccidentCount] = useState(0);
  const [returnRate, setReturnRate] = useState(0);

  return (
    <div className="licenseContentsBox">
      <h3 className="username">{username}</h3>
      <h4 className="driverCount">{driverCount}</h4>
      <h4 className="noAccidentCount">{noAccidentCount}</h4>
      <h4 className="returnRate">{returnRate}</h4>
    </div>
  );
}

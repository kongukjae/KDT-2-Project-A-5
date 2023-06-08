import React, { useEffect, useState } from "react";
import { DriverData } from "../../src/models/driver";

interface DriverContentsBoxProps {
  driverName: string;
  driverOperationsCount: string;
  driverNoAccidentCount: string;
  driverGoodTag: string[];
  driverBadTag: string[];
}

const driverData = (): JSX.Element => {
  const [driver, setDriver] = useState<DriverContentsBoxProps[]>([]);

  useEffect(() => {
    setDriver(DriverData);
    console.log("driverData 불러옴");
  }, []);

  return (
    <>
      {driver.length > 0 ? (
        driver.map((element: DriverContentsBoxProps) => (
          <div className="driverContentsBox">
            <div className="driverName">{element.driverName}</div>
            <div className="driverOperationCount">
              {element.driverOperationsCount}
            </div>
            <div className="driverNoAccidentCount">
              {element.driverNoAccidentCount}
            </div>
            <div className="driverGoodTag">{element.driverGoodTag}</div>
            <div className="driverBadTag">{element.driverBadTag}</div>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default driverData;

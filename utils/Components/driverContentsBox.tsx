import React, { useEffect, useState } from "react";
import { DriverData } from "../../src/models/driver";
import "../../src/views/css/driverArea.css";

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
    setDriver(DriverData.slice(0, 5)); // slice 메서드를 이용하여 처음 5개 데이터만 선택
  }, []);

  return (
    <>
      {driver.length > 0 ? (
        driver.map((element: DriverContentsBoxProps) => (
          <div className="driverContentsBox">
            <div className="driverInformation">
              <div className="driverName">{element.driverName}</div>
              {/* <div className="driverOperationCount">
                {element.driverOperationsCount}
              </div> */}
              <div className="driverNoAccidentCount">
                {element.driverNoAccidentCount}
              </div>
              <div className="driverGoodTag">{element.driverGoodTag}</div>
              <div className="driverBadTag">{element.driverBadTag}</div>
            </div>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default driverData;

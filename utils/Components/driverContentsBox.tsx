import React from "react";
interface DriverContentsBoxProps {
  driverName: string;
  driverOperationsCount: string;
  driverNoAccidentCount: string;
  driverGoodTag: string[];
  driverBadTag: string[];
}

export default function DriverContentsBox(props: DriverContentsBoxProps) {
  const { driverName, driverOperationsCount, driverNoAccidentCount, driverGoodTag, driverBadTag } =
    props;

  return (
    <div className="driverContentsBox">
      <div className="driverName">{driverName}</div>
      <div className="driverOperationsCount">{driverOperationsCount}</div>
      <div className="driverNoAccidentCount">{driverNoAccidentCount}</div>
      <div className="driverGoodTag">{driverGoodTag}</div>
      <div className="driverBadTag">{driverBadTag}</div>
    </div>
  );
}

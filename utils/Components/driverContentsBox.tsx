import React from "react";

interface DriverContentsBoxProps {
  driverName: string;
  driverNoAccidentCount: string;
  driverGoodTag: string;
  driverBadTag: string;
}

// interface DriverContentsBoxProps {
//   [driverName: string]: string;
// }

export default function DriverContentsBox(props: DriverContentsBoxProps) {
  const { driverName, driverNoAccidentCount, driverGoodTag, driverBadTag } =
    props;

  return (
    <div className="driverContentsBox">
      <div className="driverName">{driverName}</div>
      <div className="driverNoAccidentCount">{driverNoAccidentCount}</div>
      <div className="driverGoodTag">{driverGoodTag}</div>
      <div className="driverBadTag">{driverBadTag}</div>
    </div>
  );
}

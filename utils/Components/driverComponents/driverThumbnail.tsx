import React, { useState, useEffect } from "react";

interface DriverBoxProps {
  driverName: string;
  driverNoAccidentCount: string;
  driverGoodTag: string;
  driverBadTag: string;
}

export default function ContentBox({
  driverName,
  driverNoAccidentCount,
  driverGoodTag,
  driverBadTag,
}: DriverBoxProps) {
  return (
    <div className="driverContentsBox">
      <div className="driverName">{driverName}</div>
      <div className="driverNoAccidentCount">{driverNoAccidentCount}</div>
      <div className="driverGoodTag">{driverGoodTag}</div>
      <div className="driverBadTag">{driverBadTag}</div>
    </div>
  );
}

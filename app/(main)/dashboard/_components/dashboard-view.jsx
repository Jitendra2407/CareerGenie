"use client"

import React from 'react'

const DashboardView = ({insights}) => {

  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()){
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";    
    }
  };

  

  return <div>DashboardView</div>;
}

export default DashboardView;

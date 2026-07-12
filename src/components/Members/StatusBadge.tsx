import React from "react";

export default function StatusBadge({ status, type = "status" }:any) {
  if (type === "membership") {
    const getMembershipBadge = (membership:any) => {
      switch (membership) {
        case "Premium":
          return "bg-[#1E293B] text-white";
        case "Standard":
          return "bg-[#FFEDD5] text-[#9A3412]";
        case "Basic":
        default:
          return "bg-[#F1F5F9] text-[#475569]";
      }
    };

    return (
      <span
        className={`rounded px-2 py-0.5 text-[10px] font-medium ${getMembershipBadge(
          status
        )}`}
      >
        {status}
      </span>
    );
  }

  const getStatusBadge = (statusState:any) => {
    switch (statusState) {
      case "Active":
        return "bg-[#E6F4EA] text-[#2D7D46]";
      case "Expired":
        return "bg-[#FCE8E6] text-[#D93025]";
      case "Suspended":
      default:
        return "bg-[#E8EAED] text-[#5F6368]";
    }
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusBadge(
        status
      )}`}
    >
      {status}
    </span>
  );
}
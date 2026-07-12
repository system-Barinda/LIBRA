import React from "react";

const styles = {
  Active: "bg-green-100 text-green-700",
  Expired: "bg-orange-100 text-orange-700",
  Suspended: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      <span
        className={`mr-2 h-2 w-2 rounded-full ${
          status === "Active"
            ? "bg-green-500"
            : status === "Expired"
            ? "bg-orange-500"
            : "bg-red-500"
        }`}
      />
      {status}
    </span>
  );
};

export default StatusBadge;
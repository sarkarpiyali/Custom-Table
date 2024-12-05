import React from "react";
import FilterInput from "./FilterInput";

const TableHeader = ({ columns, sortConfig, onSort, filters, onFilterChange, styles }) => {
  return (
    <thead style={{ backgroundColor: styles.headerBgColor, color: styles.headerFontColor }}>
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            onClick={() => col.sortable && onSort(col.key)}
            style={{ fontSize: styles.headerFontSize }}
          >
            {col.title}
            {col.sortable && (
              <span>
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? " 🔼"
                    : " 🔽"
                  : " ⬍"}
              </span>
            )}
            {col.filterable && (
              <FilterInput
                value={filters[col.key] || ""}
                onChange={(value) => onFilterChange(col.key, value)}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

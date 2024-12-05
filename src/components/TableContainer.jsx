import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./TableContainer.css";

const TableContainer = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filters, setFilters] = useState({});
  const [styles, setStyles] = useState({
    headerFontSize: "16px",
    bodyFontSize: "14px",
    headerBgColor: "#f0f0f0",
    bodyBgColor: "#ffffff",
    headerFontColor: "#000000",
    bodyFontColor: "#000000",
  });

  const sortedAndFilteredData = useMemo(() => {
    let filteredData = data;

    // Filters
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filteredData = filteredData.filter((item) =>
          String(item[key]).toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    });

    // Sorting
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filteredData;
  }, [data, filters, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key
          ? prev.direction === "asc"
            ? "desc"
            : prev.direction === "desc"
            ? null
            : "asc"
          : "asc",
    }));
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="table-container">
      <div className="table-styles">
        <input
          type="color"
          value={styles.headerBgColor}
          onChange={(e) => setStyles({ ...styles, headerBgColor: e.target.value })}
        />
        <input
          type="color"
          value={styles.bodyBgColor}
          onChange={(e) => setStyles({ ...styles, bodyBgColor: e.target.value })}
        />
        <label>
          Header Font Size:
          <input
            type="number"
            value={parseInt(styles.headerFontSize)}
            onChange={(e) =>
              setStyles({ ...styles, headerFontSize: `${e.target.value}px` })
            }
          />
        </label>
      </div>

      <table>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
          filters={filters}
          onFilterChange={handleFilterChange}
          styles={styles}
        />
        <TableBody data={sortedAndFilteredData} columns={columns} styles={styles} />
      </table>
    </div>
  );
};

export default TableContainer;

import React from "react";

const TableBody = ({ data, columns, styles }) => {
  return (
    <tbody style={{ backgroundColor: styles.bodyBgColor, color: styles.bodyFontColor }}>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((col) => (
            <td key={col.key} style={{ fontSize: styles.bodyFontSize }}>
              {row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

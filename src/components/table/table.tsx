import styles from "./table.module.scss";

interface TableProps {
  columns: any[];
  data: any[];
  caption: string;
}

function Table({ columns, data, caption }: TableProps) {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>{caption}</caption>
      {columns.map((column, index) => (
        <tr key={index} className={styles.tr}>
          <th className={styles.th}>{column}</th>
          {data[index] >= 80 && data[index] < 95 ? (
            <td className={styles.td} style={{ color: "#ea893f" }}>
              {data[index]}
            </td>
          ) : data[index] > 95 ? (
            <td className={styles.td} style={{ color: "#cc5755" }}>
              {data[index]}
            </td>
          ) : data[index] > 70 && data[index] < 80 ? (
            <td className={styles.td} style={{ color: "#8cc800" }}>
              {data[index]}
            </td>
          ) : (
            <td className={styles.td}>{data[index]}</td>
          )}
        </tr>
      ))}
    </table>
  );
}

function TableHorizontal({ columns, data, caption }: TableProps) {
  return (
    <table className={styles.tableH} border={1}>
      <caption className={styles.captionH}>{caption}</caption>
      <tr className={styles.trH}>
        {columns.map((column, index) => (
          <th key={index} className={styles.thH}>
            {column}
          </th>
        ))}
      </tr>
      <tr className={styles.trH}>
        {data.map((data, index) =>
          data > 80 ? (
            <td key={index} className={styles.tdH} style={{ color: "green" }}>
              {data}
            </td>
          ) : (
            <td key={index} className={styles.tdH}>
              {data}
            </td>
          )
        )}
      </tr>
    </table>
  );
}

export { Table, TableHorizontal };

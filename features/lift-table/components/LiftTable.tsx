import react, { useMemo, useEffect, useState } from 'react';
import { useTable, Column } from 'react-table';
import { lift } from '../../lift-tracking/state';

type Props = {
  data: lift[],
  columns: any
}

const LiftTable = (props: Props) => {

  const data = useMemo(() => 
    props.data, [props.data]
  )
  
  const columns = useMemo(() =>
    props.columns, [props.columns] 
  )

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }= useTable({ columns, data });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              // eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                // eslint-disable-next-line react/jsx-key
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default LiftTable;
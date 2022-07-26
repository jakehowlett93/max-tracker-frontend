import react, { useMemo, useEffect, useState } from 'react';
import { useTable, Column } from 'react-table';

type Props = {
  previousLifts: {
    exercise: string,
    weight: string
  }[]
}

const LiftTable = ({ previousLifts }: Props) => {

  const data = previousLifts.map((lift) => {
    return {col1: lift.exercise, col2: lift.weight};
  })

  const columns: Column<{col1: string; col2: string;}>[] = useMemo(
    () => [
      {
        Header: 'Exercise',
        accessor: 'col1',
      },
      {
        Header: 'Weight',
        accessor: 'col2',
      },
    ], []
  )

  const previousLiftsTable = useTable({ columns, data });
  return (
    <table>
    </table>
  )
}

export default LiftTable;
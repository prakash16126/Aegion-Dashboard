import React, { useMemo } from 'react';

type Row = {
  id: number
  tag: string
  type: string
  make: string
  cal: string
  report: string
}

const DEFAULT_ROWS: Row[] = [
  { id: 1, tag: 'TT-338857A', type: 'Smart', make: 'Rosemount', cal: '22-04-24', report: '123546' },
  { id: 2, tag: 'PT-338857A', type: 'Smart', make: 'Rosemount', cal: '24-04-24', report: '123555' },
  { id: 3, tag: 'FT-338857A', type: 'Smart', make: 'Rosemount', cal: '26-04-24', report: '123586' },
  { id: 4, tag: 'LT-338857A', type: 'Smart', make: 'Rosemount', cal: '04-05-24', report: '123542' },
]

type Props = {
  rows?: Row[]
  search?: string
}

export default function InventoryList({ rows = DEFAULT_ROWS, search = '' }: Props) {
  const filtered = useMemo(() => {
    const q = (search || '').trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) =>
      [String(r.id), r.tag, r.type, r.make, r.cal, r.report]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [search, rows])

  return (
    <div className="p-6">
      <div className="mb-6">
        <button className="border border-black rounded px-6 py-2 font-semibold bg-white dark:bg-gray-700 dark:text-gray-100">Inventory List</button>
      </div>
      <div className="bg-white rounded-lg p-4 dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="text-gray-500 text-base mb-2 dark:text-gray-300">Components</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 bg-gray-50">
                <th className="p-2">S NO.</th>
                <th className="p-2">TAG NO.</th>
                <th className="p-2">INST. TYPE</th>
                <th className="p-2">MAKE</th>
                <th className="p-2">CAL DATE</th>
                <th className="p-2">REPORT NO.</th>
                <th className="p-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-500">
                    No components found.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="border-t hover:bg-gray-50">
                    <td className="p-2">{r.id}</td>
                    <td className="p-2 text-blue-900">{r.tag}</td>
                    <td className="p-2">{r.type}</td>
                    <td className="p-2">{r.make}</td>
                    <td className="p-2">{r.cal}</td>
                    <td className="p-2">{r.report}</td>
                    <td className="p-2"><button className="text-blue-600 underline text-sm">View Tag</button></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

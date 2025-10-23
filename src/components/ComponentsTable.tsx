import React, { useMemo } from 'react'

type Row = {
  id: number
  tag: string
  type: string
  make: string
  cal: string
  report: string
}

const DEFAULT_ROWS: Row[] = [
  { id: 1, tag: 'TT-338857A', type: 'Smart', make: 'Rosenmount', cal: '22-04-24', report: '123456' },
  { id: 2, tag: 'PT-338857A', type: 'Smart', make: 'Rosenmount', cal: '24-04-24', report: '123555' },
  { id: 3, tag: 'FT-338857A', type: 'Smart', make: 'Rosenmount', cal: '26-04-24', report: '123586' },
  { id: 4, tag: 'LT-338857A', type: 'Smart', make: 'Rosenmount', cal: '04-05-24', report: '123542' },
]

type Props = {
  rows?: Row[]
  onAdd?: () => void
  search: string
}

export default function ComponentsTable({ rows = DEFAULT_ROWS, onAdd, search }: Props) {
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) =>
      [String(r.id), r.tag, r.type, r.make, r.cal, r.report]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [search, rows])

  return (
    <div className="bg-white rounded-md p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 bg-gray-50">
              <th scope="col" className="p-3">S NO.</th>
              <th scope="col" className="p-3">TAG NO.</th>
              <th scope="col" className="p-3">INST. TYPE</th>
              <th scope="col" className="p-3">MAKE</th>
              <th scope="col" className="p-3">CAL DATE</th>
              <th scope="col" className="p-3">REPORT NO.</th>
              <th scope="col" className="p-3">ACTION</th>
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
                  <td className="p-3 text-gray-600 align-top">{r.id}</td>
                  <td className="p-3 text-blue-900 align-top">{r.tag}</td>
                  <td className="p-3 align-top">{r.type}</td>
                  <td className="p-3 align-top">{r.make}</td>
                  <td className="p-3 align-top">{r.cal}</td>
                  <td className="p-3 align-top">{r.report}</td>
                  <td className="p-3 align-top">
                    <button className="text-blue-600 underline text-sm" type="button">
                      View Tag
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

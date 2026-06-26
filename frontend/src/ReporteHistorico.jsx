import React from 'react';

export default function ReporteHistorico() {
  
  const registros = [
    { fecha: '2026-06-25', placa: 'ABC-123', tipo: 'Carro', ingreso: '06:30 PM', salida: '08:15 PM', total: '$11.550', estado: 'Pagado' },
    { fecha: '2026-06-25', placa: 'MNO-456', tipo: 'Moto', ingreso: '04:10 PM', out: '05:30 PM', total: '$4.400', estado: 'Pagado' },
    { fecha: '2026-06-25', placa: 'XYZ-789', tipo: 'Carro', ingreso: '01:15 PM', out: '03:45 PM', total: '$16.500', estado: 'Pagado' },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm space-y-4 m-6 overflow-hidden">
      <div className="flex justify-between items-center flex-wrap gap-4 border-b pb-4">
        <input 
          type="text" 
          placeholder="Buscar por placa..." 
          className="border border-gray-200 px-4 py-2 rounded-lg text-sm outline-none focus:border-[#0f2c74]"
        />
        <div className="flex gap-2">
          <button className="bg-red-50 text-red-600 font-bold px-4 py-2 text-xs rounded-md hover:bg-red-100 transition-colors">Exportar PDF</button>
          <button className="bg-green-50 text-green-600 font-bold px-4 py-2 text-xs rounded-md hover:bg-green-100 transition-colors">Exportar Excel</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="p-4">Fecha</th>
              <th className="p-4">Placa</th>
              <th className="p-4">Tipo</th>
              <th className="p-4">Hora Ingreso</th>
              <th className="p-4">Hora Salida</th>
              <th className="p-4">Valor Cobrado</th>
              <th className="p-4">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            {registros.map((fila, id) => (
              <tr key={id} className="hover:bg-gray-50/70 transition-colors">
                <td className="p-4 text-gray-800">{fila.fecha}</td>
                <td className="p-4 font-mono font-bold text-gray-900">{fila.placa}</td>
                <td className="p-4">{fila.tipo}</td>
                <td className="p-4 text-xs text-gray-400">{fila.ingreso}</td>
                <td className="p-4 text-xs text-gray-400">{fila.salida || '--:--'}</td>
                <td className="p-4 text-gray-900 font-bold">{fila.total}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-[11px] font-bold px-2.5 py-1 rounded-full">{fila.estado}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
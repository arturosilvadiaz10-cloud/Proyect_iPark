import React, { useState } from 'react';

export default function MapaCeldas() {
  const [celdaFlotante, setCeldaFlotante] = useState(null);

  
  const celdas = [
    { id: 'A-01', estado: 'ocupado', placa: 'ABC-123', horaIngreso: '08:30 AM' },
    { id: 'A-02', estado: 'ocupado', placa: 'XYZ-789', horaIngreso: '09:15 AM' },
    { id: 'A-03', estado: 'ocupado', placa: 'JHN-789', horaIngreso: '09:45 AM' },
    { id: 'A-04', estado: 'disponible' },
    { id: 'A-05', estado: 'reservado',  },
    { id: 'A-06', estado: 'ocupado', placa: 'MNO-456', horaIngreso: '10:02 AM' },
    { id: 'A-07', estado: 'disponible' },
    { id: 'A-08', estado: 'disponible' },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm space-y-4 m-6">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="font-bold text-gray-800 text-lg">Distribución de Bahías (Sección A)</h2>
        <div className="flex gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-green-500 rounded-sm"></span> Libres</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-red-500 rounded-sm"></span> Ocupadas</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#f19914] rounded-sm"></span> Reservadas</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg relative">
        {celdas.map((celda) => (
          <div
            key={celda.id}
            onMouseEnter={() => celda.estado === 'ocupado' && setCeldaFlotante(celda.id)}
            onMouseLeave={() => setCeldaFlotante(null)}
            className={`p-4 rounded-lg border-b-4 border-black/20 text-center font-bold text-white cursor-pointer relative transition-transform transform hover:scale-105 ${
              celda.estado === 'ocupado' ? 'bg-red-500' : celda.estado === 'reservado' ? 'bg-[#f19914]' : 'bg-green-500'
            }`}
          >
            {celda.id}

            
            {celdaFlotante === celda.id && (
              <div className="absolute bg-gray-900 text-white text-xs p-3 rounded-md -top-16 left-1/2 -translate-x-1/2 z-20 shadow-lg w-32 border border-gray-700">
                <p className="font-bold text-yellow-400">{celda.placa}</p>
                <p className="text-[10px] text-gray-300 mt-0.5">Ingreso: {celda.horaIngreso}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
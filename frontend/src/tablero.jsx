import React from 'react';

export default function Tablero() {
  return (
    <div className="p-6 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Celdas Totales</p>
          <p className="text-4xl font-black text-gray-800 mt-2">500</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Celdas Ocupadas</p>
          <p className="text-4xl font-black text-red-600 mt-2">412</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Celdas Disponibles</p>
          <p className="text-4xl font-black text-green-600 mt-2">88</p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-gray-700 mb-4 text-base">Utilización Semanal</h3>
          <div className="h-44 flex items-end justify-between pt-4 px-2 border-b border-gray-200">
            <div className="w-8 bg-[#0f2c74] rounded-t h-[60%] transition-all hover:opacity-80"></div>
            <div className="w-8 bg-[#f19914] rounded-t h-[75%] transition-all hover:opacity-80"></div>
            <div className="w-8 bg-[#0f2c74] rounded-t h-[90%] transition-all hover:opacity-80"></div>
            <div className="w-8 bg-[#0f2c74] rounded-t h-[45%] transition-all hover:opacity-80"></div>
            <div className="w-8 bg-[#f19914] rounded-t h-[85%] transition-all hover:opacity-80"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
            <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <h3 className="font-bold text-gray-700 mb-2">Vehículos por Tipo</h3>
          <div className="flex items-center justify-around h-full">
            <div className="w-28 h-28 rounded-full border-[14px] border-[#0f2c74] border-r-[#f19914] border-b-red-500 flex items-center justify-center font-bold text-gray-700">
              74%
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="inline-block w-3 h-3 bg-[#0f2c74] mr-2 rounded-full"></span> Carro</p>
              <p><span className="inline-block w-3 h-3 bg-[#f19914] mr-2 rounded-full"></span> Moto</p>
              <p><span className="inline-block w-3 h-3 bg-red-500 mr-2 rounded-full"></span> Otros</p>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-[#f19914] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors">
        REGISTRAR ENTRADA RÁPIDA
      </button>
    </div>
  );
}
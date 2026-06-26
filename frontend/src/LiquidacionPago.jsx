import React from 'react';

export default function LiquidacionPago() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-sm space-y-6 m-6">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-3">Salida y Liquidación</h3>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between text-sm"><span className="text-gray-500">Placa:</span> <span className="font-mono font-bold text-gray-800">XYZ-789</span></div>
          <div className="flex justify-between text-sm"><span className="text-gray-500">Tiempo total:</span> <span className="font-bold text-gray-800">3h 15m</span></div>
          <div className="flex justify-between text-sm"><span className="text-gray-500">Tarifa por minuto:</span> <span className="font-bold text-gray-800">$110 COP</span></div>
        </div>

        <div className="border-t pt-4 flex justify-between items-center">
          <span className="text-gray-800 font-bold text-lg">Total a Pagar:</span>
          <span className="text-3xl font-black text-[#0f2c74]">$21.450</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <button className="border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Efectivo
          </button>
          <button className="bg-[#0f2c74] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors">
            Tarjeta / Digital
          </button>
        </div>
        
        <button className="w-full bg-green-600 text-white font-bold py-3.5 rounded-lg shadow hover:bg-green-700 transition-colors">
          CONFIRMAR PAGO Y SALIDA
        </button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';

export default function RegistroEntrada() {
  const [placa, setPlaca] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('carro');
  const [qrGenerado, setQrGenerado] = useState(false);

  const manejarRegistro = (evento) => {
    evento.preventDefault();
    if (placa.trim() !== '') {
      setQrGenerado(true);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
     
      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <h3 className="font-bold text-gray-800 text-lg">Ingreso de Vehículo</h3>
        <form onSubmit={manejarRegistro} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Placa del Vehículo</label>
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
              placeholder="ABC123"
              maxLength={6}
              className="w-full border-2 border-gray-200 rounded-lg p-3 font-mono text-xl tracking-widest focus:border-[#0f2c74] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Tipo de Vehículo</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTipoVehiculo('carro')}
                className={`p-4 border-2 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${
                  tipoVehiculo === 'carro' ? 'border-[#0f2c74] bg-blue-50 text-[#0f2c74]' : 'border-gray-200 text-gray-500'
                }`}
              >
                🛞 <span>Carro</span>
              </button>
              <button
                type="button"
                onClick={() => setTipoVehiculo('moto')}
                className={`p-4 border-2 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${
                  tipoVehiculo === 'moto' ? 'border-[#0f2c74] bg-blue-50 text-[#0f2c74]' : 'border-gray-200 text-gray-500'
                }`}
              >
                Item 🏍️ <span>Moto</span>
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#0f2c74] text-white font-bold p-3.5 rounded-lg hover:bg-blue-900 transition-colors">
            GENERAR TICKET Y QR
          </button>
        </form>
      </div>

    
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center border-2 border-dashed border-gray-200 min-h-[300px]">
        {qrGenerado ? (
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 px-3 py-1 rounded-full">Ticket Activo</span>
            
           
            <div className="w-44 h-44 bg-gray-100 border-4 border-white shadow-md p-2 flex items-center justify-center mx-auto">
              <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80">
                {[...Array(16)].map((_, indice) => (
                  <div key={indice} className={`rounded-sm ${indice % 3 === 0 || indice % 5 === 0 ? 'bg-black' : 'bg-transparent'}`}></div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono font-bold text-gray-800 text-lg">{placa}</p>
              <p className="text-xs text-gray-400 mt-0.5">Entrada: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 text-sm text-center">Completa los campos para generar el código QR de acceso.</p>
        )}
      </div>
    </div>
  );
}
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2025', value: 15 },
  { year: '2026', value: 25 },
  { year: '2027', value: 35 },
  { year: '2028', value: 55 },
  { year: '2029', value: 65 },
  { year: '2030', value: 75 },
];

export default function SimuladorMovil() {
  return (
    <div className="block md:hidden w-screen px-4 py-10 bg-blue-950 text-white space-y-6">
      {/* Formulario */}
      <div className="space-y-4">
        <div>
          <label className="text-amber-400 block mb-1">Inversión inicial</label>
          <input type="text" placeholder="Monto" className="w-full px-4 py-2 rounded-md bg-white text-black" />
        </div>
        <div>
          <label className="text-amber-400 block mb-1">Plazo</label>
          <select className="w-full px-4 py-2 rounded-md bg-white text-black">
            <option>años/meses</option>
          </select>
        </div>
        <div>
          <label className="text-amber-400 block mb-1">Tasa de interés</label>
          <select className="w-full px-4 py-2 rounded-md bg-white text-black">
            <option>% anual</option>
          </select>
        </div>
        <div>
          <label className="text-amber-400 block mb-1">Nivel de riesgo</label>
          <select className="w-full px-4 py-2 rounded-md bg-white text-black">
            <option>Seleccione</option>
          </select>
        </div>
        <div className="flex justify-between gap-2 pt-2">
          <button className="bg-amber-400 text-black px-4 py-2 rounded-md text-sm">Calcular</button>
          <button className="bg-amber-400 text-black px-4 py-2 rounded-md text-sm">Reset</button>
          <button className="bg-amber-400 text-black px-4 py-2 rounded-md text-sm">Comparar</button>
        </div>
      </div>

      {/* Gráfico */}
      <div>
        <h3 className="text-lg text-amber-400 font-semibold mb-4 text-center">Resumen de resultados</h3>
        <div className="h-72 bg-indigo-950">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="url(#gradient)"
                radius={[10, 10, 0, 0]}
                label={{ position: 'top', fill: '#fff', fontWeight: 'bold' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resultados */}
      <div className="space-y-4">
        <div>
          <p className="text-amber-400 font-semibold">Monto final</p>
          <div className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm">COP $000.000.000</div>
        </div>
        <div>
          <p className="text-amber-400 font-semibold">Ganancia total</p>
          <div className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm">COP $00.000.000</div>
        </div>
        <div>
          <p className="text-amber-400 font-semibold">Crecimiento porcentual</p>
          <div className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm">COP $00.000.000</div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import { Search, Settings2 } from 'lucide-react';
import { demoVehicleData } from '@/lib/vehicle-data';

export function VehicleSelector() {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [displayMode, setDisplayMode] = useState<'manual' | 'registration'>('manual');

  const selectedMakeData = useMemo(() => demoVehicleData.find((make) => make.id === selectedMake), [selectedMake]);
  const selectedModelData = useMemo(() => selectedMakeData?.models.find((model) => model.id === selectedModel), [selectedMakeData, selectedModel]);
  const selectedGenerationData = useMemo(() => selectedModelData?.generations.find((generation) => generation.id === selectedGeneration), [selectedModelData, selectedGeneration]);

  const availableModels = selectedMakeData?.models ?? [];
  const availableGenerations = selectedModelData?.generations ?? [];
  const availableYears = selectedGenerationData?.years ?? [];
  const availableEngines = selectedGenerationData?.engines ?? [];

  return (
    <section className="rounded-[28px] border border-[#dcefe3] bg-white p-4 shadow-[0_20px_60px_rgba(15,61,46,0.05)] sm:p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Ajoneuvon yhteensopivuus</p>
          <h2 className="mt-2 text-2xl font-black text-[#111111]">Löydä autoosi sopivat osat</h2>
          <p className="mt-2 text-sm leading-7 text-[#4f5752]">Demo-tietoihin perustuva valitsin. Todellinen ulkoinen ajoneuvotietokanta voidaan kytkeä myöhemmin.</p>
        </div>
        <div className="rounded-full bg-[#e9f7ee] px-3 py-2 text-sm font-semibold text-[#1f6a45]">Demo data</div>
      </div>

      <div className="mt-5 rounded-[24px] border border-[#dcefe3] bg-[#fbfdfb] p-4">
        <div className="flex flex-wrap gap-2">
          <button className={`rounded-full px-3 py-2 text-sm font-semibold ${displayMode === 'manual' ? 'bg-[#1f6a45] text-white' : 'bg-[#f5f7f3] text-[#4f5752]'}`} onClick={() => setDisplayMode('manual')}>
            Valitse auto manuaalisesti
          </button>
          <button className={`rounded-full px-3 py-2 text-sm font-semibold ${displayMode === 'registration' ? 'bg-[#1f6a45] text-white' : 'bg-[#f5f7f3] text-[#4f5752]'}`} onClick={() => setDisplayMode('registration')}>
            Rekisterinumero
          </button>
        </div>

        {displayMode === 'registration' ? (
          <div className="mt-4 rounded-[20px] border border-[#dcefe3] bg-white p-4">
            <label className="text-sm font-semibold text-[#111111]" htmlFor="registration">Rekisterinumero</label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-full border border-[#dcefe3] bg-[#f5f7f3] px-3 py-3">
                <Search size={18} className="text-[#1f6a45]" />
                <input id="registration" className="w-full bg-transparent text-sm outline-none" placeholder="ABC-123" />
              </div>
              <button className="rounded-full bg-[#1f6a45] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3d2e]">Hae</button>
            </div>
            <p className="mt-3 text-sm text-[#4f5752]">Rekisteritunnus-lookup on UI/demo-ominaisuus ja vaatii erillisen sopimuksen tai API-integraation.</p>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <label className="text-sm text-[#4f5752]">
              <span className="mb-2 block font-medium text-[#111111]">Merkki</span>
              <select className="w-full rounded-full border border-[#dcefe3] bg-white px-3 py-2 outline-none" value={selectedMake} onChange={(event) => { setSelectedMake(event.target.value); setSelectedModel(''); setSelectedGeneration(''); setSelectedYear(''); setSelectedEngine(''); }}>
                <option value="">Valitse merkki</option>
                {demoVehicleData.map((make) => <option key={make.id} value={make.id}>{make.name}</option>)}
              </select>
            </label>
            <label className="text-sm text-[#4f5752]">
              <span className="mb-2 block font-medium text-[#111111]">Malli</span>
              <select className="w-full rounded-full border border-[#dcefe3] bg-white px-3 py-2 outline-none" value={selectedModel} onChange={(event) => { setSelectedModel(event.target.value); setSelectedGeneration(''); setSelectedYear(''); setSelectedEngine(''); }} disabled={!selectedMake}>
                <option value="">Valitse malli</option>
                {availableModels.map((model) => <option key={model.id} value={model.id}>{model.name}</option>)}
              </select>
            </label>
            <label className="text-sm text-[#4f5752]">
              <span className="mb-2 block font-medium text-[#111111]">Sukupolvi</span>
              <select className="w-full rounded-full border border-[#dcefe3] bg-white px-3 py-2 outline-none" value={selectedGeneration} onChange={(event) => { setSelectedGeneration(event.target.value); setSelectedYear(''); setSelectedEngine(''); }} disabled={!selectedModel}>
                <option value="">Valitse sukupolvi</option>
                {availableGenerations.map((generation) => <option key={generation.id} value={generation.id}>{generation.name}</option>)}
              </select>
            </label>
            <label className="text-sm text-[#4f5752]">
              <span className="mb-2 block font-medium text-[#111111]">Vuosimalli</span>
              <select className="w-full rounded-full border border-[#dcefe3] bg-white px-3 py-2 outline-none" value={selectedYear} onChange={(event) => { setSelectedYear(event.target.value); setSelectedEngine(''); }} disabled={!selectedGeneration}>
                <option value="">Valitse vuosimalli</option>
                {availableYears.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
            <label className="text-sm text-[#4f5752]">
              <span className="mb-2 block font-medium text-[#111111]">Moottori</span>
              <select className="w-full rounded-full border border-[#dcefe3] bg-white px-3 py-2 outline-none" value={selectedEngine} onChange={(event) => setSelectedEngine(event.target.value)} disabled={!selectedGeneration}>
                <option value="">Valitse moottori</option>
                {availableEngines.map((engine) => <option key={engine.id} value={engine.id}>{engine.name} · {engine.fuelType}</option>)}
              </select>
            </label>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[20px] border border-[#dcefe3] bg-[#f5f7f3] p-3 text-sm text-[#4f5752]">
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
          <Settings2 size={16} className="text-[#1f6a45]" />
          <span>Valittu: {selectedMake ? selectedMakeData?.name : 'Merkki'}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
          <span>{selectedModel ? selectedModelData?.name : 'Malli'}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
          <span>{selectedYear || 'Vuosimalli'}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2">
          <span>{selectedEngine ? availableEngines.find((engine) => engine.id === selectedEngine)?.name : 'Moottori'}</span>
        </div>
      </div>
    </section>
  );
}

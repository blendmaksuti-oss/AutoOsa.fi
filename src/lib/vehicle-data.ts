export type VehicleMakeData = {
  id: string;
  name: string;
  models: VehicleModelData[];
};

export type VehicleModelData = {
  id: string;
  name: string;
  generations: VehicleGenerationData[];
};

export type VehicleGenerationData = {
  id: string;
  name: string;
  years: string[];
  engines: VehicleEngineData[];
};

export type VehicleEngineData = {
  id: string;
  name: string;
  fuelType: string;
  power: string;
};

export const demoVehicleData: VehicleMakeData[] = [
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    models: [
      {
        id: 'golf',
        name: 'Golf',
        generations: [
          {
            id: 'golf-8',
            name: 'Golf 8',
            years: ['2020', '2021', '2022', '2023'],
            engines: [
              { id: 'golf-8-1-5-tsi', name: '1.5 TSI', fuelType: 'Bensiini', power: '150 hv' },
              { id: 'golf-8-2-0-tdi', name: '2.0 TDI', fuelType: 'Diesel', power: '115 hv' },
            ],
          },
        ],
      },
      {
        id: 'passat',
        name: 'Passat',
        generations: [
          {
            id: 'passat-b8',
            name: 'Passat B8',
            years: ['2018', '2019', '2020', '2021'],
            engines: [
              { id: 'passat-b8-2-0-tdi', name: '2.0 TDI', fuelType: 'Diesel', power: '150 hv' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'audi',
    name: 'Audi',
    models: [
      {
        id: 'a3',
        name: 'A3',
        generations: [
          {
            id: 'a3-8y',
            name: 'A3 8Y',
            years: ['2020', '2021', '2022', '2023'],
            engines: [
              { id: 'a3-8y-35-tsi', name: '35 TSI', fuelType: 'Bensiini', power: '150 hv' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'toyota',
    name: 'Toyota',
    models: [
      {
        id: 'corolla',
        name: 'Corolla',
        generations: [
          {
            id: 'corolla-12',
            name: 'Corolla 12',
            years: ['2021', '2022', '2023'],
            engines: [
              { id: 'corolla-12-hybrid', name: '1.8 Hybrid', fuelType: 'Hybrid', power: '140 hv' },
            ],
          },
        ],
      },
    ],
  },
];

export function getDemoVehicleSelection() {
  return {
    make: 'Volkswagen',
    model: 'Golf',
    generation: 'Golf 8',
    year: '2022',
    engine: '1.5 TSI',
    fuelType: 'Bensiini',
    engineCode: 'TSI',
  };
}

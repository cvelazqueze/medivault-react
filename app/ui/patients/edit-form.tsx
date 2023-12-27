'use client';

import { PatientForm } from '@/app/lib/definitions';
import {
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useEffect, useState } from 'react';
import { updatePatient } from '@/app/lib/actions';

export default function EditPatientForm({ patient }: { patient: PatientForm; }) {
  const [fecha, setFecha] = useState<string>('');

  useEffect(() => {
    const fechaNacimiento = new Date(patient.birthdate).toISOString().split('T')[0]; 
    setFecha(fechaNacimiento);
  }, [patient]);

  const handleFechaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(event.target.value);
  };

  const updatePatientWithId = updatePatient.bind(null, patient.id);
  console.log(patient)
  return (
    <form action={updatePatientWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Nombre del paciente */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={patient.name}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Estatura */}
        <div className="mb-4">
          <label htmlFor="height" className="mb-2 block text-sm font-medium">
            Estatura
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="height"
                name="height"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={patient.height}
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Peso */}
        <div className="mb-4">
          <label htmlFor="weight" className="mb-2 block text-sm font-medium">
            Peso
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="weight"
                name="weight"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={patient.weight}
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Fecha de nacimiento */}
        <div className="mb-4">
          <label htmlFor="birthdate" className="mb-2 block text-sm font-medium">
            Fecha de nacimiento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                value={fecha}
                onChange={handleFechaChange}
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/pacientes"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Paciente</Button>
      </div>
    </form>
  );
}

import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredPatients } from '@/app/lib/data';
import { DeletePatient, UpdatePatient } from '@/app/ui/patients/buttons';

export default async function PatientsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const patients = await fetchFilteredPatients(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {patients?.map((patient) => (
              <div
                key={patient.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{patient.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{patient.name}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {patient.height}
                    </p>
                    <p>{formatDateToLocal(patient.birthdate)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdatePatient id={patient.id} />
                    <DeletePatient id={patient.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estatura
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Peso
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha de Nacimiento
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {patients?.map((patient) => (
                <tr
                  key={patient.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{patient.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {patient.height}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {patient.weight}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(patient.birthdate)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdatePatient id={patient.id} />
                      <DeletePatient id={patient.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

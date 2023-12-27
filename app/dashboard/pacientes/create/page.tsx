import Form from '@/app/ui/patients/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchPatients } from '@/app/lib/data';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pacientes', href: '/dashboard/pacientes' },
          {
            label: 'Registrar Paciente',
            href: '/dashboard/pacientes/create',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}
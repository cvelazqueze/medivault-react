import Form from '@/app/ui/patients/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
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
      <Form customers={customers} />
    </main>
  );
}
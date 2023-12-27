import { fetchPatientById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"
import Form from "@/app/ui/patients/edit-form"

export default async function Page({params}: {params: {id: string}}) {
    const id= params.id;
    const [ patient ] = await Promise.all([
        fetchPatientById(id),
    ])
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Pacientes', href: '/dashboard/pacientes' },
                    {
                        label: 'Editar Paciente',
                        href: `/dashboard/pacientes/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form patient={patient}/>
        </main>
    )
}
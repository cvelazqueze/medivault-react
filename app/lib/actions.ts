'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
 
const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const PatientFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  weight: z.coerce.number(),
  height: z.coerce.number(),
  birthdate: z.string(),
//   status: z.enum(['new', 'old']),
});
 
const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });
const CreatePatient = PatientFormSchema.omit({ id: true });

export async function createInvoice( formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    await sql`
        INSERT INTO invoices(customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
    
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function createPatient( formData: FormData) {
    const { name, weight, height, birthdate } = CreatePatient.parse({
        name: formData.get('name'),
        weight: formData.get('weight'),
        height: formData.get('height'),
        birthdate: formData.get('birthdate'),
    });

    const date = birthdate.split('T')[0];

    await sql`
        INSERT INTO patients(name, weight, height, birthdate)
        VALUES (${name}, ${weight}, ${height}, ${date})`;
    
    revalidatePath('/dashboard/pacientes');
    redirect('/dashboard/pacientes');
}

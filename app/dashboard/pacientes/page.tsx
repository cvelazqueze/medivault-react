import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/patients/table';
import { lusitana } from '@/app/ui/fonts';
import { PatientsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchPatientsPages } from '@/app/lib/data';
import { CreatePatient } from '@/app/ui/patients/buttons';
 
export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchPatientsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Pacientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscando Pacientes..." />
        <CreatePatient />
      </div>
       <Suspense key={query + currentPage} fallback={<PatientsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
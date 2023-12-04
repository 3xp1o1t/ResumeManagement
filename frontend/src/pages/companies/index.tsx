import { columns } from '@/components/companies/columns';
import { DataTable } from '@/components/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import http from '@/lib/http';
import { ICompany } from '@/types';
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

const Index = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState(false);
  // const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    http
      .get<ICompany[]>('/Company/Get')
      .then((response) => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto py-10">
      {loading ? (
        <div className="flex items-center py-4">
          <Skeleton className="max-w-sm h-9 rounded-md" />
          <Skeleton className="ml-auto justify-end rounded-md h-9" />
        </div>
      ) : (
        <DataTable columns={columns} data={companies} />
      )}
    </div>
  );
};

export default Index;

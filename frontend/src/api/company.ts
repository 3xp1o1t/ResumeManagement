import { toast } from '@/components/ui/use-toast';
import http from '@/lib/http';
import { ICreateCompanyDto } from '@/types';

export const CreateCompany = (values: ICreateCompanyDto) => {
  http
    .post('/Company/Create', values)
    .then((response) => {
      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'Company added successfully',
        });
      }
    })
    .catch((error) => console.log(error));
};

export const UpdateCompany = (id: string, values: ICreateCompanyDto) => {
  http
    .put(`/Company/Put/${id}`, values)
    .then((response) => {
      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'Company updated successfully',
        });
      }
    })
    .catch((error) => console.log(error));
};

export const DeleteCompany = (id: string) => {
  http
    .put(`/Company/Delete/${id}`)
    .then((response) => {
      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'Company deleted successfully',
        });
        window.location.reload();
      }
    })
    .catch((error) => console.log(error));
};

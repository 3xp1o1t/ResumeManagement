import CompanyForm from '@/components/companies/form';
import { useToast } from '@/components/ui/use-toast';
import http from '@/lib/http';
import { ICreateCompanyDto } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';

const CreateUpdateCompany = () => {
  const { id, name, size } = useParams();
  const redirect = useNavigate();
  const { toast } = useToast();

  const isUpdate = Boolean(id);

  const defaultValues = {
    name: name || 'Shadcn',
    size: size || 'Small',
  };

  const onSubmit = (values: ICreateCompanyDto) => {
    if (isUpdate) {
      http
        .put(`/Company/Put/${id}`, values)
        .then((response) => {
          if (response.status === 200) {
            toast({
              title: 'Success',
              description: 'Company updated successfully',
            });
            redirect('/companies');
          }
        })
        .catch((error) => console.log(error));
    } else {
      http
        .post('/Company/Create', values)
        .then((response) => {
          if (response.status === 200) {
            toast({
              title: 'Success',
              description: 'Company added successfully',
            });
            redirect('/companies');
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container mx-auto py-10">
      {isUpdate ? (
        <h1 className="text-4xl font-bold pb-6">Update Company</h1>
      ) : (
        <h1 className="text-4xl font-bold pb-6">Create New Company</h1>
      )}
      <CompanyForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </div>
  );
};

export default CreateUpdateCompany;

import { CreateCompany, UpdateCompany } from '@/api/company';
import CompanyForm from '@/components/companies/form';
import { ICreateCompanyDto } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';

const CreateUpdateCompany = () => {
  const { id, name, size } = useParams();
  const redirect = useNavigate();

  const isUpdate = Boolean(id);

  const defaultValues = {
    name: name || 'Shadcn',
    size: size || 'Small',
  };

  const onSubmit = (values: ICreateCompanyDto) => {
    if (isUpdate && id) {
      UpdateCompany(id, values);
    } else {
      CreateCompany(values);
    }

    redirect('/companies');
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

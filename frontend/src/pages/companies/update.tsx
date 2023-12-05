import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import http from '@/lib/http';
import { useNavigate, useParams } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Company name is required' }),
  size: z.string(),
});

const UpdateCompany = () => {
  const redirect = useNavigate();
  const { id, name, size } = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      size: size,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(id, name, size, values);
    http
      .put(`/Company/Put/${id}`, values)
      .then((response) => {
        if (response.status === 200) {
          redirect('/companies');
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container mx-auto py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Microsoft" {...field} />
                </FormControl>
                <FormDescription>This is your company name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Size</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-slate-300/50 border-0 focus:ring-0 ring-offset-0 focus:ring-offset-0 outline-none">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Small">Small</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="flex gap-4 justify-end items-center">
            <Button
              variant={'destructive'}
              onClick={() => redirect('/companies')}
            >
              Back
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateCompany;

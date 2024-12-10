import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { type ProductsResponseWithParams } from '@/utils';
import FormInput from '@/components/FormInput';

const Filters = () => {
  const { params } = useLoaderData() as ProductsResponseWithParams;
  const { search } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search products"
        name="search"
        defaultValue={search}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
};

export default Filters;

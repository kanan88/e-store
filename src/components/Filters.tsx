import { Form, Link, useLoaderData } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { type ProductsResponseWithParams } from '@/utils';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import FormRange from '@/components/FormRange';
import FormCheckbox from '@/components/FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, order, price, shipping } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="order by"
        name="order"
        options={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange label="price" name="price" defaultValue={price} />
      {/* SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
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

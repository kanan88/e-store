import { Form, Link } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Filters = () => {
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <div className="mb-2">
        <Label htmlFor="search">Search Product</Label>
        <Input id="search" name="search" type="text" defaultValue="" />
      </div>
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

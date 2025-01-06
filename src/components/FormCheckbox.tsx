import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormCheckbox = ({ name, label, defaultValue }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === 'on';

  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
};

export default FormCheckbox;
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormSelectProps = {
  name: string;
  options: string[];
  label?: string;
  defaultValue?: string;
};

const FormSelect = ({
  label,
  name,
  options,
  defaultValue,
}: FormSelectProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;

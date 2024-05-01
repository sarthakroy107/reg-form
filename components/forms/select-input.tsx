'use client';
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { select_input } from '@/lib/constants';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';


interface ISelectInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  select_id: number;
  label?: string;
  required?: boolean;
  className?: string;
  description?: string;
  error?: FieldError;
}

const SelectInput = forwardRef<HTMLInputElement, ISelectInputProps>(
  ({ select_id, label, required = true, className = "", description, error, onChange, ...props }, ref) => {
    return (
      <div>
        {label && <Label>
          {label}
          {required && "*"}
        </Label>}
        <Select onValueChange={onChange as any}>
          <SelectTrigger
            className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-visible:shadow-blue-300/70"
          >
            <SelectValue
              ref={ref}
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Select a category"
            />
          </SelectTrigger>
          <SelectContent
            className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-visible:shadow-blue-300/70"
          >
            <SelectGroup>
              {select_input
                .filter((item) => item.category_id === select_id)
                .map((item) => (
                  <SelectItem
                    key={item.key}
                    value={item.key}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    {item.value}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-red-500 text-sm h-2">{error?.message}</p>
      </div>
    );
  }
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
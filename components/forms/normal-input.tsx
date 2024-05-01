import React, { forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  className?: string;
  description?: string;
  error?: FieldError;
}

const NormalInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", description, required = false, error, ...props }, ref) => {
    return (
      <div className="my-2">
        <Label>
          {label}
          {required ? "*" : ""}
        </Label>
        <Input
          ref={ref}
          className={cn(
            className,
            "focus-visible:ring-0 focus-visible:ring-offset-0"
          )}
          placeholder={description}
          {...props}
        />
        <p className="text-red-500 text-sm h-2">{error?.message}</p>
      </div>
    );
  }
);

NormalInput.displayName = 'NormalInput';

export default NormalInput;

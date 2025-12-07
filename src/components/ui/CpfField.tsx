import { useCallback, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { maskCPF, cpfNumeric } from "@/utils/validators";
import { LucideIcon } from "lucide-react";

interface CPFFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    placeholder: string;
    icon: LucideIcon;
    debounceMs?: number;
}

export default function CPFField({
    name,
    label,
    placeholder,
    icon: Icon,
    debounceMs = 500,
    className = "",
    ...props
}: CPFFieldProps) {
    const {
        control,
        trigger,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    const debounceValidate = useCallback(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => trigger(name), debounceMs);
    }, [trigger, name, debounceMs]);

    return (
        <div>
            <label htmlFor={name} className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                {label}
            </label>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon size={18} className="text-gray-400" />
                </div>

                <Controller
                    control={control}
                    name={name}
                    render={({ field: { value, onChange } }) => (
                        <input
                            id={name}
                            type="text"
                            maxLength={14}
                            placeholder={placeholder}
                            className={`w-full pl-9 pr-3 py-2 border-2 border-gray-200 rounded-xl
                                focus:border-purple-500 focus:outline-none focus:ring-2 
                                focus:ring-purple-500/10 text-sm md:text-base ${className}`}
                            value={maskCPF(value)}
                            onChange={(e) => {
                                const clean = cpfNumeric(e.target.value);
                                onChange(clean);
                                debounceValidate();
                            }}
                            {...props}
                        />
                    )}
                />
            </div>

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}

import { useFormContext } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    name: string;
    label: string;
    placeholder: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
}

export default function InputField({
    type,
    name,
    label,
    placeholder,
    icon,
    rightElement,
    className = "",
    ...props
}: InputFieldProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    return (
        <div>
            <label htmlFor={name} className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                {label}
            </label>

            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
                )}

                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full pl-9 pr-3 py-2 border-2 border-gray-200 rounded-xl
                        focus:border-purple-500 focus:outline-none focus:ring-2 
                        focus:ring-purple-500/10 text-sm md:text-base ${className}`}
                    {...register(name)}
                    {...props}
                />

                {rightElement && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{rightElement}</div>
                )}
            </div>

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}

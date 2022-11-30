type AuthInputProps = {
  label: string;
  value: any;
  typeInput?: "text" | "email" | "password";
  changeValue: (newValue: any) => void;
  required?: boolean;
  notRenderWhen?: boolean;
};
export function AuthInput(props: AuthInputProps) {
  return props.notRenderWhen ? null : (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.typeInput ?? "text"}
        value={props.value}
        onChange={(e) => props.changeValue?.(e.target.value)}
        required={props.required}
        className="px-4 py-3 rounded-lg bg-gray-200 border outline-none focus:border-blue-500 focus:bg-white transition-all"
      />
    </div>
  );
}

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
    <div className="flex flex-col">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.typeInput ?? "text"}
        value={props.value}
        onChange={(e) => props.changeValue?.(e.target.value)}
        required={props.required}
      />
    </div>
  );
}

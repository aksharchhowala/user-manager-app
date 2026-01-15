export default function TextField({
  label,
  icon,
  id,
  className = "",
  ...rest
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-brand-500">
        {icon && <div className="pl-3 text-slate-500">{icon}</div>}
        <input
          id={id}
          className={`w-full rounded-lg bg-transparent px-3 py-2.5 outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
}

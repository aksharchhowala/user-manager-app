export default function CustTextAreaBox({
  label,
  id,
  name,
  testId,
  rows = 4,
  placeholder,
  maxlength,
  isRequired = false,
}) {
  return (
    <>
      <div className="p-2 flex flex-col">
        <label
          className="text-white pb-0.5 block text-sm font-medium mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          className="w-full px-2 bg-cyan-50 border-2 
                border-white rounded-md text-gray-900
                placeholder-gray-500 
                focus:outline-none focus:ring-2
                 focus:ring-cyan-800
                  focus:border-cyan-900
                   transition-all duration-100 shadow-sm hover:shadow-md"
          id={id}
          name={name}
          rows={rows}
          data-testid={testId}
          placeholder={placeholder}
          required={isRequired}
          maxlength={maxlength}
        />
      </div>
    </>
  );
}

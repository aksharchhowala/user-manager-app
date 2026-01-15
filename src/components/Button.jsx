export default function Button({ loading, className = "", children, ...rest }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg bg-brand-600 hover:bg-brand-700 
        text-white px-4 py-2.5 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 
        disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
      )}
      {children}
    </button>
  );
}

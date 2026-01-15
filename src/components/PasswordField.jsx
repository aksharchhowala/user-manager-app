import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function PasswordField({ id, label = 'Password', placeholder = '••••••••', required }) {
  const [show, setShow] = useState(false)

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-brand-500">
        <input
          id={id}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg bg-transparent px-3 py-2.5 outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
        />
        <button
          type="button"
          aria-label={show ? 'Hide password' : 'Show password'}
          onClick={() => setShow(s => !s)}
          className="px-3 py-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  )
}
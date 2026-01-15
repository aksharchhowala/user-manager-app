import { Users, Shield } from "lucide-react";

export default function Logo({ size = 44, withText = true }) {
  return (
    <div className="flex items-center gap-3">
      {/* Flat container, no gradients */}
      <div className="relative grid place-items-center rounded-2xl p-2 bg-white dark:bg-slate-900 ring-1 ring-red-500/20 dark:ring-red-400/25 shadow-sm">
        <div className="relative rounded-xl p-2 bg-red-50 dark:bg-red-900/20">
          <Users size={size} className="text-brand-600" />
          <Shield
            size={Math.round(size / 2.2)}
            className="text-accent-600 absolute -bottom-1 -right-1"
          />
        </div>
      </div>

      {withText && (
        <div className="leading-tight">
          {/* Wordmark: no gradient, two-tone red + orange */}
          <div className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            <span className="text-brand-600">User</span>
            <span className="text-accent-600">Manager</span>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Manage users, simply & securely
          </div>
        </div>
      )}
    </div>
  );
}

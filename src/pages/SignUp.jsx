import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 p-6 shadow-lg backdrop-blur">
        <div className="flex items-center justify-center">
          <Logo size={36} withText />
        </div>
        <h2 className="text-2xl font-semibold text-center">Sign up</h2>
        <p className="text-sm text-center text-slate-600 dark:text-slate-300">
          Sign-up page scaffold. We’ll build the full flow in Phase 2–3.
        </p>

        <div className="space-y-3">
          <input
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2.5"
            placeholder="Email"
          />
          <input
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2.5"
            placeholder="Desired username"
          />
          <input
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2.5"
            placeholder="Password"
            type="password"
          />
          <Button className="w-full">Create account</Button>
        </div>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-brand-600 hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

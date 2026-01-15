import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, User } from "lucide-react";
import Logo from "../components/Logo.jsx";
import TextField from "../components/TextField.jsx";
import PasswordField from "../components/PasswordField.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.elements.namedItem("username")?.value;
    const password = form.elements.namedItem("password")?.value;

    if (!username || !password)
      return alert("Please enter username and password.");

    setLoading(true);
    // Phase 2: replace with real ASP.NET API call
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);

    console.log("Login submitted", { username, password: "••••" });
    alert("Login attempt captured. Backend hookup coming next phase!");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side: pitch / brand */}
      <div className="hidden lg:flex flex-col justify-between p-10">
        <Logo size={40} withText />

        <div className="max-w-md">
          <h1 className="text-4xl font-semibold leading-tight">
            Welcome back to <br />
            <span className="text-brand-600">User </span>
            <span className="text-accent-600">Manager</span>
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A modern user management console built with React & ASP.NET. Sign in
            to continue
          </p>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} UserManager
        </p>
      </div>

      {/* Right side: form */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center justify-center lg:hidden">
            <Logo size={36} withText />
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-xl bg-white dark:bg-slate-900 p-6 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm"
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Sign in</h2>
              <p className="text-sm text-slate-500">
                Use your account credentials
              </p>
            </div>

            <TextField
              id="username"
              name="username"
              label="Username"
              placeholder="e.g. akshar.ch"
              required
              icon={<User size={18} />}
            />

            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <PasswordField id="password" required />
              <div className="mt-2 flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-700"
                  />{" "}
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm text-brand-600 hover:underline inline-flex items-center gap-1"
                >
                  <Lock size={14} /> Forgot?
                </button>
              </div>
            </div>

            <Button type="submit" loading={loading} className="w-full">
              Sign in
            </Button>

            <p className="text-sm text-center text-slate-600 dark:text-slate-300">
              New here?{" "}
              <Link to="/signup" className="text-brand-600 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

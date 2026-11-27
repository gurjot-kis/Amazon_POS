import React, { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { LuMail, LuLock, LuEye, LuEyeOff, LuShieldCheck } from "react-icons/lu";

import { PUBLIC_ROUTES } from "../routes";
import "../styles/LoginPage.css";

export default function LoginPage(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    toast.error("Invalid credentials");
  };

  return (
    <div className="login-page-wrapper">
      {/* Decorative ambient background accents */}
      <div className="login-ambient-shape login-ambient-shape-1" />
      <div className="login-ambient-shape login-ambient-shape-2" />

      <div className="login-card-container">
        {/* Header Branding */}
        <div className="login-card-header">
          <div className="login-logo-badge">
            <LuShieldCheck size={28} />
          </div>
          <h2 className="login-brand-title">
            <span>Ever</span>Mart POS
          </h2>
          <p className="login-brand-subtitle">
            Sign in to access the POS terminal.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form-body">
          {/* Email Field */}
          <div className="login-input-group">
            <label className="login-input-label" htmlFor="loginEmail">
              Email Address
            </label>
            <div className="login-field-box">
              <LuMail className="login-field-icon" size={18} />
              <input
                id="loginEmail"
                type="email"
                className="login-input-control"
                placeholder="cashier@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="login-input-group">
            <div className="login-label-row">
              <label className="login-input-label" htmlFor="loginPassword">
                Password
              </label>
              <Link
                to={PUBLIC_ROUTES.forgotPassword}
                className="login-forgot-link"
              >
                Forgot password?
              </Link>
            </div>
            <div className="login-field-box">
              <LuLock className="login-field-icon" size={18} />
              <input
                id="loginPassword"
                type={showPassword ? "text" : "password"}
                className="login-input-control login-input-control--password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-toggle-eye"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit CTA */}
          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState, type SubmitEvent } from "react";
import { validateRegister, type RegisterErrors } from "@/lib/auth/validation";

const labelClass = "text-xs font-medium text-[#242528] sm:text-[14px]";
const inputClass =
    "mt-1 h-11 w-full rounded-[10px] border bg-white px-4 text-sm text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-primary sm:mt-1.5 sm:h-12 sm:rounded-[12px] sm:text-base lg:h-[52px] lg:text-[18px]";

export default function RegisterForm() {
    const [errors, setErrors] = useState<RegisterErrors>({});

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const values = {
            name: String(data.get("name") ?? ""),
            email: String(data.get("email") ?? ""),
            password: String(data.get("password") ?? ""),
        };

        const nextErrors = validateRegister(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length === 0) {
            // console.log({ name: values.name.trim(), email: values.email.trim() });
        }
    }

    // clear a field's error as soon as the user edits it
    function clearError(field: keyof RegisterErrors) {
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-5">
            {/* Full name */}
            <div>
                <label htmlFor="name" className={labelClass}>
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jamie Davis"
                    autoComplete="name"
                    onChange={() => clearError("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${inputClass} ${errors.name ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className={labelClass}>
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="designer@example.com"
                    autoComplete="email"
                    onChange={() => clearError("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${inputClass} ${errors.email ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Password */}
            <div>
                <label htmlFor="password" className={labelClass}>
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    onChange={() => clearError("password")}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    className={`${inputClass} ${errors.password ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.password && (
                    <p id="password-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.password}
                    </p>
                )}
            </div>

            <div className="flex justify-end pt-1">
                <button
                    type="submit"
                    className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-[#242528] transition hover:brightness-95 sm:px-6 sm:py-2.5"
                >
                    Continue
                </button>
            </div>
        </form>
    );
}
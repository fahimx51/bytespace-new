export type LoginErrors = Partial<Record<"email" | "password", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(value: string): string | undefined {
    const email = value.trim();

    if (!email) return "Email is required";
    if (email.length > 254) return "Email is too long";
    if (!EMAIL_REGEX.test(email)) return "Enter a valid email address";

    return undefined;
}

export function validatePassword(value: string): string | undefined {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    if (value.length > 128) return "Password is too long";

    return undefined;
}

export function validateLogin(values: {
    email: string;
    password: string;
}): LoginErrors {
    const errors: LoginErrors = {};

    const emailError = validateEmail(values.email);
    const passwordError = validatePassword(values.password);

    if (emailError) errors.email = emailError;
    if (passwordError) errors.password = passwordError;

    return errors;
}
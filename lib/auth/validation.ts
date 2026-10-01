export type LoginErrors = Partial<Record<"email" | "password", string>>;
export type RegisterErrors = Partial<Record<"name" | "email" | "password", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_REGEX = /^\p{L}[\p{L}\s'.-]*$/u;

export function validateName(value: string): string | undefined {
    const name = value.trim();

    if (!name) return "Full name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    if (name.length > 60) return "Name is too long";
    if (!NAME_REGEX.test(name)) return "Name can only contain letters, spaces, . ' and -";

    return undefined;
}

export function validateEmail(value: string): string | undefined {
    const email = value.trim();

    if (!email) return "Email is required";
    if (email.length > 254) return "Email is too long";
    if (!EMAIL_REGEX.test(email)) return "Enter a valid email address";

    return undefined;
}

// Login: only checks length rules 
export function validatePassword(value: string): string | undefined {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    if (value.length > 128) return "Password is too long";

    return undefined;
}

// Signup: stricter, for creating a new password
export function validateNewPassword(value: string): string | undefined {
    const base = validatePassword(value);
    if (base) return base;

    if (!/[A-Za-z]/.test(value)) return "Password must include at least one letter";
    if (!/\d/.test(value)) return "Password must include at least one number";

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

export function validateRegister(values: {
    name: string;
    email: string;
    password: string;
}): RegisterErrors {
    const errors: RegisterErrors = {};

    const nameError = validateName(values.name);
    const emailError = validateEmail(values.email);
    const passwordError = validateNewPassword(values.password);

    if (nameError) errors.name = nameError;
    if (emailError) errors.email = emailError;
    if (passwordError) errors.password = passwordError;

    return errors;
}
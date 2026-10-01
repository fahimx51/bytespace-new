import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = { title: "Sign In | ByteSpace" };

const socials = [
    { label: "Continue with Facebook", icon: "/icons/facebook.svg" },
    { label: "Continue with Google", icon: "/icons/google.svg" },
];

export default function LoginPage() {
    return (
        <div className="flex w-full max-w-[579px] flex-col justify-center gap-2 rounded-[20px] bg-white p-5 sm:gap-3 sm:rounded-[24px] sm:p-8 lg:h-[790px] lg:gap-[20px] lg:p-16">
            <div>
                <p className="text-sm text-primary sm:text-base lg:text-[18px]">Sign In</p>
                <h1 className="font-heading mt-1 text-2xl font-semibold leading-tight text-[#242528] sm:text-3xl md:text-[34px] lg:text-[44px]">
                    Welcome Back
                </h1>
            </div>

            <div className="mt-3 sm:mt-6 lg:mt-8">
                <LoginForm />
            </div>

            {/* Divider */}
            <div className="my-3 flex items-center gap-3 sm:my-6 lg:my-8">
                <span className="h-px flex-1 bg-[#D1D1D1]" />
                <span className="text-sm text-[#888888] sm:text-base lg:text-[18px]">or</span>
                <span className="h-px flex-1 bg-[#D1D1D1]" />
            </div>

            {/* Social login */}
            <div className="flex justify-center gap-3 sm:gap-4">
                {socials.map(({ label, icon }) => (
                    <button
                        key={label}
                        type="button"
                        aria-label={label}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 transition hover:shadow-md sm:h-14 sm:w-14 sm:rounded-3xl lg:h-18 lg:w-18"
                    >
                        <Image
                            src={icon}
                            alt=""
                            width={40}
                            height={40}
                            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-10 lg:w-10"
                        />
                    </button>
                ))}
            </div>

            <p className="mt-3 text-center text-sm text-[#4a4a4f] sm:mt-6 sm:text-base lg:mt-10 lg:text-[18px]">
                New user?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                    Create an account
                </Link>
            </p>
        </div>
    );
}
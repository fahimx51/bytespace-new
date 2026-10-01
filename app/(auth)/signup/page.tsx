import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export const metadata = { title: "Sign Up | ByteSpace" };

export default function SignupPage() {
    return (
        <div className="flex w-full max-w-[579px] flex-col gap-6 rounded-[20px] bg-white p-5 sm:gap-8 sm:rounded-[24px] sm:p-8 lg:h-[790px] lg:justify-between lg:gap-[20px] lg:p-16">
            <div>
                <p className="text-sm text-primary sm:text-base lg:text-[18px]">
                    Create an Account
                </p>
                <h1 className="font-heading mt-1 text-2xl font-semibold leading-tight text-[#242528] sm:text-3xl md:text-[34px] lg:text-[44px]">
                    Welcome to <br className="hidden sm:block" />
                    ByteSpace
                </h1>

                <div className="mt-3 sm:mt-6 lg:mt-8">
                    <RegisterForm />
                </div>
            </div>

            <p className="text-center text-sm text-[#4a4a4f] sm:text-base lg:text-[18px]">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
}
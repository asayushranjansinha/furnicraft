import SignupForm from "@/components/forms/signup-form";


const SignupPage = () => {
  return (
    <div className="h-full container lg:max-w-[456px] mx-auto py-8 flex flex-col items-center justify-center space-y-4">
      <SignupForm />
    </div>
  );
};
export default SignupPage;

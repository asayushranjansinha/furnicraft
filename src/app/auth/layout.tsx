const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-sky-600 flex items-center justify-center p-4">
      <main className="w-full flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 ">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;

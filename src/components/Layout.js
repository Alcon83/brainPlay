function Layout({ children, className = "" }) {
  const customStyles = {
    maxWidth: "1000px",
   
  };

  return (
    <main className={`items-center justify-around w-full h-full z-0  text-dark dark:text-light   lg:mx-1 md:rounded-none  mx-auto ${className}`} style={customStyles}>
      {children}
    </main>
  );
};

export default Layout;
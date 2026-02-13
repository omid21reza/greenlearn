function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-accent text-primary-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark',
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
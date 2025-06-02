export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <button className={`bg-viossa-100 text-viossa-950 px-4 py-2 rounded-lg hover:bg-viossa-900 hover:text-viossa-50 transition cursor-pointer ${className}`}>
      {children}
    </button>
  );
}

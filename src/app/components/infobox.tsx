export default function Infobox({
  children,
  title,
  image,
  className,
}: {
  children: string;
  title: string;
  image?: { href: string; alt: string; right?: boolean };
  className?: string;
}) {
  return (
    <div className={`w-full max-w-125 bg-viossa-800 border border-viossa-700 rounded-2xl p-5 px-6 text-viossa-50 ${className}`}>
      {image ? (
        <div className="grid grid-cols-4 gap-5">
          {image.right ? (
            <>
              <div className="col-span-3">
                <div className="text-2xl font-bold mb-2">{title}</div>
                {children}
              </div>{" "}
              <div>
                <img src={image.href} alt={image.alt} />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={image.href} alt={image.alt} />
              </div>
              <div className="col-span-3">
                <div className="text-2xl font-bold mb-2">{title}</div>
                {children}
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="text-2xl font-bold mb-2">{title}</div>
          {children}
        </>
      )}
    </div>
  );
}

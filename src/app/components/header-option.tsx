import { Suspense } from "react";

export default function HeaderOption({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected?: boolean;
}) {
  return (
    <div
      className={`h-full min-w-16 p-4 flex items-center justify-center ${
        selected
          ? "*:translate-y-2 *:block *:bg-viossa-700 *:text-viossa-50 *:px-4 *:p-2 *:rounded-t-2xl"
          : "hover:bg-black/10 hover:*:translate-y-2"
      } transition text-2xl cursor-pointer`}
    >
      <span className="transition-all">{children}</span>
    </div>
  );
}

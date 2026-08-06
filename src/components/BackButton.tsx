"use client";

import { useRouter } from "next/navigation";

export default function BackButton({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={className}
      id={id}
    >
      {children}
    </button>
  );
}

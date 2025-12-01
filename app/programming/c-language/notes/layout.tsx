import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C Language – Topic-wise Notes | CSM Study Zone",
  description: "Browse comprehensive topic-wise notes with syntax, examples, and explanations for all C programming concepts including introduction, variables, operators, control statements, loops, arrays, strings, functions, pointers, structures, file handling, and more.",
  alternates: {
    canonical: "https://www.csmstudyzone.in/programming/c-language/notes",
  },
};

export default function CLanguageNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-6 text-center bg-linear-to-b from-background to-primary/5">
      <Logo className="w-20 h-20 mb-8 text-primary opacity-50" />

      <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-logo)] text-primary mb-4 tracking-tight">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
        Nie znaleziono strony
      </h2>

      <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
        Przepraszamy, ale strona, której szukasz, nie istnieje lub została
        przeniesiona. Wróć na stronę główną, aby kontynuować przeglądanie
        naszych kwiatów.
      </p>

      <Button asChild size="lg" className="rounded-full px-10">
        <Link href="/">Wróć do strony głównej</Link>
      </Button>
    </div>
  );
}

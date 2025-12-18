import Link from "next/link";
import { Eye, Footprints, ScissorsIcon, Sparkle, Sparkles, User, Waves } from "lucide-react";
import { PageSectionScroller } from "./page.js";

const QuickSearche = () => {
  return (
    <PageSectionScroller>
      <Link
        href="/barbershops?searche=cabelo"
        className="border-border bg-muted flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
      >
        <ScissorsIcon className="size-4" />
        <span className="text-card-foreground text-sm font-medium">Cabelo</span>
      </Link>
      <Link
        href="/barbershops?searche=cabelo"
        className="border-border bg-muted flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
      >
        <Sparkles className="size-4" />
        <span className="text-card-foreground text-sm font-medium">Barba</span>
      </Link>
      <Link
        href="/barbershops?searche=cabelo"
        className="border-border bg-muted flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
      >
        <User className="size-4" />
        <span className="text-card-foreground text-sm font-medium">Stilos</span>
      </Link>
      <Link
        href="/barbershops?searche=cabelo"
        className="border-border bg-muted flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
      >
        <Eye className="size-4" />
        <span className="text-card-foreground text-sm font-medium">Sobrancelha</span>
      </Link>
      <Link
        href="/barbershops?searche=cabelo"
        className="border-border bg-muted flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
      >
        <Footprints className="size-4" />
        <span className="text-card-foreground text-sm font-medium">Cabelo</span>
      </Link>
      <Link
        href="/barbershops?searche=cabelo"
        className="border-border bg-muted flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
      >
        <Waves className="size-4" />
        <span className="text-card-foreground text-sm font-medium">Platinado</span>
      </Link>
    </PageSectionScroller>
  );
};

export default QuickSearche;

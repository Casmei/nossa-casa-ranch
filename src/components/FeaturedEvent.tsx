import { Clock, Ticket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EventItem } from "./EventCard";

interface Props {
  event: EventItem;
}

export const FeaturedEvent = ({ event }: Props) => {
  const [day, month] = event.date.split(" ");

  return (
    <article className="group relative grid md:grid-cols-2 gap-0 bg-gradient-card border-4 border-whiskey/60 rounded-md shadow-warm overflow-hidden animate-fade-up">
      {/* Image */}
      <div className="relative h-72 md:h-auto min-h-[420px] overflow-hidden">
        <img
          src={event.image}
          alt={`${event.title} — ${event.artist}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
          width={1200}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-card/20 md:to-card" />

        {/* Date badge — bigger */}
        <div className="absolute top-5 left-5 flex flex-col items-center justify-center bg-gradient-amber rounded-md px-5 py-3 shadow-glow min-w-[96px] border-2 border-cream/20">
          <span className="font-western text-4xl md:text-5xl text-primary-foreground leading-none">
            {day}
          </span>
          <span className="font-display font-bold text-xs tracking-[0.25em] text-primary-foreground mt-1">
            {month}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col p-6 md:p-10">
        {/* corner stars */}
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-4 h-4 fill-whiskey text-whiskey" />
          <span className="font-stamp text-[11px] uppercase tracking-[0.4em] text-whiskey-glow">
            Próximo Evento
          </span>
          <Star className="w-4 h-4 fill-whiskey text-whiskey" />
        </div>

        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="inline-block font-stamp text-[11px] uppercase tracking-[0.2em] text-cream bg-whiskey/30 border border-whiskey/60 px-2.5 py-1 rounded-sm">
            {event.tag}
          </span>
          <span className="font-stamp text-xs text-cream uppercase tracking-widest">
            {event.weekday}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs font-display">
            <Clock className="w-3 h-3" /> {event.time}
          </span>
        </div>

        <h2 className="font-western text-4xl md:text-5xl lg:text-6xl text-cream leading-none mb-2">
          {event.title}
        </h2>
        <p className="font-display text-lg text-whiskey-glow uppercase tracking-wider mb-4">
          com {event.artist}
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-xl">
          {event.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5 border-t-2 border-dashed border-whiskey/40">
          <div className="flex flex-col">
            <span className="font-stamp text-[10px] text-muted-foreground uppercase tracking-widest">
              Entrada
            </span>
            <span className="font-western text-3xl md:text-4xl text-whiskey">
              {event.price}
            </span>
          </div>
          <Button asChild variant="saloon" size="lg" className="text-base">
            <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
              <Ticket className="w-5 h-5 mr-2" /> Garantir Ingresso
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

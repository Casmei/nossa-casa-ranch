import { Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EventItem {
  id: string;
  title: string;
  artist: string;
  date: string;
  weekday: string;
  time: string;
  price: string;
  description: string;
  tag: string;
  ticketUrl: string;
  image: string;
}

interface Props {
  event: EventItem;
  index: number;
}

export const EventCard = ({ event, index }: Props) => {
  const [day, month] = event.date.split(" ");

  return (
    <article
      className="group relative flex flex-col md:flex-row gap-0 bg-gradient-card border-2 border-border rounded-md shadow-card hover:shadow-warm hover:border-whiskey/60 transition-all duration-500 animate-fade-up overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative md:w-[38%] h-56 md:h-auto overflow-hidden">
        <img
          src={event.image}
          alt={`${event.title} — ${event.artist}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={1024}
          height={768}
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent md:bg-gradient-to-r md:from-card md:via-card/30 md:to-transparent" />

        {/* Date badge */}
        <div className="absolute top-4 left-4 flex flex-col items-center justify-center bg-gradient-amber rounded-md px-4 py-2 shadow-glow min-w-[78px]">
          <span className="font-western text-3xl text-primary-foreground leading-none">{day}</span>
          <span className="font-display font-bold text-[10px] tracking-[0.2em] text-primary-foreground mt-0.5">
            {month}
          </span>
        </div>

        {/* corner stamp */}
        <span className="absolute top-4 right-4 font-stamp text-[10px] tracking-widest text-cream/80 uppercase bg-background/60 px-2 py-1 rounded-sm border border-whiskey/30">
          Nº {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block font-stamp text-[11px] uppercase tracking-[0.2em] text-whiskey-glow border border-whiskey/40 px-2 py-0.5 rounded-sm">
            {event.tag}
          </span>
          <span className="font-stamp text-xs text-cream uppercase tracking-widest">
            {event.weekday}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs font-display">
            <Clock className="w-3 h-3" /> {event.time}
          </span>
        </div>

        <h3 className="font-western text-2xl md:text-3xl text-cream leading-tight mb-1">
          {event.title}
        </h3>
        <p className="font-display text-base text-whiskey-glow uppercase tracking-wider mb-3">
          com {event.artist}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xl whitespace-pre-wrap">
          {event.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-dashed border-border">
          <div className="flex flex-col">
            <span className="font-stamp text-[10px] text-muted-foreground uppercase tracking-widest">
              Entrada
            </span>
            <span className="font-western text-2xl text-whiskey">{event.price}</span>
          </div>
          <Button asChild variant="saloon" size="lg">
            <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
              <Ticket className="w-4 h-4 mr-2" /> Garantir Ingresso
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

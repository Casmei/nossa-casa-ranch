import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EventItem {
  id: string;
  title: string;
  artist: string;
  date: string; // e.g. "15 NOV"
  weekday: string; // e.g. "SEX"
  time: string;
  price: string;
  description: string;
  tag: string;
  ticketUrl: string;
}

interface Props {
  event: EventItem;
  index: number;
}

export const EventCard = ({ event, index }: Props) => {
  const [day, month] = event.date.split(" ");

  return (
    <article
      className="group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-gradient-card border-2 border-border rounded-md shadow-card hover:shadow-warm hover:border-whiskey/60 transition-all duration-500 animate-fade-up overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* corner stamps */}
      <span className="absolute top-2 right-3 font-stamp text-[10px] tracking-widest text-whiskey/50 uppercase">
        Nº {String(index + 1).padStart(2, "0")}
      </span>

      {/* Date block */}
      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-1 md:min-w-[120px] md:border-r-2 md:border-dashed md:border-border md:pr-6">
        <div className="flex flex-col items-center justify-center bg-gradient-amber rounded-md px-4 py-3 shadow-glow min-w-[88px]">
          <span className="font-western text-4xl text-primary-foreground leading-none">{day}</span>
          <span className="font-display font-bold text-xs tracking-[0.2em] text-primary-foreground mt-1">{month}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-stamp text-xs text-cream uppercase tracking-widest">{event.weekday}</span>
          <span className="flex items-center gap-1 text-muted-foreground text-sm font-display mt-1">
            <Clock className="w-3.5 h-3.5" /> {event.time}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <span className="inline-block self-start font-stamp text-[11px] uppercase tracking-[0.2em] text-whiskey-glow border border-whiskey/40 px-2 py-0.5 rounded-sm mb-3">
          {event.tag}
        </span>
        <h3 className="font-western text-2xl md:text-3xl text-cream leading-tight mb-1">
          {event.title}
        </h3>
        <p className="font-display text-base text-whiskey-glow uppercase tracking-wider mb-3">
          com {event.artist}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xl">
          {event.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-dashed border-border">
          <div className="flex flex-col">
            <span className="font-stamp text-[10px] text-muted-foreground uppercase tracking-widest">Entrada</span>
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

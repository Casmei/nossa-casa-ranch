import { EventCard, type EventItem } from "@/components/EventCard";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { Button } from "@/components/ui/button";
import heroBar from "@/assets/hero-bar.jpg";
import logoHat from "@/assets/logo-hat.png";
import { Instagram, MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import eventPagode from "@/assets/event-pagode.jpg";
import eventSertanejo from "@/assets/event-sertanejo.jpg";
import eventAniversario from "@/assets/event-aniversario.jpg";

const events: EventItem[] = [
  {
    id: "1",
    title: "Pagoniver da Ary - 3ª edição",
    artist: "Ary Goodoy",
    date: "30 MAI",
    weekday: "SÁBADO",
    time: "18h00",
    price: "R$ 20,00",
    description:
      "O Pagoniver da Ary está chegando na sua 3ª edição e eu garanto: vai ser SURREAL! ✨\n \nDia 30 de maio, nosso encontro marcado é na Nossa Casa Choperia. A cada ano o projeto cresce mais e, desta vez, preparei algo histórico com vários convidados de peso! 🎤🔥\n\nPreparem o coração, a voz e o sorriso. Vamos viver essa história juntos!",
    tag: "Pagode",
    ticketUrl: "https://events.byal.org/event/12ced8c7-e3a9-454b-89ac-d77b18400cd8",
    image: eventPagode,
  },
  {
    id: "2",
    title: "Sexta Sertaneja",
    artist: "Altobelly & O Comandante",
    date: "05 DEZ",
    weekday: "SEXTA",
    time: "21h00",
    price: "R$ 20,00",
    description:
      "A noite mais aguardada da semana com o melhor do sertanejo raiz e universitário. Pulseira na portaria.",
    tag: "Sertanejo",
    ticketUrl: "https://events.byal.org/",
    image: eventSertanejo,
  },
  {
    id: "3",
    title: "Ocê Merece um Aniversário",
    artist: "Nossa Casa Choperia",
    date: "TODO MÊS",
    weekday: "AGENDE",
    time: "A combinar",
    price: "Consulte",
    description:
      "Comemore seu aniversário no clima cowboy mais autêntico da cidade. Pacotes especiais para você e a galera.",
    tag: "Aniversário",
    ticketUrl: "https://events.byal.org/",
    image: eventAniversario,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <img
          src={heroBar}
          alt="Interior rústico da Nossa Casa Choperia"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain" />

        {/* top nav */}
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-5 md:p-8 z-20">
          <span className="font-stamp text-xs uppercase tracking-widest text-cream/70">Est. Choperia</span>
          <a
            href="#eventos"
            className="font-display text-sm uppercase tracking-widest text-cream hover:text-whiskey transition-colors"
          >
            Ver Eventos
          </a>
        </nav>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl animate-fade-up">
          <img
            src={logoHat}
            alt="Logo Nossa Casa Choperia"
            className="w-24 md:w-32 mb-4 animate-flicker"
            width={512}
            height={512}
          />
          <span className="font-stamp text-xs md:text-sm uppercase tracking-[0.4em] text-whiskey-glow mb-4">
            ★ Bem-vindo à ★
          </span>
          <h1 className="font-western text-5xl md:text-7xl lg:text-8xl text-cream leading-none mb-6">
            Nossa Casa
            <br />
            <span className="text-whiskey">Choperia</span>
          </h1>
          <p className="font-display text-lg md:text-xl text-cream/85 max-w-xl mb-8 leading-relaxed">
            Chopp gelado, música ao vivo e a melhor pegada{" "}
            <span className="text-whiskey-glow font-semibold">cowboy</span> da cidade.
            Aqui o sertão encontra a galera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="saloon" size="lg">
              <a href="#eventos">Ver Próximos Eventos</a>
            </Button>
            <Button asChild variant="outlineRustic" size="lg">
              <a href="#contato">Como Chegar</a>
            </Button>
          </div>
        </div>

        <a
          href="#eventos"
          className="absolute bottom-8 z-10 text-cream/60 hover:text-whiskey transition-colors animate-bounce"
          aria-label="Rolar para eventos"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </header>

      {/* DIVIDER */}
      <div className="relative h-12 bg-gradient-wood border-y-2 border-whiskey/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grain" />
        <span className="font-stamp text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.5em] whitespace-nowrap text-whiskey-glow z-10">
          Programação ◆ Nossa Casa ◆ Programação
        </span>
      </div>

      {/* EVENTOS */}
      <section id="eventos" className="relative py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-stamp text-xs md:text-sm uppercase tracking-[0.4em] text-whiskey mb-3 block">
              ━━━ Wanted ━━━
            </span>
            <h2 className="font-western text-4xl md:text-6xl text-cream mb-4">
              Próximos Eventos
            </h2>
            <p className="font-display text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Garanta seu lugar nas noites mais esperadas. Ingressos limitados — não fica de fora, parceiro!
            </p>
          </div>

          {/* Destaque */}
          <div className="mb-12">
            <FeaturedEvent event={events[0]} />
          </div>

          {/* Demais eventos
          {events.length > 1 && (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-whiskey/30" />
                <span className="font-stamp text-xs uppercase tracking-[0.4em] text-whiskey-glow">
                  ◆ Também na agenda ◆
                </span>
                <div className="flex-1 h-px bg-whiskey/30" />
              </div>
              <div className="flex flex-col gap-6">
                {events.slice(1).map((event, i) => (
                  <EventCard key={event.id} event={event} index={i + 1} />
                ))}
              </div>
            </>
          )} */}
        </div>
      </section>

      {/* CONTATO / LOCALIZAÇÃO */}
      <section
        id="contato"
        className="relative py-20 md:py-28 px-4 bg-gradient-wood border-t-2 border-whiskey/30 overflow-hidden"
      >
        <div className="absolute inset-0 grain opacity-50" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-stamp text-xs md:text-sm uppercase tracking-[0.4em] text-whiskey mb-3 block">
              ━━━ Visite ━━━
            </span>
            <h2 className="font-western text-4xl md:text-6xl text-cream mb-4">
              A Nossa Casa
            </h2>
            <p className="font-display text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Aparece pra tomar um chopp. A casa é sua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-card border-2 border-border rounded-md p-6 shadow-card flex flex-col items-start gap-3 hover:border-whiskey/60 transition-colors">
              <MapPin className="w-8 h-8 text-whiskey" />
              <h3 className="font-western text-2xl text-cream">Endereço</h3>
              <p className="font-display text-muted-foreground leading-relaxed">
                Avenida Olindo de Miranda, 940
                <br />
                Centro — Almenara/MG
              </p>
              <a
                href="https://maps.app.goo.gl/USAZZg8fks17pV9h6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-stamp text-xs uppercase tracking-widest text-whiskey-glow hover:text-cream transition-colors mt-2"
              >
                Abrir no Google Maps →
              </a>
            </div>

            <div className="bg-gradient-card border-2 border-border rounded-md p-6 shadow-card flex flex-col items-start gap-3 hover:border-whiskey/60 transition-colors">
              <Clock className="w-8 h-8 text-whiskey" />
              <h3 className="font-western text-2xl text-cream">Horário</h3>
              <ul className="font-display text-muted-foreground space-y-1">
                <li>Qua — Sáb: 18h às 02h</li>
                <li>Dom: 17h às 00h</li>
              </ul>
              <span className="font-stamp text-xs uppercase tracking-widest text-whiskey-glow mt-2">
                Fechado seg/ter
              </span>
            </div>

            <div className="bg-gradient-card border-2 border-border rounded-md p-6 shadow-card flex flex-col items-start gap-3 hover:border-whiskey/60 transition-colors">
              <Phone className="w-8 h-8 text-whiskey" />
              <h3 className="font-western text-2xl text-cream">Contato</h3>
              <a
                href="https://wa.me/5533988504741"
                className="font-display text-muted-foreground hover:text-cream transition-colors"
              >
                WhatsApp: (33) 98850-4741
              </a>
              <a
                href="https://instagram.com/nossacasachoperia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-display text-muted-foreground hover:text-cream transition-colors"
              >
                <Instagram className="w-4 h-4" /> @nossacasachoperia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-4 bg-background border-t-2 border-whiskey/20 text-center">
        <img
          src={logoHat}
          alt=""
          className="w-12 mx-auto mb-3 opacity-80"
          width={512}
          height={512}
          loading="lazy"
        />
        <p className="font-western text-xl text-cream">Nossa Casa Choperia</p>
        <p className="font-stamp text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">
          © {new Date().getFullYear()} — Feito com chopp gelado
        </p>
      </footer>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Phone, MapPin, Clock, Star, CheckCircle2, Shield, Hammer, Ruler, Flame, Layers, Wrench, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImg from "@/assets/hero-floor.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const PHONE = "+7 (343) 287-45-19";
const PHONE_LINK = "tel:+73432874519";

const services = [
  { icon: Layers, title: "Укладка ламината и паркета", desc: "Подготовка основания, замковая или клеевая укладка, плинтус.", price: "от 450 ₽/м²" },
  { icon: Ruler, title: "Стяжка и выравнивание пола", desc: "Полусухая, мокрая, наливной пол. Перепады до 0 мм/2 м.", price: "от 600 ₽/м²" },
  { icon: Flame, title: "Тёплый пол", desc: "Электрический и водяной. Подключение и пуско-наладка.", price: "от 900 ₽/м²" },
  { icon: Hammer, title: "Демонтаж старых полов", desc: "Аккуратно, с вывозом мусора. Линолеум, ДСП, паркет, плитка.", price: "от 250 ₽/м²" },
  { icon: Wrench, title: "Ремонт скрипящего пола", desc: "Находим причину и устраняем без полного вскрытия.", price: "от 1 500 ₽/точка" },
  { icon: Shield, title: "Укладка линолеума и ПВХ", desc: "С подложкой, под клей или свободная укладка. Сварка швов.", price: "от 350 ₽/м²" },
];

const reviews = [
  { name: "Анна К.", area: "Академический", text: "Делали стяжку и ламинат в двушке. Приехали в назначенное время, цена не выросла после замера. Скрипов нет, плинтус идеально.", rating: 5 },
  { name: "Сергей П.", area: "Уралмаш", text: "Менял старый паркет на инженерную доску. Работали два дня, всё аккуратно укрыли плёнкой. По итогу — как с картинки.", rating: 5 },
  { name: "Марина Д.", area: "Юго-Западный", text: "Положили тёплый пол под плитку в санузле. Подключили, проверили — работает как часы. Спасибо мастеру Денису.", rating: 5 },
];

const portfolio = [
  { img: portfolio1, title: "Замена пола в хрущёвке, 38 м²", tag: "Ламинат + стяжка" },
  { img: portfolio2, title: "Тёплый пол в санузле, 6 м²", tag: "Электрический мат" },
  { img: portfolio3, title: "Полусухая стяжка, 72 м²", tag: "ЖК «Мичуринский»" },
];

const steps = [
  { n: "01", title: "Звонок и обсуждение", desc: "Уточняем тип помещения, площадь, сроки. 5 минут." },
  { n: "02", title: "Бесплатный замер", desc: "Мастер приедет в удобное время, замерит и посчитает." },
  { n: "03", title: "Смета и договор", desc: "Фиксируем цену и сроки письменно. Без доплат после." },
  { n: "04", title: "Работа и сдача", desc: "Делаем чисто, убираем за собой. Гарантия 2 года." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[image:var(--gradient-warm)] text-primary-foreground">
              <Flame className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold">Тёплый Пол</div>
              <div className="text-xs text-muted-foreground">Екатеринбург</div>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#portfolio" className="hover:text-foreground">Работы</a>
            <a href="#process" className="hover:text-foreground">Как работаем</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href={PHONE_LINK} className="hidden items-center gap-2 text-sm font-semibold sm:flex">
            <Phone className="h-4 w-4 text-primary" />
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid gap-10 py-12 md:grid-cols-2 md:py-20 md:gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Принимаем заявки на этой неделе
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Ремонт полов в Екатеринбурге <span className="text-primary">под ключ</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Стяжка, ламинат, паркет, тёплый пол. Работаем с 2019 года. Замер и смета — бесплатно, цена в договоре не меняется.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-[image:var(--gradient-warm)] text-primary-foreground shadow-[var(--shadow-cta)] hover:opacity-95">
                <a href="#request">Бесплатный замер</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_LINK}><Phone className="mr-2 h-4 w-4" />{PHONE}</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <span className="font-semibold">4,9</span>
                <span className="text-muted-foreground">· 87 отзывов на Яндекс Картах</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-4 w-4 text-success" /> Гарантия 2 года
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img src={heroImg} alt="Уложенный ламинат в квартире в Екатеринбурге" width={1600} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="text-xs text-muted-foreground">Сделано за 5 лет</div>
              <div className="font-display text-2xl font-bold">320+ объектов</div>
            </div>
            <div className="absolute -top-3 -right-3 hidden rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="flex items-center gap-2 text-sm font-semibold"><Clock className="h-4 w-4 text-primary" /> Замер в день обращения</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { v: "5+ лет", l: "на рынке Екатеринбурга" },
            { v: "320+", l: "квартир и офисов" },
            { v: "2 года", l: "гарантия по договору" },
            { v: "0 ₽", l: "выезд и замер" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-16 md:py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Отзывы</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Что говорят клиенты</h2>
          </div>
          <a href="https://yandex.ru/maps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Все отзывы на Яндекс Картах <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="mb-3 flex">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground/90">«{r.text}»</p>
              <div className="mt-4 text-sm text-muted-foreground">{r.name} · {r.area}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Что делаем</h2>
            <p className="mt-3 text-muted-foreground">Полный цикл — от демонтажа до чистового пола. Берём и квартиры, и офисы, и коммерческие помещения до 300 м².</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-soft)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-sm font-semibold text-primary">{s.price}</span>
                  <a href="#request" className="text-sm text-muted-foreground hover:text-foreground">Заказать →</a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Финальная стоимость зависит от объёма и материалов. Точную цену скажем после замера.</p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Наши работы</div>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">До и после</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-primary">{p.tag}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Как работаем</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">4 шага без сюрпризов</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-primary/30">{s.n}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container py-16 md:py-20">
        <div className="grid gap-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:grid-cols-2 md:p-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Заявка</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Бесплатный замер и смета</h2>
            <p className="mt-3 text-muted-foreground">Оставьте телефон — перезвоним в течение 15 минут, согласуем удобное время. Замер по Екатеринбургу и пригородам — бесплатно.</p>

            <ul className="mt-6 space-y-3 text-sm">
              {["Без предоплаты", "Цена в договоре фиксируется", "Работаем в выходные", "Чистый объект после сдачи"].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" /> {t}</li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Как вас зовут</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Имя" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Телефон</label>
              <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Что нужно сделать <span className="text-muted-foreground">(необязательно)</span></label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Площадь, тип покрытия, район" rows={4} />
            </div>
            <Button type="submit" size="lg" className="w-full bg-[image:var(--gradient-warm)] text-primary-foreground shadow-[var(--shadow-cta)] hover:opacity-95">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-secondary/40 py-16 md:py-20">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Контакты</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Свяжитесь удобным способом</h2>
            <p className="mt-3 text-muted-foreground">Отвечаем на звонки и сообщения с 8:00 до 21:00, без выходных.</p>
          </div>
          <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
            <a href={PHONE_LINK} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition hover:shadow-[var(--shadow-card)]">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Телефон</div>
                <div className="font-semibold">{PHONE}</div>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">График</div>
                <div className="font-semibold">Пн–Вс, 8:00–21:00</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 sm:col-span-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Зона работ</div>
                <div className="font-semibold">Екатеринбург и пригороды (Берёзовский, Верхняя Пышма, Арамиль)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Тёплый Пол · Ремонт полов в Екатеринбурге</div>
          <a href={PHONE_LINK} className="font-semibold text-foreground">{PHONE}</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

// Single source for current editions. Historical editions remain in content.ts.
export interface WeekendEdition {
 id: string; month: string; date: string; label: string; title: string; subtitle: string;
 expert: string; copy: string; note: string; href: string; cta: string; featured?: boolean;
 detailHref?: string; detailLabel?: string; earlyPrice?: number; standardPrice?: number;
 deadline?: string; startDate?: string; endDate?: string; location?: string; period?: string;
}
export const agendaYear = 2027;
export const weekends2027: WeekendEdition[] = [
  {
    id: 'jorien-2027', month: 'APR', date: '', label: 'Boek je plek',
    title: 'Altijd aan?', subtitle: 'Je zenuwstelsel begrijpen. Leren schakelen.',
    expert: 'Met Jorien Raeymaekers',
    copy: 'Waarom blijft je lichaam alert, ook wanneer je probeert te ontspannen? Met Jorien leer je stresssignalen herkennen en begrijpen waarom slapen niet altijd hetzelfde is als herstellen. Je onderzoekt wat jou energie geeft of kost en stelt een persoonlijk herstelprotocol op.',
    earlyPrice: 580, standardPrice: 650, deadline: '15 december 2026', startDate: '2027-04-23', endDate: '2027-04-25', location: 'Sourbrodt, Hoge Venen, Ardennen',
    note: '',
    href: 'https://tally.so/r/pbogoy', cta: 'Boek je plek', featured: true,
    detailHref: '/reizen/altijd-aan/', detailLabel: 'Ontdek het weekend',
  },
  {
    period: 'Mei', id: 'simon-2027', month: 'MEI', date: 'Datum volgt', label: 'Beweging & gezondheid',
    title: 'Beweging als medicijn', subtitle: 'Wat doet beweging met je lichaam?',
    expert: 'Met Simon Helleputte',
    copy: 'Je hart, je uithouding, je stofwisseling: beweging zet meer in gang dan je denkt. Met Simon bereiden we een nieuw weekend voor rond beweging en gezondheid.',
    note: 'Ontvang de datum en het programma zodra ze bekend zijn.',
    href: 'https://tally.so/r/QKqRJA', cta: 'Hou me op de hoogte',
    detailHref: '/weekenden/exercise-is-medicine/', detailLabel: 'Bekijk de eerdere editie',
  },
  {
    id: 'sarah-2027', month: 'JUN', date: '', startDate: '2027-06-03', endDate: '2027-06-05', label: 'Nieuw · voor professionals',
    title: 'Verdiepingsweekend met Sarah Deleu', subtitle: 'Emotional Freedom Techniques (EFT), systemisch werk en lichaamsbewustzijn',
    expert: 'Met Sarah Deleu',
    copy: 'Een nieuw SOLA-weekend voor professionals, met Emotional Freedom Techniques (EFT) als centraal onderdeel. Samen met Sarah staan we stil bij emoties, terugkerende patronen en relaties. Ook voeding komt aan bod.',
    note: 'Ontvang het programma, de prijs en bericht zodra de inschrijvingen openen. Je interesse is vrijblijvend.',
    href: 'https://tally.so/r/b5Me82', cta: 'Zet me op de interesselijst',
    detailHref: '/reizen/verdiepingsweekend-sarah-deleu/', detailLabel: 'Ontdek het weekend',
  },
  {
    id: 'filip-2027', month: 'SEP', date: 'Datum volgt', label: 'Voeding · beweging · slaap · stress',
    title: 'Leefstijlweekend', subtitle: 'Hoe dagelijkse gewoontes je gezondheid beïnvloeden.',
    expert: 'Met leefstijlarts Filip Goossens',
    copy: 'Hoe beïnvloeden je voeding, beweging en stress je gezondheid en slaap? Met Filip Goossens, huisarts en leefstijlarts achter LifeLab, begrijp je hoe die samenhangen. Je krijgt voedingsadvies tijdens de maaltijden en kiest haalbare veranderingen voor thuis.',
    earlyPrice: 610, standardPrice: 680, period: 'September',
    note: 'Ontvang als eerste de exacte datum, het programma en de start van de inschrijvingen.',
    href: 'https://tally.so/r/lbQGek', cta: 'Hou me op de hoogte',
    detailHref: '/reizen/leefstijlweekend-filip-goossens/', detailLabel: 'Ontdek het weekend',
  },
  {
    period: 'Oktober', id: 'ademhaling-2027', month: 'OKT', date: 'Datum volgt', label: 'Workshops & oefeningen',
    title: 'Ademhaling: van inzicht naar oefening', subtitle: 'Hoe adem je? Wat gebeurt er in je lichaam?',
    expert: 'Expert wordt aangekondigd',
    copy: 'Je doet het de hele dag. Maar hoe werkt je ademhaling eigenlijk? Tijdens workshops en praktische oefeningen ontdek je de lichamelijke kant van ademhalen en ga je zelf aan de slag.',
    note: 'Volg de SOLA-updates voor de datum, de expert en het programma.',
    href: '/newsletter', cta: 'Hou me op de hoogte via de nieuwsbrief',
  },
];
// Display dates and month navigation are derived from the edition dates.
for (const edition of weekends2027) {
 if (edition.startDate && edition.endDate) {
  const start = new Date(`${edition.startDate}T12:00:00Z`);
  const end = new Date(`${edition.endDate}T12:00:00Z`);
  const month = new Intl.DateTimeFormat('nl-BE', { month: 'long', timeZone: 'UTC' });
  edition.date = start.getUTCMonth() === end.getUTCMonth()
   ? `${start.getUTCDate()}–${end.getUTCDate()} ${month.format(end)}`
   : `${start.getUTCDate()} ${month.format(start)}–${end.getUTCDate()} ${month.format(end)}`;
  edition.month = new Intl.DateTimeFormat('nl-BE', {month: 'short', timeZone: 'UTC'}).format(start).replace('.', '').toUpperCase();
 }
}
export const jorien2027 = weekends2027.find(w => w.id === 'jorien-2027')!;
export const sarah2027 = weekends2027.find(w => w.id === 'sarah-2027')!;
export const filip2027 = weekends2027.find(w => w.id === 'filip-2027')!;
export const fullDate = (w: WeekendEdition) => w.date === 'Datum volgt' ? `${w.period} ${agendaYear} · exacte datum volgt` : `${w.date} ${w.startDate ? w.startDate.slice(0, 4) : agendaYear}`;
export const priceLabel = (w: WeekendEdition) => w.earlyPrice ? `€${w.earlyPrice} vroegboekprijs` : '';
export const priceSummary = (w: WeekendEdition) => w.earlyPrice ? `${priceLabel(w)} · €${w.standardPrice} standaardprijs` : '';
export const priceTerms = (w: WeekendEdition) => w.deadline ? `Boek t.e.m. ${w.deadline}. Daarna €${w.standardPrice}.` : 'De vroegboekvoorwaarden volgen bij de opening van de inschrijvingen.';
export const dayLabel = (iso: string, offset = 0) => {
 const date = new Date(`${iso}T12:00:00Z`); date.setUTCDate(date.getUTCDate() + offset);
 return new Intl.DateTimeFormat('nl-BE', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(date);
};

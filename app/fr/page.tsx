import Image from 'next/image'
import TvaCalc from '../../components/TvaCalc'
import dict from '../../dictionaries/fr.json'

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl/tight sm:text-5xl/tight font-extrabold">{dict.heroTitle}</h1>
            <p className="mt-4 text-lg text-gray-600">{dict.heroText}</p>
            <div className="mt-6 flex gap-3">
              <a href="https://calendly.com/ton-lien" className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
                {{"fr":"Prendre rendez‑vous","nl":"Afspraak maken","en":"Book a meeting"}['fr']}
              </a>
              <a href="#services" className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-gray-50">
                {dict.ctaSee}
              </a>
            </div>
            <div className="mt-3 flex gap-3">
              <a href="tel:+32xxxxxxxxx" className="rounded-2xl border px-5 py-3 text-sm">Appeler</a>
              <a href="https://wa.me/32xxxxxxxxx" className="rounded-2xl border px-5 py-3 text-sm">WhatsApp</a>
            </div>
            <div className="mt-6 text-xs text-gray-500">{dict.metaLine}</div>
          </div>
          <div className="relative rounded-3xl border p-2 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
              alt="Cabinet comptable"
              className="rounded-2xl"
              width={1200} height={800} priority
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{dict.servicesTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Comptabilité générale','Encodage, réconciliations, bilans et comptes annuels (NBB/CBSO).'],
              ['Fiscalité','TVA, IPP/ISOC, précomptes, optimisation conforme et sans risque.'],
              ['Conseil & gestion','Tableaux de bord, cash‑flow, plan financier.'],
              ['Création d\'entreprise','Choix SRL, guichet entreprises, affiliations sociales.'],
              ['Digital & dématérialisation','E‑facturation (Peppol), ClearFacts/BilltoBox/CodaBox (compatibles).'],
              ['Accompagnement indép. & PME','Suivi adapté à votre stade et secteur.'],
            ].map(([t, d]) => (
              <div key={t as any} className="rounded-2xl border p-5">
                <div className="h-10 w-10 rounded-xl bg-gray-900 mb-4" />
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 border-t bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{dict.whyTitle}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Proximité & réactivité','Cabinet à taille humaine, un interlocuteur expert.'],
              ['Transparence','Forfait clair, devis précis, sans surprise.'],
              ['Orienté résultat','Conseil concret pour piloter activité & impôts.'],
            ].map(([t, d]) => (
              <div key={t as any} className="rounded-2xl border p-5">
                <div className="h-10 w-10 rounded-xl bg-gray-900 mb-4" />
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">{dict.pricingTitle}</h2>
          <p className="mt-3 text-sm text-gray-600 max-w-3xl">{dict.pricingLead}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ['Indépendant','à partir de 350 €/mois',['Comptabilité simplifiée','TVA trimestrielle','Déclarations IPP','Support email']],
              ['PME','sur devis',['Comptabilité complète','TVA mensuelle','Tableau de bord trimestriel','RDV conseil inclus']],
              ['Régie','taux horaire',['Cas multi‑corps de métier','Coordination (avocat, notaire, etc.)','Pilotage fiscal','Livrables au fur et à mesure']],
            ].map(([name, price, items]) => (
              <div key={name as any} className="rounded-2xl border bg-white p-6">
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{price}</div>
                <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
                  {(items as string[]).map(it => <li key={it}>{it}</li>)}
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
                  {{"fr":"Choisir","nl":"Kies","en":"Choose"}['fr']} {name}
                </a>
              </div>
            ))}
          </div>
          <TvaCalc />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold">{dict.faqTitle}</h2>
          <div className="mt-8 space-y-6">
            {[
              ['Qui sommes‑nous ?','Davolifin (BE0690.882.401) — SRL à Nivelles, fondée en 2018, dirigée par David Pluquet.'],
              ['Pour qui ?','Indépendants, starters et PME (FR/NL/EN).'],
              ['Quels outils ?','Peppol, intégrations possibles (ClearFacts, BilltoBox, CodaBox).'],
            ].map(([q, a]) => (
              <div key={q as any} className="rounded-2xl border p-5">
                <div className="font-semibold">{q}</div>
                <div className="mt-2 text-sm text-gray-600">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold">{dict.contactTitle}</h2>
          <form className="mt-6 grid gap-4" action="https://formspree.io/f/your-id" method="POST">
            <input className="rounded-xl border px-4 py-3" name="name" placeholder="Votre nom" required />
            <input className="rounded-xl border px-4 py-3" name="email" placeholder="Email" type="email" required />
            <input className="rounded-xl border px-4 py-3" name="company" placeholder="Société (optionnel)" />
            <textarea className="rounded-xl border px-4 py-3 min-h-[120px]" name="message" placeholder="Votre besoin (comptabilité, fiscalité, création, etc.)" required />
            <button className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90" type="submit">Envoyer</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">{dict.addressLine}</p>
        </div>
      </section>
    </main>
  )
}

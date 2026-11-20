import { useEffect } from 'react'
import { useContent, useT } from '../i18n/LanguageContext.jsx'

/*
 * Impressum and Datenschutzerklärung. German only, as required by German law.
 * DRAFT for launch: everything in [square brackets] must be confirmed before
 * the site goes public (address from Christian / Integrationsbüro, mailbox,
 * contact-form provider). Check the privacy text against a generator
 * (e.g. datenschutz-generator.de) or the city's data protection officer.
 */

const box = { maxWidth: '68ch', display: 'grid', gap: '1rem', paddingBlock: '3rem 4rem' }
const band = { background: 'var(--primary-deep, #2f2e1d)', color: '#fff', paddingBlock: '8rem 3rem' }
const h2 = { fontSize: '1.25rem', marginTop: '1.25rem' }

function Shell({ docTitle, heading, children }) {
  const t = useT()
  const { brand } = useContent()
  useEffect(() => {
    document.title = `${docTitle}, ${brand.name}`
  }, [docTitle, brand])
  const note = t('legal.germanNote')
  return (
    <div lang="de">
      <div style={band}>
        <div className="container" style={{ display: 'grid', gap: '0.75rem' }}>
          {note ? (
            <p lang="en" style={{ opacity: 0.85, margin: 0 }}>
              {note}
            </p>
          ) : null}
          <h1 style={{ color: '#fff', margin: 0 }}>{heading}</h1>
        </div>
      </div>
      <div className="container">
        <div style={box}>{children}</div>
      </div>
    </div>
  )
}

export function Impressum() {
  const t = useT()
  return (
    <Shell docTitle={t('legal.impressumDocTitle')} heading="Impressum">
      <h2 style={h2}>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
      <p>
        One Community Project
        <br />
        Adetayo Manuwa
        <br />
        [c/o Integrationsbüro der Stadt Dessau-Roßlau, Anschrift folgt nach Klärung]
      </p>
      <h2 style={h2}>Kontakt</h2>
      <p>E-Mail: [hello@onecommunityproject.org, sobald das Postfach eingerichtet ist]</p>
      <h2 style={h2}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Adetayo Manuwa, Anschrift wie oben</p>
      <h2 style={h2}>Haftung für Links</h2>
      <p>
        Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen
        Einfluss; für sie ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von
        Rechtsverletzungen entfernen wir solche Links umgehend.
      </p>
      <h2 style={h2}>Bild- und Filmrechte</h2>
      <p>
        Fotos und Filmausschnitte auf dieser Website stammen aus dem One Community Project. Eine
        Weiterverwendung ist nur mit vorheriger Zustimmung erlaubt.
      </p>
    </Shell>
  )
}

export function Datenschutz() {
  const t = useT()
  return (
    <Shell docTitle={t('legal.privacyDocTitle')} heading="Datenschutzerklärung">
      <p>
        Wir freuen uns über Ihr Interesse am One Community Project. Diese Erklärung informiert Sie
        darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden.
      </p>

      <h2 style={h2}>1. Verantwortlicher</h2>
      <p>
        Adetayo Manuwa, One Community Project, [Anschrift wie im Impressum]. E-Mail:
        [hello@onecommunityproject.org].
      </p>

      <h2 style={h2}>2. Hosting und Server-Logdateien</h2>
      <p>
        Diese Website wird bei Netlify, Inc., San Francisco, USA, gehostet. Beim Aufruf der Seiten
        verarbeitet Netlify technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit des Abrufs,
        aufgerufene Seite und Browsertyp, um die Website auszuliefern und vor Missbrauch zu schützen.
        Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und stabilen Betrieb
        (Art. 6 Abs. 1 lit. f DSGVO). Die Übermittlung in die USA erfolgt auf Grundlage
        [des EU-US Data Privacy Framework bzw. der Standardvertragsklauseln der EU-Kommission: vor
        Veröffentlichung prüfen].
      </p>

      <h2 style={h2}>3. Keine Cookies, keine Analyse-Tools</h2>
      <p>
        Wir setzen keine Cookies und keine Analyse- oder Tracking-Tools ein. Ihre Sprachauswahl
        (Deutsch oder Englisch) wird nur lokal in Ihrem Browser gespeichert, damit die Seite in Ihrer
        Sprache angezeigt wird. Dies ist für die gewünschte Funktion technisch erforderlich (§ 25
        Abs. 2 Nr. 2 TDDDG). Schriftarten werden direkt von unserem Server geladen, nicht von Google.
      </p>

      <h2 style={h2}>4. Eingebettete Videos (YouTube, Google Drive)</h2>
      <p>
        Einige Seiten enthalten Videos von YouTube bzw. Google Drive (Google Ireland Limited, Gordon
        House, Barrow Street, Dublin 4, Irland). Die Videos werden erst geladen, wenn Sie auf „Video
        laden“ klicken. Erst dann werden Daten wie Ihre IP-Adresse an Google übertragen, und Google
        kann Cookies setzen. YouTube-Videos binden wir im erweiterten Datenschutzmodus
        (youtube-nocookie.com) ein. Rechtsgrundlage ist Ihre Einwilligung durch den Klick (Art. 6
        Abs. 1 lit. a DSGVO). Weitere Informationen: policies.google.com/privacy.
      </p>

      <h2 style={h2}>5. Kontakt per E-Mail oder Kontaktformular</h2>
      <p>
        Wenn Sie uns schreiben, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, Nachricht), um
        Ihre Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Wir löschen die Daten, wenn
        sie dafür nicht mehr benötigt werden. [Anbieter des Kontaktformulars ergänzen, sobald es
        angebunden ist, z. B. Netlify Forms.]
      </p>

      <h2 style={h2}>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO) sowie das Recht, eine erteilte
        Einwilligung jederzeit zu widerrufen. Sie können sich außerdem bei einer
        Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den
        Datenschutz Sachsen-Anhalt.
      </p>

      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Stand: [Datum der Veröffentlichung]</p>
    </Shell>
  )
}

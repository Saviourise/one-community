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
      <h2 style={h2}>Anbieter dieser Website</h2>
      <p>
        One Community Project
        <br />
        Adetayo Manuwa
        <br />
        [vollständige, rechtlich geeignete Anschrift: Klärung mit Christian / Stadt Dessau-Roßlau]
      </p>
      <h2 style={h2}>Kontakt</h2>
      <p>
        E-Mail: [funktionierende E-Mail-Adresse, geplant hello@onecommunityproject.org]
        <br />
        [weiterer direkter Kontaktweg, z. B. Telefon, falls § 5 DDG anwendbar ist]
      </p>
      <h2 style={h2}>Inhaltlich verantwortlich</h2>
      <p>Adetayo Manuwa, Anschrift wie oben [Bezug auf § 18 MStV nach Prüfung ergänzen]</p>
      <h2 style={h2}>Links zu anderen Websites</h2>
      <p>
        Für die Inhalte verlinkter Websites sind deren Betreiber:innen verantwortlich. Hinweise auf
        rechtswidrige Inhalte prüfen wir und entfernen betroffene Links bei Bedarf.
      </p>
      <h2 style={h2}>Bild- und Filmrechte</h2>
      <p>
        Die Rechte an Fotos, Filmen und anderen Inhalten liegen bei den jeweiligen
        Rechteinhaber:innen. Soweit eine Nutzung nicht gesetzlich erlaubt ist, ist deren vorherige
        Zustimmung erforderlich.
      </p>
    </Shell>
  )
}

export function Datenschutz() {
  const t = useT()
  return (
    <Shell docTitle={t('legal.privacyDocTitle')} heading="Datenschutzerklärung">
      <p>
        Diese Erklärung informiert Sie darüber, welche personenbezogenen Daten beim Besuch dieser
        Website verarbeitet werden.
      </p>

      <h2 style={h2}>1. Verantwortlicher</h2>
      <p>
        Adetayo Manuwa, One Community Project, [Anschrift wie im Impressum]. E-Mail:
        [funktionierende E-Mail-Adresse]. Über diese Adresse können Sie auch Ihre Rechte geltend
        machen.
      </p>

      <h2 style={h2}>2. Hosting und Server-Logdateien</h2>
      <p>
        Diese Website wird bei Netlify, Inc., San Francisco, USA, gehostet. Beim Aufruf der Seiten
        verarbeitet Netlify technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit des Abrufs,
        aufgerufene Seite und Browsertyp, um die Website auszuliefern und vor Missbrauch zu schützen.
        Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und stabilen Betrieb
        (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        [Nach Prüfung des Netlify-Kontos einsetzen:] Mit Netlify besteht ein Vertrag zur
        Auftragsverarbeitung nach Art. 28 DSGVO. Die Übermittlung an Netlify in den USA stützt sich
        auf den Angemessenheitsbeschluss der Europäischen Kommission zum EU-U.S. Data Privacy
        Framework (Art. 45 DSGVO). [Aktuelle Zertifizierung und Geltung für die eingesetzten
        Leistungen vor Veröffentlichung bestätigen.] Server-Logdaten werden [bestätigte
        Speicherdauer oder nachvollziehbare Löschkriterien] gespeichert und anschließend gelöscht.
      </p>

      <h2 style={h2}>3. Sprachauswahl, Schriftarten und Analyse</h2>
      <p>
        Wir verwenden keine eigenen Analyse- oder Tracking-Tools. Beim Laden externer Videos können
        die jeweiligen Anbieter Cookies oder ähnliche Speichertechniken einsetzen. Näheres steht im
        Abschnitt „Eingebettete Videos“.
      </p>
      <p>
        Wenn Sie eine Sprache auswählen, speichern wir diese Einstellung für die aktuelle
        Browsersitzung in Ihrem Browser (sessionStorage). So bleibt die gewählte Sprache beim Wechsel
        zwischen den Seiten erhalten. Diese Speicherung dient der von Ihnen gewählten Sprachfunktion
        (§ 25 Abs. 2 Nr. 2 TDDDG). Schriftarten werden direkt von unserem Server geladen, nicht von
        Google.
      </p>

      <h2 style={h2}>4. Eingebettete Videos (YouTube, Google Drive)</h2>
      <p>
        Einige Seiten enthalten Videos von YouTube bzw. Google Drive (Google Ireland Limited, Gordon
        House, Barrow Street, Dublin 4, Irland). Die Videos werden erst geladen, wenn Sie auf „Video
        laden“ klicken. Dann erhält Google Daten wie Ihre IP-Adresse und Angaben zu Ihrem Browser,
        stellt das Video bereit und kann Cookies oder ähnliche Speichertechniken einsetzen.
        YouTube-Videos binden wir über youtube-nocookie.com ein. Google verarbeitet die Daten auch
        für eigene Zwecke; Einzelheiten finden Sie unter policies.google.com/privacy. [Übermittlung in
        die USA und Speicherdauer anhand der aktuellen Google-Dokumentation ergänzen, z. B.
        policies.google.com/privacy/frameworks.]
      </p>
      <p>
        Das Laden der Videos und die damit verbundene Verarbeitung personenbezogener Daten erfolgen
        auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Soweit dabei Informationen
        auf Ihrem Endgerät gespeichert oder ausgelesen werden, ist § 25 Abs. 1 TDDDG die
        Rechtsgrundlage. Sie können Ihre Einwilligung über „Video deaktivieren“ jederzeit mit Wirkung
        für die Zukunft widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt
        unberührt.
      </p>

      <h2 style={h2}>5. Dokumentarfilm „Noch einmal Walzer“</h2>
      <p>
        [Ladeverhalten nach Festlegung des Hostings prüfen und hier beschreiben.] [Hosting des Films prüfen: derzeit
        eine Videodatei bei GitHub (GitHub, Inc., USA). Entweder Anbieter, Zweck, Rechtsgrundlage,
        Übermittlung und Speicherdauer hier beschreiben oder den Film über das unter Abschnitt 2
        beschriebene Hosting ausliefern.]
      </p>

      <h2 style={h2}>6. Kontakt per E-Mail</h2>
      <p>
        Wenn Sie uns schreiben, verarbeiten wir Ihre E-Mail-Adresse, Ihre Nachricht und weitere von
        Ihnen mitgeteilte Angaben, um Ihre Anfrage zu bearbeiten. Allgemeine Anfragen bearbeiten wir
        auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist die
        Kommunikation mit Interessierten und Projektpartner:innen. Soweit Ihre Anfrage einen Vertrag
        mit Ihnen oder vorvertragliche Maßnahmen betrifft, ist Art. 6 Abs. 1 lit. b DSGVO die
        Rechtsgrundlage. Die Angaben sind freiwillig. Ohne eine Kontaktmöglichkeit können wir Ihnen
        nicht antworten. Die Verarbeitung erfolgt über [tatsächlicher E-Mail-Anbieter und
        gegebenenfalls Formularanbieter, Empfänger und Übermittlungsgrundlage]. Nach abschließender
        Bearbeitung löschen wir die Anfrage nach [bestätigter Frist oder konkretem Löschkriterium],
        sofern keine gesetzlichen Aufbewahrungspflichten oder sonstigen rechtlichen Gründe
        entgegenstehen.
      </p>

      <h2 style={h2}>7. Ihre Rechte</h2>
      <p>
        Soweit die gesetzlichen Voraussetzungen vorliegen, haben Sie Rechte auf Auskunft,
        Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.
      </p>
      <p>
        Wenn wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten,
        können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen
        diese Verarbeitung einlegen.
      </p>
      <p>
        Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die
        Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
      </p>
      <p>
        Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere in dem
        Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des
        mutmaßlichen Verstoßes.
      </p>

      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Stand: [Datum der Veröffentlichung]</p>
    </Shell>
  )
}

# bank

## Bankinterne Überweisungen
1. GUI: einfachen "Login" ermöglichen - z.B. Hauptseite (/) und Überweisungsübersicht (/view?user=florian)
1. Datenbank anlegen für Überweisungen (from, to, amount)
1. Test-Überweisungen anlegen
1. GUI: Überweisungen zu angemeldetem Benutzer anzeigen
1. GUI: Saldo ermitteln und anzeigen
1. Neue Überweisung auf der Überweisungsübersicht ermöglichen (Felder: to, amount)

## Externe Überweisungen
1. Datenbank für zugelassene Banken anlegen (z.B. bank.web.app)
1. Endpunkt bereitstellen um externe Überweisungen zu empfangen: POST /new {from: "abc", to: "abc", amount: 0}
1. Externe Überweisungen ermöglichen
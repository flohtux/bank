# bank

## Bankinterne Überweisungen
1. GUI: einfachen "Login" ermöglichen - z.B. Hauptseite (/) und Überweisungsübersicht (/view)
    1. Auf der Hauptseite soll ein Eingabefeld für den Benutzernamen sein und ein Login-Button
    1. Nach dem "Login" wird man auf die Überweisungsübersicht für den Benutzer geleitet
    1. npx create-react-app
    1. react-router (?)
1. Firebase-Projekt anlegen: Firebase Datenbank anlegen für Überweisungen (from, to, amount)
1. Test-Überweisungen über die Admin-GUI anlegen
1. GUI: Überweisungen zu angemeldetem Benutzer anzeigen (Einbinden der Firebase-API in React)
1. GUI: Saldo ermitteln und anzeigen
1. Neue Überweisung auf der Überweisungsübersicht ermöglichen (Felder: to, amount)

## Externe Überweisungen
1. Endpunkt bereitstellen um externe Überweisungen zu empfangen: POST https://meinebank.web.app/new {from: "abc", to: "abc", amount: 0}
1. from und to können mit "username@meinebank.web.app" qualifiziert werden
1. Externe Überweisungen ermöglichen


## Erweiterungen
1. Login über OAuth mit Firebase Usern
1. Hübsch machen z.B. mit Material-ui
1. Währung
1. Geld anfordern

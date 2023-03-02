# bank

## Voraussetzungen
1. NodeJS-Installation bzw. GitPod
2. console.firebase.google.com-Account

## Bankinterne Überweisungen
1. GUI: einfachen "Login" ermöglichen - z.B. Hauptseite (/) und Überweisungsübersicht (/view)
    1. Auf der Hauptseite soll ein Eingabefeld für den Benutzernamen sein und ein Login-Button
    1. Nach dem "Login" wird man auf die Überweisungsübersicht für den Benutzer geleitet
    1. npx create-react-app
    1. react-router (?)
2. Firebase-Projekt anlegen und den React-Build-Output nach Firebase Hosting deployen
3. Firestore Datenbank anlegen für Überweisungen (from, to, amount)
4. Test-Überweisungen über die Admin-GUI anlegen
5. GUI: Überweisungen zu angemeldetem Benutzer anzeigen (Einbinden der Firebase-API in React)
6. GUI: Saldo ermitteln und anzeigen
7. Neue Überweisung auf der Überweisungsübersicht ermöglichen (Felder: to, amount)

## Externe Überweisungen
1. Endpunkt bereitstellen um externe Überweisungen zu empfangen: POST https://meinebank.web.app/new {from: "abc", to: "abc", amount: 0}
1. from und to können mit "username@meinebank.web.app" qualifiziert werden
1. Externe Überweisungen ermöglichen


## Erweiterungen
1. Login über OAuth mit Firebase Usern
1. Hübsch machen z.B. mit Material-ui
1. Währung
1. Geld anfordern

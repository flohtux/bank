# bank

## Voraussetzungen
1. NodeJS-Installation bzw. GitPod
2. console.firebase.google.com-Account (Google-Account)

## Bankinterne Überweisungen
1. GUI: einfachen "Login" ermöglichen - z.B. Hauptseite (/) und Überweisungsübersicht (/view)
    1. Auf der Hauptseite soll ein Eingabefeld für den Benutzernamen sein und ein Login-Button
    2. Nach dem "Login" wird man auf die Überweisungsübersicht für den Benutzer geleitet
    3. npx create-react-app
    4. react-router (?)
2. Firebase-Projekt anlegen und den React-Build-Output (npm run build) nach Firebase Hosting deployen
3. Firestore Datenbank anlegen für Überweisungen (from, to, amount)
4. Test-Überweisungen über die Admin-GUI anlegen
5. GUI: Überweisungen zu angemeldetem Benutzer anzeigen (Einbinden der Firebase-API in React)
6. GUI: Saldo ermitteln und anzeigen
7. Neue Überweisung auf der Überweisungsübersicht ermöglichen (Felder: to, amount)

## Externe Überweisungen
1. Endpunkt bereitstellen um externe Überweisungen zu empfangen: POST https://meinebank.web.app/new {from: "abc@bank.web.app", to: "efg@meinebank.web.app", amount: 0}
2. Externe Überweisungen ermöglichen


## Erweiterungen
1. Login über OAuth mit Firebase Usern
2. Hübsch machen z.B. mit Material-ui
3. Währung
4. Geld anfordern
5. Live-Umsatz-Anzeige

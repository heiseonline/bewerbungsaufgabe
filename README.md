# Bewerbungsaufgabe - DevOps for Developers

Wir haben einen Webservice eingerichtet, der die letzten fünf Meldungen von heise online im JSON-Format ausgibt. Dieser Service funktioniert nicht zuverlässig und steht beispielhaft für eine Ressource, die Sie nicht direkt verändern können.

Dieses Repository enthält eine Node.js-Anwendung, die diesen Webservice konsumiert und die Meldungen als HTML ausgibt.

- Erstellen Sie ein Docker-Image, das diese Anwendung auf Port 8080 zur Verfügung stellt.
- Liefern Sie Erklärungsansätze, warum der Service nicht zuverlässig funktioniert.
- Entwerfen Sie eine Lösung, wie die Verfügbarkeit der Anwendung sichergestellt werden kann, sodass ein Endnutzer nichts von den Problemen mitbekommt. Dafür sollte der Code der Anwendung nicht oder nur minimal angepasst werden.
- Bitte senden Sie uns Ihre Lösung bis zum verabredeten Termin in Textform (Plain, PDF) und die von Ihnen erstellten Arbeitsdateien (Dockerfiles, ggf. angepassten Quellcode etc.) per E-Mail. Sollten es größere Datenmengen werden, bitte kurz melden, dann finden wir eine geeignetere Methode für den Dateiaustausch.

## Getting started

```sh
# Install pnpm once
$ npm i -g pnpm

# Install deps
$ pnpm install

# Build libs and start development server:
$ pnpm build:libs
$ pnpm start:dev

# Build and start production server:
$ pnpm build
$ pnpm start
```

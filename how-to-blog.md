# How-To: Blog-Einträge verfassen

**Falls Du bisher noch nicht an der Website gearbeitet hast:**
0. Klone dieses Repository: `git clone https://github.com/Coderdojo-Schoeneweide/website-hugo.git`

1. Erstelle einen neuen Git-Branch, auf dem Du Dich austoben kannst: `git checkout -b <branch_name>`, z.B. `git checkout -b blogpost-girls-day`
2. Starte den Dev-Server, um eine Vorschau Deiner Änderungen zu bekommen: `hugo serve`\
(Beim Speichern wird die Website automatisch mit Deinen Änderungen neu geladen)
3. Erstelle einen neuen Blog-Post: `hugo new blog/<yyyy-mm-dd-title-goes-here>`, z.B. `hugo new blog/2022-05-10-girls-day-workshop`.
Dieser Befehl generiert einen neuen Ordner für Deinen Blog-Post unter dem Pfad `content/blog/<yyyy-mm-dd-title>`.
4. Nun kannst Du die Datei `index.md` in Deinem Blogpost-Ordner nach Deinen Wünschen anpassen.
Der eigentliche Inhalt des Artikels kommt an die Stelle, an der "Your content goes here" steht.
In der Datei kann Dein Text nach Markdown-Regeln formatiert werden.
Eine kurze Übersicht über alle Funktionen, die Markdown bietet, findest Du [in diesem Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) :)
5. Nachdem Du den Artikel fertig verfasst hast, kannst Du ihn auf GitHub pushen, damit er dann nach einem Review auf
der Website veröffentlicht werden kann: `git push -u origin <branch_name>` (oder einfach `git push`, wenn dies nicht
Dein erster Push auf dem Branch ist :))
6. Als letztes musst Du nur noch einen Pull Request für Deinen Branch erstellen (GitHub -> Pull requests -> New pull request -> base: master, compare: Dein Branch).
Dieser wird dann reviewed und anschließend wird Dein Artikel veröffentlicht!

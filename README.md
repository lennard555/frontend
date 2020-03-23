# frontend

Projekt des #WirVsVirusHack

# Links

Website: https://qoods.info/

Video: https://www.youtube.com/watch?v=gCN7aoOSjFY

Filialleiter: https://youtu.be/a2Mrpnq5ipg

Teaser: https://youtu.be/fYiQiOfb73E

Github: https://github.com/wirvsvirushackathon-supermarket

# Warum? - das Problem:
Virusübertragungen beispielsweise des Corona Virus erfolgen vor allem bei größeren Menschenansammlungen. Diese können auf öffentlichen Plätzen und Läden, wie dem Supermarkt, Apotheke oder Drogerie, leicht entstehen. Der lebensnotwendige Einkauf kann so zur Gesundheitsbedrohung werden.

# Wie – unsere Idee:
Die Web-App hat zwei Grundfunktionen. Es gibt eine Karte, auf der man die Auslastung öffentlicher Einrichtungen einsehen kann, und ein Zeitfenster-Buchungssystem, mit dem die Auslastung dieser Einrichtungen gemanagt wird. Durch die Auslastungsanzeige können Kunden Stoßzeiten umgehen indem sie die angezeigten Stoßzeiten umgehen, auch ohne ein Ticket zu buchen. Das Buchungssystem ermöglicht Ladenbesitzern größere Kundenansammlungen vorzubeugen. Durch die Ticketbuchung hat ein Kunde die Gewissheit keine größere Kundenansammlung in der Einrichtung vorzufinden, er kann zügig sein Anliegen erledigen und wird auf jeden Fall sofort in die Einrichtung gelassen.

# Detailbeschreibung:

Die Visualisierung der Auslastung umfasst eine Detailübersicht der Besucher über den Tag verteilt. So können Besucher ihren Einkauf zu denen wenig los ist.

Das Zeitfensterbuchungs-System umfasst eine Kundenkapazität pro Stunde in der jeweiligen Einrichtung, die vom Ladenbesitzer vorgegeben wird. Kunden können anschließend Zeitfenster mit einer maximalen Anzahl an Begleitpersonen buchen, bis die Kapazität des Zeitfensters ausgeschöpft ist.

Der Kunde erhält dann ein Ticket, welches er mit seinem Personalausweis vorzeigt, um in den jeweiligen Laden zu gelangen. Ladenbesitzer können einsehen welche Tickets (Name, Anzahl Personen) zu welcher Zeit für ihren Laden gebucht wurden und so den Einlass kontrollieren.

Der Ladenbesitzer kann entscheiden, ob er das volle Kontingent über das System vergibt oder nur einen Teil. Damit hätten Kunden, die das System nicht nutzen und spontan einkaufen wollen, die Chance in den Laden zu kommen.

Dieses Tool ist besonders von Relevanz, wenn eine Auflage erfolgen sollte, lediglich eine bestimmte Anzahl an Menschen in einen Raum zu lassen. Ladenbesitzer könnten auch entscheiden die Kundenanzahl nur in bestimmte Zeitfenstern zu beschränken (z.B. Mo-Sa von 16 bis 18 Uhr), damit Risikogruppen zu dieser Zeit sorglos einkaufen können.

# Fortschritt

Innerhalb des Hackathons haben wir die Idee weiter ausgearbeitet Mocks erstellt und angefangen einen Prototypen zu bauen.

Der Prototyp ist komplett Open-Source und auf Open-Source Lösungen während des Hackathons entstanden. Wir haben und für das Frontend und Backend jeweils ein Repository angelegt in einer Github organisation https://github.com/wirvsvirushackathon-supermarket/ so dass wir alle zusammen am Code arbeiten konnten. Wir bauen komplett auf Googles Material design auf und mussten somit kaum Styles schreiben, somit ist das Frontend auch für die Weiterentwicklung leichter zu verstehen und kann zudem eine Konsistente UI haben. Auch React ist ein weit verbreitetes Framework was einfach für den Einstieg ist. Das fronend ist gut strukturiert in einzelnen Komponenten gebaut worden um die Aufgaben einfach zwischen den 3 Entwicklern aufteilen zu können. Um die Hürde für Entwickler möglichst gering zu halten ist auch das Backend in TypeScript geschrieben was es auch einem Fronendentwickler ermöglichen soll schnell kleine Änderungen vorzunehmen. Insgesamt lehnt sich NestJS sehr stark an Frontendtechnologien an und man kann mit wenig Code eine umfangreiche GraphQL API bauen. Wir haben um für alle im Team die Möglichkeit zu haben die zwischenstände zu checken, das Frontend auf netlify deployed und das Backend mit einer Postgres Datenbank auf Heroku.

Insgesammt fehlt bei unserem aktuellen Stand der Login um den Filialleitern einen sichern Zugang zu ihrer Konfiguration zu bieten, auch wenn wir hier schon einen Lösungsansatz haben muss dieser noch implementiert werden ansonsten ist der Prototyp in einem Zustand der es ermöglich mit geringem Zeitaufwand auch wirklich live zu gehen und aber auch im weiteren Verlauf durch Funktionalität erweitert werden kann.

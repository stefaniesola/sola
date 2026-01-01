# Markdown Guide voor SOLATRAVEL Content

## Wat is Markdown?

Markdown is een eenvoudige opmaaktaal die je gebruikt om tekst te formatteren zonder complexe HTML-code te schrijven. Het is ontworpen om leesbaar te zijn, zowel in ruwe tekst als wanneer het wordt omgezet naar HTML.

### Basis Markdown Syntax

Hier zijn de meest gebruikte Markdown-elementen:

#### Headers (Koppen)
```markdown
# Grootste kop (H1)
## Tweede niveau (H2)
### Derde niveau (H3)
#### Vierde niveau (H4)
```

#### Tekst opmaak
```markdown
**vetgedrukt** of __vetgedrukt__
*cursief* of _cursief_
~~doorgehaald~~
```

#### Lijsten

Ongeordende lijst:
```markdown
- Item 1
- Item 2
  - Sub-item (met inspringing)
- Item 3
```

Geordende lijst:
```markdown
1. Eerste item
2. Tweede item
3. Derde item
```

#### Links
```markdown
[Link tekst](https://voorbeeld.nl)
```

#### Code
```markdown
`inline code` met backticks
```

#### Horizontale lijn
```markdown
---
```

#### Paragrafen
Paragrafen worden gescheiden door een lege regel:
```markdown
Dit is een paragraaf.

Dit is een nieuwe paragraaf.
```

## Waar in content.ts moet je Markdown gebruiken?

In het bestand `/Users/mathii/projects/sola/src/data/content.ts` wordt Markdown gebruikt in het **`longread`** veld van elke journey (reis/weekend).

### Locatie in de code

Het `longread` veld bevindt zich in de `Journey` interface, specifiek in het `journeys` array. Elke journey object kan een optioneel `longread` veld bevatten:

```typescript
export interface Journey {
  // ... andere velden ...
  longread?: string; // Markdown content for the full article
}
```

### Voorbeeld structuur

```typescript
{
  slug: "bewustwording-connectie",
  name: "Weekend – Bewustwording × Connectie",
  // ... andere velden ...
  longread: `Hier komt je Markdown content.

## Sectie 1

Tekst met **vetgedrukte** en *cursieve* woorden.

- Lijst item 1
- Lijst item 2

## Sectie 2

Meer content...`
}
```

### Waar vind je de journeys?

De journeys staan in het `journeys` array, beginnend rond regel 37 in `content.ts`. Elke journey heeft:
- Een `slug` (unieke identifier)
- Basis informatie (naam, type, locatie, etc.)
- Een optioneel `longread` veld waar je Markdown kunt gebruiken

### Tips voor het schrijven van longread content

1. **Gebruik headers** om secties te structureren (bijv. `## Voor wie`, `## Programma`)
2. **Gebruik lijsten** voor opsommingen (bijv. wat is inbegrepen, focus punten)
3. **Gebruik vetgedrukt** voor belangrijke termen of namen
4. **Houd paragrafen kort** voor leesbaarheid
5. **Gebruik consistent formatting** zoals in de bestaande longread voor "Exercise is Medicine"

### Voorbeeld van een complete longread structuur

```markdown
Korte introductie paragraaf.

## Voor wie

- Doelgroep 1
- Doelgroep 2

## Wat je leert / focus

- Leerpunt 1
- Leerpunt 2

## Programma

### Dag 1

- Activiteit 1
- Activiteit 2

## Verblijf & maaltijden

Beschrijving van accommodatie en eten.

## Praktisch (logistiek)

**Locatie:** ...  
**Data:** ...  
**Prijs:** ...

### Wat is inbegrepen

- Item 1
- Item 2
```

## Hoe te bewerken

1. Open `/Users/mathii/projects/sola/src/data/content.ts`
2. Zoek de journey waar je de longread wilt toevoegen/aanpassen
3. Voeg of wijzig het `longread` veld (gebruik backticks `` ` `` voor multi-line strings)
4. Schrijf je content in Markdown syntax
5. Sla het bestand op

**Let op:** Het `longread` veld is optioneel (`longread?: string`), dus niet alle journeys hoeven er een te hebben. Maar voor een complete gebruikerservaring is het aan te raden om voor elke journey een longread toe te voegen.


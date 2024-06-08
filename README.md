# Todo app

Detta är ett första projekt i min process att lära mig Vuejs

## Features
Jag har valt att skapa en Todo med ett fåtal komponenter:


App.vue som är huvudsakligt samlingsdokument för övriga komponenter.  
TodoList.vue som innehåller en Todo i sprakande färger där varje notis får olika bakgrundsfärg utifrån en lista. Detta går sedan som en loop och upprepas vartefter man lägger till mer.   
TodoBw.vue som är en variant av den ovanstående komponenten, med den skillnaden att den istället är monokrom och går i en gråskala.  
ToggleButton.vue som styr byte av färgtema och hanterar visning av ikoner för detta.

Utöver detta finns en model för Todo och ett dokument som hanterar lagring och hämtning till och från Local Storage. 

Hela projektet, så litet det är, är skrivet i Vuejs och typescript som en del av kursen Javascript fördjupning.

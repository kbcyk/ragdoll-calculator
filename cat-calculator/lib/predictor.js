function calccolour() {
		
    var value1 = document.getElementById('colour1');
    var value2 = document.getElementById('colour2');
    var result = document.getElementById('colourresult');

    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 0)) {
        result.innerHTML = "Alle killinger vil være brune, bærer ikke fortynding";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/2 brun, bærer ikke fortynding; 1/2 brun, bærer fortynding";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 2)) {
        result.innerHTML = "brun, bærer ikke fortynding; 1/2 brun bærer chokolade";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer ikke fortynding; 1/4 brun, bærer fortynding; 1/4 brun, bærer chokolade; 1/4 brun, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 4)) {
        result.innerHTML = "Alle killinger vil være brune, bærer fortynding";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/2 bærer fortynding; 1/2 bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 6)) {
        result.innerHTML = "Alle killinger vil være brune, bærer chokolade";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/2 Brun, bærer chokolade; 1/2 brun, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 0) && (value2.selectedIndex == 8)) {
        result.innerHTML = "Alle killinger vil være brune, bærer fortynding og chokolade";
    }


    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 0)) {
        result.innerHTML = "1/2 brun, bærer ikke fortynding; 1/2 brun, bærer fortynding";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/2 brun bærer fortynding; 1/4 brun, bærer ikke fortynding; 1/4 blå";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/4 brun bærer ikke fortynding; 1/4 brun, bærer fortynding; 1/4 brun, bærer chokolade; 1/4 brun bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun bærer fortynding; 1/4 brun, bærer fortynding og chokolade; 1/8 brun bærer ikke fortynding; 1/8 blå; 1/8 brun bærer chokolade; 1/8 blå bærer chokolade";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 4)) {
        result.innerHTML = "1/2 brun bærer fortynding; 1/2 blå";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/4 brun bærer fortynding; 1/4 brun bærer fortynding og chokolade; 1/4 blå; 1/4 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 6)) {
        result.innerHTML = "1/2 brun bærer chokolade; 1/2 brun bærer fortydning og chokolade";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/2 brun bærer fortynding og chokolade; 1/4 brun, bærer chokolade; 1/4 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 1) && (value2.selectedIndex == 8)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/2 blå, bærer chokolade";
    }

    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 0)) {
        result.innerHTML = "1/2 brun, bærer ikke fortynding; 1/2 brun, bærer chokolade";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/4 brun, bærer ikke fortynding; 1/4 brun, bærer fortynding; 1/4 brun, bærer chokolade; 1/4 brun, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/2 brun, bærer chokolade; 1/4 brun, bærer ikke fortynding; 1/4 chokolade, bærer ikke fortynding";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer chokolade; 1/4 brun, bærer fortynding og chokolade; 1/8 brun, bærer ikke fortynding; 1/8 brun, bærer fortynding; 1/8 Chokolade, bærer fortynding; 1/8 chokolade, bærer ikke fortyinging";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 4)) {
        result.innerHTML = "1/2 brun, bærer fortynding; 1/2 brun, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/4 brun, bærer fortynding; 1/4 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 6)) {
        result.innerHTML = "1/2 brun, bærer chokolade; 1/2 chokolade, bærer ikke fortynding";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/4 brun, bærer chokolade; 1/4 brun, bærer fortynding og chokolade; 1/4 chokolade, bærer ikke fortynding; 1/4 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 2) && (value2.selectedIndex == 8)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/2 chokolade, bærer fortynding";
    }

    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 0)) {
        result.innerHTML = "1/4 brun, bærer ikke fortyinding; 1/4 brun, bærer fortynding; 1/4 brun, bærer chokolade, 1/4 brun, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/4 brun, bærer fortynding; 1/4 brun, bærer fortynding og chokolade; 1/8 brun, bærer ikke fortynding; 1/8 blå, 1/8 brun, bærer chokolade; 1/8 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/4 brun, bærer chokolade; 1/4 brun, bærer af fortynding og chokolade; 1/8 brun, bærer ikke fortynding; 1/8 brun, bærer af fortynding; 1/8 chokolade, bærer af fortynding; 1/8 chokolade, bærer ikke fortynding";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/8 brun, bærer fortynding; 1/8 brun, bærer chokolade; 1/8 blå, bærer chokolade; 1/8 chokolade, bærer fortynding; 1/16 brun, bærer ikke fortynding; 1/16 blå; 1/16 chokoalde, bærer ikke fortynding; 1/16 lilla";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 4)) {
        result.innerHTML = "1/4 brun, bærer fortynding; 1/4 brun, bærer blå og chokolade; 1/4 blå; 1/4 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 blå, bærer chokolade; 1/8 brun, bærer fortynding; 1/8 blå; 1/8 chokolade, bærer fortynding; 1/8 lilla";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 6)) {
        result.innerHTML = "1/4 brun, bærer chokolade; 1/4 brun, bærer fortydning og chokolade; 1/4 chokolade, bærer ikke fortynding; 1/4 Chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 chokolade, bærer fortynding; 1/8 brun, bærer chokolade; 1/8 blå, bærer chokolade; 1/8 Chokolade, bærer ikke fortynding; 1/8 lilla";
    }
    if ((value1.selectedIndex == 3) && (value2.selectedIndex == 8)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 blå, bærer chokolade; 1/4 chokolade, bærer fortynding; 1/4 lilla";
    }

    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 0)) {
        result.innerHTML = "Alle killinger vil blive brune, bærer af fortynding";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/2 brun, bærer af fortynding; 1/2 blå";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/2 brun, bærer fortynding; 1/2 brun bærer af blå og chokolade";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer fortydning; 1/4 brun, bærer blå og chokolade; 1/4 blå; 1/4 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 4)) {
        result.innerHTML = "Alle killinger vil blive blå";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/2 blå; 1/2 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 6)) {
        result.innerHTML = "Alle killinger vil være brune, med bærer af fortynding og chokolade";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/2 brun, bærer af fortynding og chokolade; 1/2 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 4) && (value2.selectedIndex == 8)) {
        result.innerHTML = "Alle killinger vil blive blå, bærer chokolade";
    }

    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 0)) {
        result.innerHTML = "1/2 brun, bærer fortynding; 1/2 brun bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/4 brun, bærer fortynding; 1/4 brun bærer fortynding og chokolade; 1/4 blå; 1/4 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/4 brun, bærer fortynding; 1/4 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer blå og chokolade; 1/4 blå, bærer chokolade; 1/8 brun, bærer fortynding; 1/8 blå; 1/8 chokolade, bærer fortynding; 1/8 lilla";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 4)) {
        result.innerHTML = "1/2 pure BLUE; 1/2 BLUE carrying chocolate";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/2 blå, bærer chokolade; 1/4 blå; 1/4 lilla"
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 6)) {
        result.innerHTML = "1/2 brun bærer fortynding og chokolade; 1/2 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 blå, bærer chokolade; 1/4 chokolade, bærer fortynding; 1/4 lilla";
    }
    if ((value1.selectedIndex == 5) && (value2.selectedIndex == 8)) {
        result.innerHTML = "1/2 blå bærer chokolade; 1/2 lilla";
    }

    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 0)) {
        result.innerHTML = "Alle killinger vil blive brune, bærer chokolade";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/2 brun, bærer chokolade; 1/2 brun bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/2 brun, bærer chokolade; 1/2 chokolade";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer chokolade; 1/4 brun, bærer fortynding og chokolade; 1/4 chokolade, bærer ikke fortynding; 1/4 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 4)) {
        result.innerHTML ="Alle killinger vil blive brune, bærer af fortynding og chokolade";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/2 brun, bærer fortyning og chokolade; 1/2 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 6)) {
        result.innerHTML = "Alle killinger vil blive chokolade, bærer ikke fortynding";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/2 chokolade, bærer ikke fortynding; 1/2 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 6) && (value2.selectedIndex == 8)) {
        result.innerHTML = "Alle killinger vil blive chokolade, bærer fortynding";
    }

    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 0)) {
        result.innerHTML = "1/2 brun, bærer chokolade; 1/2 brun, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/4 brun, bærer chokolade; 1/4 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/4 brun, bærer chokolade; 1/4 brun, bærer fortynding og chokolade; 1/4 chokolade, bærer ikke fortynding: 1/4 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 chokolade, bærer fortynding; 1/8 brun, bærer chokolade; 1/8 blå, bærer chokolade; 1/8 chokolade, bærer ikke fortynding; 1/8 lilla";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 4)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/2 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 blå, bærer chokolade; 1/4 chokolade, bærer fortynding; 1/4 lilla";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 6)) {
        result.innerHTML = "1/2 chokolade, bærer ikke fortynding; 1/2 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/2 chokolade, bærer fortynding; 1/4 chokolade, bærer ikke fortynding; 1/4 lilla";
    }
    if ((value1.selectedIndex == 7) && (value2.selectedIndex == 8)) {
        result.innerHTML = "1/2 chokolade, bærer fortynding; 1/2 lilla";
    }

    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 0)) {
        result.innerHTML = "Alle killinger vil blive brune, bærer fortynding og chokolade";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 1)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/2 blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 2)) {
        result.innerHTML = "1/2 brun, bærer fortynding og chokolade; 1/2 chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 3)) {
        result.innerHTML = "1/4 brun, bærer fortynding og chokolade; 1/4 blå, bærer chokolade; 1/4 chokolade; bærer fortynding; 1/4 lilla";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 4)) {
        result.innerHTML = "Alle killinger vil være blå, bærer chokolade";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 5)) {
        result.innerHTML = "1/2 blå, bærer chokolade; 1/2 lilla";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 6)) {
        result.innerHTML = "Alle killinger vil være chokolade, bærer fortynding";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 7)) {
        result.innerHTML = "1/2 chokolade, bærer fortynding; 1/2 lilla";
    }
    if ((value1.selectedIndex == 8) && (value2.selectedIndex == 8)) {
        result.innerHTML = "Alle killinger vil blive lilla";
    }
}



function calccolourred() {
    var colour3 = document.getElementById('colour3');
    var colour4 = document.getElementById('colour4');
    var colourresultred = document.getElementById('colourresultred');

	if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 0)) {
        colourresultred.innerHTML = "Alle han-killinger vil blive brune; Alle hun-killinger vil blive brun tortie";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 1)) {
        colourresultred.innerHTML = "Alle han-killinger vil blive brune; Alle hun-killinger vil blive brun tortie";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 2)) {
        colourresultred.innerHTML = "Alle han-killinger vil blive brune; Alle hun-killinger vil blive brun tortie";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 3)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive røde, 1/2 vil blive brune ; 1/2 af hun-killingeerne vil blive brun tortie , 1/2 vil blive røde";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 4)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive røde, 1/2 vil blive brune ; 1/2 af hun-killingeerne vil blive brun tortie , 1/2 vil blive røde";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 5)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive røde, 1/2 vil blive brune ; 1/2 af hun-killingeerne vil blive brun tortie , 1/2 vil blive røde";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 6)) {
        colourresultred.innerHTML = "Alle killinger vil blive røde";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 7)) {
        colourresultred.innerHTML = "Alle killinger vil blive røde";
    }
    if ((colour3.selectedIndex == 0) && (colour4.selectedIndex == 8)) {
        colourresultred.innerHTML = "Alle killinger vil blive røde";
    }


    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 0)) {
        colourresultred.innerHTML = "Alle han-killinger bliver brune ; Alle hun-killinger bliver brun tortie";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 1)) {
        colourresultred.innerHTML = "3/4 af han-killingerne bliver brune , 1/4 bliver blå ; 3/4 af hun-killingerne vil blive brun tortie , 1/4 vil blive blå tortie";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 2)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive brune, 1/2 bliver blå ; 1/2 af hunkillingerne vil blive brun tortie , 1/2 vil blive blå tortie";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 3)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive røde , 1/2 bliver brune ; 1/2 af hun-killingerne vil blive brun tortie , 1/2 vil blive røde";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 4)) {
        colourresultred.innerHTML = "Han-killinger kan blive brun, blå, Rød og creme; hun-killinger kan blive brun tortie, blå tortie, rød og creme";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 5)) {
        colourresultred.innerHTML = "Han-killinger kan blive: Brun, blå, rød og creme; Hun-killinger kan blive rød, creme, brun tortie og blå tortie";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 6)) {
        colourresultred.innerHTML = "Alle killinger vil blive røde";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 7)) {
        colourresultred.innerHTML = "3/4 vil blive røde , 1/4 vil blive creme , uanset køn";
    }
    if ((colour3.selectedIndex == 1) && (colour4.selectedIndex == 8)) {
        colourresultred.innerHTML = "1/2 vil blive røde , 1/2 vil blive creme , uanset køn";
    }

    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 0)) {
        colourresultred.innerHTML = "Alle han-killingerne vil blive brune ; Alle hun-killingerne vil blive brun tortie";
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 1)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive brune , 1/2 vil blive blå ; 1/2 af hun-killingerne vil blive brun tortie , 1/2 vil blive blå tortie"; 
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 2)) {
        colourresultred.innerHTML = "Han-killinger bliver blå ; Hun-killinger bliver blå tortie"; 
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 3)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive brune , 1/2 vil blive røde ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver røde";
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 4)) {
        colourresultred.innerHTML = "Han-killingerne kan blive rød, creme, brun og blå ; Hun-killingerne kan blive brun tortie, blå tortie, rød og creme";
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 5)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive blå , 1/2 vil blive creme ; 1/2 af hun-killingerne vil blive blå tortie , 1/2 vil blive creme";
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 6)) {
        colourresultred.innerHTML = "Alle killinger bliver røde";
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 7)) {
        colourresultred.innerHTML = "1/2 bliver røde , 1/2 bliver creme , uanset køn";
    }
    if ((colour3.selectedIndex == 2) && (colour4.selectedIndex == 8)) {
        colourresultred.innerHTML = "Alle killinger bliver creme";
    }

    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 0)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 1)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 2)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 3)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver brune";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 4)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver brune";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 5)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver brune";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 6)) {
        colourresultred.innerHTML = "Alle han-killinger bliver røde ; Alle hun-killinger bliver brun tortie";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 7)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliber brune";
    }
    if ((colour3.selectedIndex == 3) && (colour4.selectedIndex == 8)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliber brune";
    }

    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 0)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 1)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 2)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 3)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver brune";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 4)) {
        colourresultred.innerHTML = "Han-killinger bliver rød, creme, brun og blå , Hun-killinger bliver brune, blå, brun tortie og blå tortie";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 5)) {
        colourresultred.innerHTML = "Han-killinger bliver rød, creme, brun og blå , Hun-killinger bliver brune, blå, brun tortie og blå tortie";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 6)) {
        colourresultred.innerHTML = "Alle han-killinger vil blive røde ; Alle hun-killinger vil blive brun tortie";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 7)) {
        colourresultred.innerHTML = "3/4 af han-killingerne vil blive røde , 1/4 bliver creme ; 3/4 af hun-killingerne bliver brun tortie , 1/4 bliver blå tortie";
    }
    if ((colour3.selectedIndex == 4) && (colour4.selectedIndex == 8)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive røde , 1/2 bliver creme ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver blå tortie";
    }

    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 0)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 1)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 2)) {
        colourresultred.innerHTML = "<a href='#support' data-toggle='tab' aria-expanded='false'>Brug den grundlaegegende for den combination</a>";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 3)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver røde , 1/2 bliver brune ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver brune";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 4)) {
        colourresultred.innerHTML = "Han-killingerne bliver rød, creme, brun og blå ; Hun-killingerne bliver brune, blå, brun tortie og blå tortie";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 5)) {
        colourresultred.innerHTML = "1/2 af han-killingerne bliver creme, 1/2 bliver blå ; 1/2 af hun-killingerne bliver blå tortie , 1/2 bliver blå";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 6)) {
        colourresultred.innerHTML = "Alle han-killingerne bliver røde ; Alle hun-killingerne bliver brun tortie";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 7)) {
        colourresultred.innerHTML = "1/2 af han-killingerne vil blive røde , 1/2 bliver creme ; 1/2 af hun-killingerne bliver brun tortie , 1/2 bliver blå tortie";
    }
    if ((colour3.selectedIndex == 5) && (colour4.selectedIndex == 8)) {
        colourresultred.innerHTML = "Alle han-killingerne bliver creme ; Alle hun-killingerne bliver blå tortie";
    }

}

function calcpattern() {
    var pattern1 = document.getElementById('pattern1');
    var pattern2 = document.getElementById('pattern2');
    var patternresult = document.getElementById('patternresult');

	if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 0)) {
        patternresult.innerHTML = "All Colourpoint";
    }
    if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 1)) {
        patternresult.innerHTML = "1/2 Colourpoint, 1/2 Mitted";
    }
    if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 2)) {
        patternresult.innerHTML = "1/2 Colourpoint, 1/2 Bicolour";
    }
    if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 3)) {
        patternresult.innerHTML = "All Mitted";
    }
    if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 4)) {
        patternresult.innerHTML = "1/2 Mitted, 1/2 Bicolour";
    }
    if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 5)) {
        patternresult.innerHTML = "All Bicolour";
    }
    if ((pattern1.selectedIndex == 0) && (pattern2.selectedIndex == 6)) {
        patternresult.innerHTML = "F";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 0)) {
        patternresult.innerHTML = "1/2 Colourpoint, 1/2 Mitted";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 1)) {
        patternresult.innerHTML = "1/2 Mitted, 1/4 Colourpoint, 1/4 High Mitted Bicolour";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 2)) {
        patternresult.innerHTML = "1/4 Colourpoint, 1/4 Mitted, 1/4 Bicolour, 1/4 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 3)) {
        patternresult.innerHTML = "1/2 Mitted, 1/2 High Mitted Bicolour";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 4)) {
        patternresult.innerHTML = "1/4 Mitted, 1/4 Bicolour, 1/4 Mid High White Bicolour, 1/4 High Mitted Bicolour";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 5)) {
        patternresult.innerHTML = "1/2 Bicolour, 1/2 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 1) && (pattern2.selectedIndex == 6)) {
        patternresult.innerHTML = "L";
    }
    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 0)) {
        patternresult.innerHTML = "1/2 Colourpoint 1/2 Bicolour";
    }
    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 1)) {
        patternresult.innerHTML = "1/4 Colourpoint, 1/4 Mitted, 1/4 Bicolour, 1/4 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 2)) {
        patternresult.innerHTML = "1/2 Bicolour, 1/4 Colourpoint, 1/4 High White Bicolour";
    }

    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 3)) {
        patternresult.innerHTML = "1/2 Mitted, 1/2 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 4)) {
        patternresult.innerHTML = "1/4 Mitted, 1/4 Bicolour, 1/4 Mid High White Bicolour, 1/4 High White Bicolour";
    }
    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 5)) {
        patternresult.innerHTML = "1/2 Bicolour, 1/2 High White Bicolour";
    }
    if ((pattern1.selectedIndex == 2) && (pattern2.selectedIndex == 6)) {
        patternresult.innerHTML = "R";
    }

    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 0)) {
        patternresult.innerHTML = "All Mitted";
    }
    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 1)) {
        patternresult.innerHTML = "1/2 Mitted, 1/2 High Mitted Bicolour";
    }
    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 2)) {
        patternresult.innerHTML = "1/2 High Mitted Bicolour, 1/2 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 3)) {
        patternresult.innerHTML = "All High Mitted Bicolour";
    }
    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 4)) {
        patternresult.innerHTML = "1/2 High Mitted Bicolour, 1/2 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 5)) {
        patternresult.innerHTML = "All Mid High White Bicolours";
    }
    if ((pattern1.selectedIndex == 3) && (pattern2.selectedIndex == 6)) {
        patternresult.innerHTML = "Y";
    }

    if ((pattern1.selectedIndex == 4) && (pattern2.selectedIndex == 0)) {
        patternresult.innerHTML = "1/2 Mitted, 1/2 Bicolour";
    }
    if ((pattern1.selectedIndex == 4) && (pattern2.selectedIndex == 1)) {
        patternresult.innerHTML = "1/4 Mitted, 1/4 Bicolour, 1/4 Mid High White Bicolour, 1/4 High Mitted Bicolour";
    }
    if ((pattern1.selectedIndex == 4) && (pattern2.selectedIndex == 2)) {
        patternresult.innerHTML = "1/4 Mitted, 1/4 Bicolour, 1/4 Mid High White Bicolour, 1/4 High White Bicolour";
    }
    if ((pattern1.selectedIndex == 4) && (pattern2.selectedIndex == 3)) {
        patternresult.innerHTML = "1/2 High Mitted Bicolour, 1/2 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 4) && (pattern2.selectedIndex == 4)) {
        patternresult.innerHTML = "1/2 Mid High White Bicolour, 1/4 High Mitted Bicolour, 1/4 High White Bicolour";
    }
    if ((pattern1.selectedIndex == 4) && (pattern2.selectedIndex == 5)) {
        patternresult.innerHTML = "1/2 Mid High White Bicolour, 1/2 High White Bicolour";
    }

    if ((pattern1.selectedIndex == 5) && (pattern2.selectedIndex == 0)) {
        patternresult.innerHTML = "All Bicolour";
    }
    if ((pattern1.selectedIndex == 5) && (pattern2.selectedIndex == 1)) {
        patternresult.innerHTML = "1/2 Bicolour, 1/2 Mid High White Bicolour";
    }
    if ((pattern1.selectedIndex == 5) && (pattern2.selectedIndex == 2)) {
        patternresult.innerHTML = "1/2 Bicolour, 1/2 High White Bicolour";
    }
    if ((pattern1.selectedIndex == 5) && (pattern2.selectedIndex == 3)) {
        patternresult.innerHTML = "All Mid High White Bicolours";
    }
    if ((pattern1.selectedIndex == 5) && (pattern2.selectedIndex == 4)) {
        patternresult.innerHTML = "1/2 Mid High White Bicolour, 1/2 High White Bicolour";
    }
    if ((pattern1.selectedIndex == 5) && (pattern2.selectedIndex == 5)) {
        patternresult.innerHTML = "All High White Bicolour";
    }
}

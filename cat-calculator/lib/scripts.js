jQuery(document).ready(function($){
    $('[data-toggle="datepicker"]').datepicker(
    {
        format: 'dd-mm-yyyy',
        autoclose:true
    });
$('#datebirth,#lengthday').on('change', function () {
    var $date = $('.date').datepicker("getDate");
    var $result = $('#result');
    var $result3 = $('#result3');
	var $lengthday = parseInt($('#lengthday').val());
    var resultDate = new Date($date);
    var resultDate3 = new Date($date);
    resultDate.setDate($date.getDate() + $lengthday);
    resultDate3.setDate($date.getDate() + ($lengthday + 84 ) );
	
    $result.html(resultDate.toLocaleDateString('en-GB'));
    $result3.html(resultDate3.toLocaleDateString('en-GB'));
	
var date1 = new Date($date);
var date2 = new Date($date);
var date3 = new Date($date);
var date5 = new Date($date);
var date11 = new Date($date);
var date13 = new Date($date);
var date12 = new Date($date);
var date25 = new Date($date);
var date14 = new Date($date);
var date21 = new Date($date);
var date20 = new Date($date);
var date27 = new Date($date);
var date25 = new Date($date);
var date29 = new Date($date);
var date28 = new Date($date);
var date34 = new Date($date);
var date44 = new Date($date);
var date47 = new Date($date);
var date55 = new Date($date);
var date49 = new Date($date);
var date50 = new Date($date);
var date60 = new Date($date);
var date61 = new Date($date);
var date62 = new Date($date);
var date63 = new Date($date);
	
date1.setDate($date.getDate() + 1);
date2.setDate($date.getDate() + 2);
date3.setDate($date.getDate() + 3);
date5.setDate($date.getDate() + 5);	
date11.setDate($date.getDate() + 11);
date13.setDate($date.getDate() + 13);
date12.setDate($date.getDate() + 12);	
date25.setDate($date.getDate() + 25);	
date14.setDate($date.getDate() + 14);	
date21.setDate($date.getDate() + 21);	
date20.setDate($date.getDate() + 20);	
date27.setDate($date.getDate() + 27);	
date25.setDate($date.getDate() + 25);	
date29.setDate($date.getDate() + 29);	
date28.setDate($date.getDate() + 28);	
date34.setDate($date.getDate() + 34);
date44.setDate($date.getDate() + 44);	
date47.setDate($date.getDate() + 47);	
date55.setDate($date.getDate() + 55);	
date49.setDate($date.getDate() + 49);	
date50.setDate($date.getDate() + 50);	
date60.setDate($date.getDate() + 60);		
date61.setDate($date.getDate() + 61);	
date62.setDate($date.getDate() + 62);	
date63.setDate($date.getDate() + 63);		
	
	
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var $lifeline = $('#lifeline');
	$lifeline.html('<tr bgcolor="#ffffff"><td><b>Dag 0: ' + $date.toLocaleDateString('da-DK', options) +'</b><ul><li>Første parringsdag.</li></ul><ul><li>Flere parringer over en begrænset periode øger frigørelsen af Luteinizing hormon fra en kirtel i hypofysen. Dette hormon er nødvendigt for endelig modning af æggestokkenes follikker. En enkelt parring vil formentlig ikke være tilstrækkelig, men hunkattens æg er modtagelige for befrugtning i 1-1½ døgn efter ægløsningen.</li></ul><ul><li>Sædcellerne begynder deres vandring op gennem livmoderhalsen.</li></ul></td></tr> <tr bgcolor="#eeeeee"><td><b>Dag 1-2: ' + date1.toLocaleDateString('da-DK', options) + ' - ' + date2.toLocaleDateString('da-DK', options) + '</b><ul><li>Sædcellerne når frem til æggene i æggelederne.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 2-3: '+ date2.toLocaleDateString('da-DK', options) + ' - ' + date3.toLocaleDateString('da-DK', options) + '</b><ul><li>Befrugtning foregår i æggelederne som fører fra æggestokkene ned til livmoderen.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 3-5: '+ date3.toLocaleDateString('da-DK', options) + ' - ' + date5.toLocaleDateString('da-DK', options) + '</b><ul><li>Befrugtede æg vandrer ned gennem æggelederne ind i livmoderhornene.</li></ul><ul><li>Vandringen fortsætter for at lave mellemrum mellem de uudviklede fostre.</li></ul><ul><li>Gennem denne vandring vil æggene vokse sig til uudviklede fostre.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 11-13: '+ date11.toLocaleDateString('da-DK', options) + ' - ' + date13.toLocaleDateString('da-DK', options) + '</b><ul><li>Blastocysterne vokser sig fast på væggen af livmoderen.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 12-25: '+ date12.toLocaleDateString('da-DK', options) + ' - ' + date25.toLocaleDateString('da-DK', options) + '</b><ul><li>Blastocysterne vil vokse op til at blive små fostre.</li></ul><ul><li>Gennem de næste 2 uger vil de vigtige organer blive udviklet.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 14-21: '+ date14.toLocaleDateString('da-DK', options) + ' - ' + date21.toLocaleDateString('da-DK', options) + '</b><ul><li>Hunkattens dievorter begynder at blive lyserøde og blive let forstørret.</li></ul><ul><li>Pelsen på hunkattens mave og omkring brystrene begynder at blive tyndere.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 20-27: '+ date20.toLocaleDateString('da-DK', options) + ' - ' + date27.toLocaleDateString('da-DK', options) + '</b><ul><li>Kvalme kan forekomme pga. de hormonelle ændringer eller udvidelser og sammentrækninger af livmoderen, og hunkatten kan være lidt apatisk samt miste appetiten.</li></ul><ul><li>Sørg for at hunkatten hele tiden har foder til rådighed, så hun kan spise, som hun har lyst til.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 25-29: '+ date25.toLocaleDateString('da-DK', options) + ' - ' + date29.toLocaleDateString('da-DK', options) + '</b><ul><li>En erfaren person (en opdrætter eller en dyrlæge) kan ved forsigtig gennemføling (palpering) fortælle, om hunkatten er drægtig på dette tidspunkt.</li></ul><ul><li>Det er nu det bedste tidspunkt at gøre dette, fordi fostrene nu er på størrelse med valnødder og lette at føle og tælle.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 28: '+ date28.toLocaleDateString('da-DK', options) + '</b><ul><li>Fostrene er nu omkring 25 til 30 millimeter og er fuldt udviklede miniaturekatte.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 34: '+ date34.toLocaleDateString('da-DK', options) + '</b><ul><li>Hunkattens mave begynder at blive synligt større.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 44: '+ date44.toLocaleDateString('da-DK', options) + '</b><ul><li>Det er meget let at føle killingerne nu. At tælle dem kan være en del sværere.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 47-55: '+ date47.toLocaleDateString('da-DK', options) + ' - ' + date55.toLocaleDateString('da-DK', options) + '</b><ul><li>Hunkatten begynder at bruge en hel del mere tid på at rense pelsen.</li></ul><ul><li>Hendes dievorter er hævet endnu mere.</li></ul><ul><li>Hun kan være lidt rastløs og begynde at søge efter et egnet sted at føde.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 49: '+ date49.toLocaleDateString('da-DK', options) + '</b><ul><li>Hunkatten kan tabe sin appetit i denne periode. Hendes mave kan være levende af killingespark.</li></ul><ul><li>Du kan let se killingernes bevægelser i maven nu.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 50-63: '+ date50.toLocaleDateString('da-DK', options) + ' - ' + date63.toLocaleDateString('da-DK', options) + '</b><ul><li>Hvis hunkatten har besvær med selv at holde sig ren, kan du hjælpe hende.</li></ul><ul><li>Dievorter og vulva kan forsigtigt renses med varmt vand, og du kan eventuelt klippe hårene lidt omkring dievorterne for nemmere adgang for killingerne til at sutte.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 60-63: '+ date60.toLocaleDateString('da-DK', options) + ' - ' + date63.toLocaleDateString('da-DK', options) + '</b><ul><li>Op mod fødslen lægger hunkatten mælk ned, som kan sive lidt fra dievorterne.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 61: '+ date61.toLocaleDateString('da-DK', options) + '</b><ul><li>I dagene op til fødslen, kan man dagligt tage hunkattens temperatur for at se, om fødslen er ved at være op over.</li></ul></td></tr><tr bgcolor="#eeeeee"><td><b>Dag 62: '+ date62.toLocaleDateString('da-DK', options) + '</b><ul><li>12 til 24 timer før fødslen vil hunkattens temperatur falde fra 38,5 til 37,5 graders celsius.</li></ul><ul><li>Klar eller blodholdigt væske kan forekomme fra hunkattens vulva.</li></ul></td></tr><tr bgcolor="#ffffff"><td><b>Dag 63: '+ date63.toLocaleDateString('da-DK', options) + '</b><ul><li>Gennemsnitlig dag for fødsel.</li></ul><ul><li>Yderpunkterne går fra 59 til 72 dage.</li></ul><ul><li>Fødsler uden for yderpunkterne vil oftest medføre døde killinger.</li></ul></td></tr>')
	
});
  });


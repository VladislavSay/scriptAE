//~ var sc = system.callSystem('curl -s "https://docs.google.com/document/u/1/d/e/2PACX-1vTG0NSwSY4KsiNb7r-sNp4pW3fvCWiuWjt5FzCBiXeWadlXXVbtCW2WRV5PAM8j5w/pub"');
//~ if (sc == "undefined" || sc == "" || sc == null) {alert("Не удалось связаться с сервером, запущена последняя оффлайн версия скрипта","       :(        SayRenameGames"); 
//~     
//~     













var file = new File(File($.fileName).path + "/SayRename/TagsMacOs.txt"); // Путь к файлу Glov.txt рядом со скриптом
var TagsForMacOs = "";

if (file.exists) {
    file.open("r");
    TagsForMacOs = file.read(); //строчка с разрывом синка
    file.close();
} 
else {alert("Файл TagsMacOs.txt не найден.");}
















function mainScript(thisObj){
function childScript(thisObj){
    
    
//////////////////////Bibleoteki
#include 'aequery.js' // aequery is now available as aeq
    
     
    
    
var myPanel = (thisObj instanceof Panel) ? thisObj : new Window ("palette", "SayRenameGames", undefined, {resizeable: true});
//Тело вашего кода
  myPanel.orientation = "Column";
var oneTwo = myPanel.add("group{orientation:'column', alignment: ['fill', 'fill']}");
var chTwo = myPanel.add("group{orientation:'row', alignment: ['fill', 'fill']}");
chTwo.alignChildren = ["left","top"];
var twoTwo = myPanel.add("group{orientation:'column', alignment: ['left', 'fill']}");
var trTwo = myPanel.add("group{orientation:'column', alignment: ['fill', 'top']}");
trTwo.alignChildren = ["fill","top"];

  
 
//Memory AE //////////////////////////////////////////
var sectionName = "SayRenameGames", keyName = "One";
if (app.settings.haveSetting(sectionName,keyName)){var iMya = app.settings.getSetting(sectionName,keyName)} 
else {app.settings.saveSetting(sectionName,keyName,"OV");var iMya = app.settings.getSetting(sectionName,keyName)}





var sectionNameDlyaVvodaGames = "DlyaVvodaGames";
var keyNameDlyaVvodaGames = "Key";
var MasIzGames = new Array;

if (app.settings.haveSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames)){for (var i = 0; i < app.settings.getSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames).split("\n").length; i++){if (app.settings.getSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames).split("\n")[i]!= "") {MasIzGames.push(app.settings.getSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames).split("\n")[i])}};} 
else {app.settings.saveSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames,"LG");}





///////////////////////////////////////////////////////////////////////////////////////////////////




  var text1 = oneTwo.add('edittext', [0,0,77,30], 'Game'); 
  text1.helpTip = app.settings.getSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames);
  var text2 = oneTwo.add('edittext', [0,0,77,30], '№');  
  var text3 = oneTwo.add('edittext', [0,0,77,30], iMya);  
  var groupForExtension = oneTwo.add("group{orientation:'row', alignment: ['centre', 'fill']}");  
  var groupForButs = oneTwo.add("group{orientation:'row', alignment: ['right', 'fill']}");
  var butTik = groupForExtension.add("button", [0,0,20,20], "T",{style: "toolbutton"});
  var butCopy = groupForButs.add("button", [0,0,20,20], "S",{style: "toolbutton"});
  var butMe = groupForButs.add("button", [0,0,20,20], "ME",{style: "toolbutton"});
  var butRef= groupForButs.add("button", [0,0,20,20], "↻",{style: "toolbutton"});

 

  
  oneTwo.orientation = "row";
  var ch1 = chTwo.add("checkbox", [0,15,65,30], "Blood");  
  var ch2 = chTwo.add("checkbox", [0,15,65,30], "Adult");  
  var ch3 = chTwo.add("checkbox", [0,15,60,30], "NoLic");  
//~   var ch4 = chTwo.add("checkbox", [0,15,55,30], "");  
  var ch5 = chTwo.add("checkbox", [0,15,60,30], "Source");  
    var groupForLoc = chTwo.add("group{orientation:'row', alignment: ['right', 'fill']}");  
    var textLoc = groupForLoc.add('edittext', [0,0,77,30], '');  
  
  
    var scoreNashatiya = 0;


  twoTwo.orientation = "Column";
    twoTwo.alignChildren = ['bottom','bottom'];
  var textFol = trTwo.add('edittext',[0,0,30,40], 'Name Folder', {readonly: true});  

  //var button1 = oneTwo.add("button", [0,0,160,30], "Rename",{style: "toolbutton"});



butRef.onClick = dlyaRef1;
function dlyaRef1() {dlyaRef(reName);}
function dlyaRef (fan) {

    text1.text = "Game";
    text2.text = "№";
    ch1.value= 0;
    ch1.text = "Blood";
    scoreNashatiya = 0;
    ch2.value = 0;
    ch3.value = 0;
//~     ch4.value = 0;
    ch5.value = 0;
    textLoc.text = "";
    
if (ScriptUI.environment.keyboardState.ctrlKey == true || ScriptUI.environment.keyboardState.metaKey == true)
{var vibrComps = aeq.project.getSelectedComps();
    if (aeq.project.getSelectedComps().length == 0) {alert("Выбери композицию, если хочешь забрать настройки"); return}
text1.text = aeq.project.getSelectedComps()[0].name.split("_")[0];
text2.text = aeq.project.getSelectedComps()[0].name.split("_")[2];
if (aeq.project.getSelectedComps()[0].name.indexOf ("Blood") != -1){ch1.value= 1; ch1.text = "Blood"; scoreNashatiya = 1};
if (aeq.project.getSelectedComps()[0].name.indexOf ("NoBlood") != -1){ch1.value= 1; ch1.text = "NoBlood"; scoreNashatiya = 2};
if (aeq.project.getSelectedComps()[0].name.indexOf ("Adult") != -1){ch2.value= 1};
if (aeq.project.getSelectedComps()[0].name.indexOf ("NoLic") != -1){ch3.value= 1};
if (aeq.project.getSelectedComps()[0].name.indexOf ("CHN") != -1){ch3.value= 1};
//~ if (aeq.project.getSelectedComps()[0].name[aeq.project.getSelectedComps()[0].name.indexOf (text3.text[0]+text3.text[1])+2] == "_") {text3.text = aeq.project.getSelectedComps()[0].name.split("_")[aeq.project.getSelectedComps()[0].name.split("_").length-2]+"_"+aeq.project.getSelectedComps()[0].name.split("_")[aeq.project.getSelectedComps()[0].name.split("_").length-1]}
//~ else {text3.text = aeq.project.getSelectedComps()[0].name.split("_")[aeq.project.getSelectedComps()[0].name.split("_").length-1]};
var ishCoposit = aeq.project.getSelectedComps();
for (var i = 0; i < ishCoposit.length; i++){if(ishCoposit[i].name.indexOf ("Source") != -1){ishCoposit[i].selected = false}};
fan();
for (var i = 0; i < vibrComps.length; i++){vibrComps[i].selected = true;}
return};
    
    
    fan();
    textFol.text =  "Name Folder";
    }



///////////////////////////////////////////////////////////////////////////////////////////////////





butMe.onClick = function () {
if (ScriptUI.environment.keyboardState.ctrlKey == true || ScriptUI.environment.keyboardState.metaKey == true) {app.executeCommand(3800);return};
var comp = aeq.project.getSelectedComps();
if (comp.length == 0) {textFol.text = "///  SELECT COMPOSITIONS  ///";return;}
var folderAepa = aeq.app.getAEP();
if (folderAepa != null) {var dskTop = folderAepa.parent.fullName} else {var dskTop = Folder.desktop.fullName};







if (app.settings.haveSetting("PathS",text1.text)){var dskTop = app.settings.getSetting("PathS",text1.text)} ;






var newSpot = new File(dskTop+"/"+textFol.text.split("/")[0]);   
var selectedFolder = newSpot.saveDlg('Выберите место сохранение ПАПКИ с видео');    


if (selectedFolder != null) {var rasPlit = selectedFolder.fullName.split("/");} else {return};


app.settings.saveSetting("PathS",text1.text,selectedFolder.parent.toString());



if(rasPlit[rasPlit.length - 1] == rasPlit[rasPlit.length - 2] ) 
{var selectedFolder = rasPlit[0];
for (var i = 1; i<rasPlit.length-1;i++) {selectedFolder += "/"+rasPlit[i]}; 
selectedFolder = new File (selectedFolder);
};    





//////////// Okno s Tegami
//~ var volchieCitati = new Array ();


var MyOs = system.osName;
if (MyOs == "" || MyOs == null || MyOs == "undefined") {MyOs = $.os};





if (MyOs[0] == "W") {
var textTags = system.callSystem('curl -s "https://docs.google.com/document/d/e/2PACX-1vS5TFLH-Vq7jWq1kaRQsO_HNKhcPFaVYRHiHLoQqGY3ISy56T4A8Gdz60ZjzxL9b3_eBysx_VJEyttG/pub"');
}
else {textTags = TagsForMacOs};



if (textTags.split("[A]")[1] == null) {
    
    
    if (MyOs[0] == "W") {
var textTags =  textTags = system.callSystem('curl "https://docs.google.com/document/d/e/2PACX-1vS5TFLH-Vq7jWq1kaRQsO_HNKhcPFaVYRHiHLoQqGY3ISy56T4A8Gdz60ZjzxL9b3_eBysx_VJEyttG/pub" --ssl-no-revoke');
}
else {textTags = TagsForMacOs};
    
   
    
    };


function translateToCyr (targetText) {
var bukviCode =  textTags.split("[A]")[1];
for (i = 0; i < 15; i++) {
targetText  =   targetText.replace(bukviCode.substring(0, 2), "а");
targetText  =   targetText.replace(bukviCode.substring(2, 4), "б");
targetText  =   targetText.replace(bukviCode.substring(4, 6),"в");
targetText  =   targetText.replace(bukviCode.substring(6, 8),"г");
targetText  =   targetText.replace(bukviCode.substring(8, 10),"д");
targetText  =   targetText.replace(bukviCode.substring(10, 12),"е");
targetText  =   targetText.replace(bukviCode.substring(12, 14),"ё");
targetText  =   targetText.replace(bukviCode.substring(14, 16),"ж");
targetText  =   targetText.replace(bukviCode.substring(16, 18),"з");
targetText  =   targetText.replace(bukviCode.substring(18, 20),"и");
targetText  =   targetText.replace(bukviCode.substring(20, 22),"й");
targetText  =   targetText.replace(bukviCode.substring(22, 24), "к");
targetText  =   targetText.replace(bukviCode.substring(24, 26),"л");
targetText  =   targetText.replace(bukviCode.substring(26, 28), "м");
targetText  =   targetText.replace(bukviCode.substring(28, 30),"н");
targetText  =   targetText.replace(bukviCode.substring(30, 32),"о");
targetText  =   targetText.replace(bukviCode.substring(32, 34),"п");
targetText  =   targetText.replace(bukviCode.substring(34, 36),"р");
targetText  =   targetText.replace(bukviCode.substring(36, 38),"с");
targetText  =   targetText.replace(bukviCode.substring(38, 40),"т");
targetText  =   targetText.replace(bukviCode.substring(40, 42),"у");
targetText  =   targetText.replace(bukviCode.substring(42, 44),"ф");
targetText  =   targetText.replace(bukviCode.substring(44, 46),"х");
targetText  =   targetText.replace(bukviCode.substring(46, 48),"ц");
targetText  =   targetText.replace(bukviCode.substring(48, 50),"ч");
targetText  =   targetText.replace(bukviCode.substring(50, 52),"ш");
targetText  =   targetText.replace(bukviCode.substring(52, 54),"щ");
targetText  =   targetText.replace(bukviCode.substring(54, 56),"ъ");
targetText  =   targetText.replace(bukviCode.substring(56, 58),"ы");
targetText  =   targetText.replace(bukviCode.substring(58, 60), "ь");
targetText  =   targetText.replace(bukviCode.substring(60, 62),"э");
targetText  =   targetText.replace(bukviCode.substring(62, 64),"ю");
targetText  =   targetText.replace(bukviCode.substring(64, 66),"я");
}
return targetText;
}

//~ var volchieCitati = textTags.split("[VC]")[1];
//~ var randomnayaCitata =  volchieCitati.split("/VC/")[Math.floor(Math.random()*volchieCitati.split("/VC/").length)];
//~ alert(textTags.split("[T8.10]")[1].split(" - ")[1]);

var  myWindowForTags = new Window("dialog", "TAGS", undefined, {resizeable: true});
myWindowForTags.orientation = "column";
myWindowForTags.alignment = "left";
//~ alert(myWindowForTags.maximumSize); //grubo eto razreshenie ekrana


var scrollBar = myWindowForTags.add("scrollbar");
scrollBar.stepdelta = 40;
scrollBar.maximumSize.height = myWindowForTags.maximumSize.height;

var myWindowTags = myWindowForTags.add("group");
myWindowTags.orientation = "column";
myWindowTags.alignChildren = "left";




scrollBar.onChanging = function () {
    myWindowTags.location.y = -1 * this.value+10;
    }


myWindowForTags.onShow = function() {
    var mH = myWindowForTags.size.height;
    var mW = myWindowForTags.size.width;
    myWindowForTags.size.width = mW+20;
    myWindowForTags.size.height = mH*0.85;
    scrollBar.size = [20,myWindowForTags.size.height];
    scrollBar.location = [0, 0];
    scrollBar.maxvalue = myWindowTags.size.height-350;
    myWindowTags.location.y = 10;
    myWindowTags.location.x = 20;
    };


myWindowForTags.addEventListener ("keydown", function (kd) {pressed (kd)});
function pressed (k) {
try {
switch (k.keyName)
{
case "Up": myWindowTags.location.y = myWindowTags.location.y+200; break;
case "Down": myWindowTags.location.y = myWindowTags.location.y-200; break;


}
}catch (err) {}
}





var massivTegov = new Array;




var taskSection = myWindowTags.add("Panel", undefined, "Task"); 
var taskEdit =  taskSection.add("edittext", [0,0,350,30], "https://app.asana.com/");

for (a = 1;  textTags.indexOf("[S"+a+"]") != -1; a++)
{
var currentSearcher = "[S"+a+"]";
var currentSection = myWindowTags.add("Panel", undefined, textTags.split(currentSearcher)[1]); 
currentSection.alignChildren = "left";
if (textTags.split(currentSearcher)[1] == "Sound") {var curChek =  currentSection.add("edittext", [0,0,350,30], "https://elements.envato.com/"); massivTegov.push(curChek)};

for (b = 1;  textTags.indexOf("[T"+a+"."+b+"]") != -1; b++)
{
var currentSearcherTags = "[T"+a+"."+b+"]"; 




var textToCyr =  textTags.split(currentSearcherTags)[1];
textToCyr = translateToCyr(textToCyr);

var curChek = currentSection.add("checkbox", undefined, textToCyr);
if (ch1.value == 1 && ch1.text == "Blood" && curChek.text.split(" -")[0] == "blood") {curChek.value = 1};
if (ch1.text == "NoBlood" && curChek.text.split(" -")[0] == "noBlood") {curChek.value = 1};
if (ch2.value == 1 && curChek.text.split(" -")[0] == "adult") {curChek.value = 1};
massivTegov.push(curChek);
}
}



var extraSection = myWindowTags.add("Panel", undefined, "Extra"); 
var extraEdit =  extraSection.add("edittext", [0,0,350,30], "");



var butDone = myWindowTags.add("button",undefined, "Done",{style: "toolbutton",name: "ok"});
butDone.alignment = "fill";
butDone.onClick = function () {
    
//////////////////////////////////////
aeq.renderqueue.clear();
for (var i = 0; i<=comp.length-1;i++){
var item = app.project.renderQueue.items.add(comp[i]);
item.outputModule(1).file = File(selectedFolder.fullName+"/"+comp[i].name);
} 
app.project.renderQueue.queueInAME(false);
aeq.renderqueue.clear();
aeq.command.call('Explorer /select,', 'open -R', '"' + selectedFolder.fsName + '"' )

////////////////////////////////////
    
var txtTega = new File(selectedFolder.fullName+ encodeURI("/"+textFol.text.split("_")[0]+"_Gameplay_"+textFol.text.split("_")[2]+"_tags.txt"));
txtTega.open("w","TEXT","????");
txtTega.writeln(taskEdit.text);
txtTega.writeln(massivTegov[0].text);
for (g = 0; g < massivTegov.length; g++) {
if (massivTegov[g].value == 1) {txtTega.writeln(massivTegov[g].text.split(" -")[0])}
}
txtTega.writeln(extraEdit.text);
txtTega.close();
myWindowForTags.close ();
}




myWindowTags.maximumSize.height = 9000;   //Видимость контента вне окна в пикселеях 
myWindowForTags.center ();
myWindowForTags.show ();
/////////// Okno s Tegami





}



///////////////////////////////////////////////////////////////////////////////////////////////////




butCopy.onClick =
function () {
    var compNaCopirovanie = aeq.project.getSelectedComps()[0];
    if(aeq.project.getSelectedComps().length != 1){alert("Выбери 1 композицию");return};
    if (text2.text == "№" || text1.text == "Game"){alert("Введите Game и №" );return}
    
    var folderTarget = app.project.items.addFolder("!"+text1.text+"_"+text2.text);
    var master = compNaCopirovanie.duplicate();
    master.name = "Master "+text1.text+"_"+text2.text;
    master.height = 3200;
    master.width = 3750;
    for (var i = 1; master.layers.length != 0;){if(master.layer(1).locked == true) {master.layer(1).locked = false};master.layer(1).remove()} ; 
    

    
    var odin = master.duplicate();
    var dva = master.duplicate();
    var tri = master.duplicate();
    var chetire = master.duplicate();
    var pyati = master.duplicate();
    var shesti = master.duplicate();
    var semk = master.duplicate();
    
    
    if (ch5.value == 1 ) {var sourc1 = master.duplicate(); var sourc2 = master.duplicate(); sourc1.width = 1080; sourc1.height = 1920; sourc2.width = 1920; sourc2.height = 1080; compNaCopirovanie.selected=false; sourc1.selected = true; sourc2.selected = true; reName (); sourc1.selected = false; sourc2.selected = false; ch5.value = 0;
        
var bgPlash1 = sourc1.layers.addSolid([1,1,1], "BG", sourc1.width, sourc1.height, 1);bgPlash1.property("Effects").addProperty("Fill")(3).expression = 'comp("'+master.name+'").layer("Text").effect("BG")("Color")';
var bgPlash2 = sourc2.layers.addSolid([1,1,1], "BG", sourc2.width, sourc2.height, 1);bgPlash2.property("Effects").addProperty("Fill")(3).expression = 'comp("'+master.name+'").layer("Text").effect("BG")("Color")';

sourc1.layers.add(compNaCopirovanie);sourc1.layers.add(compNaCopirovanie);sourc1.layers[2].parent = sourc1.layers[1]; sourc1.layers[2].audioEnabled = false; sourc1.layers[1].scale.setValue([100/sourc1.layers[1].width*1080,100/sourc1.layers[1].width*1080]);sourc1.layers[2].scale.setValue(sourc1.layers[1].scale.value*3.2);sourc1.layers[2].property("Effects").addProperty("Fast Box Blur");sourc1.layers[2].Effects(1)(1).setValue(50);sourc1.layers[2].property("Effects").addProperty("Brightness & Contrast");sourc1.layers[2].Effects(2)(1).setValue(30); 
sourc1.layers[1].position.expression ='comp("'+odin.name+'").layer("'+compNaCopirovanie.name+'").transform.position+value-[540,960]';
sourc1.layers[1].scale.expression = 'comp("'+odin.name+'").layer("'+compNaCopirovanie.name+'").transform.scale+value-['+sourc1.layers[1].scale.value.toString()+']';



sourc2.layers.add(compNaCopirovanie);sourc2.layers.add(compNaCopirovanie);sourc2.layers[2].parent = sourc2.layers[1]; sourc2.layers[2].audioEnabled = false; sourc2.layers[1].scale.setValue([100/sourc2.layers[1].width*1080,100/sourc2.layers[1].width*1080]);sourc2.layers[2].scale.setValue(sourc2.layers[1].scale.value*3.2);sourc2.layers[2].property("Effects").addProperty("Fast Box Blur");sourc2.layers[2].Effects(1)(1).setValue(50);sourc2.layers[2].property("Effects").addProperty("Brightness & Contrast");sourc2.layers[2].Effects(2)(1).setValue(30); 
sourc2.layers[1].position.expression ='comp("'+dva.name+'").layer("'+compNaCopirovanie.name+'").transform.position+value-[960,540]';
sourc2.layers[1].scale.expression = 'comp("'+dva.name+'").layer("'+compNaCopirovanie.name+'").transform.scale+value-['+sourc2.layers[1].scale.value.toString()+']';
sourc1.parentFolder = folderTarget; sourc2.parentFolder = folderTarget;


//~ var slo1 = master.layers.add(sourc1); slo1.position.setValue([0,0]);
//~ var slo2 = master.layers.add(sourc2); slo2.position.setValue([0,0]);
       
};
    
    master.layers.addSolid([0.5,0.5,0.5], "BG", 3750, 3200, 1).locked = true;
    
    odin.width = 1080; odin.height = 1920;
    dva.width = 1920; dva.height = 1080;
    tri.width = 1080; tri.height = 1080;

    chetire.width = 1080; chetire.height = 1350;
    pyati.width = 1080; pyati.height = 1620;
    shesti.width = 1080; shesti.height = 1350; shesti.duration = 15;
    semk.width = 1080; semk.height = 1920; semk.duration = 15;

    
    compNaCopirovanie.selected=false;
    var poluchenieFormats = new Array;
    poluchenieFormats.push(shesti,semk,odin,dva,tri,chetire,pyati);
    for(var i = 0; i<poluchenieFormats.length;i++){
        var bgPlash = poluchenieFormats[i].layers.addSolid([1,1,1], "BG", poluchenieFormats[i].width, poluchenieFormats[i].height, 1);bgPlash.property("Effects").addProperty("Fill")(3).expression = 'comp("'+master.name+'").layer("Text").effect("BG")("Color")';
        master.layers.add(poluchenieFormats[i]);poluchenieFormats[i].selected = true; poluchenieFormats[i].layers.add(compNaCopirovanie);poluchenieFormats[i].layers.add(compNaCopirovanie);poluchenieFormats[i].layers[2].parent = poluchenieFormats[i].layers[1]; poluchenieFormats[i].layers[2].audioEnabled = false; poluchenieFormats[i].layers[1].scale.setValue([poluchenieFormats[i].width/poluchenieFormats[i].layers[1].width*100,poluchenieFormats[i].width/poluchenieFormats[i].layers[1].width*100]);poluchenieFormats[i].layers[2].scale.setValue(poluchenieFormats[i].layers[1].scale.value*3.2); poluchenieFormats[i].layers[2].property("Effects").addProperty("Fast Box Blur");poluchenieFormats[i].layers[2].Effects(1)(1).setValue(50);poluchenieFormats[i].layers[2].property("Effects").addProperty("Brightness & Contrast");poluchenieFormats[i].layers[2].Effects(2)(1).setValue(30); 
        if(poluchenieFormats[i].layers[1].width>=poluchenieFormats[i].layers[1].height){poluchenieFormats[i].layers[1].scale.setValue([poluchenieFormats[i].height/poluchenieFormats[i].layers[1].height*100,poluchenieFormats[i].height/poluchenieFormats[i].layers[1].height*100])};

//Vot zdes oshibka s Scaligom formatov

    var solPlash = poluchenieFormats[i].layers.addSolid([1,1,1], "Text BG", poluchenieFormats[i].width, 115, 1);solPlash.position.setValue([poluchenieFormats[i].width/2,50]);if(poluchenieFormats[i].width==1080 && poluchenieFormats[i].height == 1920){solPlash.position.setValue([poluchenieFormats[i].width/2,250])}; solPlash.opacity.expression = 'if (comp("'+master.name+'").layer("Text").text.sourceText=="Text" || comp("'+master.name+'").layer("Text").text.sourceText=="") {0} else  100'; solPlash.property("Effects").addProperty("Fill")(3).expression = 'comp("'+master.name+'").layer("Text").effect("BG")("Color")';
    var texPlash = poluchenieFormats[i].layers.addText("Text"); texPlash.position.setValue([poluchenieFormats[i].width/2,90]); if(poluchenieFormats[i].width==1080 && poluchenieFormats[i].height == 1920){texPlash.position.setValue([poluchenieFormats[i].width/2,290])};    texPlash.sourceText.expression ='try {const referenceText = comp("'+master.name+'").layer(1).text.sourceText; var newStyle = referenceText.style;newStyle.setText(referenceText);} catch(err) {comp("'+master.name+'").layer(1).text.sourceText};';   texPlash.opacity.expression = 'if (comp("'+master.name+'").layer("Text").text.sourceText=="Text" || comp("'+master.name+'").layer("Text").text.sourceText=="") {0} else  100';    
     solPlash.scale.expression = '[0,comp("'+master.name+'").layer("Text").effect("Y")("Slider")]+value+[0,comp("'+master.name+'").layer("Text").transform.scale[1]]-[0,100]';
     solPlash.position.expression = 'value+comp("'+master.name+'").layer("Text").transform.position-[94,1892.5]';
     texPlash.position.expression = 'a = thisLayer.sourceRectAtTime(); height = a.height; width = a.width; top = a.top; left = a.left; x = left + width/2; y = top + height/2; [x,y]+value+comp("'+master.name+'").layer("Text").transform.position-[100,1900];';
     texPlash.scale.expression = 'comp("'+master.name+'").layer("Text").transform.scale-[100,100]+value';
     texPlash.anchorPoint.expression ='a = thisLayer.sourceRectAtTime(); height = a.height; width = a.width; top = a.top; left = a.left; x = left + width/2; y = top + height/2; [x,y];';
     
     var textProp =texPlash.property("ADBE Text Properties").property("ADBE Text Document");
     var textDocument2 = textProp.value;
                        textDocument2.resetCharStyle();
                        textDocument2.fontSize = 100;
                        textDocument2.fillColor = [0, 0, 0];
                        textDocument2.font = "Arial-BoldMT";
                        textDocument2.text = "Text";
                        textDocument2.justification = ParagraphJustification.CENTER_JUSTIFY;
                        
                         textProp.setValue(textDocument2);
                         master.openInViewer();
}


    var Null1350= master.layers.addNull(); Null1350.source.height = 675; Null1350.source.width = 540; Null1350.source.name = "1080x1350";
    var Null1620= master.layers.addNull(); Null1620.source.height = 960; Null1620.source.width = 640; Null1620.source.name = "1080x1620";
    var Null1920x1080= master.layers.addNull(); Null1920x1080.source.height = 540; Null1920x1080.source.width = 960; Null1920x1080.source.name = "1920x1080";
    var Null1080x1080= master.layers.addNull(); Null1080x1080.source.height = 540; Null1080x1080.source.width = 540; Null1080x1080.source.name= "1080x1080";
    var Null1080x1920= master.layers.addNull(); Null1080x1920.source.height = 960; Null1080x1920.source.width = 540; Null1080x1920.source.name = "1080x1920";
    var text = master.layers.addText("Text");
    text.anchorPoint.expression ='[0,0]';

                       var myColCont = text.property("Effects").addProperty("Color Control");text.Effects(1)(1).setValue([1,1,1,1]);myColCont.name = "BG";
                        text.property("Effects").addProperty("Slider Control").name = "Y";
                        var textProp =master.layers[1].property("ADBE Text Properties").property("ADBE Text Document");
                        var textDocument = textProp.value;
                        textDocument.resetCharStyle();
                        textDocument.fontSize = 100;
                        textDocument.fillColor = [0, 0, 0];
                        textDocument.font = "Arial-BoldMT";
                        textDocument.text = "Text";
                        textDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                        textProp.setValue(textDocument);
                          
                          master.layer(1).anchorPoint.setValue([0,0]); master.layer(1).position.setValue([94,1900]);
    master.layer(2).anchorPoint.setValue([270,480]); master.layer(2).position.setValue([3114,2165.3]);
    master.layer(3).anchorPoint.setValue([270,270]); master.layer(3).position.setValue([3114,616]);
    master.layer(4).anchorPoint.setValue([480,270]); master.layer(4).position.setValue([1024,2585.3]);
    master.layer(5).anchorPoint.setValue([320,480]); master.layer(5).position.setValue([626,886]);
    master.layer(6).anchorPoint.setValue([270,337.5]); master.layer(6).position.setValue([1764.2,751]);
    master.layer(12).anchorPoint.setValue([540,960]); master.layer(12).position.setValue([2899.2,2165.2]);
    master.layer(13).anchorPoint.setValue([540,675]); master.layer(13).position.setValue([1763.8,1021.9]);
    master.layer(7).anchorPoint.setValue([540,810]); master.layer(7).position.setValue([626,887]);
    master.layer(8).anchorPoint.setValue([540,675]); master.layer(8).position.setValue([1764.2,751]); myEffect = master.layer(8).property("Effects").addProperty("ADBE Drop Shadow"); master.layer(8).Effects(1)(1).setValue([0.5,1,0.5,1]);master.layer(8).Effects(1)(2).setValue(127); master.layer(8).Effects(1)(3).setValue(-180); master.layer(8).Effects(1)(4).setValue(28); master.layer(8).Effects(1)(5).setValue(130);
    master.layer(9).anchorPoint.setValue([540,540]); master.layer(9).position.setValue([3114.1,616]);
    master.layer(10).anchorPoint.setValue([960,540]); master.layer(10).position.setValue([1024,2585.3]);
    master.layer(11).anchorPoint.setValue([540,960]); master.layer(11).position.setValue([3114.1,2165.3]); myEffect = master.layer(11).property("Effects").addProperty("ADBE Drop Shadow"); master.layer(11).Effects(1)(1).setValue([0.5,1,0.5,1]);master.layer(11).Effects(1)(2).setValue(127); master.layer(11).Effects(1)(3).setValue(-90); master.layer(11).Effects(1)(4).setValue(28); master.layer(11).Effects(1)(5).setValue(130);
        
    
    
    for (var i= 7; i !=14;i++)
    {master.layers[i].source.layers[3].position.expression = 'comp("'+master.name+'").layer("'+master.layers[i].width+"x"+master.layers[i].height+'").transform.position-['+master.layers[i].position.value.toString()+']+value';
    master.layers[i].source.layers[3].scale.expression = 'comp("'+master.name+'").layer("'+master.layers[i].width+"x"+master.layers[i].height+'").transform.scale+value-[100,100]';
    }
    master.layers[13].source.layers[3].position.expression = 'comp("'+master.name+'").layer("'+master.layers[13].width+"x"+master.layers[13].height+'").transform.position-['+master.layers[13].position.value.toString()+']+value+[0,270.8]';
    master.layers[13].source.layers[3].scale.expression = 'comp("'+master.name+'").layer("'+master.layers[13].width+"x"+master.layers[13].height+'").transform.scale+value-[100,100]';
    
    master.layers[12].source.layers[3].position.expression = 'comp("'+master.name+'").layer("'+master.layers[12].width+"x"+master.layers[12].height+'").transform.position-['+master.layers[12].position.value.toString()+']+value-[214.8,0]';
    master.layers[12].source.layers[3].scale.expression = 'comp("'+master.name+'").layer("'+master.layers[12].width+"x"+master.layers[12].height+'").transform.scale+value-[100,100]';
    

shesti.remove();
semk.remove();

    reName ();



for (var i = 0;  i<aeq.project.getSelectedComps().length; i++) {aeq.project.getSelectedComps()[i].parentFolder = folderTarget;}
master.layers[1].selected = false;
master.layers[9].selected = true;
app.executeCommand(app.findMenuCommandId("Reveal Layer Source in Project"))
master.layers[9].selected = false;

if (typeof sourc1 != "undefined") {sourc1.selected = true; sourc2.selected = true;}

master.parentFolder = folderTarget;
compNaCopirovanie.parentFolder = folderTarget;
var dlyaExpr = compNaCopirovanie.name;
compNaCopirovanie.name = text1.text+"_"+text2.text+" Main";
app.project.autoFixExpressions(dlyaExpr, compNaCopirovanie.name);

    }



function reName () {
    
    
if (scoreNashatiya == 0 && ch1.value ==1) {ch1.text = "Blood", scoreNashatiya+=1;};
if (scoreNashatiya == 1 && ch1.value ==0) {ch1.text = "NoBlood"; ch1.value =1, scoreNashatiya+=1;};
if (scoreNashatiya == 2 && ch1.value ==0) {scoreNashatiya = 0; ch1.text = "Blood"; ch1.value =0;};
      





var numerok = 0;
var massiveItemov = new Array;
var maxSek  = 0;
for (var i = 1; i <= app.project.numItems ; i++) 
{
if (app.project.item(i).selected == false) {continue;}
if (app.project.item(i) instanceof FolderItem) {
for  (var k = 1; k <= app.project.item(i).numItems ; k++)
{if (app.project.item(i).item(k) instanceof CompItem) {massiveItemov.push(app.project.item(i).item(k))}}
}
if (app.project.item(i) instanceof CompItem){
massiveItemov.push(app.project.item(i))};
}



var dlyaSnepa = new Array;

for (var i = 0; i <= massiveItemov.length-1 ; i++) 
{
numerok+=1;
var sek = Math.round(massiveItemov[i].workAreaDuration);
var heG = massiveItemov[i].height;
var wiD = massiveItemov[i].width;
var raTi = wiD/heG;



if (maxSek < sek) {maxSek=sek};


for (m=1;m<=wiD;m++)
{if (parseInt(raTi*m) == raTi*m) {break}}

var x = raTi*m;
var y = m;

var gameNaz = text1.text; 
var vidosNaz =text2.text;
var moDiz =text3.text;
var razreshenie = x+"x"+y;
if ( x == 16 && y == 9) {razreshenie= 'Landscape'};
if ( x == 9 && y == 16) {razreshenie= 'Portrait'; dlyaSnepa.push(i)};
if ( x == 1 && y == 1) {razreshenie= 'Square'};
//~ if ( x == 9 && y == 16 && sek<10.1) {razreshenie= 'Snapchat'};



if (ch1.value == 1 ) {var bloD= ch1.text+"_"} else {var bloD = "";}
if (ch2.value == 1 ) {var adult= "Adult_"} else {var adult = "";}
if (ch3.value == 1 ) {var noLic= "NoLic_"} else {var noLic = "";}
//~ if (ch4.value == 1 ) {var chN= "CHN_"} else {var chN = "";}
if (ch5.value == 1 ) {var sourCE= "Source_"} else {var sourCE = "";}
if (textLoc.text != "") {chN= textLoc.text+"_"} else {chN= ""};

var forExp = massiveItemov[i].name;
massiveItemov[i].name = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+sek+"sec"+"_"+bloD+adult+noLic+chN+sourCE+razreshenie+"_"+moDiz;
var dlyaCompa = "";
//~ if (razreshenie == "4x5" && massiveItemov.length <= 2) {massiveItemov[i].name = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+sek+"sec"+"_"+bloD+adult+noLic+chN+sourCE+"Comp_"+razreshenie+"_"+moDiz; dlyaCompa = "Comp_";}
app.project.autoFixExpressions(forExp, massiveItemov[i].name);
}

if (dlyaSnepa.length >=2){
var snap = dlyaSnepa[0];  
var masDura = new Array(massiveItemov[snap].workAreaDuration,0);
for (var i = 1; i <dlyaSnepa.length; i++) {masDura.push(massiveItemov[dlyaSnepa[i]].workAreaDuration);
if (massiveItemov[snap].workAreaDuration>massiveItemov[dlyaSnepa[i]].workAreaDuration){snap = dlyaSnepa[i]}}
//~ if(Math.max.apply(null, masDura) !=massiveItemov[snap].workAreaDuration) {massiveItemov[snap].name = massiveItemov[snap].name.replace("Portrait","Snapchat")}
}



if (numerok == 0) {textFol.text = "///  SELECT COMPOSITIONS  ///";} else
{
textFol.text = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+maxSek+"sec"+"_"+bloD+adult+noLic+chN+dlyaCompa+moDiz +"/   ("+numerok+")";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.settings.saveSetting(sectionName,keyName,moDiz);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

};








}


function reFolName () {
folderVibr = Folder.selectDialog("Выбери папку с видео"); 
if (folderVibr == null) {return};
if (scoreNashatiya == 0 && ch1.value ==1) {ch1.text = "Blood", scoreNashatiya+=1;};
if (scoreNashatiya == 1 && ch1.value ==0) {ch1.text = "NoBlood"; ch1.value =1, scoreNashatiya+=1;};
if (scoreNashatiya == 2 && ch1.value ==0) {scoreNashatiya = 0; ch1.text = "Blood"; ch1.value =0;};
      






var numerok = 0;
var dlyaNeudach = 0;

var massiveItemov = aeq.file.getFiles(folderVibr,"*.mp4"); 



if (massiveItemov.length == 0) {alert("В папке нет .mp4");return};
var maxSek  = 0;
var ProverkaNaPovtor = new Array();
var poselRen = new Array();




for (var i = 0; i < massiveItemov.length ; i++) 
{
    
    
var PropeFile = aeq.project.importFile(massiveItemov[i]);

numerok+=1;
var sek = Math.round(PropeFile.duration);
var heG = PropeFile.height;
var wiD = PropeFile.width;
var raTi = wiD/heG;
PropeFile.remove();


if (maxSek < sek) {maxSek=sek};


for (m=1;m<=wiD;m++)
{if (parseInt(raTi*m) == raTi*m) {break}}

var x = raTi*m;
var y = m;

var gameNaz = text1.text; 
var vidosNaz =text2.text;
var moDiz =text3.text;
var razreshenie = x+"x"+y;
if ( x == 16 && y == 9) {razreshenie= 'Landscape'};
if ( x == 9 && y == 16) {razreshenie= 'Portrait';};
if ( x == 1 && y == 1) {razreshenie= 'Square'};
//~ if ( x == 9 && y == 16 && sek<15.1) {razreshenie= 'Snapchat'};



if (ch1.value == 1 ) {var bloD= ch1.text+"_"} else {var bloD = "";}
if (ch2.value == 1 ) {var adult= "Adult_"} else {var adult = "";}
if (ch3.value == 1 ) {var noLic= "NoLic_"} else {var noLic = "";}
//~ if (ch4.value == 1 ) {var chN= "CHN_"} else {var chN = "";}
if (ch5.value == 1 ) {var sourCE= "Source_"} else {var sourCE = "";}


var chN= textLoc.text+"_";
var file = massiveItemov[i];
var dlyaImeni = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+sek+"sec"+"_"+bloD+adult+noLic+chN+sourCE+razreshenie+"_"+moDiz+".mp4";
if (file.name[0] == "~" && file.name[1] == "S" || file.name.toString ().indexOf("Source") != -1) {var dlyaImeni = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+sek+"sec"+"_"+bloD+adult+noLic+chN+"Source_"+razreshenie+"_"+moDiz+".mp4";};


if (ProverkaNaPovtor.toString().indexOf(dlyaImeni) != -1) {dlyaImeni = "("+i+") "+dlyaImeni};
ProverkaNaPovtor.push(dlyaImeni.toString());


poselRen.push(encodeURIComponent(dlyaImeni));


//~ var myCommand = 'rename '+'"'+ file.fsName +'" '+dlyaImeni;
//~ system.callSystem("cmd /c \""+myCommand+"\"");


var dlyaCompa = "";
//~ if (razreshenie == "4x5" && massiveItemov.length <= 2) {file.rename(gameNaz.toString()+"_"+"Gameplay"+"_"+vidosNaz.toString()+"_"+sek.toString()+"sec"+"_"+bloD.toString()+adult.toString()+noLic.toString()+chN.toString()+sourCE.toString()+"_Comp"+razreshenie.toString()+"_"+moDiz.toString()+".mp4"); dlyaCompa = "Comp_";}

}

//~ aeq.command.revealFile();
aeq.command.call('Explorer /select  /n,', 'open -R', '"' + folderVibr.fsName + '"' );
$.sleep (500);
for (var i = 0; i < massiveItemov.length ; i++) {massiveItemov[i].rename(i.toString()+".mp4")};

//~ var myCommand = 'Explorer /select,'+'"'+massiveItemov[0].fsName+'"';
//~ system.callSystem("cmd /c \""+myCommand+"\"");

for (var i = 0; i < massiveItemov.length ; i++) {massiveItemov[i].rename(poselRen[i].toString()); if (decodeURIComponent(massiveItemov[i].name) != decodeURIComponent(poselRen[i]).toString()) {dlyaNeudach+=1};};



if (dlyaNeudach !=0) {alert("Не удалось переименовать "+dlyaNeudach+" видео. \n\nПереключитесь на другое окно и повторите\n","SayRename")}
if (numerok == 0) {textFol.text = "///  SELECT COMPOSITIONS  ///";} else
{
textFol.text = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+maxSek+"sec"+"_"+bloD+adult+noLic+chN+dlyaCompa+moDiz +"/   ("+numerok+")";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.settings.saveSetting(sectionName,keyName,moDiz);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

};








}















function Zap1 (func) {if (text1.text == "Game") {text1.text = ""};func()}; 
function dlyaActiv1 () {Zap1(reName)};

function Zap2 (func) {if (text2.text == "№") {text2.text = ""};func()}; 
function dlyaActiv2 () {Zap2(reName)};



function Zip1 (func) {if (text1.text == "") {text1.text = "Game"};func()}; 
function dlyaDeac1 ()
{//latinc

var bukvi = text1.text.toString().toUpperCase();
text1.text = "";
for (var i = 0; i < bukvi.length; i++){
a = bukvi[i];
switch (a) {
  case "Й": a = "Q"; break;
  case "Ц": a = "W"; break;
  case "У": a = "E"; break;
  case "К": a = "R"; break;
  case "Е": a = "T"; break;
  case "Н": a = "Y"; break;
  case "Г": a = "U"; break;
  case "Ш": a = "I"; break;
  case "Щ": a = "O"; break;
  case "З": a = "P"; break;
  case "Ф": a = "A"; break;
  case "Ы": a = "S"; break;
  case "В": a = "D"; break;
  case "А": a = "F"; break;
  case "П": a = "G"; break;
  case "Р": a = "H"; break;
  case "О": a = "J"; break;
  case "Л": a = "K"; break;
  case "Д": a = "L"; break;
  case "Я": a = "Z"; break;
  case "Ч": a = "X"; break;
  case "С": a = "C"; break;
  case "М": a = "V"; break;
  case "И": a = "B"; break;
  case "Т": a = "N"; break;
  case "Ь": a = "M"; break;
  default: a = a;
}
text1.text += a;
}
Zip1(reName);

///toMemory/////
MasIzGames.unshift(text1.text);
var stringGames = "";
for (var i = 0; i != 20; i++){if(MasIzGames[i] != undefined && MasIzGames[i] != "Game" && stringGames.indexOf(MasIzGames[i]) == -1 && MasIzGames[i] != "") {stringGames+= MasIzGames[i]+"\n"}}
app.settings.saveSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames, stringGames);
text1.helpTip = app.settings.getSetting(sectionNameDlyaVvodaGames,keyNameDlyaVvodaGames);
};

function Zip2 (func) {if (text2.text == "") {text2.text = "№"};func()}; 
function dlyaDeac2 () {Zip2(reName)};


function dlyaCopy1(){if (ScriptUI.environment.keyboardState.ctrlKey == true || ScriptUI.environment.keyboardState.metaKey == true){reFolName (); return }; dlyaCopy(teSt1)};
function dlyaCopy(fank){
    fank();
    var ishText = textFol.text.split ("/")[0];     
   if (ishText != undefined && textFol.text != "///  SELECT COMPOSITIONS  ///")
    {aeq.command.copyToClipboard(textFol.text)};  
 };



text1.onActivate = dlyaActiv1;
text2.onActivate = dlyaActiv2;


text1.onChanging = reName;
text2.onChanging = reName;
text3.onChanging = reName;
textLoc.onChanging = reName;



text1.onDeactivate= dlyaDeac1;
text2.onDeactivate= dlyaDeac2;
text3.onDeactivate= reName;





ch1.onClick = reName;
ch2.onClick = reName; 
ch3.onClick = reName;
//~ ch4.onClick = reName;
ch5.onClick = reName;




function teSt1 (){
var ishText = textFol.text.split ("/")[0];
if (ishText != undefined && textFol.text != "///  SELECT COMPOSITIONS  ///"){
textFol.text = ishText};
}


//textFol.addEventListener ("mousemove", teSt1);
textFol.addEventListener ("mouseup", dlyaCopy1);

//textFol.text = gameNaz+"_"+"Gameplay"+"_"+vidosNaz+"_"+maxSek+"sec"+"_"+bloD+adult+noLic+chN+moDiz



///////////////TikTokSectionStart//////////////////////////////////







  // Создаем диалоговое окно для ввода текста
  var paleTik = new Window("palette", "TikTok Extension");
  paleTik.orientation = "column";
  paleTik.alignChildren = "fill";


///////////ColorSchemeStart/////////////
var scriptWindow = paleTik.add("group");
scriptWindow.orientation = "row";

// Array of colors in HEX format
var hexColors = ["#FFFFFF", "#000000", "#E94040", "#FF933D", "#F1CD46", "#77C15E", "#77C7A6", "#3496EF", "#2544B3", "#5656D4", "#F7D7E8", "#A3885B", "#32523C", "#2F688C", "#92979E", "#333333"];
var ColorMode = "#FFFFFF";
// Function to convert HEX color to RGB format
function hexToRGB(hex) {
  var hexValue = hex.replace("#", "");
  var r = parseInt(hexValue.substring(0, 2), 16);
  var g = parseInt(hexValue.substring(2, 4), 16);
  var b = parseInt(hexValue.substring(4, 6), 16);
  return [r / 255, g / 255, b / 255];
}



function changeColorThem(ColorMode, etoBox) {
    
      // Check if a composition is active
  var activeComp = app.project.activeItem;
  if (!(activeComp && activeComp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }

  function hexToColor(hex) {
    var r = parseInt(hex.substring(1, 3), 16) / 255;
    var g = parseInt(hex.substring(3, 5), 16) / 255;
    var b = parseInt(hex.substring(5, 7), 16) / 255;
    return [r, g, b];
  }

if (app.project.activeItem.selectedLayers[0] != undefined && app.project.activeItem.selectedLayers[0].name == "Sub Layers Controller") {var selectLayerNull = app.project.activeItem.selectedLayers[0]} else {return}; 
var isBox = etoBox;
var childLayers = [];

    // check for BOXS
    for (var i = 1; i <= app.project.activeItem.numLayers; i++) {
      var layer = app.project.activeItem.layer(i);
      // Check if the layer's parent is the selected null object
      if (layer.parent === selectLayerNull && layer.name.split(" || ")[0] == "Sub") {
        childLayers.push(layer); // Add the layer to the childLayers array
      }}
   for (var i = 1; i <= app.project.activeItem.numLayers; i++) { 
      var layer = app.project.activeItem.layer(i);
      // Check if the layer's parent is the selected null object
      if (layer.parent === childLayers[0] && layer.name.split(" || ")[0] == "Sub BOX") {
          isBox = true;
          break
      }
    }



selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));

if (isBox == true) {
              switch (true) {
                    case (ColorMode == "#FFFFFF"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#000000"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#000000"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#E94040"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break; 
                    case (ColorMode == "#FF933D"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#F1CD46"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#77C15E"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#77C7A6"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#3496EF"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#2544B3"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#5656D4"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#F7D7E8"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#A3885B"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#32523C"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#2F688C"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#92979E"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;
                    case (ColorMode == "#333333"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor("#FFFFFF"));
         selectLayerNull.property("Effects")("Box Color")("Color").setValue(hexToColor(ColorMode));
          break;};
      }
  if (selectLayerNull.property("Effects")("Add Stroke")("Checkbox").value == 1){
        switch (true) {
                    case (ColorMode == "#FFFFFF"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#000000"));
          break;
                    case (ColorMode == "#000000"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#E94040"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#FF933D"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#481606"));
          break;
                    case (ColorMode == "#F1CD46"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#000000"));
          break;
                    case (ColorMode == "#77C15E"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#77C7A6"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#3496EF"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#2544B3"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#F1CD46"));
          break;
                    case (ColorMode == "#5656D4"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#F7D7E8"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#D26792"));
          break;
                    case (ColorMode == "#A3885B"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#32523C"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#2F688C"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#92979E"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;
                    case (ColorMode == "#333333"):
         selectLayerNull.property("Effects")("Text Color")("Color").setValue(hexToColor(ColorMode));
         selectLayerNull.property("Effects")("Stroke Color")("Color").setValue(hexToColor("#FFFFFF"));
          break;};
    }  
} 

 



// Function to create a group with color background and checkbox
function createGroupWithCheckbox(parent, groupName, color, checked) {
  var group = parent.add("group");
  group.orientation = "stack";

  var bgPanel = group.add("group", undefined, undefined, {borderStyle: "etched"});
  bgPanel.size = [30, 30];
  bgPanel.margins = [2, 2, 2, 2];  

  var rgbColor = hexToRGB(color); // Convert HEX color to RGB
  
  bgPanel.graphics.backgroundColor = bgPanel.graphics.newBrush(bgPanel.graphics.BrushType.SOLID_COLOR, rgbColor);
  bgPanel.margins = [10, 10, 10, 10];

  var checkbox = group.add("checkbox", undefined, groupName);
  checkbox.helpTip = 'Select "Sub Layers Controller"\nTo change the color theme'
  checkbox.value = checked; // Set checkbox value
  
  // Event listener for checkbox click
  checkbox.onClick = function() {
    // Uncheck all other checkboxes
    for (var i = 0; i < parent.children.length; i++) {
      var child = parent.children[i];
      if (child !== group && child instanceof Group) {
        var otherCheckbox = child.children[1];
        otherCheckbox.value = false;
      }
    }
ColorMode = color;
changeColorThem(ColorMode, false);
  };
  
  return group;
}

// Create six groups with different colors and checkboxes
for (var i = 0; i < hexColors.length; i++) {
  var color = hexColors[i];
  var checked = (i === 0); // Check the first checkbox
  
  createGroupWithCheckbox(scriptWindow, "", color, checked);
}
///////////ColorSchemeEnd/////////////


  var groupAutomation = paleTik.add("group");
  var slider = groupAutomation.add("slider",  [0,0,535,30], 20, 2, 70);
  var butSpeechToText = groupAutomation.add("button",  undefined, ".mp3");
  var textGroup = paleTik.add("group");
  textGroup.orientation = "row";
  textGroup.alignChildren = "fill";
  slider.helpTip = slider.value +" characters in one line";
  
  

  



  var textInput = textGroup.add("edittext", undefined, "", {
    multiline: true,
    scrolling: true,
    wantReturn: true,
  });
  textInput.alignment = "fill";
  textInput.minimumSize.width = 1920/3;
  textInput.minimumSize.height = 1920/3;
  textInput.helpTip = "Empty paragraph = new text layer"
  
  
  

  var buttonGroup = paleTik.add("group");
  buttonGroup.orientation = "row";
  buttonGroup.alignChildren = "center";

  var createButton = buttonGroup.add("button",  [0,0,151,35], "Subtitles");
  var boxButton = buttonGroup.add("button",  [0,0,151,35], "Box");
  var replyButton = buttonGroup.add("button",  [0,0,151,35], "TT reply"); 
  var cancelButton = buttonGroup.add("button",  [0,0,151,35], "Close");
  createButton.helpTip = "Create Subtitles";
  boxButton.helpTip = "Add/Edit BOX\nCtrl + Click - delete boxs";
  
replyButton.onClick  =  function() 
{// The path to the .aep file you want to import
var pathFolder = File($.fileName).fsName;
pathFolder = pathFolder.split("SayRenameGames.jsx")[0];
pathFolder = pathFolder.replace(/\\/g, '/');
var filePath = pathFolder+"SayRename/TTreply.aep";

// Import the .aep file into the project
var importedFile = app.project.importFile(new ImportOptions(File(filePath)));
importedFile.name = "TTreply Source";
// Make sure the imported item is a project, so we can access its compositions
if (importedFile instanceof FolderItem) {
    // Assuming you want to use the first composition in the imported project
    var compToUse = importedFile.items[2]; // adjust index if you want another comp
    // Make sure it's really a composition
    if (compToUse instanceof CompItem) {
        // Get the active composition
        var activeComp = app.project.activeItem;
        
        // Check if there is an active composition and it's indeed a composition
        if (activeComp && activeComp instanceof CompItem) {
            // Add the imported composition to the active comp as a new layer
            activeComp.layers.add(compToUse);
        } else {
            alert("No active composition selected.");
        }
    } else {
        alert("The imported item doesn't seem to have a composition.");
    }
} else {
    alert("Failed to import the .aep file properly.");
}
};
    
    
    
butSpeechToText.onClick  = function() 
{     // Check if a composition is active
  var activeComp = app.project.activeItem;
  if (!(activeComp && activeComp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }
    textInput.text = 'Mode: SRT\n\n'+buildTextFromOutput(getTextFromSound());};

function getTextFromSound() {
    
if (app.project.activeItem.selectedLayers[0] == null) {return "Select .wav or .mp3 layer. Until 10 mb.";};
if (app.project.activeItem.selectedLayers[0].hasAudio == false){return "Select .wav or .mp3 layer. Until 10 mb.";};
var pathFolder = File($.fileName).fsName;
pathFolder = pathFolder.split("SayRenameGames.jsx")[0];
pathFolder = pathFolder.replace(/\\/g, '/');
var pathMain = pathFolder+"SayRename/PythonSpeech2Text.exe";
var pathJson = pathFolder+"SayRename/SpeechToText.json";
var pathAudio =app.project.activeItem.selectedLayers[0].source.file.fsName;
pathAudio = pathAudio.replace(/\\/g, '/');
var pathProxySub = pathFolder+"SayRename/ProxySub.txt";

var command = 'cmd.exe /c "' + '"'+pathMain+'"' +" " +'"'+pathJson+'"'+" " + '"'+ pathAudio+'"'+" " +  '"'+pathProxySub+'"'+'"';
var result = system.callSystem(command);

var output_file = File(pathProxySub);
output_file.open("r");
var content = output_file.read();
//~ output_file.open("w");
output_file.close();

return content;
};


function buildTextFromOutput(output) {
    var text = '';
    var wordsIn = [];
    var startWordsTime = [];
    var endWordsTime = [];    

for(var i = 0; output.split("\n").length > i; i++)
{
    
///////////Search Words
if(output.split("\n")[i].indexOf("word:") !== -1) {wordsIn.push(output.split("\n")[i].split('"')[1])};

///////////Search Start Time
if(output.split("\n")[i].indexOf(" start_time {") !== -1)
{
var sek =0;
var nanos = 0;
if (output.split("\n")[i+1].indexOf("seconds: ") !== -1) {sek = output.split("\n")[i+1].split('seconds: ')[1]};
if (output.split("\n")[i+1].indexOf("nanos: ") !== -1) {nanos = output.split("\n")[i+1].split('nanos: ')[1]};
if (output.split("\n")[i+2].indexOf("nanos: ") !== -1) {nanos = output.split("\n")[i+2].split('nanos: ')[1]};
startWordsTime.push(parseFloat(sek + '.'+nanos));
};

///////////Search End Time
if(output.split("\n")[i].indexOf(" end_time {") !== -1)
{
var sek =0;
var nanos = 0;
if (output.split("\n")[i+1].indexOf("seconds: ") !== -1) {sek = output.split("\n")[i+1].split('seconds: ')[1]};
if (output.split("\n")[i+1].indexOf("nanos: ") !== -1) {nanos = output.split("\n")[i+1].split('nanos: ')[1]};
if (output.split("\n")[i+2].indexOf("nanos: ") !== -1) {nanos = output.split("\n")[i+2].split('nanos: ')[1]};
endWordsTime.push(parseFloat(sek + '.'+nanos));
};
}

///////////ConnectAll
for (var i = 0; i < wordsIn.length; i++) {
    var currentLineWord = '';
    var curLine = wordsIn[i] + ' ';
    var startTime = startWordsTime[i];
    var endTime = endWordsTime[i];
    
    var h = i + 1; // Start from the next word
    while ((curLine.length < Math.round(slider.value)) && (h < wordsIn.length)) {
        curLine += wordsIn[h] + ' ';
        endTime = endWordsTime[h];
        h++;
    }
    
    i = h - 1; // Adjust the outer loop iterator

    currentLineWord = '[S] '+startTime + '\n' + curLine + '\n' +'[E] '+ endTime + '\n\n\n';
    text += currentLineWord;
}

    return text;
}



slider.onChange = function() { 
if (textInput.text.split('\n')[0] == 'Mode: SRT') 
{
var pathFolder = File($.fileName).fsName;
pathFolder = pathFolder.split("SayRenameGames.jsx")[0];
pathFolder = pathFolder.replace(/\\/g, '/');
var pathProxySub = pathFolder+"SayRename/ProxySub.txt";
var output_file = File(pathProxySub);
output_file.open("r");
var content = output_file.read();
output_file.close();
textInput.text = 'Mode: SRT\n\n'+buildTextFromOutput(content);slider.helpTip = Math.round(slider.value) +" characters in one line"; return;
};
removeParagraphSeparations(textInput.text);
redrawTextLayer(textInput.text);
slider.helpTip = Math.round(slider.value) +" characters in one line";
}


function removeParagraphSeparations(text) {
  // Replace existing line breaks and paragraph breaks with spaces
  text = text.replace(/\n/g, "");
  text = text.replace(/\r/g, "");
  textInput.text = text;
}

// Redraw the text layer based on the current threshold and text in the EditText field
function redrawTextLayer(text) {
  var MAX_LENGTH =  Math.round(slider.value); // Maximum characters before line break
  var words = text.split(" "); // Split the text into an array of words
  var result = "";
  var currentLength = 0;

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var wordLength = word.length;
    // Check if adding the word exceeds the maximum length
    if (currentLength + wordLength > MAX_LENGTH) {
      // Add a line break before the word if it's not the first word
      if (i > 0) {
        result += "\n\n";
      }
      currentLength = 0;
    }

    // Add the word and a space to the result
    result += word + " ";
    currentLength += wordLength + 1; // Account for the added space

  }

 textInput.text = result;
}



cancelButton.onClick = function() {paleTik.hide ()}




createButton.onClick = function() {if(textInput.text.split('\n')[0] == 'Mode: SRT') {YesSRTmakeSub()} else {noSRTmakeSub()}}
    
    
function noSRTmakeSub() {
app.beginUndoGroup("My Undo Group");
  // Check if a composition is active
  var activeComp = app.project.activeItem;
  if (!(activeComp && activeComp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }

  // Create a new text layer for each non-empty paragraph or combine consecutive paragraphs into one text layer
  var paragraphs = textInput.text.split("\n");
  var yPos = activeComp.height / 2;
  var fontSize = 75;
  var combinedText = ""; // Variable to store combined text
  var isFirstParagraph = true; // Flag to check if it's the first paragraph
  var layersTextS = [];
  var colorMode = ColorMode; // HEX color value, change it to your desired color

  // Create the common null controller
  var nullController = activeComp.layers.addNull();
  nullController.name = "Sub Layers Controller";
  nullController.source.name = "Sub Layers Controller";
  nullController.label = 2;
  nullController.transform.opacity.setValue(100);
  nullController.inPoint = activeComp.workAreaStart;
  nullController.outPoint = activeComp.workAreaStart+activeComp.workAreaDuration;

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i].replace(/^\s+|\s+$/g, ''); // Remove leading and trailing whitespace

    if (paragraph !== "") {
      if (isFirstParagraph) {
        combinedText += paragraph; // Append the first paragraph to the combined text
        isFirstParagraph = false;
      } else {
        var prevParagraph = paragraphs[i - 1].replace(/^\s+|\s+$/g, '');

        if (prevParagraph !== "") {
          combinedText += "\n" + paragraph; // Append consecutive paragraphs to the combined text
        } else {
          createTextLayer(combinedText); // Create a text layer for the combined text
          combinedText = paragraph; // Start a new combined text
        }
      }
    }
  }

  if (combinedText !== "") {
    createTextLayer(combinedText); // Create a text layer for the remaining combined text
  }


  function createTextLayer(text) {
    var textLayer = activeComp.layers.addText();

////////stroke
var strokeFFX = new File(File($.fileName).path + "/SayRename/strokeFFX.ffx"); // Путь к stroke
if (!strokeFFX.exists) {
   alert('File does not exist at path ' + strokeFFX.fsName); return;
}
textLayer.applyPreset(strokeFFX);
/////////stroke

    layersTextS.push(textLayer);
    var textProperty = textLayer.property("Source Text");

    textLayer.position.setValue([activeComp.width / 2, yPos]);
    textLayer.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, 0]);

    var textDocument = textProperty.value;
    textDocument.fontSize = fontSize;
    textDocument.font = "Arial";
    textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
    textDocument.text = text;
    textProperty.setValue(textDocument);

    // Modify font and font size
    var textDocumentChanged = textProperty.value;
    textDocumentChanged.resetCharStyle();
    textDocumentChanged.fontSize = fontSize;
    textDocumentChanged.font = "Figtree-Medium";
    textProperty.setValue(textDocumentChanged);
    textLayer.name = "Sub || " + textLayer.name;
    textLayer.label = 7;
    textLayer.property("Source Text").expression = 'm = thisComp.layer("Sub Layers Controller").effect("FONTS")("Menu").value; switch(m){ case 1: font = "Figtree-Medium"; break; case 2: font = "SourceCodePro-Black"; break; case 3: font = "ComicNeue-Regular"; break; case 4: font = "CrimsonPro-Bold"; break; case 5: font = "BarlowCondensed-Bold"; break; case 6: font = "TimesNewRomanPSMT"; break; case 7: font = "Damion"; break; case 8: font = "BarlowCondensed-Medium"; break; case 9: font = "CrimsonPro-LightItalic"; break; case 10: font = "SpecialElite-Regular"; break; case 11: font = "AmaticSC-Regular"; break; default: font = "ArialMT"; break; } color = thisComp.layer("Sub Layers Controller").effect("Text Color")("Color"); var newStyle = style.setApplyFill(true); newStyle.setFillColor(color).setFont(font);';
    
    
    if (textLayer.property("Layer Styles")(11).active == true) {
    textLayer.property("Layer Styles").property(11)(3).expression = 'try {thisComp.layer("Sub Layers Controller").transform.scale[0]/21} catch {value};';
     textLayer.property("Layer Styles").property(11)(4).expression = 'try {if (thisComp.layer("Sub Layers Controller").effect("Add Stroke")("Checkbox") == 1){100} else 0} catch {value};';
     textLayer.property("Layer Styles").property(11)(2).expression = 'try {thisComp.layer("Sub Layers Controller").effect("Stroke Color")("Color")} catch {value};';
     };
     
    textLayer.parent = nullController; // Parent the text layer to the null controller
  }

  function hexToColor(hex) {
    var r = parseInt(hex.substring(1, 3), 16) / 255;
    var g = parseInt(hex.substring(3, 5), 16) / 255;
    var b = parseInt(hex.substring(5, 7), 16) / 255;
    return [r, g, b];
  }

  for (i = 0; i < layersTextS.length; i++) {
    layersTextS[i].inPoint = activeComp.workAreaDuration / layersTextS.length * i;
    layersTextS[i].outPoint = activeComp.workAreaDuration / layersTextS.length * (i + 1);
    layersTextS[i].startTime += activeComp.workAreaStart;
  }

  if (layersTextS.length>1) {nullController.moveBefore(layersTextS[layersTextS.length - 1]);};
  var textColor = nullController.property("ADBE Effect Parade").addProperty("ADBE Color Control");
  textColor.name = "Text Color";
  textColor.property("Color").setValue(hexToColor(colorMode)) ;
  var BoxColor = nullController.property("ADBE Effect Parade").addProperty("ADBE Color Control");
  BoxColor.name = "Box Color";
  var StrokeColor = nullController.property("ADBE Effect Parade").addProperty("ADBE Color Control");
  StrokeColor.name = "Stroke Color";
  var checkboxStroke = nullController.property("ADBE Effect Parade").addProperty("ADBE Checkbox Control");
  checkboxStroke.name = "Add Stroke";
  var dropdownFonts = nullController.property("ADBE Effect Parade").addProperty("Dropdown Menu Control");
  var dropdownOptions = ["Classic", "Typewriter", "Comic Sans", "Serif", "Heavy", "Freehand", "Handwriting", "Neon", "Luxury", "Telegraph", "Curious cat"];
dropdownFonts.property(1).setPropertyParameters(dropdownOptions);
nullController.Effects.property(nullController.Effects.numProperties).name = "FONTS";
app.endUndoGroup();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function YesSRTmakeSub() {
app.beginUndoGroup("My Undo Group");
  // Check if a composition is active
  var activeComp = app.project.activeItem;
  if (!(activeComp && activeComp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }




///deleteAndGetAllTime
var beforeForma = textInput.text;
var afterForma = '';
var startTimeLine = [];
var endTimeLine = [];
for (var r = 2; textInput.text.split('\n').length > r; r++)
{
if ( textInput.text.split('\n')[r].indexOf("[S]") !== -1) {startTimeLine.push(parseFloat(textInput.text.split('\n')[r].split("[S]")[1])); continue;};
if ( textInput.text.split('\n')[r].indexOf("[E]") !== -1) {endTimeLine.push(parseFloat(textInput.text.split('\n')[r].split("[E]")[1])); continue};
afterForma+=textInput.text.split('\n')[r]+'\n';
if (textInput.text.split('\n')[r] == '') {afterForma+= '\n'; r++};
}
textInput.text = afterForma;




  // Create a new text layer for each non-empty paragraph or combine consecutive paragraphs into one text layer
  var paragraphs = textInput.text.split("\n");
  var yPos = activeComp.height / 2;
  var fontSize = 75;
  var combinedText = ""; // Variable to store combined text
  var isFirstParagraph = true; // Flag to check if it's the first paragraph
  var layersTextS = [];
  var colorMode = ColorMode; // HEX color value, change it to your desired color

  // Create the common null controller
  var nullController = activeComp.layers.addNull();
  nullController.name = "Sub Layers Controller";
  nullController.source.name = "Sub Layers Controller";
  nullController.label = 2;
  nullController.transform.opacity.setValue(100);
  nullController.inPoint = activeComp.workAreaStart;
  nullController.outPoint = activeComp.workAreaStart+activeComp.workAreaDuration;

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i].replace(/^\s+|\s+$/g, ''); // Remove leading and trailing whitespace

    if (paragraph !== "") {
      if (isFirstParagraph) {
        combinedText += paragraph; // Append the first paragraph to the combined text
        isFirstParagraph = false;
      } else {
        var prevParagraph = paragraphs[i - 1].replace(/^\s+|\s+$/g, '');

        if (prevParagraph !== "") {
          combinedText += "\n" + paragraph; // Append consecutive paragraphs to the combined text
        } else {
          createTextLayer(combinedText); // Create a text layer for the combined text
          combinedText = paragraph; // Start a new combined text
        }
      }
    }
  }

  if (combinedText !== "") {
    createTextLayer(combinedText); // Create a text layer for the remaining combined text
  }


  function createTextLayer(text) {
    var textLayer = activeComp.layers.addText();

////////stroke
var strokeFFX = new File(File($.fileName).path + "/SayRename/strokeFFX.ffx"); // Путь к stroke
if (!strokeFFX.exists) {
   alert('File does not exist at path ' + strokeFFX.fsName); return;
}
textLayer.applyPreset(strokeFFX);
/////////stroke

    layersTextS.push(textLayer);
    var textProperty = textLayer.property("Source Text");

    textLayer.position.setValue([activeComp.width / 2, yPos]);
    textLayer.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, 0]);

    var textDocument = textProperty.value;
    textDocument.fontSize = fontSize;
    textDocument.font = "Arial";
    textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
    textDocument.text = text;
    textProperty.setValue(textDocument);

    // Modify font and font size
    var textDocumentChanged = textProperty.value;
    textDocumentChanged.resetCharStyle();
    textDocumentChanged.fontSize = fontSize;
    textDocumentChanged.font = "Figtree-Medium";
    textProperty.setValue(textDocumentChanged);
    textLayer.name = "Sub || " + textLayer.name;
    textLayer.label = 7;
    textLayer.property("Source Text").expression = 'm = thisComp.layer("Sub Layers Controller").effect("FONTS")("Menu").value; switch(m){ case 1: font = "Figtree-Medium"; break; case 2: font = "SourceCodePro-Black"; break; case 3: font = "ComicNeue-Regular"; break; case 4: font = "CrimsonPro-Bold"; break; case 5: font = "BarlowCondensed-Bold"; break; case 6: font = "TimesNewRomanPSMT"; break; case 7: font = "Damion"; break; case 8: font = "BarlowCondensed-Medium"; break; case 9: font = "CrimsonPro-LightItalic"; break; case 10: font = "SpecialElite-Regular"; break; case 11: font = "AmaticSC-Regular"; break; default: font = "ArialMT"; break; } color = thisComp.layer("Sub Layers Controller").effect("Text Color")("Color"); var newStyle = style.setApplyFill(true); newStyle.setFillColor(color).setFont(font);';
    
    
    if (textLayer.property("Layer Styles")(11).active == true) {
    textLayer.property("Layer Styles").property(11)(3).expression = 'try {thisComp.layer("Sub Layers Controller").transform.scale[0]/21} catch {value};';
     textLayer.property("Layer Styles").property(11)(4).expression = 'try {if (thisComp.layer("Sub Layers Controller").effect("Add Stroke")("Checkbox") == 1){100} else 0} catch {value};';
     textLayer.property("Layer Styles").property(11)(2).expression = 'try {thisComp.layer("Sub Layers Controller").effect("Stroke Color")("Color")} catch {value};';
     };
     
    textLayer.parent = nullController; // Parent the text layer to the null controller
  }

  function hexToColor(hex) {
    var r = parseInt(hex.substring(1, 3), 16) / 255;
    var g = parseInt(hex.substring(3, 5), 16) / 255;
    var b = parseInt(hex.substring(5, 7), 16) / 255;
    return [r, g, b];
  }

  for (i = 0; i < layersTextS.length; i++) {
    layersTextS[i].inPoint = startTimeLine[i];
    layersTextS[i].outPoint = endTimeLine[i];
    layersTextS[i].startTime += activeComp.workAreaStart;
  }

  if (layersTextS.length>1) {nullController.moveBefore(layersTextS[layersTextS.length - 1]);};
  var textColor = nullController.property("ADBE Effect Parade").addProperty("ADBE Color Control");
  textColor.name = "Text Color";
  textColor.property("Color").setValue(hexToColor(colorMode)) ;
  var BoxColor = nullController.property("ADBE Effect Parade").addProperty("ADBE Color Control");
  BoxColor.name = "Box Color";
  var StrokeColor = nullController.property("ADBE Effect Parade").addProperty("ADBE Color Control");
  StrokeColor.name = "Stroke Color";
  var checkboxStroke = nullController.property("ADBE Effect Parade").addProperty("ADBE Checkbox Control");
  checkboxStroke.name = "Add Stroke";
  var dropdownFonts = nullController.property("ADBE Effect Parade").addProperty("Dropdown Menu Control");
  var dropdownOptions = ["Classic", "Typewriter", "Comic Sans", "Serif", "Heavy", "Freehand", "Handwriting", "Neon", "Luxury", "Telegraph", "Curious cat"];
dropdownFonts.property(1).setPropertyParameters(dropdownOptions);
nullController.Effects.property(nullController.Effects.numProperties).name = "FONTS";
textInput.text = beforeForma;
app.endUndoGroup();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







boxButton.onClick = function() {
app.beginUndoGroup("My Undo Group");
  // Check if a composition is active
  var activeComp = app.project.activeItem;
  if (!(activeComp && activeComp instanceof CompItem)) {
    alert("Nothing is in your selection");
    return;
  }    
  
  var selectLayerS = app.project.activeItem.selectedLayers;
  
  
    if (selectLayerS[0] == null || selectLayerS[0] == "undefined" ) {
    alert("Nothing is in your selection");
    return;
  }    
  

  if (selectLayerS[0].nullLayer) {

     changeColorThem(ColorMode, true); 
    var childLayers = [];

    // Iterate through all layers in the composition
    for (var i = 1; i <= app.project.activeItem.numLayers; i++) {
      var layer = app.project.activeItem.layer(i);

      // Check if the layer's parent is the selected null object
      if (layer.parent === selectLayerS[0]) {
        childLayers.push(layer); // Add the layer to the childLayers array
      }
    }
    selectLayerS = childLayers;
    
    if (ScriptUI.environment.keyboardState.ctrlKey || ScriptUI.environment.keyboardState.commandKey)
    { 
    for (var j = 1; j <= app.project.activeItem.numLayers; j++) 
    { if (app.project.activeItem.layer(j).name.split(" || ")[0] == "Sub BOX") 
     {app.project.activeItem.layer(j).remove()}
    };
    changeColorThem(ColorMode, false);
    return;
    }
  }

  for (a = 0; a < selectLayerS.length; a++) {
    addBoxS(selectLayerS[a]);}
app.endUndoGroup();
};




function addBoxS(selectedLayer) {
  if (selectedLayer instanceof TextLayer) {
      
 for (var i = 1; i <= app.project.activeItem.numLayers; i++) 
 { if (app.project.activeItem.layer(i).parent == selectedLayer && app.project.activeItem.layer(i).name.split(" || ")[0] == "Sub BOX") 
     {app.project.activeItem.layer(i).remove()}
  };
 
    // Shape layer
    var shapeLayer = app.project.activeItem.layers.addShape();
    shapeLayer.moveAfter(selectedLayer);
    shapeLayer.parent = selectedLayer;
    shapeLayer.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0]);
    var group = shapeLayer.property("Contents").addProperty("ADBE Vector Group");

    // Some controllers
    var leadingS = selectedLayer.property("Source Text").value.leading;
    var colorMode = ColorMode; // HEX color value, change it to your desired color

    function hexToColor(hex) {
      var r = parseInt(hex.substring(1, 3), 16) / 255;
      var g = parseInt(hex.substring(3, 5), 16) / 255;
      var b = parseInt(hex.substring(5, 7), 16) / 255;
      return [r, g, b];
    }

    // Get the source text value
    var sourceText = selectedLayer.property("Source Text").value;

    // Split the text by newline characters
    var lines = sourceText.text.split("\r");

    // Count the number of lines
    var lineCount = lines.length;

    for (i = 0; i != lineCount; i++) {
      var seprLines = selectedLayer.duplicate();
      seprLines.property("Source Text").setValue(lines[i]);
      seprLines.parent = selectedLayer;
      seprLines.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, leadingS * -i]);

      var rectangleShape = group.property("Contents").addProperty("ADBE Vector Shape - Rect");
      rectangleShape.property("Size").setValue([seprLines.sourceRectAtTime(1, true).width + leadingS * 2 / 3, seprLines.sourceRectAtTime(1, true).height + leadingS * 2 / 3]);
      rectangleShape.property("Position").setValue([seprLines.sourceRectAtTime(1, true).width / 2 + seprLines.sourceRectAtTime(1, true).left, seprLines.sourceRectAtTime(1, true).height / 2 + seprLines.sourceRectAtTime(1, true).top + leadingS * i]);
      seprLines.remove();
    }
    var mergeMode = group.property("Contents").addProperty("ADBE Vector Filter - Merge");
    mergeMode.property("ADBE Vector Merge Type").setValue(2);
    var roundCorners = group.property("Contents").addProperty("ADBE Vector Filter - RC");
    roundCorners.property("Radius").setValue(20);

    // Add a fill to the rounded rectangle shape
    var fill = group.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    fill.property("Color").expression = 'try{thisComp.layer("Sub Layers Controller").effect("Box Color")("Color")} catch {value};'; // Set the fill

    shapeLayer.inPoint = selectedLayer.inPoint;
    shapeLayer.outPoint = selectedLayer.outPoint;
    shapeLayer.property("ADBE Transform Group").property("ADBE Scale").setValue([100, 100]);
    shapeLayer.name = "Sub BOX || " + selectedLayer.name.split(" || ")[1];
    shapeLayer.label = 10;
    shapeLayer.transform.opacity.expression = 'try {thisComp.layer("Sub Layers Controller").transform.opacity} catch {value};';

  } else {
    alert("Selected layer is not a text layer.");
  }
}









butTik.onClick = function () {paleTik.show();}
///////////////TikTokSectionEnd//////////////////////////////////

myPanel.layout.layout(true);
myPanel.layout.resize();
myPanel.onResizing = myPanel.onResize = function(){this.layout.resize();}



return myPanel;
}

var myChildScript = childScript(thisObj);
if (myChildScript != null && myChildScript instanceof Window){
myChildScript.center();
myChildScript.show();
}

}
mainScript(this);
//~ }
//~ else {eval(sc.split("[SC]")[1]);}
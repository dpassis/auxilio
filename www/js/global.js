var header = {

"pt" : {
		home: 		{ desc: "Início", 		 img: "img/home.png"},
		about:      { desc: "Sobre",		 img: "img/about.png"},
		help:       { desc: "Ajuda",		 img: "img/help.png"}
		},

"en" : 
		{
		home: 	  { desc: "Home", 			img: "img/home.png"},
		about:    { desc: "About",			img: "img/about.png"},
		help:     { desc: "Help",			img: "img/help.png"}
		}
};



var menu = {

"pt" : [
		{item: "Início", 		class:"home", 		click:'app.homeView()'},
		{item: "Sobre",			class:"about",		click:'app.aboutView()'},
		{item: "Ajuda",			class:"help",		click:'app.helpView()'},
		{item: "Sair",			class:"exit",		click:'app.exit()'}
   		],

"en" : [
		{item: "Home",			class:"home",		click:'app.homeView()'},
		{item: "About",			class:"about",      click:'app.aboutView()'},
		{item: "Help",			class:"help",       click:'app.helpView()'},
		{item: "Exit",			class:"exit",		click:'app.exit()'}
 		]
};



var startPage = {
	
"pt" : {
		appName:    { content: "Onde Encontrar Auxílio"},
		appName_1:  { content: "Onde Encontrar Auxílio quando"},
		startApp:   { content: "Toque para encontrar auxílio"},
		starting:   { content: "Iniciando..."}
					
		},

"en" : {
		appName:    { content: "Where to Find Help"},
		appName_1:  { content: "Where to Find Help When"},
		startApp:   { content: "Touch to find help"},
		starting:   { content: "Starting..."}
			
		}

};


var about = {

	"pt" : {
			content: "Um aplicativo para encontrar referências bíblicas em diferentes situaçções"
		
			},

	"en" : {
			content: "An application to find bible references in diferentes life situations."
				
			}
	
	
};

var help = {

	"pt" : {
			content: "No menu selecione Início, selecione uma das opções para encontrar auxílio, serão exibidas as referências bíblicas disponíveis, selecione uma das opções e o texto será exibido."
		
			},

	"en" : {
			content: "In the menu select Home, select one of the options to find help, biblical references available are displayed, select one of the options and the text will be displayed."
				
			}
	
	
};


var util = {

	"pt" : {
			share: { content: "Compartilhar"},
			shareThisApp: { content: "Compartilhar o aplicativo"}
		
						
			},

	"en" : {
			share: { content: "Share"},
			shareThisApp: { content: "Share this App"}

				
			}

}


var helpList = {

"pt" : [
		{item: "Agradecido", 	
				vers:[  {val:"Salmo 100", itemId: "val_01"},
						{val:"I Tess. 5:18", itemId: "val_02"},
						{val:"Heb. 13:15", itemId: "val_03"}
					],
				class:"emogiThankful", 			click:'app.homeView()'},
		{item: "Amargurado/Crítico",
				vers:[{val:"I Cor. 13", itemId: "val_04"},],
  				class:"emogiBitterCritic",		click:'app.aboutView()'},
		{item: "Angustiado",
				vers:[  {val:"Salmo 51", itemId: "val_05"},
						{val:"Mat. 5:4", itemId: "val_06"},
						{val:"João 14", itemId: "val_07"},
						{val:"II Cor. 1:3 - 4", itemId: "val_08"},
						{val:"I Tess. 4:3 - 18", itemId: "val_09"}
					],
				class:"emogiDistressed",		click:'app.helpView()'},
		{item: "Ansioso",
				vers:[  {val:"Salmo 46", itemId: "val_10"},
						{val:"Mat. 6:19 - 34", itemId: "val_11"},
						{val:"Fil. 4:6", itemId: "val_12"},
						{val:"I Pedro 5:6 - 7", itemId: "val_13"}
					],
				class:"emogiAnxious",		click:'app.helpView()'},
		{item: "Ausentando-se do Lar",
				vers:[  {val:"Salmo 121", itemId: "val_14"},
						{val:"Mat. 10:16 - 20", itemId: "val_15"}
					],
				class:"emogiAbsentMemberHome",		click:'app.helpView()'},
		{item: "Cansado",
				vers:[  {val:"Salmo 90", itemId: "val_16"},
						{val:"Mat. 11:28 - 30", itemId: "val_17"},
						{val:"I Cor. 15:58", itemId: "val_18"},
						{val:"Gal. 6:9 - 10", itemId: "val_19"}
					],
				class:"emogiTired",		click:'app.helpView()'},
		{item: "Contrito",
				vers:[  {val:"Salmo 4", itemId: "val_20"},
						{val:"Salmo 42", itemId: "val_21"},
						{val:"Lucas 11:1 - 13", itemId: "val_22"},
						{val:"João 17", itemId: "val_23"},
						{val:"I João 5:14 - 15", itemId: "val_24"}
					],
				class:"emogiContrite",		click:'app.helpView()'},
		{item: "Deprimido",
				vers:[  {val:"Salmo 34", itemId: "val_25"},
						{val:"Salmo 91", itemId: "val_26"},
						{val:"Salmo 118:5 - 6", itemId: "val_27"},
						{val:"Lucas 8:22 - 25", itemId: "val_28"}
					],
				class:"emogiDepressed",		click:'app.helpView()'},
		{item: "Desencorajado",
				vers:[  {val:"Salmo 23", itemId: "val_29"},
						{val:"Salmo 55:22", itemId: "val_30"},
						{val:"Mat. 5:11 - 12", itemId: "val_31"},
						{val:"II Cor. 4:8 - 18", itemId: "val_32"},
						{val:"Fil. 4:4 - 7", itemId: "val_33"}
					],
				class:"emogiDiscouraged",		click:'app.helpView()'},
		{item: "Desviado",
				vers:[  {val:"Salmo 51", itemId: "val_34"},
						{val:"I João 1:4 - 9", itemId: "val_35"}
					],
				class:"emogiDiverted",		click:'app.helpView()'},
		{item: "Em Dificuldades",
				vers:[  {val:"Salmo 16", itemId: "val_36"},
						{val:"Salmo 31", itemId: "val_37"},
						{val:"João 14:1 - 4", itemId: "val_38"},
						{val:"Heb. 7:25", itemId: "val_39"}
					],
				class:"emogiDifficulties",		click:'app.helpView()'},
		{item: "Em Dúvida",
				vers:[  {val:"Mat. 8:26", itemId: "val_40"},
						{val:"Heb. 11", itemId: "val_41"}
					],
				class:"emogiInDoubt",		click:'app.helpView()'},
		{item: "Enfermo ou na Dor",
				vers:[  {val:"Salmo 38", itemId: "val_42"},
						{val:"Tiago 5:14 - 15", itemId: "val_43"},
						{val:"Rom. 8:28, 38 - 39", itemId: "val_44"},
						{val:"II Cor. 12:9 - 10", itemId: "val_45"}
					],
				class:"emogiSickorinPain",		click:'app.helpView()'},
		{item: "Enfrentando Crise",
				vers:[  {val:"Salmo 121", itemId: "val_46"},
						{val:"Mat. 6:25 - 34", itemId: "val_47"},
						{val:"Heb. 4:16", itemId: "val_48"}
					],
				class:"emogiFacingCrisis",		click:'app.helpView()'},
			
		{item: "Falta a Fé",
				vers:[  {val:"Salmo 42:5", itemId: "val_49"},
						{val:"Heb. 11", itemId: "val_50"}
					],
				class:"emogiLackFaith",		click:'app.helpView()'},
		{item: "Faltam os Amigos",
				vers:[  {val:"Salmo 41:9 - 13", itemId: "val_51"},
						{val:"Lucas 17:3 - 4 ", itemId: "val_52"},
						{val:"Rom. 12:14 - 17, 19 - 21", itemId: "val_53"},
						{val:"II Tim. 4:16 - 18", itemId: "val_54"}
					],
				class:"emogiLackFriends",		click:'app.helpView()'},
		{item: "Necessitando Orientação",
				vers:[  {val:"Salmo 32:8", itemId: "val_55"}
					],
				class:"emogiNeedingAdvice",		click:'app.helpView()'},
		{item: "Necessitando Paz",
				vers:[  {val:"João 14:1 - 4", itemId: "val_56"},
						{val:"João 16:33", itemId: "val_57"},
						{val:"Rom. 5:1 - 5", itemId: "val_58"},
						{val:"Fil. 4: 6 - 7", itemId: "val_59"}
					],
				class:"emogiNeedingPeace",		click:'app.helpView()'},
		{item: "Necessitando Proteção",
				vers:[  {val:"Salmo 18:1 - 3", itemId: "val_60"},
						{val:"Salmo 34:7", itemId: "val_61"}
					],
				class:"emogiNeedingProtection",		click:'app.helpView()'},
		{item: "Necessitando Proteção de Deus",
				vers:[  {val:"Salmo 27:1 - 6", itemId: "val_62"},
						{val:"Salmo 91", itemId: "val_63"},
						{val:"Fil. 4:19", itemId: "val_64"}
					],
				class:"emogiRequiringProtectionOfGod",		click:'app.helpView()'},
		{item: "Necessitando Regras para Viver",
				vers:[  {val:"Rom. 12", itemId: "val_65"}
					],
				class:"emogiNeedingRulesForLiving",		click:'app.helpView()'},
		{item: "Preocupado",
				vers:[  {val:"Mat. 6:19 - 34", itemId: "val_66"},
						{val:"I Pedro 5:6 - 7", itemId: "val_67"}
					],
				class:"emogiWorried",		click:'app.helpView()'},
		{item: "Receioso",
				vers:[  {val:"Salmo 34:4", itemId: "val_68"},
						{val:"Mat. 10:28", itemId: "val_69"},
						{val:"II Tim. 1:7", itemId: "val_70"},
						{val:"Heb. 13:5 - 6", itemId: "val_71"}
					],
				class:"emogiApprehending",		click:'app.helpView()'},
		{item: "Solitário",
				vers:[  {val:"Salmo 23", itemId: "val_72"},
						{val:"Heb. 13:5 - 6", itemId: "val_73"}
					],
				class:"emogiLonely",		click:'app.helpView()'},
		{item: "Tentado",
				vers:[  {val:"Salmo 1", itemId: "val_74"},
						{val:"Salmo 139:23 - 24", itemId: "val_75"},
						{val:"Mat. 26:41", itemId: "val_76"},
						{val:"I Cor. 10:12 - 14", itemId: "val_77"},
						{val:"Fil. 4:8", itemId: "val_78"},
						{val:"Tiago 4:7", itemId: "val_79"},
						{val:"II Pedro 2:9", itemId: "val_80"},
						{val:"II Pedro 3:17", itemId: "val_81"}
					],
				class:"emogiTempted",		click:'app.helpView()'},
		{item: "Triste",
				vers:[  
						{val:"Mat. 5:4", itemId: "val_82"},
						{val:"II Cor. 1:3 - 4", itemId: "val_83"}
					],
				class:"emogiSad",		click:'app.helpView()'},
		{item: "Vencido",
				vers:[  {val:"Salmo 6", itemId: "val_84"},
						{val:"Rom. 8:31 - 39", itemId: "val_85"},
						{val:"I João 1:4 - 9", itemId: "val_86"}
					],
				class:"emogiBeaten",		click:'app.helpView()'},
		{item: "Viajando",
				vers:[  
						{val:"Salmo 121", itemId: "val_87"}
					],
				class:"emogiTraveling",		click:'app.helpView()'}
   		],

"en" : [
		{item: "Thankful", 	
				vers:[  {val:"PSalm 100", itemId: "val_01"},
						{val:"I Tess. 5:18", itemId: "val_02"},
						{val:"Heb. 13:15", itemId: "val_03"}
					],
				class:"emogiThankful", 			click:'app.homeView()'},
		{item: "Bitter/Critic",
				vers:[{val:"I Cor. 13", itemId: "val_04"},],
  				class:"emogiBitterCritic",		click:'app.aboutView()'},
		{item: "Distressed",
				vers:[  {val:"PSalm 51", itemId: "val_05"},
						{val:"Mat. 5:4", itemId: "val_06"},
						{val:"John 14", itemId: "val_07"},
						{val:"II Cor. 1:3 - 4", itemId: "val_08"},
						{val:"I Tess. 4:3 - 18", itemId: "val_09"}
					],
				class:"emogiDistressed",		click:'app.helpView()'},
		{item: "Anxious",
				vers:[  {val:"PSalm 46", itemId: "val_10"},
						{val:"Mat. 6:19 - 34", itemId: "val_11"},
						{val:"Fil. 4:6", itemId: "val_12"},
						{val:"I Peter 5:6 - 7", itemId: "val_13"}
					],
				class:"emogiAnxious",		click:'app.helpView()'},
		{item: "Absent member home",
				vers:[  {val:"PSalm 121", itemId: "val_14"},
						{val:"Mat. 10:16 - 20", itemId: "val_15"}
					],
				class:"emogiAbsentMemberHome",		click:'app.helpView()'},
		{item: "Tired out",
				vers:[  {val:"PSalm 90", itemId: "val_16"},
						{val:"Mat. 11:28 - 30", itemId: "val_17"},
						{val:"I Cor. 15:58", itemId: "val_18"},
						{val:"Gal. 6:9 - 10", itemId: "val_19"}
					],
				class:"emogiTired",		click:'app.helpView()'},
		{item: "Contrite",
				vers:[  {val:"PSalm 4", itemId: "val_20"},
						{val:"PSalm 42", itemId: "val_21"},
						{val:"Lucas 11:1 - 13", itemId: "val_22"},
						{val:"John 17", itemId: "val_23"},
						{val:"I John 5:14 - 15", itemId: "val_24"}
					],
				class:"emogiContrite",		click:'app.helpView()'},
		{item: "Depressed",
				vers:[  {val:"PSalm 34", itemId: "val_25"},
						{val:"PSalm 91", itemId: "val_26"},
						{val:"PSalm 118:5 - 6", itemId: "val_27"},
						{val:"Lucas 8:22 - 25", itemId: "val_28"}
					],
				class:"emogiDepressed",		click:'app.helpView()'},
		{item: "Discouraged",
				vers:[  {val:"PSalm 23", itemId: "val_29"},
						{val:"PSalm 55:22", itemId: "val_30"},
						{val:"Mat. 5:11 - 12", itemId: "val_31"},
						{val:"II Cor. 4:8 - 18", itemId: "val_32"},
						{val:"Fil. 4:4 - 7", itemId: "val_33"}
					],
				class:"emogiDiscouraged",		click:'app.helpView()'},
		{item: "Diverted",
				vers:[  {val:"PSalm 51", itemId: "val_34"},
						{val:"I John 1:4 - 9", itemId: "val_35"}
					],
				class:"emogiDiverted",		click:'app.helpView()'},
		{item: "Difficulties",
				vers:[  {val:"PSalm 16", itemId: "val_36"},
						{val:"PSalm 31", itemId: "val_37"},
						{val:"John 14:1 - 4", itemId: "val_38"},
						{val:"Heb. 7:25", itemId: "val_39"}
					],
				class:"emogiDifficulties",		click:'app.helpView()'},
		{item: "In doubt",
				vers:[  {val:"Mat. 8:26", itemId: "val_40"},
						{val:"Heb. 11", itemId: "val_41"}
					],
				class:"emogiInDoubt",		click:'app.helpView()'},
		{item: "Sick or in pain",
				vers:[  {val:"PSalm 38", itemId: "val_42"},
						{val:"Tiago 5:14 - 15", itemId: "val_43"},
						{val:"Rom. 8:28, 38 - 39", itemId: "val_44"},
						{val:"II Cor. 12:9 - 10", itemId: "val_45"}
					],
				class:"emogiSickorinPain",		click:'app.helpView()'},
		{item: "Facing Crisis",
				vers:[  {val:"PSalm 121", itemId: "val_46"},
						{val:"Mat. 6:25 - 34", itemId: "val_47"},
						{val:"Heb. 4:16", itemId: "val_48"}
					],
				class:"emogiFacingCrisis",		click:'app.helpView()'},
				
		{item: "Lack faith",
				vers:[  {val:"PSalm 42:5", itemId: "val_49"},
						{val:"Heb. 11", itemId: "val_50"}
					],
				class:"emogiLackFaith",		click:'app.helpView()'},
		{item: "Lack friends",
				vers:[  {val:"PSalm 41:9 - 13", itemId: "val_51"},
						{val:"Lucas 17:3 - 4 ", itemId: "val_52"},
						{val:"Rom. 12:14 - 17, 19 - 21", itemId: "val_53"},
						{val:"II Tim. 4:16 - 18", itemId: "val_54"}
					],
				class:"emogiLackFriends",		click:'app.helpView()'},
		{item: "Needing advice",
				vers:[  {val:"PSalm 32:8", itemId: "val_55"}
					],
				class:"emogiNeedingAdvice",		click:'app.helpView()'},
		{item: "Needing peace",
				vers:[  {val:"John 14:1 - 4", itemId: "val_56"},
						{val:"John 16:33", itemId: "val_57"},
						{val:"Rom. 5:1 - 5", itemId: "val_58"},
						{val:"Fil. 4: 6 - 7", itemId: "val_59"}
					],
				class:"emogiNeedingPeace",		click:'app.helpView()'},
		{item: "Needing protection",
				vers:[  {val:"PSalm 18:1 - 3", itemId: "val_60"},
						{val:"PSalm 34:7", itemId: "val_61"}
					],
				class:"emogiNeedingProtection",		click:'app.helpView()'},
		{item: "Needing protection of God",
				vers:[  {val:"PSalm 27:1 - 6", itemId: "val_62"},
						{val:"PSalm 91", itemId: "val_63"},
						{val:"Fil. 4:19", itemId: "val_64"}
					],
				class:"emogiRequiringProtectionOfGod",		click:'app.helpView()'},
		{item: "Needing rules for living",
				vers:[  {val:"Rom. 12", itemId: "val_65"}
					],
				class:"emogiNeedingRulesForLiving",		click:'app.helpView()'},
		{item: "Worried",
				vers:[  {val:"Mat. 6:19 - 34", itemId: "val_66"},
						{val:"I Peter 5:6 - 7", itemId: "val_67"}
					],
				class:"emogiWorried",		click:'app.helpView()'},
		{item: "Afraid",
				vers:[  {val:"PSalm 34:4", itemId: "val_68"},
						{val:"Mat. 10:28", itemId: "val_69"},
						{val:"II Tim. 1:7", itemId: "val_70"},
						{val:"Heb. 13:5 - 6", itemId: "val_71"}
					],
				class:"emogiApprehending",		click:'app.helpView()'},
		{item: "Lonely",
				vers:[  {val:"PSalm 23", itemId: "val_72"},
						{val:"Heb. 13:5 - 6", itemId: "val_73"}
					],
				class:"emogiLonely",		click:'app.helpView()'},
		{item: "Tempted",
				vers:[  {val:"PSalm 1", itemId: "val_74"},
						{val:"PSalm 139:23 - 24", itemId: "val_75"},
						{val:"Mat. 26:41", itemId: "val_76"},
						{val:"I Cor. 10:12 - 14", itemId: "val_77"},
						{val:"Fil. 4:8", itemId: "val_78"},
						{val:"Tiago 4:7", itemId: "val_79"},
						{val:"II Peter 2:9", itemId: "val_80"},
						{val:"II Peter 3:17", itemId: "val_81"}
					],
				class:"emogiTempted",		click:'app.helpView()'},
		{item: "Sad",
				vers:[  
						{val:"Mat. 5:4", itemId: "val_82"},
						{val:"II Cor. 1:3 - 4", itemId: "val_83"}
					],
				class:"emogiSad",		click:'app.helpView()'},
		{item: "Beaten",
				vers:[  {val:"PSalm 6", itemId: "val_84"},
						{val:"Rom. 8:31 - 39", itemId: "val_85"},
						{val:"I John 1:4 - 9", itemId: "val_86"}
					],
				class:"emogiBeaten",		click:'app.helpView()'},
		{item: "Traveling",
				vers:[  
						{val:"PSalm 121", itemId: "val_87"}
					],
				class:"emogiTraveling",		click:'app.helpView()'}
	]

};


var textList = {

"pt": { 

	val_01: {item: "Agradecido", vers:"Salmo 100", class:"emogiThankful", 
	itemText: 	"1. CELEBRAI com júbilo ao SENHOR, todas as terras. </br>"+
				"2. Servi ao SENHOR com alegria; e entrai diante dele com canto.</br>"+
				"3. Sabei que o SENHOR é Deus; foi ele que nos fez, e não nós a nós mesmos; somos povo seu e ovelhas do seu pasto.</br>"+
				"4. Entrai pelas portas dele com gratidão, e em seus átrios com louvor; louvai-o, e bendizei o seu nome.</br>"+
				"5. Porque o SENHOR é bom, e eterna a sua misericórdia; e a sua verdade dura de geração em geração."},

	val_02: {item: "Agradecido", vers:"I Tessalonicenses. 5:18", class:"emogiThankful", 
	itemText: "18. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco. </br>"},

	val_03: {item: "Agradecido", vers:"Hebreus. 13:15", class:"emogiThankful", 
	itemText: 	"15. Portanto, ofereçamos sempre por ele a Deus sacrifício de louvor, isto é, o fruto dos lábios que confessam o seu nome.</br>"},

	val_04: {item: "Amargurado/Crítico", vers:"I Coríntios 13", class:"emogiBitterCritic",
	itemText:	"1. AINDA que eu falasse as línguas dos homens e dos anjos, e não tivesse amor, seria como o metal que soa ou como o sino que tine.</br>"+ 
				"2. E ainda que tivesse o dom de profecia, e conhecesse todos os mistérios e toda a ciência, e ainda que tivesse toda a fé, de maneira tal que transportasse os montes, e não tivesse amor, nada seria.</br>"+
				"3. E ainda que distribuísse toda a minha fortuna para sustento dos pobres, e ainda que entregasse o meu corpo para ser queimado, e não tivesse amor, nada disso me aproveitaria.</br>"+ 
				"4. O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.</br>"+ 
				"5. Não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal;</br>"+ 
				"6. Não folga com a injustiça, mas folga com a verdade;</br>"+ 
				"7. Tudo sofre, tudo crê, tudo espera, tudo suporta.</br>"+ 
				"8. O amor nunca falha; mas havendo profecias, serão aniquiladas; havendo línguas, cessarão; havendo ciência, desaparecerá;</br>"+
				"9. Porque, em parte, conhecemos, e em parte profetizamos;</br>"+ 
				"10. Mas, quando vier o que é perfeito, então o que o é em parte será aniquilado.</br>"+
				"11. Quando eu era menino, falava como menino, sentia como menino, discorria como menino, mas, logo que cheguei a ser homem, acabei com as coisas de menino.</br>"+ 
				"12. Porque agora vemos por espelho em enigma, mas então veremos face a face; agora conheço em parte, mas então conhecerei como também sou conhecido.</br>"+ 
				"13. Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor.</br>"},

	val_05: {item: "Angustiado", vers:"Salmo 51", class:"emogiDistressed",
	itemText:	"1. TEM misericórdia de mim, ó Deus, segundo a tua benignidade; apaga as minhas transgressões, segundo a multidão das tuas misericórdias.</br>"+
				"2. Lava-me completamente da minha iniqüidade, e purifica-me do meu pecado.</br>"+ 
				"3. Porque eu conheço as minhas transgressões, e o meu pecado está sempre diante de mim.</br>"+ 
				"4. Contra ti, contra ti somente pequei, e fiz o que é mal à tua vista, para que sejas justificado quando falares, e puro quando julgares.</br>"+ 
				"5. Eis que em iniqüidade fui formado, e em pecado me concebeu minha mãe.</br>"+ 
				"6. Eis que amas a verdade no íntimo, e no oculto me fazes conhecer a sabedoria.</br>"+ 
				"7. Purifica-me com hissope, e ficarei puro; lava-me, e ficarei mais branco do que a neve.</br>"+ 
				"8. Faze-me ouvir júbilo e alegria, para que gozem os ossos que tu quebraste.</br>"+ 
				"9. Esconde a tua face dos meus pecados, e apaga todas as minhas iniqüidades.</br>"+ 
				"10. Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.</br>"+ 
				"11. Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo.</br>"+ 
				"12. Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário.</br>"+ 
				"13. Então ensinarei aos transgressores os teus caminhos, e os pecadores a ti se converterão.</br>"+ 
				"14. Livra-me dos crimes de sangue, ó Deus, Deus da minha salvação, e a minha língua louvará altamente a tua justiça.</br>"+ 
				"15. Abre, Senhor, os meus lábios, e a minha boca entoará o teu louvor.</br>"+ 
				"16. Pois não desejas sacrifícios, senão eu os daria; tu não te deleitas em holocaustos.</br>"+ 
				"17. Os sacrifícios para Deus são o espírito quebrantado; a um coração quebrantado e contrito não desprezarás, ó Deus.</br>"+ 
				"18. Faze o bem a Sião, segundo a tua boa vontade; edifica os muros de Jerusalém.</br>"+ 
				"19. Então te agradarás dos sacrifícios de justiça, dos holocaustos e das ofertas queimadas; então se oferecerão novilhos sobre o teu altar.</br>"},

	val_06: {item: "Angustiado", vers:"Mateus 5:4", class:"emogiDistressed",
	itemText:"4. Bem-aventurados os que choram, porque eles serão consolados;</br>"},

	val_07: {item: "Angustiado", vers:"João 14", class:"emogiDistressed",
	itemText:	"1. NÃO se turbe o vosso coração; credes em Deus, crede também em mim.</br>"+  
				"2. Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar.</br>"+  
				"3. E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também.</br>"+  
				"4. Mesmo vós sabeis para onde vou, e conheceis o caminho.</br>"+  
				"5. Disse-lhe Tomé: Senhor, nós não sabemos para onde vais; e como podemos saber o caminho?</br>"+  
				"6. Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.</br>"+  
				"7. Se vós me conhecêsseis a mim, também conheceríeis a meu Pai; e já desde agora o conheceis, e o tendes visto.</br>"+  
				"8. Disse-lhe Filipe: Senhor, mostra-nos o Pai, o que nos basta.</br>"+  
				"9. Disse-lhe Jesus: Estou há tanto tempo convosco, e não me tendes conhecido, Filipe? Quem me vê a mim vê o Pai; e como dizes tu: Mostra-nos o Pai?</br>"+  
				"10. Não crês tu que eu estou no Pai, e que o Pai está em mim? As palavras que eu vos digo não as digo de mim mesmo, mas o Pai, que está em mim, é quem faz as obras.</br>"+  
				"11. Crede-me que estou no Pai, e o Pai em mim; crede-me, ao menos, por causa das mesmas obras.</br>"+  
				"12. Na verdade, na verdade vos digo que aquele que crê em mim também fará as obras que eu faço, e as fará maiores do que estas, porque eu vou para meu Pai.</br>"+  
				"13. E tudo quanto pedirdes em meu nome eu o farei, para que o Pai seja glorificado no Filho.</br>"+  
				"14. Se pedirdes alguma coisa em meu nome, eu o farei.</br>"+  
				"15. Se me amais, guardai os meus mandamentos.</br>"+  
				"16. E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre;</br>"+  
				"17. O Espírito de verdade, que o mundo não pode receber, porque não o vê nem o conhece; mas vós o conheceis, porque habita convosco, e estará em vós.</br>"+  
				"18. Não vos deixarei órfãos; voltarei para vós.</br>"+  
				"19. Ainda um pouco, e o mundo não me verá mais, mas vós me vereis; porque eu vivo, e vós vivereis.</br>"+  
				"20. Naquele dia conhecereis que estou em meu Pai, e vós em mim, e eu em vós.</br>"+  
				"21. Aquele que tem os meus mandamentos e os guarda esse é o que me ama; e aquele que me ama será amado de meu Pai, e eu o amarei, e me manifestarei a ele.</br>"+  
				"22. Disse-lhe Judas (não o Iscariotes): SENHOR, de onde vem que te hás de manifestar a nós, e não ao mundo?</br>"+  
				"23. Jesus respondeu, e disse-lhe: Se alguém me ama, guardará a minha palavra, e meu Pai o amará, e viremos para ele, e faremos nele morada.</br>"+  
				"24. Quem não me ama não guarda as minhas palavras; ora, a palavra que ouvistes não é minha, mas do Pai que me enviou.</br>"+  
				"25. Tenho-vos dito isto, estando convosco.</br>"+  
				"26. Mas aquele Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse vos ensinará todas as coisas, e vos fará lembrar de tudo quanto vos tenho dito.</br>"+  
				"27. Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.</br>"+  
				"28. Ouvistes que eu vos disse: Vou, e venho para vós. Se me amásseis, certamente exultaríeis porque eu disse: Vou para o Pai; porque meu Pai é maior do que eu.</br>"+  
				"29. Eu vo-lo disse agora antes que aconteça, para que, quando acontecer, vós acrediteis.</br>"+  
				"30. Já não falarei muito convosco, porque se aproxima o príncipe deste mundo, e nada tem em mim;</br>"+  
				"31. Mas é para que o mundo saiba que eu amo o Pai, e que faço como o Pai me mandou. Levantai-vos, vamo-nos daqui.</br>"},

	val_08: {item: "Angustiado", vers:"II Coríntios 1:3 - 4", class:"emogiDistressed",
	itemText:	"3. Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias e o Deus de toda a consolação;</br>"+  
				"4. Que nos consola em toda a nossa tribulação, para que também possamos consolar os que estiverem em alguma tribulação, com a consolação com que nós mesmos somos consolados por Deus.</br>"},

	val_09: {item: "Angustiado", vers:"I Tessalonicenses 4:3 - 18", class:"emogiDistressed",
	itemText:	"3. Porque esta é a vontade de Deus, a vossa santificação; que vos abstenhais da prostituição;</br>"+ 
				"4. Que cada um de vós saiba possuir o seu vaso em santificação e honra;</br>"+ 
				"5. Não na paixão da concupiscência, como os gentios, que não conhecem a Deus.</br>"+ 
				"6. Ninguém oprima ou engane a seu irmão em negócio algum, porque o SENHOR é vingador de todas estas coisas, como também antes vo-lo dissemos e testificamos.</br>"+ 
				"7. Porque não nos chamou Deus para a imundícia, mas para a santificação.</br>"+ 
				"8. Portanto, quem despreza isto não despreza ao homem, mas sim a Deus, que nos deu também o seu Espírito Santo.</br>"+ 
				"9. Quanto, porém, ao amor fraternal, não necessitais de que vos escreva, visto que vós mesmos estais instruídos por Deus que vos ameis uns aos outros;</br>"+ 
				"10. Porque também já assim o fazeis para com todos os irmãos que estão por toda a Macedônia. Exortamo-vos, porém, a que ainda nisto aumenteis cada vez mais.</br>"+ 
				"11. E procureis viver quietos, e tratar dos vossos próprios negócios, e trabalhar com vossas próprias mãos, como já vo-lo temos mandado;</br>"+ 
				"12. Para que andeis honestamente para com os que estão de fora, e não necessiteis de coisa alguma.</br>"+ 
				"13. Não quero, porém, irmãos, que sejais ignorantes acerca dos que já dormem, para que não vos entristeçais, como os demais, que não têm esperança.</br>"+ 
				"14. Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele.</br>"+ 
				"15. Dizemo-vos, pois, isto, pela palavra do Senhor: que nós, os que ficarmos vivos para a vinda do Senhor, não precederemos os que dormem.</br>"+ 
				"16. Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro.</br>"+ 
				"17. Depois nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos sempre com o Senhor.</br>"+ 
				"18. Portanto, consolai-vos uns aos outros com estas palavras.</br>"},

	val_10: {item: "Ansioso", vers:"Salmo 46", class:"emogiAnxious",
	itemText:	"1. DEUS é o nosso refúgio e fortaleza, socorro bem presente na angústia.</br>"+  
				"2. Portanto não temeremos, ainda que a terra se mude, e ainda que os montes se transportem para o meio dos mares.</br>"+  
				"3. Ainda que as águas rujam e se perturbem, ainda que os montes se abalem pela sua braveza. (Selá.)</br>"+  
				"4. Há um rio cujas correntes alegram a cidade de Deus, o santuário das moradas do Altíssimo.</br>"+  
				"5. Deus está no meio dela; não se abalará. Deus a ajudará, já ao romper da manhã.</br>"+  
				"6. Os gentios se embraveceram; os reinos se moveram; ele levantou a sua voz e a terra se derreteu.</br>"+  
				"7. O SENHOR dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio. (Selá.)</br>"+  
				"8. Vinde, contemplai as obras do SENHOR; que desolações tem feito na terra!</br>"+  
				"9. Ele faz cessar as guerras até ao fim da terra; quebra o arco e corta a lança; queima os carros no fogo.</br>"+  
				"10. Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre os gentios; serei exaltado sobre a terra.</br>"+  
				"11. O SENHOR dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio. (Selá.)</br>"},

	val_11: {item: "Ansioso", vers:"Mateus 6:19 - 34", class:"emogiAnxious",
	itemText:	"19. Não ajunteis tesouros na terra, onde a traça e a ferrugem tudo consomem, e onde os ladrões minam e roubam;</br>"+   
				"20. Mas ajuntai tesouros no céu, onde nem a traça nem a ferrugem consomem, e onde os ladrões não minam nem roubam.</br>"+   
				"21. Porque onde estiver o vosso tesouro, aí estará também o vosso coração.</br>"+   
				"22. A candeia do corpo são os olhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz;</br>"+   
				"23. Se, porém, os teus olhos forem maus, o teu corpo será tenebroso. Se, portanto, a luz que em ti há são trevas, quão grandes serão tais trevas!</br>"+   
				"24. Ninguém pode servir a dois senhores; porque ou há de odiar um e amar o outro, ou se dedicará a um e desprezará o outro. Não podeis servir a Deus e a Mamom.</br>"+   
				"25. Por isso vos digo: Não andeis cuidadosos quanto à vossa vida, pelo que haveis de comer ou pelo que haveis de beber; nem quanto ao vosso corpo, pelo que haveis de vestir. Não é a vida mais do que o mantimento, e o corpo mais do que o vestuário?</br>"+   
				"26. Olhai para as aves do céu, que nem semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta. Não tendes vós muito mais valor do que elas?</br>"+   
				"27. E qual de vós poderá, com todos os seus cuidados, acrescentar um côvado à sua estatura?</br>"+   
				"28. E, quanto ao vestuário, por que andais solícitos? Olhai para os lírios do campo, como eles crescem; não trabalham nem fiam;</br>"+   
				"29. E eu vos digo que nem mesmo Salomão, em toda a sua glória, se vestiu como qualquer deles.</br>"+  
				"30. Pois, se Deus assim veste a erva do campo, que hoje existe, e amanhã é lançada no forno, não vos vestirá muito mais a vós, homens de pouca fé?</br>"+   
				"31. Não andeis, pois, inquietos, dizendo: Que comeremos, ou que beberemos, ou com que nos vestiremos?</br>"+   
				"32. (Porque todas estas coisas os gentios procuram). De certo vosso Pai celestial bem sabe que necessitais de todas estas coisas;</br>"+   
				"33. Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.</br>"+   
				"34. Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal.</br>"},

	val_12: {item: "Ansioso", vers:"Filipenses 4:6", class:"emogiAnxious",
	itemText:"6. Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.</br>"},

	val_13: {item: "Ansioso", vers:"I Pedro 5:6 - 7", class:"emogiAnxious",
	itemText: 	"6. Humilhai-vos, pois, debaixo da potente mão de Deus, para que a seu tempo vos exalte;</br>"+ 
				"7. Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.</br> "},

	val_14: {item: "Ausentando-se do Lar", vers:"Salmo 121", class:"emogiAbsentMemberHome",
	itemText:	"1. LEVANTAREI os meus olhos para os montes, de onde vem o meu socorro.</br>"+ 
				"2. O meu socorro vem do SENHOR que fez o céu e a terra.</br>"+ 
				"3. Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará.</br>"+ 
				"4. Eis que não tosquenejará nem dormirá o guarda de Israel.</br>"+ 
				"5. O SENHOR é quem te guarda; o SENHOR é a tua sombra à tua direita.</br>"+ 
				"6. O sol não te molestará de dia nem a lua de noite.</br>"+ 
				"7. O SENHOR te guardará de todo o mal; guardará a tua alma.</br>"+ 
				"8. O SENHOR guardará a tua entrada e a tua saída, desde agora e para sempre.</br>"},

	val_15: {item: "Ausentando-se do Lar", vers:"Mateus 10:16 - 20", class:"emogiAbsentMemberHome",
	itemText:	"16. Eis que vos envio como ovelhas ao meio de lobos; portanto, sede prudentes como as serpentes e inofensivos como as pombas.</br>"+  
				"17. Acautelai-vos, porém, dos homens; porque eles vos entregarão aos sinédrios, e vos açoitarão nas suas sinagogas;</br>"+  
				"18. E sereis até conduzidos à presença dos governadores, e dos reis, por causa de mim, para lhes servir de testemunho a eles, e aos gentios.</br>"+  
				"19. Mas, quando vos entregarem, não vos dê cuidado como, ou o que haveis de falar, porque naquela mesma hora vos será ministrado o que haveis de dizer.</br>"+  
				"20. Porque não sois vós quem falará, mas o Espírito de vosso Pai é que fala em vós.</br>"},

	val_16: {item: "Cansado", vers:"Salmo 90", class:"emogiTired",
	itemText:	"1. SENHOR, tu tens sido o nosso refúgio, de geração em geração.</br>"+ 
				"2. Antes que os montes nascessem, ou que tu formasses a terra e o mundo, mesmo de eternidade a eternidade, tu és Deus.</br>"+ 
				"3. Tu reduzes o homem à destruição; e dizes: Tornai-vos, filhos dos homens.</br>"+ 
				"4. Porque mil anos são aos teus olhos como o dia de ontem que passou, e como a vigília da noite.</br>"+ 
				"5. Tu os levas como uma corrente de água; são como um sono; de manhã são como a erva que cresce.</br>"+ 
				"6. De madrugada floresce e cresce; à tarde corta-se e seca.</br>"+ 
				"7. Pois somos consumidos pela tua ira, e pelo teu furor somos angustiados.</br>"+ 
				"8. Diante de ti puseste as nossas iniqüidades, os nossos pecados ocultos, à luz do teu rosto.</br>"+ 
				"9. Pois todos os nossos dias vão passando na tua indignação; passamos os nossos anos como um conto que se conta.</br>"+ 
				"10. Os dias da nossa vida chegam a setenta anos, e se alguns, pela sua robustez, chegam a oitenta anos, o orgulho deles é canseira e enfado, pois cedo se corta e vamos voando.</br>"+ 
				"11. Quem conhece o poder da tua ira? Segundo és tremendo, assim é o teu furor.</br>"+ 
				"12. Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.</br>"+ 
				"13. Volta-te para nós, SENHOR; até quando? Aplaca-te para com os teus servos.</br>"+ 
				"14. Farta-nos de madrugada com a tua benignidade, para que nos regozijemos, e nos alegremos todos os nossos dias.</br>"+ 
				"15. Alegra-nos pelos dias em que nos afligiste, e pelos anos em que vimos o mal.</br>"+ 
				"16. Apareça a tua obra aos teus servos, e a tua glória sobre seus filhos.</br>"+ 
				"17. E seja sobre nós a formosura do SENHOR nosso Deus, e confirma sobre nós a obra das nossas mãos; sim, confirma a obra das nossas mãos.</br>"},

	val_17: {item: "Cansado", vers:"Mateus 11:28 - 30", class:"emogiTired",
	itemText:	"28. Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.</br>"+  
				"29. Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas.</br>"+  
				"30. Porque o meu jugo é suave e o meu fardo é leve.</br>"},

	val_18: {item: "Cansado", vers:"I Coríntios 15:58", class:"emogiTired",
	itemText:"58. Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.</br>"},

	val_19: {item: "Cansado", vers:"Gálatas. 6:9 - 10", class:"emogiTired",
	itemText: 	"9. E não nos cansemos de fazer bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.</br>"+   
				"10. Então, enquanto temos tempo, façamos bem a todos, mas principalmente aos domésticos da fé.</br>"},

	val_20: {item: "Contrito", vers:"Salmo 4", class:"emogiContrite",
	itemText:	"1. OUVE-ME quando eu clamo, ó Deus da minha justiça, na angústia me deste largueza; tem misericórdia de mim e ouve a minha oração.</br>"+  
				"2. Filhos dos homens, até quando convertereis a minha glória em infâmia? Até quando amareis a vaidade e buscareis a mentira? (Selá.)</br>"+  
				"3. Sabei, pois, que o SENHOR separou para si aquele que é piedoso; o SENHOR ouvirá quando eu clamar a ele.</br>"+  
				"4. Perturbai-vos e não pequeis; falai com o vosso coração sobre a vossa cama, e calai-vos. (Selá.)</br>"+  
				"5. Oferecei sacrifícios de justiça, e confiai no SENHOR.</br>"+  
				"6. Muitos dizem: Quem nos mostrará o bem? SENHOR, exalta sobre nós a luz do teu rosto.</br>"+  
				"7. Puseste alegria no meu coração, mais do que no tempo em que se lhes multiplicaram o trigo e o vinho.</br>"+  
				"8. Em paz também me deitarei e dormirei, porque só tu, SENHOR, me fazes habitar em segurança.</br>"},

	val_21: {item: "Contrito", vers:"Salmo 42", class:"emogiContrite",
	itemText:	"1. ASSIM como o cervo brama pelas correntes das águas, assim suspira a minha alma por ti, ó Deus!</br>"+   
				"2. A minha alma tem sede de Deus, do Deus vivo; quando entrarei e me apresentarei ante a face de Deus?</br>"+   
				"3. As minhas lágrimas servem-me de mantimento de dia e de noite, enquanto me dizem constantemente: Onde está o teu Deus?</br>"+   
				"4. Quando me lembro disto, dentro de mim derramo a minha alma; pois eu havia ido com a multidão. Fui com eles à casa de Deus, com voz de alegria e louvor, com a multidão que festejava.</br>"+   
				"5. Por que estás abatida, ó minha alma, e por que te perturbas em mim? Espera em Deus, pois ainda o louvarei pela salvação da sua face.</br>"+   
				"6. Ó meu Deus, dentro de mim a minha alma está abatida; por isso lembro-me de ti desde a terra do Jordão, e desde os hermonitas, desde o pequeno monte.</br>"+   
				"7. Um abismo chama outro abismo, ao ruído das tuas catadupas; todas as tuas ondas e as tuas vagas têm passado sobre mim.</br>"+   
				"8. Contudo o SENHOR mandará a sua misericórdia de dia, e de noite a sua canção estará comigo, uma oração ao Deus da minha vida.</br>"+   
				"9. Direi a Deus, minha rocha: Por que te esqueceste de mim? Por que ando lamentando por causa da opressão do inimigo?</br>"+   
				"10. Com ferida mortal em meus ossos me afrontam os meus adversários, quando todo dia me dizem: Onde está o teu Deus?</br>"+   
				"11. Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, o qual é a salvação da minha face, e o meu Deus.</br>"},

	val_22: {item: "Contrito", vers:"Lucas 11:1 - 13", class:"emogiContrite",
	itemText:	"1. E ACONTECEU que, estando ele a orar num certo lugar, quando acabou, lhe disse um dos seus discípulos: Senhor, ensina-nos a orar, como também João ensinou aos seus discípulos.</br>"+  
				"2. E ele lhes disse: Quando orardes, dizei: Pai nosso, que estás nos céus, santificado seja o teu nome; venha o teu reino; seja feita a tua vontade, assim na terra, como no céu.</br>"+  
				"3. Dá-nos cada dia o nosso pão cotidiano;</br>"+  
				"4. E perdoa-nos os nossos pecados, pois também nós perdoamos a qualquer que nos deve, e não nos conduzas em tentação, mas livra-nos do mal.</br>"+  
				"5. Disse-lhes também: Qual de vós terá um amigo, e, se for procurá-lo à meia-noite, e lhe disser: Amigo, empresta-me três pães,</br>"+  
				"6. Pois que um amigo meu chegou a minha casa, vindo de caminho, e não tenho que apresentar-lhe;</br>"+  
				"7. Se ele, respondendo de dentro, disser: Não me importunes; já está a porta fechada, e os meus filhos estão comigo na cama; não posso levantar-me para tos dar;</br>"+  
				"8. Digo-vos que, ainda que não se levante a dar-lhos, por ser seu amigo, levantar-se-á, todavia, por causa da sua importunação, e lhe dará tudo o que houver mister.</br>"+  
				"9. E eu vos digo a vós: Pedi, e dar-se-vos-á; buscai, e achareis; batei, e abrir-se-vos-á;</br>"+  
				"10. Porque qualquer que pede recebe; e quem busca acha; e a quem bate abrir-se-lhe-á.</br>"+  
				"11. E qual o pai de entre vós que, se o filho lhe pedir pão, lhe dará uma pedra? Ou, também, se lhe pedir peixe, lhe dará por peixe uma serpente?</br>"+  
				"12. Ou, também, se lhe pedir um ovo, lhe dará um escorpião?</br>"+  
				"13. Pois se vós, sendo maus, sabeis dar boas dádivas aos vossos filhos, quanto mais dará o Pai celestial o Espírito Santo àqueles que lho pedirem?</br>"},

	val_23: {item: "Contrito", vers:"João 17", class:"emogiContrite",
	itemText:	"1. JESUS falou assim e, levantando seus olhos ao céu, disse: Pai, é chegada a hora; glorifica a teu Filho, para que também o teu Filho te glorifique a ti;</br>"+  
				"2. Assim como lhe deste poder sobre toda a carne, para que dê a vida eterna a todos quantos lhe deste.</br>"+  
				"3. E a vida eterna é esta: que te conheçam, a ti só, por único Deus verdadeiro, e a Jesus Cristo, a quem enviaste.</br>"+  
				"4. Eu glorifiquei-te na terra, tendo consumado a obra que me deste a fazer.</br>"+  
				"5. E agora glorifica-me tu, ó Pai, junto de ti mesmo, com aquela glória que tinha contigo antes que o mundo existisse.</br>"+  
				"6. Manifestei o teu nome aos homens que do mundo me deste; eram teus, e tu mos deste, e guardaram a tua palavra.</br>"+  
				"7. Agora já têm conhecido que tudo quanto me deste provém de ti;</br>"+  
				"8. Porque lhes dei as palavras que tu me deste; e eles as receberam, e têm verdadeiramente conhecido que saí de ti, e creram que me enviaste.</br>"+  
				"9. Eu rogo por eles; não rogo pelo mundo, mas por aqueles que me deste, porque são teus.</br>"+  
				"10. E todas as minhas coisas são tuas, e as tuas coisas são minhas; e nisso sou glorificado.</br>"+  
				"11. E eu já não estou mais no mundo, mas eles estão no mundo, e eu vou para ti. Pai santo, guarda em teu nome aqueles que me deste, para que sejam um, assim como nós.</br>"+  
				"12. Estando eu com eles no mundo, guardava-os em teu nome. Tenho guardado aqueles que tu me deste, e nenhum deles se perdeu, senão o filho da perdição, para que a Escritura se cumprisse.</br>"+  
				"13. Mas agora vou para ti, e digo isto no mundo, para que tenham a minha alegria completa em si mesmos.</br>"+  
				"14. Dei-lhes a tua palavra, e o mundo os odiou, porque não são do mundo, assim como eu não sou do mundo.</br>"+  
				"15. Não peço que os tires do mundo, mas que os livres do mal.</br>"+  
				"16. Não são do mundo, como eu do mundo não sou.</br>"+  
				"17. Santifica-os na tua verdade; a tua palavra é a verdade.</br>"+  
				"18. Assim como tu me enviaste ao mundo, também eu os enviei ao mundo.</br>"+  
				"19. E por eles me santifico a mim mesmo, para que também eles sejam santificados na verdade.</br>"+  
				"20. E não rogo somente por estes, mas também por aqueles que pela sua palavra hão de crer em mim;</br>"+  
				"21. Para que todos sejam um, como tu, ó Pai, o és em mim, e eu em ti; que também eles sejam um em nós, para que o mundo creia que tu me enviaste.</br>"+  
				"22. E eu dei-lhes a glória que a mim me deste, para que sejam um, como nós somos um.</br>"+  
				"23. Eu neles, e tu em mim, para que eles sejam perfeitos em unidade, e para que o mundo conheça que tu me enviaste a mim, e que os tens amado a eles como me tens amado a mim.</br>"+  
				"24. Pai, aqueles que me deste quero que, onde eu estiver, também eles estejam comigo, para que vejam a minha glória que me deste; porque tu me amaste antes da fundação do mundo.</br>"+  
				"25. Pai justo, o mundo não te conheceu; mas eu te conheci, e estes conheceram que tu me enviaste a mim.</br>"+  
				"26. E eu lhes fiz conhecer o teu nome, e lho farei conhecer mais, para que o amor com que me tens amado esteja neles, e eu neles esteja.</br>"},

	val_24: {item: "Contrito", vers:"I João 5:14 - 15", class:"emogiContrite",
	itemText: 	"14. Depois Jesus encontrou-o no templo, e disse-lhe: Eis que já estás são; não peques mais, para que não te suceda alguma coisa pior.</br>"+ 
				"15. E aquele homem foi, e anunciou aos judeus que Jesus era o que o curara.</br>"},

	val_25: {item: "Deprimido", vers:"Salmo 34", class:"emogiDepressed",
	itemText:	"1. LOUVAREI ao SENHOR em todo o tempo; o seu louvor estará continuamente na minha boca.</br>"+ 
				"2. A minha alma se gloriará no SENHOR; os mansos o ouvirão e se alegrarão.</br>"+ 
				"3. Engrandecei ao SENHOR comigo; e juntos exaltemos o seu nome.</br>"+ 
				"4. Busquei ao SENHOR, e ele me respondeu; livrou-me de todos os meus temores.</br>"+ 
				"5. Olharam para ele, e foram iluminados; e os seus rostos não ficaram confundidos.</br>"+ 
				"6. Clamou este pobre, e o SENHOR o ouviu, e o salvou de todas as suas angústias.</br>"+ 
				"7. O anjo do SENHOR acampa-se ao redor dos que o temem, e os livra.</br>"+ 
				"8. Provai, e vede que o SENHOR é bom; bem-aventurado o homem que nele confia.</br>"+ 
				"9. Temei ao SENHOR, vós, os seus santos, pois nada falta aos que o temem.</br>"+ 
				"10. Os filhos dos leões necessitam e sofrem fome, mas àqueles que buscam ao SENHOR bem nenhum faltará.</br>"+ 
				"11. Vinde, meninos, ouvi-me; eu vos ensinarei o temor do SENHOR.</br>"+ 
				"12. Quem é o homem que deseja a vida, que quer largos dias para ver o bem?</br>"+ 
				"13. Guarda a tua língua do mal, e os teus lábios de falarem o engano.</br>"+ 
				"14. Aparta-te do mal, e faze o bem; procura a paz, e segue-a.</br>"+ 
				"15. Os olhos do SENHOR estão sobre os justos, e os seus ouvidos atentos ao seu clamor.</br>"+ 
				"16. A face do SENHOR está contra os que fazem o mal, para desarraigar da terra a memória deles.</br>"+ 
				"17. Os justos clamam, e o SENHOR os ouve, e os livra de todas as suas angústias.</br>"+ 
				"18. Perto está o SENHOR dos que têm o coração quebrantado, e salva os contritos de espírito.</br>"+ 
				"19. Muitas são as aflições do justo, mas o SENHOR o livra de todas.</br>"+ 
				"20. Ele lhe guarda todos os seus ossos; nem sequer um deles se quebra.</br>"+ 
				"21. A malícia matará o ímpio, e os que odeiam o justo serão punidos.</br>"+ 
				"22. O SENHOR resgata a alma dos seus servos, e nenhum dos que nele confiam será punido.</br>"},

	val_26: {item: "Deprimido", vers:"Salmo 91", class:"emogiDepressed",
	itemText:	"1. AQUELE que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.</br>"+ 
				"2. Direi do SENHOR: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.</br>"+ 
				"3. Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.</br>"+ 
				"4. Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.</br>"+ 
				"5. Não terás medo do terror de noite nem da seta que voa de dia,</br>"+ 
				"6. Nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.</br>"+ 
				"7. Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.</br>"+ 
				"8. Somente com os teus olhos contemplarás, e verás a recompensa dos ímpios.</br>"+ 
				"9. Porque tu, ó SENHOR, és o meu refúgio. No Altíssimo fizeste a tua habitação.</br>"+ 
				"10. Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.</br>"+ 
				"11. Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.</br>"+ 
				"12. Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra.</br>"+ 
				"13. Pisarás o leão e a cobra; calcarás aos pés o filho do leão e a serpente.</br>"+ 
				"14. Porquanto tão encarecidamente me amou, também eu o livrarei; pô-lo-ei em retiro alto, porque conheceu o meu nome.</br>"+ 
				"15. Ele me invocará, e eu lhe responderei; estarei com ele na angústia; dela o retirarei, e o glorificarei.</br>"+ 
				"16. Fartá-lo-ei com longura de dias, e lhe mostrarei a minha salvação.</br>"},

	val_27: {item: "Deprimido", vers:"Salmo 118:5 - 6", class:"emogiDepressed",
	itemText: 	"5. Invoquei o SENHOR na angústia; o SENHOR me ouviu, e me tirou para um lugar largo.</br>"+  
				"6. O SENHOR está comigo; não temerei o que me pode fazer o homem."},

	val_28: {item: "Deprimido", vers:"Lucas 8:22 - 25", class:"emogiDepressed",
	itemText: 	"22. E aconteceu que, num daqueles dias, entrou num barco com seus discípulos, e disse-lhes: Passemos para o outro lado do lago. E partiram.</br>"+ 
				"23. E, navegando eles, adormeceu; e sobreveio uma tempestade de vento no lago, e enchiam-se de água, estando em perigo.</br>"+ 
				"24. E, chegando-se a ele, o despertaram, dizendo: Mestre, Mestre, perecemos. E ele, levantando-se, repreendeu o vento e a fúria da água; e cessaram, e fez-se bonança.</br>"+ 
				"25. E disse-lhes: Onde está a vossa fé? E eles, temendo, maravilharam-se, dizendo uns aos outros: Quem é este, que até aos ventos e à água manda, e lhe obedecem?</br>"},

	val_29: {item: "Desencorajado", vers:"Salmo 23", class:"emogiDiscouraged",
	itemText: 	"1. O SENHOR é o meu pastor, nada me faltará.</br>"+ 
				"2. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas.</br>"+ 
				"3. Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.</br>"+ 
				"4. Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.</br>"+ 
				"5. Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.</br>"+ 
				"6. Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do SENHOR por longos dias.</br>"},

	val_30: {item: "Desencorajado", vers:"Salmo 55:22", class:"emogiDiscouraged",
	itemText: 	"22. Lança o teu cuidado sobre o SENHOR, e ele te susterá; não permitirá jamais que o justo seja abalado.</br>"},

	val_31: {item: "Desencorajado", vers:"Mateus 5:11 - 12", class:"emogiDiscouraged",
	itemText: 	"11. Bem-aventurados sois vós, quando vos injuriarem e perseguirem e, mentindo, disserem todo o mal contra vós por minha causa.</br>"+  
				"12. Exultai e alegrai-vos, porque é grande o vosso galardão nos céus; porque assim perseguiram os profetas que foram antes de vós.</br>"},

	val_32: {item: "Desencorajado", vers:"II Coríntios 4:8 - 18", class:"emogiDiscouraged",
	itemText:	"8. Em tudo somos atribulados, mas não angustiados; perplexos, mas não desanimados.</br>"+ 
				"9. Perseguidos, mas não desamparados; abatidos, mas não destruídos;</br>"+ 
				"10. Trazendo sempre por toda a parte a mortificação do Senhor Jesus no nosso corpo, para que a vida de Jesus se manifeste também nos nossos corpos;</br>"+ 
				"11. E assim nós, que vivemos, estamos sempre entregues à morte por amor de Jesus, para que a vida de Jesus se manifeste também na nossa carne mortal.</br>"+ 
				"12. De maneira que em nós opera a morte, mas em vós a vida.</br>"+ 
				"13. E temos, portanto, o mesmo espírito de fé, como está escrito: Cri, por isso falei; nós cremos também, por isso também falamos.</br>"+ 
				"14. Sabendo que o que ressuscitou o Senhor Jesus nos ressuscitará também por Jesus, e nos apresentará convosco.</br>"+ 
				"15. Porque tudo isto é por amor de vós, para que a graça, multiplicada por meio de muitos, faça abundar a ação de graças para glória de Deus.</br>"+ 
				"16. Por isso não desfalecemos; mas, ainda que o nosso homem exterior se corrompa, o interior, contudo, se renova de dia em dia.</br>"+ 
				"17. Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória mui excelente;</br>"+ 
				"18. Não atentando nós nas coisas que se vêem, mas nas que se não vêem; porque as que se vêem são temporais, e as que se não vêem são eternas.</br>"},

	val_33: {item: "Desencorajado", vers:"Filipenses 4:4 - 7", class:"emogiDiscouraged",
	itemText:	"4. Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.</br>"+  
				"5. Seja a vossa eqüidade notória a todos os homens. Perto está o SENHOR.</br>"+  
				"6. Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.</br>"+  
				"7. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.</br>"},

	val_34: {item: "Desviado", vers:"Salmo 51", class:"emogiDiverted",
	itemText:	"1. TEM misericórdia de mim, ó Deus, segundo a tua benignidade; apaga as minhas transgressões, segundo a multidão das tuas misericórdias.</br>"+  
				"2. Lava-me completamente da minha iniqüidade, e purifica-me do meu pecado.</br>"+  
				"3. Porque eu conheço as minhas transgressões, e o meu pecado está sempre diante de mim.</br>"+  
				"4. Contra ti, contra ti somente pequei, e fiz o que é mal à tua vista, para que sejas justificado quando falares, e puro quando julgares.</br>"+  
				"5. Eis que em iniqüidade fui formado, e em pecado me concebeu minha mãe.</br>"+  
				"6. Eis que amas a verdade no íntimo, e no oculto me fazes conhecer a sabedoria.</br>"+  
				"7. Purifica-me com hissope, e ficarei puro; lava-me, e ficarei mais branco do que a neve.</br>"+  
				"8. Faze-me ouvir júbilo e alegria, para que gozem os ossos que tu quebraste.</br>"+  
				"9. Esconde a tua face dos meus pecados, e apaga todas as minhas iniqüidades.</br>"+  
				"10. Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.</br>"+  
				"11. Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo. </br>"+ 
				"12. Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário. </br>"+ 
				"13. Então ensinarei aos transgressores os teus caminhos, e os pecadores a ti se converterão.</br>"+  
				"14. Livra-me dos crimes de sangue, ó Deus, Deus da minha salvação, e a minha língua louvará altamente a tua justiça.</br>"+  
				"15. Abre, Senhor, os meus lábios, e a minha boca entoará o teu louvor.</br>"+  
				"16. Pois não desejas sacrifícios, senão eu os daria; tu não te deleitas em holocaustos.</br>"+  
				"17. Os sacrifícios para Deus são o espírito quebrantado; a um coração quebrantado e contrito não desprezarás, ó Deus.</br>"+  
				"18. Faze o bem a Sião, segundo a tua boa vontade; edifica os muros de Jerusalém.</br>"+  
				"19. Então te agradarás dos sacrifícios de justiça, dos holocaustos e das ofertas queimadas; então se oferecerão novilhos sobre o teu altar.</br>"},

	val_35: {item: "Desviado", vers:"I João 1:4 - 9", class:"emogiDiverted",
	itemText:	"4. Estas coisas vos escrevemos, para que o vosso gozo se cumpra.</br>"+ 
				"5. E esta é a mensagem que dele ouvimos, e vos anunciamos: que Deus é luz, e não há nele trevas nenhumas.</br>"+ 
				"6. Se dissermos que temos comunhão com ele, e andarmos em trevas, mentimos, e não praticamos a verdade.</br>"+ 
				"7. Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.</br>"+ 
				"8. Se dissermos que não temos pecado, enganamo-nos a nós mesmos, e não há verdade em nós.</br>"+ 
				"9. Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.</br>"},

	val_36: {item: "Em Dificuldades", vers:"Salmo 16", class:"emogiDifficulties",
	itemText:	"1. GUARDA-ME, ó Deus, porque em ti confio.</br>"+  
				"2. A minha alma disse ao SENHOR: Tu és o meu Senhor, a minha bondade não chega à tua presença,</br>"+  
				"3. Mas aos santos que estão na terra, e aos ilustres em quem está todo o meu prazer.</br>"+  
				"4. As dores se multiplicarão àqueles que fazem oferendas a outro deus; eu não oferecerei as suas libações de sangue, nem tomarei os seus nomes nos meus lábios.</br>"+  
				"5. O SENHOR é a porção da minha herança e do meu cálice; tu sustentas a minha sorte.</br>"+  
				"6. As linhas caem-me em lugares deliciosos: sim, coube-me uma formosa herança.</br>"+  
				"7. Louvarei ao SENHOR que me aconselhou; até os meus rins me ensinam de noite.</br>"+  
				"8. Tenho posto o SENHOR continuamente diante de mim; por isso que ele está à minha mão direita, nunca vacilarei.</br>"+  
				"9. Portanto está alegre o meu coração e se regozija a minha glória; também a minha carne repousará segura.</br>"+  
				"10. Pois não deixarás a minha alma no inferno, nem permitirás que o teu Santo veja corrupção.</br>"+  
				"11. Far-me-ás ver a vereda da vida; na tua presença há fartura de alegrias; à tua mão direita há delícias perpetuamente.</br>"},

	val_37: {item: "Em Dificuldades", vers:"Salmo 31", class:"emogiDifficulties",
	itemText:	"1. EM ti, SENHOR, confio; nunca me deixes confundido. Livra-me pela tua justiça.</br>"+  
				"2. Inclina para mim os teus ouvidos, livra-me depressa; sê a minha firme rocha, uma casa fortíssima que me salve.</br>"+  
				"3. Porque tu és a minha rocha e a minha fortaleza; assim, por amor do teu nome, guia-me e encaminha-me.</br>"+  
				"4. Tira-me da rede que para mim esconderam, pois tu és a minha força.</br>"+  
				"5. Nas tuas mãos encomendo o meu espírito; tu me redimiste, SENHOR Deus da verdade.</br>"+  
				"6. Odeio aqueles que se entregam a vaidades enganosas; eu, porém, confio no SENHOR.</br>"+  
				"7. Eu me alegrarei e regozijarei na tua benignidade, pois consideraste a minha aflição; conheceste a minha alma nas angústias.</br>"+  
				"8. E não me entregaste nas mãos do inimigo; puseste os meus pés num lugar espaçoso.</br>"+  
				"9. Tem misericórdia de mim, ó SENHOR, porque estou angustiado. Consumidos estão de tristeza os meus olhos, a minha alma e o meu ventre.</br>"+  
				"10. Porque a minha vida está gasta de tristeza, e os meus anos de suspiros; a minha força descai por causa da minha iniqüidade, e os meus ossos se consomem.</br>"+  
				"11. Fui opróbrio entre todos os meus inimigos, até entre os meus vizinhos, e horror para os meus conhecidos; os que me viam na rua fugiam de mim.</br>"+  
				"12. Estou esquecido no coração deles, como um morto; sou como um vaso quebrado.</br>"+  
				"13. Pois ouvi a murmuração de muitos, temor havia ao redor; enquanto juntamente consultavam contra mim, intentaram tirar-me a vida.</br>"+  
				"14. Mas eu confiei em ti, SENHOR; e disse: Tu és o meu Deus.</br>"+  
				"15. Os meus tempos estão nas tuas mãos; livra-me das mãos dos meus inimigos e dos que me perseguem.</br>"+  
				"16. Faze resplandecer o teu rosto sobre o teu servo; salva-me por tuas misericórdias.</br>"+  
				"17. Não me deixes confundido, SENHOR, porque te tenho invocado. Deixa confundidos os ímpios, e emudeçam na sepultura.</br>"+  
				"18. Emudeçam os lábios mentirosos que falam coisas más com soberba e desprezo contra o justo.</br>"+  
				"19. Oh! quão grande é a tua bondade, que guardaste para os que te temem, a qual operaste para aqueles que em ti confiam na presença dos filhos dos homens!</br>"+  
				"20. Tu os esconderás, no secreto da tua presença, dos desaforos dos homens; encobri-los-ás em um pavilhão, da contenda das línguas.</br>"+  
				"21. Bendito seja o SENHOR, pois fez maravilhosa a sua misericórdia para comigo em cidade segura.</br>"+  
				"22. Pois eu dizia na minha pressa: Estou cortado de diante dos teus olhos; não obstante, tu ouviste a voz das minhas súplicas, quando eu a ti clamei.</br>"+  
				"23. Amai ao SENHOR, vós todos que sois seus santos; porque o SENHOR guarda os fiéis e retribui com abundância ao que usa de soberba.</br>"+  
				"24. Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no SENHOR.</br>"},

	val_38: {item: "Em Dificuldades", vers:"João 14:1 - 4", class:"emogiDifficulties",
	itemText:	"1. NÃO se turbe o vosso coração; credes em Deus, crede também em mim.</br>"+ 
				"2. Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar.</br>"+ 
				"3. E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também.</br>"+ 
				"4. Mesmo vós sabeis para onde vou, e conheceis o caminho.</br>"},

	val_39: {item: "Em Dificuldades", vers:"Hebreus 7:25", class:"emogiDifficulties",
	itemText: 	"25. Portanto, pode também salvar perfeitamente os que por ele se chegam a Deus, vivendo sempre para interceder por eles.</br>"},

	val_40: {item: "Em Dúvida", vers:"Mateus 8:26", 
	itemText: 	"26. E ele disse-lhes: Por que temeis, homens de pouca fé? Então, levantando-se, repreendeu os ventos e o mar, e seguiu-se uma grande bonança.</br>"},

	val_41: {item: "Em Dúvida", vers:"Hebreus 11", class:"emogiInDoubt",
	itemText:	"1. ORA, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não vêem.</br>"+  
				"2. Porque por ela os antigos alcançaram testemunho.</br>"+  
				"3. Pela fé entendemos que os mundos pela palavra de Deus foram criados; de maneira que aquilo que se vê não foi feito do que é aparente.</br>"+  
				"4. Pela fé Abel ofereceu a Deus maior sacrifício do que Caim, pelo qual alcançou testemunho de que era justo, dando Deus testemunho dos seus dons, e por ela, depois de morto, ainda fala.</br>"+  
				"5. Pela fé Enoque foi trasladado para não ver a morte, e não foi achado, porque Deus o trasladara; visto como antes da sua trasladação alcançou testemunho de que agradara a Deus.</br>"+  
				"6. Ora, sem fé é impossível agradar-lhe; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam.</br>"+  
				"7. Pela fé Noé, divinamente avisado das coisas que ainda não se viam, temeu e, para salvação da sua família, preparou a arca, pela qual condenou o mundo, e foi feito herdeiro da justiça que é segundo a fé.</br>"+  
				"8. Pela fé Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança; e saiu, sem saber para onde ia.</br>"+  
				"9. Pela fé habitou na terra da promessa, como em terra alheia, morando em cabanas com Isaque e Jacó, herdeiros com ele da mesma promessa.</br>"+  
				"10. Porque esperava a cidade que tem fundamentos, da qual o artífice e construtor é Deus.</br>"+  
				"11. Pela fé também a mesma Sara recebeu a virtude de conceber, e deu à luz já fora da idade; porquanto teve por fiel aquele que lho tinha prometido.</br>"+  
				"12. Por isso também de um, e esse já amortecido, descenderam tantos, em multidão, como as estrelas do céu, e como a areia inumerável que está na praia do mar.</br>"+  
				"13. Todos estes morreram na fé, sem terem recebido as promessas; mas vendo-as de longe, e crendo-as e abraçando-as, confessaram que eram estrangeiros e peregrinos na terra.</br>"+  
				"14. Porque, os que isto dizem, claramente mostram que buscam uma pátria.</br>"+  
				"15. E se, na verdade, se lembrassem daquela de onde haviam saído, teriam oportunidade de tornar.</br>"+  
				"16. Mas agora desejam uma melhor, isto é, a celestial. Por isso também Deus não se envergonha deles, de se chamar seu Deus, porque já lhes preparou uma cidade.</br>"+  
				"17. Pela fé ofereceu Abraão a Isaque, quando foi provado; sim, aquele que recebera as promessas ofereceu o seu unigênito.</br>"+  
				"18. Sendo-lhe dito: Em Isaque será chamada a tua descendência, considerou que Deus era poderoso para até dentre os mortos o ressuscitar;</br>"+  
				"19. E daí também em figura ele o recobrou.</br>"+  
				"20. Pela fé Isaque abençoou Jacó e Esaú, no tocante às coisas futuras.</br>"+  
				"21. Pela fé Jacó, próximo da morte, abençoou cada um dos filhos de José, e adorou encostado à ponta do seu bordão.</br>"+  
				"22. Pela fé José, próximo da morte, fez menção da saída dos filhos de Israel, e deu ordem acerca de seus ossos.</br>"+  
				"23. Pela fé Moisés, já nascido, foi escondido três meses por seus pais, porque viram que era um menino formoso; e não temeram o mandamento do rei.</br>"+  
				"24. Pela fé Moisés, sendo já grande, recusou ser chamado filho da filha de Faraó,</br>"+  
				"25. Escolhendo antes ser maltratado com o povo de Deus, do que por um pouco de tempo ter o gozo do pecado;</br>"+  
				"26. Tendo por maiores riquezas o vitupério de Cristo do que os tesouros do Egito; porque tinha em vista a recompensa.</br>"+  
				"27. Pela fé deixou o Egito, não temendo a ira do rei; porque ficou firme, como vendo o invisível.</br>"+  
				"28. Pela fé celebrou a páscoa e a aspersão do sangue, para que o destruidor dos primogênitos lhes não tocasse.</br>"+  
				"29. Pela fé passaram o Mar Vermelho, como por terra seca; o que intentando os egípcios, se afogaram.</br>"+  
				"30. Pela fé caíram os muros de Jericó, sendo rodeados durante sete dias.</br>"+  
				"31. Pela fé Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias.</br>"+  
				"32. E que mais direi? Faltar-me-ia o tempo contando de Gideão, e de Baraque, e de Sansão, e de Jefté, e de Davi, e de Samuel e dos profetas,</br>"+  
				"33. Os quais pela fé venceram reinos, praticaram a justiça, alcançaram promessas, fecharam as bocas dos leões,</br>"+  
				"34. Apagaram a força do fogo, escaparam do fio da espada, da fraqueza tiraram forças, na batalha se esforçaram, puseram em fuga os exércitos dos estranhos.</br>"+  
				"35. As mulheres receberam pela ressurreição os seus mortos; uns foram torturados, não aceitando o seu livramento, para alcançarem uma melhor ressurreição;</br>"+  
				"36. E outros experimentaram escárnios e açoites, e até cadeias e prisões.</br>"+  
				"37. Foram apedrejados, serrados, tentados, mortos ao fio da espada; andaram vestidos de peles de ovelhas e de cabras, desamparados, aflitos e maltratados</br>"+  
				"38. (Dos quais o mundo não era digno), errantes pelos desertos, e montes, e pelas covas e cavernas da terra.</br>"+  
				"39. E todos estes, tendo tido testemunho pela fé, não alcançaram a promessa,</br>"+  
				"40. Provendo Deus alguma coisa melhor a nosso respeito, para que eles sem nós não fossem aperfeiçoados.</br>"},

	val_42: {item: "Enfermo ou na Dor", vers:"Salmo 38", class:"emogiSickorinPain",
	itemText:	"1. Ó SENHOR, não me repreendas na tua ira, nem me castigues no teu furor.</br>"+ 
				"2. Porque as tuas flechas se cravaram em mim, e a tua mão sobre mim desceu.</br>"+ 
				"3. Não há coisa sã na minha carne, por causa da tua cólera; nem há paz em meus ossos, por causa do meu pecado.</br>"+ 
				"4. Pois já as minhas iniqüidades sobrepassam a minha cabeça; como carga pesada são demais para as minhas forças.</br>"+ 
				"5. As minhas chagas cheiram mal e estão corruptas, por causa da minha loucura.</br>"+ 
				"6. Estou encurvado, estou muito abatido, ando lamentando todo o dia.</br>"+ 
				"7. Porque as minhas ilhargas estão cheias de ardor, e não há coisa sã na minha carne.</br>"+ 
				"8. Estou fraco e mui quebrantado; tenho rugido pela inquietação do meu coração.</br>"+ 
				"9. Senhor, diante de ti está todo o meu desejo, e o meu gemido não te é oculto.</br>"+  
				"10. O meu coração dá voltas, a minha força me falta; quanto à luz dos meus olhos, ela me deixou.</br>"+ 
				"11. Os meus amigos e os meus companheiros estão ao longe da minha chaga; e os meus parentes se põem à distância.</br>"+  
				"12. Também os que buscam a minha vida me armam laços e os que procuram o meu mal falam coisas que danificam, e imaginam astúcias todo o dia.</br>"+  
				"13. Mas eu, como surdo, não ouvia, e era como mudo, que não abre a boca.</br>"+ 
				"14. Assim eu sou como homem que não ouve, e em cuja boca não há reprovação.</br>"+ 
				"15. Porque em ti, SENHOR, espero; tu, Senhor meu Deus, me ouvirás.</br>"+ 
				"16. Porque dizia eu: Ouve-me, para que não se alegrem de mim. Quando escorrega o meu pé, eles se engrandecem contra mim.</br>"+  
				"17. Porque estou prestes a coxear; a minha dor está constantemente perante mim.</br>"+ 
				"18. Porque eu declararei a minha iniqüidade; afligir-me-ei por causa do meu pecado.</br>"+ 
				"19. Mas os meus inimigos estão vivos e são fortes, e os que sem causa me odeiam se multiplicam.</br>"+ 
				"20. Os que dão mal pelo bem são meus adversários, porquanto eu sigo o que é bom.</br>"+  
				"21. Não me desampares, SENHOR, meu Deus, não te alongues de mim.</br>"+  
				"22. Apressa-te em meu auxílio, Senhor, minha salvação.</br>"},

	val_43: {item: "Enfermo ou na Dor", vers:"Tiago 5:14 - 15", class:"emogiSickorinPain",
	itemText: 	"14. Está alguém entre vós doente? Chame os presbíteros da igreja, e orem sobre ele, ungindo-o com azeite em nome do Senhor;</br>"+   
				"15. E a oração da fé salvará o doente, e o Senhor o levantará; e, se houver cometido pecados, ser-lhe-ão perdoados.</br>"},

	val_44: {item: "Enfermo ou na Dor", vers:"Romanos 8:28, 38 - 39", class:"emogiSickorinPain",
	itemText:	"28. E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.</br>"+  
				"38. Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,</br>"+  
				"39. Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.</br>" },

	val_45: {item: "Enfermo ou na Dor", vers:"II Coríntios 12:9 - 10", class:"emogiSickorinPain",
	itemText:	"9. E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.</br>"+  
				"10. Por isso sinto prazer nas fraquezas, nas injúrias, nas necessidades, nas perseguições, nas angústias por amor de Cristo. Porque quando estou fraco então sou forte.</br>"},

	val_46: {item: "Enfrentando Crise", vers:"Salmo 121", class:"emogiFacingCrisis",
	itemText:	"1. LEVANTAREI os meus olhos para os montes, de onde vem o meu socorro.</br>"+
				"2. O meu socorro vem do SENHOR que fez o céu e a terra.</br>"+ 
				"3. Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará.</br>"+ 
				"4. Eis que não tosquenejará nem dormirá o guarda de Israel.</br>"+ 
				"5. O SENHOR é quem te guarda; o SENHOR é a tua sombra à tua direita.</br>"+ 
				"6. O sol não te molestará de dia nem a lua de noite.</br>"+ 
				"7. O SENHOR te guardará de todo o mal; guardará a tua alma.</br>"+ 
				"8. O SENHOR guardará a tua entrada e a tua saída, desde agora e para sempre. </br>"},

	val_47: {item: "Enfrentando Crise", vers:"Mateus 6:25 - 34", class:"emogiFacingCrisis",
	itemText:	"25. Por isso vos digo: Não andeis cuidadosos quanto à vossa vida, pelo que haveis de comer ou pelo que haveis de beber; nem quanto ao vosso corpo, pelo que haveis de vestir. Não é a vida mais do que o mantimento, e o corpo mais do que o vestuário?</br>"+ 
				"26. Olhai para as aves do céu, que nem semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta. Não tendes vós muito mais valor do que elas?</br>"+ 
				"27. E qual de vós poderá, com todos os seus cuidados, acrescentar um côvado à sua estatura?</br>"+ 
				"28. E, quanto ao vestuário, por que andais solícitos? Olhai para os lírios do campo, como eles crescem; não trabalham nem fiam;</br>"+ 
				"29. E eu vos digo que nem mesmo Salomão, em toda a sua glória, se vestiu como qualquer deles.</br>"+
				"30. Pois, se Deus assim veste a erva do campo, que hoje existe, e amanhã é lançada no forno, não vos vestirá muito mais a vós, homens de pouca fé?</br>"+ 
				"31. Não andeis, pois, inquietos, dizendo: Que comeremos, ou que beberemos, ou com que nos vestiremos?</br>"+ 
				"32. (Porque todas estas coisas os gentios procuram). De certo vosso Pai celestial bem sabe que necessitais de todas estas coisas;</br>"+ 
				"33. Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.</br>"+ 
				"34. Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal.</br>"},

	val_48: {item: "Enfrentando Crise", vers:"Hebreus 4:16", class:"emogiFacingCrisis",
	itemText: 	"16. Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno.</br>"},

	val_49: {item: "Falta a Fé", vers:"Salmo 42:5", class:"emogiLackFaith",
	itemText: 	"5. Por que estás abatida, ó minha alma, e por que te perturbas em mim? Espera em Deus, pois ainda o louvarei pela salvação da sua face.</br>"},

	val_50: {item: "Falta a Fé", vers:"Hebreus 11", class:"emogiLackFaith",
	itemText:	"1. ORA, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não vêem.</br>"+  
				"2. Porque por ela os antigos alcançaram testemunho.</br>"+  
				"3. Pela fé entendemos que os mundos pela palavra de Deus foram criados; de maneira que aquilo que se vê não foi feito do que é aparente.</br>"+  
				"4. Pela fé Abel ofereceu a Deus maior sacrifício do que Caim, pelo qual alcançou testemunho de que era justo, dando Deus testemunho dos seus dons, e por ela, depois de morto, ainda fala.</br>"+  
				"5. Pela fé Enoque foi trasladado para não ver a morte, e não foi achado, porque Deus o trasladara; visto como antes da sua trasladação alcançou testemunho de que agradara a Deus.</br>"+  
				"6. Ora, sem fé é impossível agradar-lhe; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam.</br>"+  
				"7. Pela fé Noé, divinamente avisado das coisas que ainda não se viam, temeu e, para salvação da sua família, preparou a arca, pela qual condenou o mundo, e foi feito herdeiro da justiça que é segundo a fé.</br>"+  
				"8. Pela fé Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança; e saiu, sem saber para onde ia.</br>"+  
				"9. Pela fé habitou na terra da promessa, como em terra alheia, morando em cabanas com Isaque e Jacó, herdeiros com ele da mesma promessa.</br>"+  
				"10. Porque esperava a cidade que tem fundamentos, da qual o artífice e construtor é Deus.</br>"+  
				"11. Pela fé também a mesma Sara recebeu a virtude de conceber, e deu à luz já fora da idade; porquanto teve por fiel aquele que lho tinha prometido.</br>"+  
				"12. Por isso também de um, e esse já amortecido, descenderam tantos, em multidão, como as estrelas do céu, e como a areia inumerável que está na praia do mar.</br>"+  
				"13. Todos estes morreram na fé, sem terem recebido as promessas; mas vendo-as de longe, e crendo-as e abraçando-as, confessaram que eram estrangeiros e peregrinos na terra.</br>"+  
				"14. Porque, os que isto dizem, claramente mostram que buscam uma pátria.</br>"+  
				"15. E se, na verdade, se lembrassem daquela de onde haviam saído, teriam oportunidade de tornar.</br>"+  
				"16. Mas agora desejam uma melhor, isto é, a celestial. Por isso também Deus não se envergonha deles, de se chamar seu Deus, porque já lhes preparou uma cidade.</br>"+  
				"17. Pela fé ofereceu Abraão a Isaque, quando foi provado; sim, aquele que recebera as promessas ofereceu o seu unigênito.</br>"+  
				"18. Sendo-lhe dito: Em Isaque será chamada a tua descendência, considerou que Deus era poderoso para até dentre os mortos o ressuscitar;</br>"+  
				"19. E daí também em figura ele o recobrou.</br>"+  
				"20. Pela fé Isaque abençoou Jacó e Esaú, no tocante às coisas futuras.</br>"+  
				"21. Pela fé Jacó, próximo da morte, abençoou cada um dos filhos de José, e adorou encostado à ponta do seu bordão.</br>"+  
				"22. Pela fé José, próximo da morte, fez menção da saída dos filhos de Israel, e deu ordem acerca de seus ossos.</br>"+  
				"23. Pela fé Moisés, já nascido, foi escondido três meses por seus pais, porque viram que era um menino formoso; e não temeram o mandamento do rei.</br>"+  
				"24. Pela fé Moisés, sendo já grande, recusou ser chamado filho da filha de Faraó,</br>"+  
				"25. Escolhendo antes ser maltratado com o povo de Deus, do que por um pouco de tempo ter o gozo do pecado;</br>"+  
				"26. Tendo por maiores riquezas o vitupério de Cristo do que os tesouros do Egito; porque tinha em vista a recompensa.</br>"+  
				"27. Pela fé deixou o Egito, não temendo a ira do rei; porque ficou firme, como vendo o invisível.</br>"+  
				"28. Pela fé celebrou a páscoa e a aspersão do sangue, para que o destruidor dos primogênitos lhes não tocasse.</br>"+  
				"29. Pela fé passaram o Mar Vermelho, como por terra seca; o que intentando os egípcios, se afogaram.</br>"+  
				"30. Pela fé caíram os muros de Jericó, sendo rodeados durante sete dias.</br>"+  
				"31. Pela fé Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias.</br>"+  
				"32. E que mais direi? Faltar-me-ia o tempo contando de Gideão, e de Baraque, e de Sansão, e de Jefté, e de Davi, e de Samuel e dos profetas,</br>"+  
				"33. Os quais pela fé venceram reinos, praticaram a justiça, alcançaram promessas, fecharam as bocas dos leões,</br>"+  
				"34. Apagaram a força do fogo, escaparam do fio da espada, da fraqueza tiraram forças, na batalha se esforçaram, puseram em fuga os exércitos dos estranhos.</br>"+  
				"35. As mulheres receberam pela ressurreição os seus mortos; uns foram torturados, não aceitando o seu livramento, para alcançarem uma melhor ressurreição;</br>"+  
				"36. E outros experimentaram escárnios e açoites, e até cadeias e prisões.</br>"+  
				"37. Foram apedrejados, serrados, tentados, mortos ao fio da espada; andaram vestidos de peles de ovelhas e de cabras, desamparados, aflitos e maltratados</br>"+  
				"38. (Dos quais o mundo não era digno), errantes pelos desertos, e montes, e pelas covas e cavernas da terra.</br>"+  
				"39. E todos estes, tendo tido testemunho pela fé, não alcançaram a promessa,</br>"+  
				"40. Provendo Deus alguma coisa melhor a nosso respeito, para que eles sem nós não fossem aperfeiçoados.</br>"},

	val_51: {item: "Faltam os Amigos", vers:"Salmo 41:9 - 13", class:"emogiLackFriends",
	itemText:	"9. Até o meu próprio amigo íntimo, em quem eu tanto confiava, que comia do meu pão, levantou contra mim o seu calcanhar.</br>"+  
				"10. Porém tu, SENHOR, tem piedade de mim, e levanta-me, para que eu lhes dê o pago.</br>"+  
				"11. Por isto conheço eu que tu me favoreces: que o meu inimigo não triunfa de mim.</br>"+  
				"12. Quanto a mim, tu me sustentas na minha sinceridade, e me puseste diante da tua face para sempre.</br>"+  
				"13. Bendito seja o SENHOR Deus de Israel de século em século. Amém e Amém.</br>"},

	val_52: {item: "Faltam os Amigos", vers:"Lucas 17:3 - 4", class:"emogiLackFriends",
	itemText: 	"3. Olhai por vós mesmos. E, se teu irmão pecar contra ti, repreende-o e, se ele se arrepender, perdoa-lhe.</br>"+  
				"4. E, se pecar contra ti sete vezes no dia, e sete vezes no dia vier ter contigo, dizendo: Arrependo-me; perdoa-lhe.</br>"},

	val_53: {item: "Faltam os Amigos", vers:"Romanos 12:14 - 17, 19 - 21", class:"emogiLackFriends",
	itemText:	"14. Abençoai aos que vos perseguem, abençoai, e não amaldiçoeis.</br>"+  
				"15. Alegrai-vos com os que se alegram; e chorai com os que choram;</br>"+  
				"16. Sede unânimes entre vós; não ambicioneis coisas altas, mas acomodai-vos às humildes; não sejais sábios em vós mesmos;</br>"+  
				"17. A ninguém torneis mal por mal; procurai as coisas honestas, perante todos os homens.</br>"+  
				"19. Não vos vingueis a vós mesmos, amados, mas dai lugar à ira, porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor.</br>"+  
				"20. Portanto, se o teu inimigo tiver fome, dá-lhe de comer; se tiver sede, dá-lhe de beber; porque, fazendo isto, amontoarás brasas de fogo sobre a sua cabeça.</br>"+  
				"21. Não te deixes vencer do mal, mas vence o mal com o bem.</br>"},

	val_54: {item: "Faltam os Amigos", vers:"II Timóteo 4:16 - 18", class:"emogiLackFriends",
	itemText:	"16. Ninguém me assistiu na minha primeira defesa, antes todos me desampararam. Que isto lhes não seja imputado.</br>"+ 
				"17. Mas o Senhor assistiu-me e fortaleceu-me, para que por mim fosse cumprida a pregação, e todos os gentios a ouvissem; e fiquei livre da boca do leão.</br>"+ 
				"18. E o SENHOR me livrará de toda a má obra, e guardar-me-á para o seu reino celestial; a quem seja glória para todo o sempre. Amém. </br>"},

	val_55: {item: "Necessitando Orientação", vers:"Salmo 32:8", class:"emogiNeedingAdvice",
	itemText: 	"8. Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos.</br>"},

	val_56: {item: "Necessitando Paz", vers:"João 14:1 - 4", class:"emogiNeedingPeace",
	itemText:	"1. NÃO se turbe o vosso coração; credes em Deus, crede também em mim.</br>"+  
				"2. Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar.</br>"+  
				"3. E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também.</br>"+  
				"4. Mesmo vós sabeis para onde vou, e conheceis o caminho.</br>"},

	val_57: {item: "Necessitando Paz", vers:"João 16:33", class:"emogiNeedingPeace",
	itemText:"33. Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.</br>"},

	val_58: {item: "Necessitando Paz", vers:"Romanos 5:1 - 5", class:"emogiNeedingPeace",
	itemText:	"1. TENDO sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo;</br>"+ 
				"2. Pelo qual também temos entrada pela fé a esta graça, na qual estamos firmes, e nos gloriamos na esperança da glória de Deus.</br>"+ 
				"3. E não somente isto, mas também nos gloriamos nas tribulações; sabendo que a tribulação produz a paciência,</br>"+ 
				"4. E a paciência a experiência, e a experiência a esperança.</br>"+ 
				"5. E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado.</br>"},

	val_59: {item: "Necessitando Paz", vers:"Filipenses 4: 6 - 7", class:"emogiNeedingPeace",
	itemText: 	"6. Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.</br>"+  
				"7. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.</br>"},

	val_60: {item: "Necessitando Proteção", vers:"Salmo 18:1 - 3", class:"emogiNeedingProtection",
	itemText:	"1. EU te amarei, ó SENHOR, fortaleza minha.</br>"+   
				"2. O SENHOR é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio.</br>"+   
				"3. Invocarei o nome do SENHOR, que é digno de louvor, e ficarei livre dos meus inimigos.</br>"},

	val_61: {item: "Necessitando Proteção", vers:"Salmo 34:7", class:"emogiNeedingProtection",
	itemText: 	"7. O anjo do SENHOR acampa-se ao redor dos que o temem, e os livra.</br>"},

	val_62: {item: "Necessitando Proteção de Deus", vers:"Salmo 27:1 - 6", class:"emogiRequiringProtectionOfGod",
	itemText:	"1. O SENHOR é a minha luz e a minha salvação; a quem temerei? O SENHOR é a força da minha vida; de quem me recearei?</br>"+   
				"2. Quando os malvados, meus adversários e meus inimigos, se chegaram contra mim, para comerem as minhas carnes, tropeçaram e caíram.</br>"+   
				"3. Ainda que um exército me cercasse, o meu coração não temeria; ainda que a guerra se levantasse contra mim, nisto confiaria.</br>"+   
				"4. Uma coisa pedi ao SENHOR, e a buscarei: que possa morar na casa do SENHOR todos os dias da minha vida, para contemplar a formosura do SENHOR, e inquirir no seu templo.</br>"+   
				"5. Porque no dia da adversidade me esconderá no seu pavilhão; no oculto do seu tabernáculo me esconderá; pôr-me-á sobre uma rocha.</br>"+   
				"6. Também agora a minha cabeça será exaltada sobre os meus inimigos que estão em redor de mim; por isso oferecerei sacrifício de júbilo no seu tabernáculo; cantarei, sim, cantarei louvores ao SENHOR.</br>"},

	val_63: {item: "Necessitando Proteção de Deus", vers:"Salmo 91", class:"emogiRequiringProtectionOfGod",
	itemText:	"1. AQUELE que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.</br>"+  
				"2. Direi do SENHOR: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.</br>"+  
				"3. Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.</br>"+  
				"4. Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.</br>"+  
				"5. Não terás medo do terror de noite nem da seta que voa de dia,</br>"+  
				"6. Nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.</br>"+  
				"7. Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.</br>"+  
				"8. Somente com os teus olhos contemplarás, e verás a recompensa dos ímpios.</br>"+  
				"9. Porque tu, ó SENHOR, és o meu refúgio. No Altíssimo fizeste a tua habitação.</br>"+  
				"10. Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.</br>"+  
				"11. Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.</br>"+  
				"12. Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra.</br>"+  
				"13. Pisarás o leão e a cobra; calcarás aos pés o filho do leão e a serpente.</br>"+  
				"14. Porquanto tão encarecidamente me amou, também eu o livrarei; pô-lo-ei em retiro alto, porque conheceu o meu nome.</br>"+  
				"15. Ele me invocará, e eu lhe responderei; estarei com ele na angústia; dela o retirarei, e o glorificarei.</br>"+  
				"16. Fartá-lo-ei com longura de dias, e lhe mostrarei a minha salvação.</br>"},

	val_64: {item: "Necessitando Proteção de Deus", vers:"Filipenses 4:19", class:"emogiRequiringProtectionOfGod",
	itemText: 	"19. O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.</br>"},

	val_65: {item: "Necessitando Regras para Viver", vers:"Romanos 12", class:"emogiNeedingRulesForLiving",
	itemText:	"1. ROGO-VOS, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional.</br>"+  
				"2. E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.</br>"+  
				"3. Porque pela graça que me é dada, digo a cada um dentre vós que não pense de si mesmo além do que convém; antes, pense com moderação, conforme a medida da fé que Deus repartiu a cada um.</br>"+  
				"4. Porque assim como em um corpo temos muitos membros, e nem todos os membros têm a mesma operação,</br>"+  
				"5. Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.</br>"+  
				"6. De modo que, tendo diferentes dons, segundo a graça que nos é dada, se é profecia, seja ela segundo a medida da fé;</br>"+  
				"7. Se é ministério, seja em ministrar; se é ensinar, haja dedicação ao ensino;</br>"+  
				"8. Ou o que exorta, use esse dom em exortar; o que reparte, faça-o com liberalidade; o que preside, com cuidado; o que exercita misericórdia, com alegria.</br>"+  
				"9. O amor seja não fingido. Aborrecei o mal e apegai-vos ao bem.</br>"+  
				"10. Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros.</br>"+  
				"11. Não sejais vagarosos no cuidado; sede fervorosos no espírito, servindo ao Senhor;</br>"+  
				"12. Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração;</br>"+  
				"13. Comunicai com os santos nas suas necessidades, segui a hospitalidade;</br>"+  
				"14. Abençoai aos que vos perseguem, abençoai, e não amaldiçoeis.</br>"+  
				"15. Alegrai-vos com os que se alegram; e chorai com os que choram;</br>"+  
				"16. Sede unânimes entre vós; não ambicioneis coisas altas, mas acomodai-vos às humildes; não sejais sábios em vós mesmos;</br>"+  
				"17. A ninguém torneis mal por mal; procurai as coisas honestas, perante todos os homens.</br>"+  
				"18. Se for possível, quanto estiver em vós, tende paz com todos os homens.</br>"+  
				"19. Não vos vingueis a vós mesmos, amados, mas dai lugar à ira, porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor.</br>"+  
				"20. Portanto, se o teu inimigo tiver fome, dá-lhe de comer; se tiver sede, dá-lhe de beber; porque, fazendo isto, amontoarás brasas de fogo sobre a sua cabeça.</br>"+  
				"21. Não te deixes vencer do mal, mas vence o mal com o bem.</br>"},

	val_66: {item: "Preocupado", vers:"Mateus 6:19 - 34", class:"emogiWorried",
	itemText:	"19. Não ajunteis tesouros na terra, onde a traça e a ferrugem tudo consomem, e onde os ladrões minam e roubam;</br>"+   
				"20. Mas ajuntai tesouros no céu, onde nem a traça nem a ferrugem consomem, e onde os ladrões não minam nem roubam.</br>"+   
				"21. Porque onde estiver o vosso tesouro, aí estará também o vosso coração.</br>"+   
				"22. A candeia do corpo são os olhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz;</br>"+   
				"23. Se, porém, os teus olhos forem maus, o teu corpo será tenebroso. Se, portanto, a luz que em ti há são trevas, quão grandes serão tais trevas!</br>"+   
				"24. Ninguém pode servir a dois senhores; porque ou há de odiar um e amar o outro, ou se dedicará a um e desprezará o outro. Não podeis servir a Deus e a Mamom.</br>"+   
				"25. Por isso vos digo: Não andeis cuidadosos quanto à vossa vida, pelo que haveis de comer ou pelo que haveis de beber; nem quanto ao vosso corpo, pelo que haveis de vestir. Não é a vida mais do que o mantimento, e o corpo mais do que o vestuário?</br>"+    
				"26. Olhai para as aves do céu, que nem semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta. Não tendes vós muito mais valor do que elas?</br>"+   
				"27. E qual de vós poderá, com todos os seus cuidados, acrescentar um côvado à sua estatura?</br>"+   
				"28. E, quanto ao vestuário, por que andais solícitos? Olhai para os lírios do campo, como eles crescem; não trabalham nem fiam;</br>"+   
				"29. E eu vos digo que nem mesmo Salomão, em toda a sua glória, se vestiu como qualquer deles.</br>"+  
				"30. Pois, se Deus assim veste a erva do campo, que hoje existe, e amanhã é lançada no forno, não vos vestirá muito mais a vós, homens de pouca fé?</br>"+   
				"31. Não andeis, pois, inquietos, dizendo: Que comeremos, ou que beberemos, ou com que nos vestiremos?</br>"+   
				"32. (Porque todas estas coisas os gentios procuram). De certo vosso Pai celestial bem sabe que necessitais de todas estas coisas;</br>"+   
				"33. Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.</br>"+   
				"34. Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal.</br>"},

	val_67: {item: "Preocupado", vers:"I Pedro 5:6 - 7", class:"emogiWorried",
	itemText: 	"6. Humilhai-vos, pois, debaixo da potente mão de Deus, para que a seu tempo vos exalte;</br>"+  
				"7. Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.</br>"},

	val_68: {item: "Receioso", vers:"Salmo 34:4", class:"emogiApprehending",
	itemText: 	"4. Busquei ao SENHOR, e ele me respondeu; livrou-me de todos os meus temores.</br>"},

	val_69: {item: "Receioso", vers:"Mateus 10:28", class:"emogiApprehending",
	itemText: 	"28. E não temais os que matam o corpo e não podem matar a alma; temei antes aquele que pode fazer perecer no inferno a alma e o corpo.</br>"},

	val_70: {item: "Receioso", vers:"II Timóteo 1:7", class:"emogiApprehending",
	itemText: 	"7. Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.</br>"},

	val_71: {item: "Receioso", vers:"Hebreus 13:5 - 6", class:"emogiApprehending",
	itemText: 	"5. Sejam vossos costumes sem avareza, contentando-vos com o que tendes; porque ele disse: Não te deixarei, nem te desampararei.</br>"+ 
				"6. E assim com confiança ousemos dizer: O SENHOR é o meu ajudador, e não temerei O que me possa fazer o homem.</br>"},

	val_72: {item: "Solitário", vers:"Salmo 23", class:"emogiLonely",
	itemText:	"1. O SENHOR é o meu pastor, nada me faltará.</br>"+  
				"2. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas.</br>"+  
				"3. Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.</br>"+  
				"4. Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.</br>"+  
				"5. Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.</br>"+  
				"6. Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do SENHOR por longos dias.</br>"},

	val_73: {item: "Solitário", vers:"Hebreus 13:5 - 6", class:"emogiLonely",
	itemText:	"5. Sejam vossos costumes sem avareza, contentando-vos com o que tendes; porque ele disse: Não te deixarei, nem te desampararei.</br>"+ 
				"6. E assim com confiança ousemos dizer: O SENHOR é o meu ajudador, e não temerei O que me possa fazer o homem. </br>"},

	val_74: {item: "Tentado", vers:"Salmo 1", class:"emogiTempted",
	itemText:	"1. BEM-AVENTURADO o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores.</br>"+ 
				"2. Antes tem o seu prazer na lei do SENHOR, e na sua lei medita de dia e de noite.</br>"+ 
				"3. Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo; as suas folhas não cairão, e tudo quanto fizer prosperará.</br>"+ 
				"4. Não são assim os ímpios; mas são como a moinha que o vento espalha.</br>"+ 
				"5. Por isso os ímpios não subsistirão no juízo, nem os pecadores na congregação dos justos.</br>"+ 
				"6. Porque o SENHOR conhece o caminho dos justos; porém o caminho dos ímpios perecerá.</br>"},

	val_75: {item: "Tentado", vers:"Salmo 139:23 - 24", class:"emogiTempted",
	itemText: 	"23. Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece os meus pensamentos.</br>"+ 
				"24. E vê se há em mim algum caminho mau, e guia-me pelo caminho eterno.</br>"},

	val_76: {item: "Tentado", vers:"Mateus 26:41", class:"emogiTempted",
	itemText: 	"41. Vigiai e orai, para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca.</br>"},

	val_77: {item: "Tentado", vers:"I Coríntios 10:12 - 14", class:"emogiTempted",
	itemText:	"12. Aquele, pois, que cuida estar em pé, olhe não caia.</br>"+  
				"13. Não veio sobre vós tentação, senão humana; mas fiel é Deus, que não vos deixará tentar acima do que podeis, antes com a tentação dará também o escape, para que a possais suportar.</br>"+  
				"14. Portanto, meus amados, fugi da idolatria.</br>"},

	val_78: {item: "Tentado", vers:"Filipenses 4:8", class:"emogiTempted",
	itemText: 	"8. Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai.</br>"},

	val_79: {item: "Tentado", vers:"Tiago 4:7", class:"emogiTempted",
	itemText: 	"7. Sujeitai-vos, pois, a Deus, resisti ao diabo, e ele fugirá de vós.</br>"},

	val_80: {item: "Tentado", vers:"II Pedro 2:9", class:"emogiTempted",
	itemText: 	"9. Assim, sabe o Senhor livrar da tentação os piedosos, e reservar os injustos para o dia do juízo, para serem castigados;</br>"},

	val_81: {item: "Tentado", vers:"II Pedro 3:17", class:"emogiTempted",
	itemText: 	"17. Vós, portanto, amados, sabendo isto de antemão, guardai-vos de que, pelo engano dos homens abomináveis, sejais juntamente arrebatados, e descaiais da vossa firmeza;</br>"},

	val_82: {item: "Triste", vers:"Mateus 5:4", class:"emogiSad",
	itemText: 	"4. Bem-aventurados os que choram, porque eles serão consolados;</br>"},

	val_83: {item: "Triste", vers:"II Coríntios 1:3 - 4", class:"emogiSad",
	itemText: 	"3. Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias e o Deus de toda a consolação;</br>"+ 
				"4. Que nos consola em toda a nossa tribulação, para que também possamos consolar os que estiverem em alguma tribulação, com a consolação com que nós mesmos somos consolados por Deus.</br>"},

	val_84: {item: "Vencido", vers:"Salmo 6", class:"emogiBeaten",
	itemText:	"1. SENHOR, não me repreendas na tua ira, nem me castigues no teu furor.</br>"+ 
				"2. Tem misericórdia de mim, SENHOR, porque sou fraco; sara-me, SENHOR, porque os meus ossos estão perturbados.</br>"+ 
				"3. Até a minha alma está perturbada; mas tu, SENHOR, até quando?</br>"+ 
				"4. Volta-te, SENHOR, livra a minha alma; salva-me por tua benignidade.</br>"+ 
				"5. Porque na morte não há lembrança de ti; no sepulcro quem te louvará?</br>"+ 
				"6. Já estou cansado do meu gemido, toda a noite faço nadar a minha cama; molho o meu leito com as minhas lágrimas,</br>"+ 
				"7. Já os meus olhos estão consumidos pela mágoa, e têm-se envelhecido por causa de todos os meus inimigos.</br>"+ 
				"8. Apartai-vos de mim todos os que praticais a iniqüidade; porque o SENHOR já ouviu a voz do meu pranto.</br>"+ 
				"9. O SENHOR já ouviu a minha súplica; o SENHOR aceitará a minha oração.</br>"+ 
				"10. Envergonhem-se e perturbem-se todos os meus inimigos; tornem atrás e envergonhem-se num momento.</br>"},

	val_85: {item: "Vencido", vers:"Romanos 8:31 - 39", class:"emogiBeaten",
	itemText:	"31. Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?</br>"+  
				"32. Aquele que nem mesmo a seu próprio Filho poupou, antes o entregou por todos nós, como nos não dará também com ele todas as coisas?</br>"+  
				"33. Quem intentará acusação contra os escolhidos de Deus? É Deus quem os justifica.</br>"+  
				"34. Quem é que condena? Pois é Cristo quem morreu, ou antes quem ressuscitou dentre os mortos, o qual está à direita de Deus, e também intercede por nós.</br>"+  
				"35. Quem nos separará do amor de Cristo? A tribulação, ou a angústia, ou a perseguição, ou a fome, ou a nudez, ou o perigo, ou a espada?</br>"+  
				"36. Como está escrito: Por amor de ti somos entregues à morte todo o dia; Somos reputados como ovelhas para o matadouro.</br>"+  
				"37. Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.</br>"+  
				"38. Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,</br>"+  
				"39. Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.</br>"},

	val_86: {item: "Vencido", vers:"I João 1:4 - 9", class:"emogiBeaten",
	itemText:	"4. Estas coisas vos escrevemos, para que o vosso gozo se cumpra.</br>"+  
				"5. E esta é a mensagem que dele ouvimos, e vos anunciamos: que Deus é luz, e não há nele trevas nenhumas.</br>"+  
				"6. Se dissermos que temos comunhão com ele, e andarmos em trevas, mentimos, e não praticamos a verdade.</br>"+  
				"7. Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.</br>"+  
				"8. Se dissermos que não temos pecado, enganamo-nos a nós mesmos, e não há verdade em nós.</br>"+  
				"9. Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.</br>"},

	val_87: {item: "Viajando", vers:"Salmo 121", class:"emogiTraveling",
	itemText:	"1. LEVANTAREI os meus olhos para os montes, de onde vem o meu socorro.</br>"+ 
				"2. O meu socorro vem do SENHOR que fez o céu e a terra.</br>"+ 
				"3. Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará.</br>"+ 
				"4. Eis que não tosquenejará nem dormirá o guarda de Israel.</br>"+ 
				"5. O SENHOR é quem te guarda; o SENHOR é a tua sombra à tua direita.</br>"+ 
				"6. O sol não te molestará de dia nem a lua de noite.</br>"+ 
				"7. O SENHOR te guardará de todo o mal; guardará a tua alma.</br>"+ 
				"8. O SENHOR guardará a tua entrada e a tua saída, desde agora e para sempre.</br>"}
	
},


"en": { 

	val_01: {item: "Thankful", vers:"PSalms 100", class:"emogiThankful",
	itemText: 	"1. A Psalm of praise. Make a joyful noise to the LORD, all ye lands.</br>"+
				"2. Serve the LORD with gladness: come before his presence with singing.</br>"+
				"3. Know ye that the LORD he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.</br>"+
				"4. Enter into his gates with thanksgiving, and into his courts with praise: be thankful to him, and bless his name.</br>"+
				"5. For the LORD is good; his mercy is everlasting; and his truth endureth to all generations."},

	val_02: {item: "Thankful", vers:"I Tess. 5:18", class:"emogiThankful",
	itemText: 	"18. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.</br>"},

	val_03: {item: "Thankful", vers:"Heb. 13:15", class:"emogiThankful",
	itemText:"15. By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips, giving thanks to his name.</br>"},

	val_04: {item: "Bitter/Critic", vers:"I Cor. 13", class:"emogiBitterCritic",
	itemText:	"1. Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.</br>"+
				"2. And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.</br>"+
				"3. And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing.</br>"+
				"4. Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,</br>"+
				"5. Doth not behave itself unseemly, seeketh not its own, is not easily provoked, thinketh no evil;</br>"+
				"6. Rejoiceth not in iniquity, but rejoiceth in the truth;</br>"+
				"7. Beareth all things, believeth all things, hopeth all things, endureth all things.</br>"+
				"8. Charity never faileth: but whether there are prophecies, they shall fail; whether there are languages, they shall cease; whether there is knowledge, it shall vanish away.</br>"+
				"9. For we know in part, and we prophesy in part.</br>"+
				"10. But when that which is perfect is come, then that which is in part shall be done away.</br>"+
				"11. When I was a child, I spoke as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.</br>"+
				"12. For now we see through a glass darkly; but then face to face: now I know in part; but then shall I know even as also I am known.</br>"+
				"13. And now abideth faith, hope, charity, these three; but the greatest of these is charity.</br>"},

	val_05: {item: "Distressed", vers:"PSalm 51", class:"emogiDistressed",
	itemText:	"1. To the chief Musician, A Psalm of David, when Nathan the prophet came to him, after he had gone in to Bath-sheba. Have mercy upon me, O God, according to thy loving-kindness: according to the multitude of thy tender mercies, blot out my transgressions.</br>"+ 
				"2. Wash me thoroughly from my iniquity, and cleanse me from my sin.</br>"+
				"3. For I acknowledge my transgressions: and my sin is ever before me.</br>"+
				"4. Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mayest be justified when thou speakest, and be clear when thou judgest.</br>"+
				"5. Behold, I was shapen in iniquity; and in sin did my mother conceive me.</br>"+
				"6. Behold, thou desirest truth in the inward parts: and in the hidden part thou shalt make me to know wisdom.</br>"+
				"7. Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow.</br>"+
				"8. Make me to hear joy and gladness; that the bones which thou hast broken may rejoice.</br>"+
				"9. Hide thy face from my sins, and blot out all my iniquities.</br>"+
				"10. Create in me a clean heart, O God; and renew a right spirit within me.</br>"+
				"11. Cast me not away from thy presence; and take not thy holy spirit from me.</br>"+
				"12. Restore to me the joy of thy salvation; and uphold me with thy free spirit.</br>"+
				"13. Then will I teach transgressors thy ways; and sinners shall be converted to thee.</br>"+
				"14. Deliver me from blood-guiltiness, O God, thou God of my salvation: and my tongue shall sing aloud of thy righteousness.</br>"+
				"15. O Lord, open thou my lips; and my mouth shall show forth thy praise.</br>"+
				"16. For thou desirest not sacrifice: else would I give it: thou delightest not in burnt-offering.</br>"+
				"17. The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.</br>"+
				"18. Do good in thy good pleasure to Zion: build thou the walls of Jerusalem.</br>"+
				"19. Then shalt thou be pleased with the sacrifices of righteousness, with burnt-offering and whole burnt-offering: then shall they offer bullocks upon thy altar.</br>"},

	val_06: {item: "Distressed", vers:"Mat. 5:4", class:"emogiDistressed",
	itemText:"4. Blessed are they that mourn: for they shall be comforted.</br>"},

	val_07: {item: "Distressed", vers:"John 14", class:"emogiDistressed",
	itemText: 	"1. Let not your heart be troubled: ye believe in God, believe also in me.</br>"+
				"2. In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.</br>"+
				"3. And if I go and prepare a place for you, I will come again and receive you to myself; that where I am, there ye may be also.</br>"+
				"4. And whither I go ye know, and the way ye know.</br>"+
				"5. Thomas saith to him, Lord, we know not whither thou goest; and how can we know the way?</br>"+
				"6.Jesus saith to him, I am the way, and the truth, and the life: no man cometh to the Father, but by me.</br>"+
				"7. If ye had known me, ye would have known my Father also: and from henceforth ye know him, and have seen him.</br>"+
				"8. Philip saith to him, Lord, show us the Father, and it sufficeth us.</br>"+
				"9.Jesus saith to him, Have I been so long time with you, and yet hast thou not known me Philip? he that hath seen me, hath seen the Father; and how sayest thou then, Show us the Father?</br>"+
				"10. Believest thou not that I am in the Father, and the Father in me? the words that I speak to you, I speak not from myself: but the Father that dwelleth in me, he doeth the works.</br>"+
				"11. Believe me that I am in the Father, and the Father in me: or else believe me for the very works' sake.</br>"+
				"12. Verily, verily, I say to you, he that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go to my Father.</br>"+
				"13. And whatever ye shall ask in my name, that will I do, that the Father may be glorified in the Son.</br>"+
				"14. If ye shall ask any thing in my name, I will do it.</br>"+
				"15. If ye love me, keep my commandments.</br>"+
				"16. And I will pray the Father, and he will give you another Comforter, that he may abide with you for ever;</br>"+
				"17. Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and will be in you.</br>"+
				"18. I will not leave you comfortless; I will come to you.</br>"+
				"19. Yet a little while, and the world seeth me no more; but ye see me: because I live, ye shall live also.</br>"+
				"20. At that day ye shall know that I am in my Father, and ye in me, and I in you.</br>"+
				"21. He that hath my commandments, and keepeth them, he it is that loveth me: and he that loveth me, shall be loved by my Father, and I will love him, and will manifest myself to him.</br>"+
				"22. Judas, not Iscariot, saith to him, Lord, how is it that thou wilt manifest thyself to us, and not to the world?</br>"+
				"23. Jesus answered and said to him, If a man loveth me, he will keep my words: and my Father will love him, and we will come to him, and make our abode with him.</br>"+
				"24. He that loveth me not, keepeth not my sayings: and the word which ye hear is not mine, but that of the Father who sent me.</br>"+
				"25. These things have I spoken to you, being yet present with you.</br>"+
				"26. But the Comforter, who is the Holy Spirit, whom the Father will send in my name, he will teach you all things, and bring all things to your remembrance, whatever I have said to you.</br>"+
				"27. Peace I leave with you, my peace I give to you: not as the world giveth, give I to you. Let not your heart be troubled, neither let it be afraid.</br>"+
				"28. Ye have heard that I said to you, I go away, and come again to you. If ye loved me, ye would rejoice, because I said, I go to the Father: for my Father is greater than I.</br>"+
				"29. And now I have told you before it cometh to pass, that when it hath come to pass, ye may believe.</br>"+
				"30. Hereafter I will not talk much with you: for the prince of this world cometh, and hath nothing in me.</br>"+
				"31. But that the world may know that I love the Father; and as the Father gave me commandment, even so I do. Arise, let us go hence.</br>"},

	val_08: {item: "Distressed", vers:"II Cor. 1:3 - 4", class:"emogiDistressed",
	itemText: 	"3. Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all consolation.</br>"+
				"4. Who comforteth us in all our tribulation, that we may be able to comfort them who are in any trouble by the consolation with which we ourselves are comforted by God.</br>"},

	val_09: {item: "Distressed", vers:"I Tess. 4:3 - 18", class:"emogiDistressed",
	itemText:	"3. For this is the will of God, even your sanctification, that ye should abstain from lewdness.</br>"+
				"4. That every one of you should know how to possess his vessel in sanctification and honor;</br>"+
				"5. Not in the lust of concupiscence, even as the Gentiles who know not God:</br>"+
				"6. That no man go beyond and defraud his brother in any matter: because the Lord is the avenger of all such, as we also have forewarned you and testified.</br>"+
				"7. For God hath not called us to uncleanness, but to holiness.</br>"+
				"8. He therefore that despiseth, despiseth not man, but God, who hath also given to us his holy Spirit.</br>"+
				"9. But concerning brotherly love ye need not that I write to you: for ye yourselves are taught by God to love one another.</br>"+
				"10. And indeed ye do it towards all the brethren who are in all Macedonia: but we beseech you, brethren, that ye increase more and more;</br>"+
				"11. And that ye study to be quiet, and to do your own business, and to work with your own hands, as we commanded you;</br>"+
				"12. That ye may walk honestly towards them that are without, and that ye may have need of nothing.</br>"+
				"13. But I would not have you to be ignorant, brethren, concerning them who are asleep, that ye sorrow not, even as others who have no hope.</br>"+
				"14. For if we believe that Jesus died and rose again, even so them also who sleep in Jesus will God bring with him.</br>"+
				"15. For this we say to you by the word of the Lord, that we who are alive and remain to the coming of the Lord shall not precede them who are asleep.</br>"+
				"16. For the Lord himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God: and the dead in Christ shall rise first:</br>"+
				"17. Then we who are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.</br>"+
				"18. Wherefore, comfort one another with these words.</br>"},

	val_10: {item: "Anxious", vers:"PSalm 46", class:"emogiAnxious",
	itemText:	"1. To the chief Musician for the sons of Korah, A Song upon Alamoth. God is our refuge and strength, a very present help in trouble.</br>"+
				"2. Therefore will we not fear, though the earth shall be removed, and though the mountains shall be carried into the midst of the sea;</br>"+
				"3. Though its waters shall roar and be disturbed, though the mountains shake with the swelling of it. Selah.</br>"+
				"4. There is a river, the streams of which shall make glad the city of God, the holy place of the tabernacles of the Most High.</br>"+
				"5. God is in the midst of her; she shall not be moved: God shall help her, and that right early.</br>"+
				"6. The heathen raged, the kingdoms were moved: he uttered his voice, the earth melted.</br>"+
				"7. The LORD of hosts is with us; the God of Jacob is our refuge. Selah.</br>"+
				"8. Come, behold the works of the LORD, what desolations he hath made in the earth.</br>"+
				"9. He maketh wars to cease to the end of the earth; he breaketh the bow, and cutteth the spear asunder; he burneth the chariot in the fire.</br>"+
				"10. Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.</br>"+
				"11. The LORD of hosts is with us; the God of Jacob is our refuge. Selah.</br>"},

	val_11: {item: "Anxious", vers:"Mat. 6:19 - 34", class:"emogiAnxious",
	itemText:	"19. Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:</br>"+
				"20. But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal.</br>"+
				"21. For where your treasure is, there will your heart be also.</br>"+
				"22. The light of the body is the eye: if therefore thy eye be single, thy whole body will be full of light.</br>"+
				"23. But if thy eye be evil, thy whole body will be full of darkness. If therefore the light that is in thee is darkness, how great is that darkness!</br>"+
				"24. No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.</br>"+
				"25. Therefore I say to you, Be not anxious for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than food, and the body than raiment?</br>"+
				"26. Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?</br>"+
				"27. Which of you by anxious care can add one cubit to his stature?</br>"+
				"28. And why are ye anxious for raiment? Consider the lilies of the field how they grow? they toil not, neither do they spin?</br>"+
				"29. And yet I say to you, that even Solomon in all his glory was not arrayed like one of these.</br>"+
				"30. Wherefore, if God so clotheth the grass of the field, which to-day is, and to-morrow is cast into the oven, will he not much more clothe you, O ye of little faith?</br>"+
				"31. Therefore be not anxious, saying, What shall we eat? or what shall we drink? or, with what shall we be clothed?</br>"+
				"32. (For after all these things do the Gentiles seek) for your heavenly Father knoweth that ye have need of all these things.</br>"+
				"33. But seek ye first the kingdom of God, and his righteousness, and all these things shall be added to you.</br>"+
				"34. Therefore be not anxious for the morrow: for the morrow will be solicitous for the things of itself. Sufficient to the day is its own evil.</br>"},

	val_12: {item: "Anxious", vers:"Fil. 4:6", class:"emogiAnxious",
	itemText: 	"6. Be anxious for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known to God.</br>"},

	val_13: {item: "Anxious", vers:"I Peter 5:6 - 7", class:"emogiAnxious",
	itemText: 	"6. Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:</br>"+
				"7. Casting all your care upon him; for he careth for you.</br>"},

	val_14: {item: "Absent member home", vers:"PSalm 121", class:"emogiAbsentMemberHome",
	itemText:	"1. A Song of degrees. I will lift up my eyes to the hills, from whence cometh my help.</br>"+
				"2. My help cometh from the LORD, who made heaven and earth.</br>"+
				"3. He will not suffer thy foot to be moved: he that keepeth thee will not slumber.</br>"+
				"4. Behold, he that keepeth Israel shall neither slumber nor sleep.</br>"+
				"5. The LORD is thy keeper: the LORD is thy shade upon thy right hand.</br>"+
				"6. The sun shall not smite thee by day, nor the moon by night.</br>"+
				"7. The LORD will preserve thee from all evil: he will preserve thy soul.</br>"+
				"8. The LORD will preserve thy going out and thy coming in from this time forth, and even for ever.</br>"},

	val_15: {item: "Absent member home", vers:"Mat. 10:16 - 20", class:"emogiAbsentMemberHome",
	itemText: 	"16. Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as serpents, and harmless as doves.</br>"+
				"17. But beware of men: for they will deliver you to the councils, and they will scourge you in their synagogues.</br>"+
				"18. And ye will be brought before governors and kings for my sake, for a testimony against them and the Gentiles.</br>"+
				"19. But when they deliver you up, be not anxious how or what ye shall speak, for it shall be given to you in that same hour what ye shall speak.</br>"+
				"20. For it is not ye that speak, but the Spirit of your Father which speaketh in you.</br>"},

	val_16: {item: "Tired out", vers:"PSalm 90", class:"emogiTired",
	itemText: 	"1. A prayer of Moses the man of God. Lord, thou hast been our dwelling-place in all generations.</br>"+
				"2. Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.</br>"+
				"3. Thou turnest man to destruction; and sayest, Return, ye children of men.</br>"+
				"4. For a thousand years in thy sight are but as yesterday when it is past, and as a watch in the night.</br>"+
				"5. Thou carriest them away as with a flood; they are as a sleep; in the morning they are like grass which groweth.</br>"+
				"6. In the morning it flourisheth, and groweth; in the evening it is cut down, and withereth.</br>"+
				"7. For we are consumed by thy anger, and by thy wrath are we troubled.</br>"+
				"8. Thou hast set our iniquities before thee, our secret sins in the light of thy countenance.</br>"+
				"9. For all our days are passed away in thy wrath: we spend our years, as a tale that is told.</br>"+
				"10. The days of our years are seventy years; and if by reason of strength they are eighty years, yet is their strength labor and sorrow; for it is soon cut off, and we fly away.</br>"+
				"11. Who knoweth the power of thy anger? even according to thy fear, so is thy wrath.</br>"+
				"12. So teach us to number our days, that we may apply our hearts to wisdom.</br>"+
				"13. Return, O LORD, how long? and repent thou concerning thy servants.</br>"+
				"14. O satisfy us early with thy mercy; that we may rejoice and be glad all our days.</br>"+
				"15. Make us glad according to the days in which thou hast afflicted us, and the years in which we have seen evil.</br>"+
				"16. Let thy work appear to thy servants, and thy glory to their children.</br>"+
				"17. And let the beauty of the LORD our God be upon us: and establish thou the work of our hands upon us; yes, the work of our hands establish thou it.</br>"},

	val_17: {item: "Tired out", vers:"Mat. 11:28 - 30", class:"emogiTired",
	itemText:	"28. Come to me, all ye that labor, and are heavy laden, and I will give you rest.</br>"+
				"29. Take my yoke upon you, and learn from me: for I am meek and lowly in heart; and ye shall find rest to your souls.</br>"+
				"30. For my yoke is easy, and my burden is light.</br>"},

	val_18: {item: "Tired out", vers:"I Cor. 15:58", class:"emogiTired",
	itemText: 	"58. Therefore, my beloved brethren, be ye steadfast, immovable, always abounding in the work of the Lord, forasmuch as ye know that your labor is not in vain in the Lord.</br>"},

	val_19: {item: "Tired out", vers:"Gal. 6:9 - 10", class:"emogiTired",
	itemText: 	"9. And let us not be weary in well-doing: for in due season we shall reap, if we faint not.</br>"+
				"10. As we have therefore opportunity, let us do good to all men, especially to them who are of the household of faith.</br>"},

	val_20: {item: "Contrite", vers:"PSalm 4", class:"emogiContrite",
	itemText:	"1. To the chief Musician on Neginoth, A Psalm of David. Hear me when I call, O God of my righteousness: thou hast enlarged me when I was in distress; have mercy upon me, and hear my prayer.</br>"+
				"2. O ye sons of men, how long will ye turn my glory into shame? how long will ye love vanity, and seek after falsehood? Selah.</br>"+
				"3. But know that the LORD hath set apart him that is godly for himself: the LORD will hear when I call to him.</br>"+
				"4. Stand in awe, and sin not: commune with your own heart upon your bed, and be still. Selah.</br>"+
				"5. Offer the sacrifices of righteousness, and put your trust in the LORD.</br>"+
				"6. There are many that say, Who will show us any good? LORD, lift thou upon us the light of thy countenance.</br>"+
				"7. Thou hast put gladness in my heart, more than in the time when their corn and their wine increased.</br>"+
				"8. I will both lay me down in peace, and sleep; for thou only, LORD, makest me dwell in safety.</br>"},

	val_21: {item: "Contrite", vers:"PSalm 42", class:"emogiContrite",
	itemText:	"1. To the chief Musician, Maschil, for the sons of Korah. As the hart panteth after the water brooks, so my soul panteth after thee, O God.</br>"+
				"2. My soul thirsteth for God, for the living God: when shall I come and appear before God?</br>"+
				"3. My tears have been my food day and night, while they continually say to me, Where is thy God?</br>"+
				"4. When I remember these things, I pour out my soul in me: for I had gone with the multitude, I went with them to the house of God, with the voice of joy and praise, with a multitude that kept holy-day.</br>"+
				"5. Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance.</br>"+
				"6. O my God, my soul is cast down within me: therefore will I remember thee from the land of Jordan, and of the Hermonites, from the hill Mizar.</br>"+
				"7. Deep calleth to deep at the noise of thy water-spouts: all thy waves and thy billows are gone over me.</br>"+
				"8. Yet the LORD will command his loving-kindness in the day-time, and in the night his song shall be with me, and my prayer to the God of my life.</br>"+
				"9. I will say to God my rock, Why hast thou forgotten me? why go I mourning because of the oppression of the enemy?</br>"+
				"10. As with a sword in my bones, my enemies reproach me; while they say daily to me, Where is thy God?</br>"+
				"11. Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God.</br>"},

	val_22: {item: "Contrite", vers:"Lucas 11:1 - 13", class:"emogiContrite",
	itemText:	"1. And it came to pass, that as he was praying in a certain place, when he ceased, one of his disciples said to him, Lord, teach us to pray, as John also taught his disciples.</br>"+
				"2. And he said to them, When ye pray, say, Our Father who art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done, as in heaven, so on earth.</br>"+
				"3. Give us day by day our daily bread.</br>"+
				"4. And forgive us our sins; for we also forgive every one that is indebted to us. And lead us not into temptation; but deliver us from evil.</br>"+
				"5. And he said to them, Which of you shall have a friend, and shall go to him at midnight, and say to him, Friend, lend me three loaves:</br>"+
				"6. For a friend of mine in his journey is come to me, and I have nothing to set before him?</br>"+
				"7. And he from within shall answer and say, Trouble me not: the door is now shut, and my children are with me in bed; I cannot rise and give thee.</br>"+
				"8. I say to you, Though he will not rise and give him, because he is his friend, yet because of his importunity he will rise and give him as many as he needeth.</br>"+
				"9. And I say to you, Ask, and it shall be given you; seek, and ye shall find; knock, and the door shall be opened to you.</br>"+
				"10. For every one that asketh, receiveth; and he that seeketh, findeth; and to him that knocketh, the door shall be opened.</br>"+
				"11. If a son shall ask bread of any of you that is a father, will he give him a stone? or if he shall ask a fish, will he for a fish give him a serpent?</br>"+
				"12. Or if he shall ask an egg, will he offer him a scorpion?</br>"+
				"13. If ye then, being evil, know how to give good gifts to your children: how much more will your heavenly Father give the Holy Spirit to them that ask him?</br>"},

	val_23: {item: "Contrite", vers:"John 17", class:"emogiContrite",
	itemText:	"1. These words spoke Jesus, and lifted up his eyes to heaven, and said, Father, the hour is come; glorify thy Son, that thy Son also may glorify thee:</br>"+
				"2. As thou hast given him power over all flesh, that he should give eternal life to as many as thou hast given him.</br>"+
				"3. And this is life eternal, that they may know thee the only true God, and Jesus Christ whom thou hast sent.</br>"+
				"4. I have glorified thee on the earth: I have finished the work which thou gavest me to do.</br>"+
				"5. And now, O Father, glorify thou me with thy ownself, with the glory which I had with thee before the world was.</br>"+
				"6. I have manifested thy name to the men whom thou gavest to me out of the world: thine they were, and thou gavest them to me; and they have kept thy word.</br>"+
				"7. Now they have known that all things whatever thou hast given me are from thee.</br>"+
				"8. For I have given to them the words which thou gavest me; and they have received them, and have known surely that I came from thee, and they have believed that thou didst send me.</br>"+
				"9. I pray for them: I pray not for the world, but for them whom thou hast given to me; for they are thine.</br>"+
				"10. And all mine are thine, and thine are mine; and I am glorified in them.</br>"+
				"11. And now I am no more in the world, but these are in the world, and I come to thee. Holy Father, keep through thy own name those whom thou hast given to me, that they may be one, as we are.</br>"+
				"12. While I was with them in the world, I kept them in thy name: those that thou gavest to me I have kept, and none of them is lost but the son of perdition; that the scripture might be fulfilled.</br>"+
				"13. And now I come to thee, and these things I speak in the world, that they may have my joy fulfilled in themselves.</br>"+
				"14. I have given to them thy word; and the world hath hated them, because they are not of the world, even as I am not of the world.</br>"+
				"15. I pray not that thou shouldst take them out of the world, but that thou shouldst keep them from the evil.</br>"+
				"16. They are not of the world, even as I am not of the world.</br>"+
				"17. Sanctify them through thy truth: thy word is truth.</br>"+
				"18. As thou hast sent me into the world, even so have I also sent them into the world.</br>"+
				"19. And for their sakes I sanctify myself, that they also may be sanctified through the truth.</br>"+
				"20. Neither pray I for these alone; but for them also who shall believe on me through their word.</br>"+
				"21. That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me.</br>"+
				"22. And the glory which thou gavest to me, I have given to them; that they may be one, even as we are one.</br>"+
				"23. I in them, and thou in me, that they may be made perfect in one; and that the world may know that thou hast sent me, and hast loved them as thou hast loved me.</br>"+
				"24. Father, I will that they also whom thou hast given to me be with me where I am; that they may behold my glory which thou hast given to me: for thou lovedst me before the foundation of the world.</br>"+
				"25. O righteous Father, the world hath not known thee: but I have known thee, and these have known that thou hast sent me.</br>"+
				"26. And I have declared to them thy name, and will declare it: that the love with which thou hast loved me, may be in them, and I in them.</br>"},

	val_24: {item: "Contrite", vers:"I John 5:14 - 15", class:"emogiContrite",
	itemText: 	"14. And this is the confidence that we have in him, that if we ask any thing according to his will, he heareth us:</br>"+
				"15. And if we know that he heareth us, whatever we ask, we know that we have the petitions that we desired from him.</br>"},

	val_25: {item: "Depressed", vers:"PSalm 34", class:"emogiDepressed",
	itemText:	"1. A Psalm of David, when he changed his behavior before Abimelech; who drove him away, and he departed. I will bless the LORD at all times: his praise shall continually be in my mouth.</br>"+
				"2. My soul shall make her boast in the LORD: the humble shall hear of it and be glad.</br>"+
				"3. O magnify the LORD with me, and let us exalt his name together.</br>"+
				"4. I sought the LORD, and he heard me, and delivered me from all my fears.</br>"+
				"5. They looked to him, and were lightened: and their faces were not ashamed.</br>"+
				"6. This poor man cried, and the LORD heard him, and saved him out of all his troubles.</br>"+
				"7. The angel of the LORD encampeth around them that fear him, and delivereth them.</br>"+
				"8. O taste and see that the LORD is good: blessed is the man that trusteth in him.</br>"+
				"9. O fear the LORD, ye his saints: for there is no want to them that fear him.</br>"+
				"10. The young lions do lack, and suffer hunger: but they that seek the LORD shall not want any good thing.</br>"+
				"11. Come, ye children, hearken to me; I will teach you the fear of the LORD.</br>"+
				"12. What man is he that desireth life, and loveth many days, that he may see good?</br>"+
				"13. Keep thy tongue from evil, and thy lips from speaking guile.</br>"+
				"14. Depart from evil, and do good; seek peace, and pursue it.</br>"+
				"15. The eyes of the LORD are upon the righteous, and his ears are open to their cry.</br>"+
				"16. The face of the LORD is against them that do evil, to cut off the remembrance of them from the earth.</br>"+
				"17. The righteous cry, and the LORD heareth, and delivereth them out of all their troubles.</br>"+
				"18. The LORD is nigh to them that are of a broken heart; and saveth such as are of a contrite spirit.</br>"+
				"19. Many are the afflictions of the righteous: but the LORD delivereth him out of them all.</br>"+
				"20. He keepeth all his bones: not one of them is broken.</br>"+
				"21. Evil shall slay the wicked: and they that hate the righteous shall be desolate.</br>"+
				"22. The LORD redeemeth the soul of his servants: and none of them that trust in him shall be desolate.</br>"},

	val_26: {item: "Depressed", vers:"PSalm 91", class:"emogiDepressed",
	itemText:	"1. He that dwelleth in the secret place of the Most High shall abide under the shadow of the Almighty.</br>"+
				"2. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.</br>"+
				"3. Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.</br>"+
				"4. He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.</br>"+
				"5. Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day;</br>"+
				"6. Nor for the pestilence that walketh in darkness; nor for the destruction that wasteth at noon-day.</br>"+
				"7. A thousand shall fall at thy side, and ten thousand at thy right hand; but it shall not come nigh thee.</br>"+
				"8. Only with thy eyes shalt thou behold and see the reward of the wicked.</br>"+
				"9. Because thou hast made the LORD who is my refuge, even the Most High, thy habitation;</br>"+
				"10. There shall no evil befall thee, neither shall any plague come nigh thy dwelling.</br>"+
				"11. For he shall give his angels charge over thee, to keep thee in all thy ways.</br>"+
				"12. They shall bear thee up in their hands, lest thou dash thy foot against a stone.</br>"+
				"13. Thou shalt tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.</br>"+
				"14. Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name.</br>"+
				"15. He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honor him.</br>"+
				"16. With long life will I satisfy him, and show him my salvation.</br>"},

	val_27: {item: "Depressed", vers:"PSalm 118:5 - 6", class:"emogiDepressed", 
	itemText: 	"5. I called upon the LORD in distress: the LORD answered me, and set me in a large place.</br>"+
				"6. The LORD is on my side; I will not fear: what can man do to me?</br>"},

	val_28: {item: "Depressed", vers:"Lucas 8:22 - 25", class:"emogiDepressed", 
	itemText: 	"22. Now it came to pass on a certain day, that he went into a boat with his disciples: and he said to them, Let us go over to the other side of the lake. And they lanched forth.</br>"+
				"23. But as they sailed, he fell asleep: and there came down a storm of wind on the lake; and they were filled with water, and were in jeopardy.</br>"+
				"24. And they came to him, and awoke him, saying, Master, master, we perish. Then he arose, and rebuked the wind, and the raging of the water: and they ceased, and there was a calm.</br>"+
				"25. And he said to them, Where is your faith? And they being afraid, wondered, saying one to another, What manner of man is this! for he commandeth even the winds and water, and they obey him.</br>"},

	val_29: {item: "Discouraged", vers:"PSalm 23", class:"emogiDiscouraged",
	itemText:	"1. A Psalm of David. The LORD is my shepherd; I shall not want.</br>"+
				"2. He maketh me to lie down in green pastures: he leadeth me beside the still waters.</br>"+
				"3. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.</br>"+
				"4. Yes, though I walk through the valley of the shades of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.</br>"+
				"5. Thou preparest a table before me in the presence of my enemies: thou anointest my head with oil; my cup runneth over.</br>"+
				"6. Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.</br>"},

	val_30: {item: "Discouraged", vers:"PSalm 55:22", class:"emogiDiscouraged",
	itemText: 	"22. Cast thy burden upon the LORD, and he will sustain thee: he will never suffer the righteous to be moved.</br>"},

	val_31: {item: "Discouraged", vers:"Mat. 5:11 - 12", class:"emogiDiscouraged",
	itemText: 	"11. Blessed are ye when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake.</br>"+
				"12. Rejoice, and be exceeding glad: for great is your reward in heaven: for so they persecuted the prophets who were before you.</br>"},

	val_32: {item: "Discouraged", vers:"II Cor. 4:8 - 18", class:"emogiDiscouraged",
	itemText:	"8. We are troubled on every side, yet not distressed; we are perplexed, but not in despair;</br>"+
				"9. Persecuted, but not forsaken; cast down, but not destroyed;</br>"+
				"10. Always bearing about in the body the dying of the Lord Jesus, that the life also of Jesus may be made manifest in our body.</br>"+
				"11. For we who live are always delivered to death for Jesus' sake, that the life also of Jesus may be made manifest in our mortal flesh.</br>"+
				"12. So then death worketh in us, but life in you.</br>"+
				"13. We having the same spirit of faith, according as it is written, I believed, and therefore have I spoken; we also believe, and therefore speak;</br>"+
				"14. Knowing, that he who raised the Lord Jesus, will raise us also by Jesus, and will present us with you.</br>"+
				"15. For all things are for your sakes, that the abundant grace may, through the thanksgiving of many, redound to the glory of God.</br>"+
				"16. For which cause we faint not; but though our outward man is wasted, yet the inward man is renewed day by day.</br>"+
				"17. For our light affliction, which is but for a moment, worketh out for us a far more exceeding and eternal weight of glory;</br>"+
				"18. While we look not at the things which are seen, but at the things which are not seen: for the things which are seen are temporal; but the things which are not seen are eternal.</br>"},

	val_33: {item: "Discouraged", vers:"Fil. 4:4 - 7", class:"emogiDiscouraged",
	itemText:	"4. Rejoice in the Lord always: and again I say, Rejoice.</br>"+
				"5. Let your moderation be known to all men. The Lord is at hand.</br>"+
				"6. Be anxious for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known to God.</br>"+
				"7. And the peace of God, which passeth all understanding, will keep your hearts and minds through Christ Jesus.</br>"},

	val_34: {item: "Diverted", vers:"PSalm 51", class:"emogiDiverted",
	itemText:	"1. To the chief Musician, A Psalm of David, when Nathan the prophet came to him, after he had gone in to Bath-sheba. Have mercy upon me, O God, according to thy loving-kindness: according to the multitude of thy tender mercies, blot out my transgressions.</br>"+
				"2. Wash me thoroughly from my iniquity, and cleanse me from my sin.</br>"+
				"3. For I acknowledge my transgressions: and my sin is ever before me.</br>"+
				"4. Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mayest be justified when thou speakest, and be clear when thou judgest.</br>"+
				"5. Behold, I was shapen in iniquity; and in sin did my mother conceive me.</br>"+
				"6. Behold, thou desirest truth in the inward parts: and in the hidden part thou shalt make me to know wisdom.</br>"+
				"7. Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow.</br>"+
				"8. Make me to hear joy and gladness; that the bones which thou hast broken may rejoice.</br>"+
				"9. Hide thy face from my sins, and blot out all my iniquities.</br>"+
				"10. Create in me a clean heart, O God; and renew a right spirit within me.</br>"+
				"11. Cast me not away from thy presence; and take not thy holy spirit from me.</br>"+
				"12. Restore to me the joy of thy salvation; and uphold me with thy free spirit.</br>"+
				"13. Then will I teach transgressors thy ways; and sinners shall be converted to thee.</br>"+
				"14. Deliver me from blood-guiltiness, O God, thou God of my salvation: and my tongue shall sing aloud of thy righteousness.</br>"+
				"15. O Lord, open thou my lips; and my mouth shall show forth thy praise.</br>"+
				"16. For thou desirest not sacrifice: else would I give it: thou delightest not in burnt-offering.</br>"+
				"17. The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.</br>"+
				"18. Do good in thy good pleasure to Zion: build thou the walls of Jerusalem.</br>"+
				"19. Then shalt thou be pleased with the sacrifices of righteousness, with burnt-offering and whole burnt-offering: then shall they offer bullocks upon thy altar.</br>"},

	val_35: {item: "Diverted", vers:"I John 1:4 - 9", class:"emogiDiverted",
	itemText:	"4. And these things we write to you, that your joy may be full.</br>"+
				"5. This then is the message which we have heard from him, and declare to you, that God is light, and in him is no darkness at all.</br>"+
				"6. If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth:</br>"+
				"7. But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.</br>"+
				"8. If we say that we have no sin, we deceive ourselves, and the truth is not in us.</br>"+
				"9. If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.</br>"},

	val_36: {item: "Difficulties", vers:"PSalm 16", class:"emogiDifficulties",
	itemText:	"1. Michtam of David. Preserve me, O God: for in thee do I put my trust.</br>"+
				"2. O my soul, thou hast said to the LORD, Thou art my Lord: my goodness extendeth not to thee;</br>"+
				"3. But to the saints that are in the earth, and to the excellent, in whom is all my delight.</br>"+
				"4. Their sorrows shall be multiplied that hasten after another god: their drink-offerings of blood will I not offer, nor take their names into my lips.</br>"+
				"5. The LORD is the portion of my inheritance and of my cup: thou maintainest my lot.</br>"+
				"6. The lines have fallen to me in pleasant places; yes, I have a goodly heritage.</br>"+
				"7. I will bless the LORD, who hath given me counsel: my reins also instruct me in the night season.</br>"+
				"8. I have set the LORD always before me: because he is at my right hand, I shall not be moved.</br>"+
				"9. Therefore my heart is glad, and my glory rejoiceth: my flesh also shall rest in hope.</br>"+
				"10. For thou wilt not leave my soul in hell; neither wilt thou suffer thy Holy One to see corruption.</br>"+
				"11. Thou wilt show me the path of life: in thy presence is fullness of joy; at thy right hand are pleasures for evermore.</br>"},

	val_37: {item: "Difficulties", vers:"PSalm 31", class:"emogiDifficulties",
	itemText:	"1. To the chief Musician, A Psalm of David. In thee, O LORD, do I put my trust; let me never be ashamed: deliver me in thy righteousness.</br>"+
				"2. Bow down thy ear to me; deliver me speedily: be thou my strong rock, for a house of defense to save me.</br>"+
				"3. For thou art my rock and my fortress; therefore for thy name's sake lead me, and guide me.</br>"+
				"4. Pull me out of the net that they have laid privily for me: for thou art my strength.</br>"+
				"5. Into thy hand I commit my spirit: thou hast redeemed me, O LORD God of truth.</br>"+
				"6. I have hated them that regard lying vanities: but I trust in the LORD.</br>"+
				"7. I will be glad and rejoice in thy mercy: for thou hast considered my trouble; thou hast known my soul in adversities;</br>"+
				"8. And hast not shut me up into the hand of the enemy: thou hast set my foot in a large room.</br>"+
				"9. Have mercy upon me, O LORD, for I am in trouble: my eye is consumed with grief, yes, my soul and my belly.</br>"+
				"10. For my life is spent with grief, and my years with sighing: my strength faileth because of my iniquity, and my bones are consumed.</br>"+
				"11. I was a reproach among all my enemies, but especially among my neighbors, and a fear to my acquaintance: they that saw me without fled from me.</br>"+
				"12. I am forgotten as a dead man out of mind: I am like a broken vessel.</br>"+
				"13. For I have heard the slander of many: fear was on every side: while they took counsel together against me, they devised to take away my life.</br>"+
				"14. But I trusted in thee, O LORD: I said, Thou art my God.</br>"+
				"15. My times are in thy hand: deliver me from the hand of my enemies, and from them that persecute me.</br>"+
				"16. Make thy face to shine upon thy servant: save me for thy mercies' sake.</br>"+
				"17. Let me not be ashamed, O LORD; for I have called upon thee: let the wicked be ashamed, and let them be silent in the grave.</br>"+
				"18. Let the lying lips be put to silence; which speak grievous things proudly and contemptuously against the righteous.</br>"+
				"19. Oh how great is thy goodness, which thou hast laid up for them that fear thee; which thou hast wrought for them that trust in thee before the sons of men!</br>"+
				"20. Thou shalt hide them in the secret of thy presence from the pride of man: thou shalt keep them secretly in a pavilion from the strife of tongues.</br>"+
				"21. Blessed be the LORD: for he hath showed me his wonderful kindness in a strong city.</br>"+
				"22. For I said in my haste, I am cut off from before thy eyes: nevertheless thou heardest the voice of my supplications when I cried to thee.</br>"+
				"23. O love the LORD, all ye his saints: for the LORD preserveth the faithful, and plentifully rewardeth the proud doer.</br>"+
				"24. Be of good courage, and he will strengthen your heart, all ye that hope in the LORD.</br>"},

	val_38: {item: "Difficulties", vers:"John 14:1 - 4", class:"emogiDifficulties",
	itemText: 	"1. In the beginning was the Word, and the Word was with God, and the Word was God.</br>"+
				"2. The same was in the beginning with God.</br>"+
				"3. All things were made by him; and without him was not any thing made that was made.</br>"+
				"4. In him was life; and the life was the light of men.</br>"},

	val_39: {item: "Difficulties", vers:"Heb. 7:25", class:"emogiDifficulties",
	itemText: 	"25. Wherefore he is able also to save them to the uttermost that come to God by him, seeing he ever liveth to make intercession for them.</br>"},

	val_40: {item: "In doubt", vers:"Mat. 8:26", class:"emogiInDoubt",
	itemText: 	"26. And he saith to them, Why are ye fearful, O ye of little faith? Then he arose, and rebuked the winds and the sea; and there was a great calm.</br>"},

	val_41: {item: "In doubt", vers:"Heb. 11", class:"emogiInDoubt",
	itemText:	"1. Now faith is the substance of things hoped for, the evidence of things not seen.</br>"+
				"2. For by it the elders obtained a good report.</br>"+
				"3. Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which appeared.</br>"+
				"4. By faith Abel offered to God a more excellent sacrifice than Cain, by which he obtained testimony that he was righteous, God testifying of his gifts: and by it he being dead yet speaketh.</br>"+
				"5. By faith Enoch was translated, that he should not see death; and was not found, because God had translated him: for before his translation he had this testimony, that he pleased God.</br>"+
				"6. But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.</br>"+
				"7. By faith Noah, being warned by God of things not seen as yet, moved with fear, prepared an ark to the saving of his house; by which he condemned the world, and became heir of the righteousness which is by faith.</br>"+
				"8. By faith Abraham, when he was called to remove into a place which he should afterwards receive for an inheritance, obeyed; and he went out not knowing whither he was going.</br>"+
				"9. By faith he sojourned in the land of promise, as in a foreign country, dwelling in tabernacles with Isaac and Jacob, the heirs with him of the same promise:</br>"+
				"10. For he looked for a city which hath foundations, whose builder and maker is God.</br>"+
				"11. Through faith also Sarah herself received strength to conceive seed, and was delivered of a child when she was past age, because she judged him faithful who had promised.</br>"+
				"12. Therefore there sprang even from one, and him as good as dead, so many as the stars of the sky in multitude, and as the sand which is by the sea-shore innumerable.</br>"+
				"13. These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth.</br>"+
				"14. For they that say such things declare plainly that they seek a country.</br>"+
				"15. And truly, if they had been mindful of that country from whence they came, they might have had opportunity to return.</br>"+
				"16. But now they desire a better country, that is, a heavenly: wherefore God is not ashamed to be called their God; for he hath prepared for them a city.</br>"+
				"17. By faith Abraham, when he was tried, offered up Isaac: and he that had received the promises offered up his only-begotten son,</br>"+
				"18. Of whom it was said, That in Isaac shall thy seed be called:</br>"+
				"19. Accounting that God was able to raise him even from the dead; from whence also he received him in a figure.</br>"+
				"20. By faith Isaac blessed Jacob and Esau concerning things to come.</br>"+
				"21. By faith Jacob, when he was dying, blessed both the sons of Joseph; and worshiped, leaning upon the top of his staff.</br>"+
				"22. By faith Joseph, when he died, made mention of the departing of the children of Israel; and gave commandment concerning his bones.</br>"+
				"23. By faith Moses when he was born, was hid three months by his parents, because they saw he was a proper child; and they were not afraid of the king's commandment.</br>"+
				"24. By faith Moses, when he had come to years, refused to be called the son of Pharaoh's daughter;</br>"+
				"25. Choosing rather to suffer affliction with the people of God, than to enjoy the pleasures of sin for a season;</br>"+
				"26. Esteeming the reproach of Christ greater riches than the treasures of Egypt: for he had respect to the recompense of the reward.</br>"+
				"27. By faith he forsook Egypt, not fearing the wrath of the king: for he endured, as seeing him who is invisible.</br>"+
				"28. Through faith he kept the passover, and the sprinkling of blood, lest he that destroyed the first-born should touch them.</br>"+
				"29. By faith they passed through the Red sea as by dry land: which the Egyptians essaying to do were drowned.</br>"+
				"30. By faith the walls of Jericho fell down after they had been encompassed seven days.</br>"+
				"31. By faith the harlot Rahab perished not with them that believed not, as she had received the spies with peace.</br>"+
				"32. And what shall I say more? for the time would fail me to tell of Gideon, and of Barak, and of Samson, and of Jephthah, of David also, and Samuel, and of the prophets:</br>"+
				"33. Who through faith subdued kingdoms, wrought righteousness, obtained promises, stopped the mouths of lions,</br>"+
				"34. Quenched the violence of fire, escaped the edge of the sword, out of weakness were made strong, became valiant in fight, turned to flight the armies of the aliens.</br>"+
				"35. Women received their dead raised to life again: and others were tortured, not accepting deliverance; that they might obtain a better resurrection:</br>"+
				"36. And others had trial of cruel mockings and scourgings, and, moreover of bonds and imprisonment:</br>"+
				"37. They were stoned, they were sawn asunder, were tempted, were slain with the sword: they wandered about in sheep-skins, and goat-skins; being destitute, afflicted, tormented;</br>"+
				"38. (Of whom the world was not worthy:) they wandered in deserts, and in mountains, and in dens and caves of the earth.</br>"+
				"39. And these all, having obtained a good report through faith, received not the promise:</br>"+
				"40. God having provided some better thing for us, that they without us should not be made perfect.</br>"},

	val_42: {item: "Sick or in pain", vers:"PSalm 38", class:"emogiSickorinPain",
	itemText:	"1. A Psalm of David, to bring to remembrance. O LORD, rebuke me not in thy wrath: neither chasten me in thy hot displeasure.</br>"+
				"2. For thy arrows stick fast in me, and thy hand falleth heavy upon me.</br>"+
				"3. There is no soundness in my flesh because of thy anger; neither is there any rest in my bones because of my sin.</br>"+
				"4. For my iniquities have gone over my head: as a heavy burden they are too heavy for me.</br>"+
				"5. My wounds are offensive, and are corrupt because of my foolishness.</br>"+
				"6. I am troubled; I am bowed down greatly; I go mourning all the day long.</br>"+
				"7. For my loins are filled with a lothsome disease: and there is no soundness in my flesh.</br>"+
				"8. I am feeble and grievously broken: I have roared by reason of the disquietness of my heart.</br>"+
				"9. Lord, all my desire is before thee; and my groaning is not hid from thee.</br>"+
				"10. My heart panteth, my strength faileth me: as for the light of my eyes, that also is gone from me.</br>"+
				"11. My lovers and my friends stand aloof from my affliction; and my kinsmen stand afar off.</br>"+
				"12. They also that seek after my life lay snares for me: and they that seek my hurt speak mischievous things, and imagine deceits all the day long.</br>"+
				"13. But I, as a deaf man, heard not; and I was as a dumb man that openeth not his mouth.</br>"+
				"14. Thus I was as a man that heareth not, and in whose mouth are no reproofs.</br>"+
				"15. For in thee, O LORD, do I hope: thou wilt hear, O Lord my God.</br>"+
				"16. For I said, Hear me, lest otherwise they should rejoice over me: when my foot slippeth, they magnify themselves against me.</br>"+
				"17. For I am ready to halt, and my sorrow is continually before me.</br>"+
				"18. For I will declare my iniquity; I will be sorry for my sin.</br>"+
				"19. But my enemies are lively, and they are strong: and they that hate me wrongfully are multiplied.</br>"+
				"20. They also that render evil for good are my adversaries; because I follow the thing that is good.</br>"+
				"21. Forsake me not, O LORD: O my God, be not far from me.</br>"+
				"22. Make haste to help me, O Lord my salvation.</br>"},

	val_43: {item: "Sick or in pain", vers:"Tiago 5:14 - 15", class:"emogiSickorinPain",
	itemText: 	"14. Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord:</br>"+
				"15. And the prayer of faith will save the sick, and the Lord will raise him up; and if he hath committed sins, they will be forgiven him.</br>"},

	val_44: {item: "Sick or in pain", vers:"Rom. 8:28, 38 - 39", class:"emogiSickorinPain",
	itemText:	"28. And we know that all things work together for good, to them that love God, to them who are the called according to his purpose.</br>"+
				"38. For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,</br>"+
				"39. Nor hight, nor depth, nor any other creature, will be able to separate us from the love of God which is in Christ Jesus our Lord.</br>"},

	val_45: {item: "Sick or in pain", vers:"II Cor. 12:9 - 10", class:"emogiSickorinPain",
	itemText: 	"9. And he said to me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.</br>"+
				"10. Therefore I take pleasure in infirmities, in reproaches, in necessities, in persecutions, in distresses for Christ's sake: for when I am weak, then am I strong.</br>"},

	val_46: {item: "Facing Crisis", vers:"PSalm 121", class:"emogiFacingCrisis",
	itemText: 	"1. A Song of degrees. I will lift up my eyes to the hills, from whence cometh my help.</br>"+
				"2. My help cometh from the LORD, who made heaven and earth.</br>"+
				"3. He will not suffer thy foot to be moved: he that keepeth thee will not slumber.</br>"+
				"4. Behold, he that keepeth Israel shall neither slumber nor sleep.</br>"+
				"5. The LORD is thy keeper: the LORD is thy shade upon thy right hand.</br>"+
				"6. The sun shall not smite thee by day, nor the moon by night.</br>"+
				"7. The LORD will preserve thee from all evil: he will preserve thy soul.</br>"+
				"8. The LORD will preserve thy going out and thy coming in from this time forth, and even for ever.</br>"},

	val_47: {item: "Facing Crisis", vers:"Mat. 6:25 - 34", class:"emogiFacingCrisis",
	itemText:	"25. Therefore I say to you, Be not anxious for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than food, and the body than raiment?</br>"+
				"26. Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?</br>"+
				"27. Which of you by anxious care can add one cubit to his stature?</br>"+
				"28. And why are ye anxious for raiment? Consider the lilies of the field how they grow? they toil not, neither do they spin?</br>"+
				"29. And yet I say to you, that even Solomon in all his glory was not arrayed like one of these.</br>"+
				"30. Wherefore, if God so clotheth the grass of the field, which to-day is, and to-morrow is cast into the oven, will he not much more clothe you, O ye of little faith?</br>"+
				"31. Therefore be not anxious, saying, What shall we eat? or what shall we drink? or, with what shall we be clothed?</br>"+
				"32. (For after all these things do the Gentiles seek) for your heavenly Father knoweth that ye have need of all these things.</br>"+
				"33. But seek ye first the kingdom of God, and his righteousness, and all these things shall be added to you.</br>"+
				"34. Therefore be not anxious for the morrow: for the morrow will be solicitous for the things of itself. Sufficient to the day is its own evil.</br>"},

	val_48: {item: "Facing Crisis", vers:"Heb. 4:16", class:"emogiFacingCrisis",
	itemText: 	"16. Let us therefore come boldly to the throne of grace, that we may obtain mercy, and find grace to help in time of need.</br>"},

	val_49: {item: "Lack faith", vers:"PSalm 42:5", class:"emogiLackFaith",
	itemText: 	"5. Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance.</br>"},

	val_50: {item: "Lack faith", vers:"Heb. 11", class:"emogiLackFaith",
	itemText:	"1. Now faith is the substance of things hoped for, the evidence of things not seen.</br>"+
				"2. For by it the elders obtained a good report.</br>"+
				"3. Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which appeared.</br>"+
				"4. By faith Abel offered to God a more excellent sacrifice than Cain, by which he obtained testimony that he was righteous, God testifying of his gifts: and by it he being dead yet speaketh.</br>"+
				"5. By faith Enoch was translated, that he should not see death; and was not found, because God had translated him: for before his translation he had this testimony, that he pleased God.</br>"+
				"6. But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.</br>"+
				"7. By faith Noah, being warned by God of things not seen as yet, moved with fear, prepared an ark to the saving of his house; by which he condemned the world, and became heir of the righteousness which is by faith.</br>"+
				"8. By faith Abraham, when he was called to remove into a place which he should afterwards receive for an inheritance, obeyed; and he went out not knowing whither he was going.</br>"+
				"9. By faith he sojourned in the land of promise, as in a foreign country, dwelling in tabernacles with Isaac and Jacob, the heirs with him of the same promise:</br>"+
				"10. For he looked for a city which hath foundations, whose builder and maker is God.</br>"+
				"11. Through faith also Sarah herself received strength to conceive seed, and was delivered of a child when she was past age, because she judged him faithful who had promised.</br>"+
				"12. Therefore there sprang even from one, and him as good as dead, so many as the stars of the sky in multitude, and as the sand which is by the sea-shore innumerable.</br>"+
				"13. These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth.</br>"+
				"14. For they that say such things declare plainly that they seek a country.</br>"+
				"15. And truly, if they had been mindful of that country from whence they came, they might have had opportunity to return.</br>"+
				"16. But now they desire a better country, that is, a heavenly: wherefore God is not ashamed to be called their God; for he hath prepared for them a city.</br>"+
				"17. By faith Abraham, when he was tried, offered up Isaac: and he that had received the promises offered up his only-begotten son,</br>"+
				"18. Of whom it was said, That in Isaac shall thy seed be called:</br>"+
				"19. Accounting that God was able to raise him even from the dead; from whence also he received him in a figure.</br>"+
				"20. By faith Isaac blessed Jacob and Esau concerning things to come.</br>"+
				"21. By faith Jacob, when he was dying, blessed both the sons of Joseph; and worshiped, leaning upon the top of his staff.</br>"+
				"22. By faith Joseph, when he died, made mention of the departing of the children of Israel; and gave commandment concerning his bones.</br>"+
				"23. By faith Moses when he was born, was hid three months by his parents, because they saw he was a proper child; and they were not afraid of the king's commandment.</br>"+
				"24. By faith Moses, when he had come to years, refused to be called the son of Pharaoh's daughter;</br>"+
				"25. Choosing rather to suffer affliction with the people of God, than to enjoy the pleasures of sin for a season;</br>"+
				"26. Esteeming the reproach of Christ greater riches than the treasures of Egypt: for he had respect to the recompense of the reward.</br>"+
				"27. By faith he forsook Egypt, not fearing the wrath of the king: for he endured, as seeing him who is invisible.</br>"+
				"28. Through faith he kept the passover, and the sprinkling of blood, lest he that destroyed the first-born should touch them.</br>"+
				"29. By faith they passed through the Red sea as by dry land: which the Egyptians essaying to do were drowned.</br>"+
				"30. By faith the walls of Jericho fell down after they had been encompassed seven days.</br>"+
				"31. By faith the harlot Rahab perished not with them that believed not, as she had received the spies with peace.</br>"+
				"32. And what shall I say more? for the time would fail me to tell of Gideon, and of Barak, and of Samson, and of Jephthah, of David also, and Samuel, and of the prophets:</br>"+
				"33. Who through faith subdued kingdoms, wrought righteousness, obtained promises, stopped the mouths of lions,</br>"+
				"34. Quenched the violence of fire, escaped the edge of the sword, out of weakness were made strong, became valiant in fight, turned to flight the armies of the aliens.</br>"+
				"35. Women received their dead raised to life again: and others were tortured, not accepting deliverance; that they might obtain a better resurrection:</br>"+
				"36. And others had trial of cruel mockings and scourgings, and, moreover of bonds and imprisonment:</br>"+
				"37. They were stoned, they were sawn asunder, were tempted, were slain with the sword: they wandered about in sheep-skins, and goat-skins; being destitute, afflicted, tormented;</br>"+
				"38. (Of whom the world was not worthy:) they wandered in deserts, and in mountains, and in dens and caves of the earth.</br>"+
				"39. And these all, having obtained a good report through faith, received not the promise:</br>"+
				"40. God having provided some better thing for us, that they without us should not be made perfect.</br>"},

	val_51: {item: "Lack friends", vers:"PSalm 41:9 - 13", class:"emogiLackFriends",
	itemText:	"9. Yes, my own familiar friend, in whom I trusted, who ate of my bread, hath lifted up his heel against me.</br>"+
				"10. But thou, O LORD, be merciful to me, and raise me up, that I may requite them.</br>"+
				"11. By this I know that thou favorest me, because my enemy doth not triumph over me.</br>"+
				"12. And as for me, thou upholdest me in my integrity, and settest me before thy face for ever.</br>"+
				"13. Blessed be the LORD God of Israel from everlasting, and to everlasting. Amen, and amen.</br>"},

	val_52: {item: "Lack friends", vers:"Lucas 17:3 - 4", class:"emogiLackFriends",
	itemText: 	"3. Take heed to yourselves: If thy brother shall trespass against thee, rebuke him; and if he shall repent forgive him.</br>"+
				"4. And if he shall trespass against thee seven times in a day, and seven times in a day shall turn again to thee, saying, I repent; thou shalt forgive him.</br>"},

	val_53: {item: "Lack friends", vers:"Rom. 12:14 - 17, 19 - 21", class:"emogiLackFriends",
	itemText:	"14. Bless them who persecute you; bless, and curse not.</br>"+
				"15. Rejoice with them that rejoice, and weep with them that weep.</br>"+
				"16. Be of the same mind one towards another. Mind not high things, but condescend to men of low estate. Be not wise in your own conceits.</br>"+
				"17. Recompense to no man evil for evil. Provide things honest in the sight of all men.</br>"+
				"19. Dearly beloved, avenge not yourselves, but rather give place to wrath: for it is written, Vengeance is mine; I will repay, saith the Lord.</br>"+
				"20. Therefore if thy enemy hungereth, feed him; if he thirsteth, give him drink: for in so doing thou shalt heap coals of fire on his head.</br>"+
				"21. Be not overcome by evil, but overcome evil with good.</br>"},

	val_54: {item: "Lack friends", vers:"II Tim. 4:16 - 18", class:"emogiLackFriends",
	itemText: 	"16. At my first answer no man stood with me, but all men forsook me: I pray God that it may not be laid to their charge.</br>"+
				"17. Notwithstanding, the Lord stood with me, and strengthened me; that by me the preaching might be fully known, and that all the Gentiles might hear: and I was delivered out of the mouth of the lion.</br>"+
				"18. And the Lord will deliver me from every evil work, and will preserve me to his heavenly kingdom; to whom be glory for ever and ever. Amen.</br>"},

	val_55: {item: "Needing advice", vers:"PSalm 32:8", class:"emogiNeedingAdvice",
	itemText: 	"8. I will instruct thee, and teach thee in the way which thou shalt go: I will guide thee with my eye.</br>"},

	val_56: {item: "Needing peace", vers:"John 14:1 - 4", class:"emogiNeedingPeace",
	itemText: 	"1. Let not your heart be troubled: ye believe in God, believe also in me.</br>"+
				"2. In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.</br>"+
				"3. And if I go and prepare a place for you, I will come again and receive you to myself; that where I am, there ye may be also.</br>"+
				"4. And whither I go ye know, and the way ye know.</br>"},

	val_57: {item: "Needing peace", vers:"John 16:33", class:"emogiNeedingPeace",
	itemText: 	"33. These things I have spoken to you, that in me ye may have peace. In the world ye will have tribulation, but be of good cheer: I have overcome the world.</br>"},

	val_58: {item: "Needing peace", vers:"Rom. 5:1 - 5", class:"emogiNeedingPeace",
	itemText: 	"1. Therefore being justified by faith, we have peace with God, through our Lord Jesus Christ:</br>"+
				"2. By whom also we have access by faith into this grace in which we stand, and rejoice in hope of the glory of God</br>"+
				"3. And not only so, but we glory in tribulations also; knowing that tribulation worketh patience;</br>"+
				"4. And patience, experience; and experience, hope:</br>"+
				"5. And hope maketh not ashamed, because the love of God is shed abroad in our hearts, by the Holy Spirit which is given to us.</br>"},

	val_59: {item: "Needing peace", vers:"Fil. 4: 6 - 7", class:"emogiNeedingPeace",
	itemText: 	"6. Be anxious for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known to God.</br>"+
				"7. And the peace of God, which passeth all understanding, will keep your hearts and minds through Christ Jesus.</br>"},

	val_60: {item: "Needing protection", vers:"PSalm 18:1 - 3", class:"emogiNeedingProtection",
	itemText: 	"1. To the chief Musician, A Psalm of David, the servant of the LORD, who spoke to the LORD the words of this song in the day that the LORD delivered him from the hand of all his enemies, and from the hand of Saul: And he said, I will love thee, O LORD, my strength.</br>"+
				"2. The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower.</br>"+
				"3. I will call upon the LORD, who is worthy to be praised: so shall I be saved from my enemies.</br>"},

	val_61: {item: "Needing protection", vers:"PSalm 34:7", class:"emogiNeedingProtection",
	itemText: 	"7. The angel of the LORD encampeth around them that fear him, and delivereth them.</br>"},

	val_62: {item: "Needing protection of God", vers:"PSalm 27:1 - 6", class:"emogiRequiringProtectionOfGod",
	itemText: 	"1. A Psalm of David. The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?</br>"+
				"2. When the wicked, even my enemies and my foes, came upon me to eat up my flesh, they stumbled and fell.</br>"+
				"3. Though a host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident.</br>"+
				"4. One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to inquire in his temple.</br>"+
				"5. For in the time of trouble he will hide me in his pavilion: in the secret of his tabernacle will he hide me; he will set me up upon a rock.</br>"+
				"6. And now shall my head be lifted above my enemies around me: therefore will I offer in his tabernacle sacrifices of joy; I will sing, yes, I will sing praises to the LORD.</br>"},

	val_63: {item: "Needing protection of God", vers:"PSalm 91", class:"emogiRequiringProtectionOfGod",
	itemText:	"1. He that dwelleth in the secret place of the Most High shall abide under the shadow of the Almighty.</br>"+
				"2. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.</br>"+
				"3. Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.</br>"+
				"4. He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.</br>"+
				"5. Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day;</br>"+
				"6. Nor for the pestilence that walketh in darkness; nor for the destruction that wasteth at noon-day.</br>"+
				"7. A thousand shall fall at thy side, and ten thousand at thy right hand; but it shall not come nigh thee.</br>"+
				"8. Only with thy eyes shalt thou behold and see the reward of the wicked.</br>"+
				"9. Because thou hast made the LORD who is my refuge, even the Most High, thy habitation;</br>"+
				"10. There shall no evil befall thee, neither shall any plague come nigh thy dwelling.</br>"+
				"11. For he shall give his angels charge over thee, to keep thee in all thy ways.</br>"+
				"12. They shall bear thee up in their hands, lest thou dash thy foot against a stone.</br>"+
				"13. Thou shalt tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.</br>"+
				"14. Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name.</br>"+
				"15. He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honor him.</br>"+
				"16. With long life will I satisfy him, and show him my salvation.</br>"},

	val_64: {item: "Needing protection of God", vers:"Fil. 4:19", class:"emogiRequiringProtectionOfGod",
	itemText: 	"19. But my God will supply all your need according to his riches in glory by Christ Jesus.</br>"},

	val_65: {item: "Needing rules for living", vers:"Rom. 12", class:"emogiNeedingRulesForLiving",
	itemText:	"1. I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service.</br>"+
				"2. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good and acceptable, and perfect will of God.</br>"+
				"3. For through the grace given to me, I say, to every man that is among you, not to think of himself more highly than he ought to think; but to think soberly, according as God hath dealt to every man the measure of faith.</br>"+
				"4. For as we have many members in one body, and all members have not the same office:</br>"+
				"5. So we, being many, are one body in Christ, and every one members one of another.</br>"+
				"6. Having then gifts differing according to the grace that is given to us, whether prophecy, let us prophesy according to the proportion of faith;</br>"+
				"7. Or ministry, let us wait on our ministering: or he that teacheth, on teaching:</br>"+
				"8. Or he that exhorteth, on exhortation: he that giveth, let him do it with simplicity; he that ruleth, with diligence; he that showeth mercy, with cheerfulness.</br>"+
				"9. Let love be without dissimulation. Abhor that which is evil; cleave to that which is good.</br>"+
				"10. Be kindly affectioned one to another with brotherly love; in honor preferring one another;</br>"+
				"11. Not slothful in business; fervent in spirit; serving the Lord;</br>"+
				"12. Rejoicing in hope; patient in tribulation; continuing earnest in prayer;</br>"+
				"13. Distributing to the necessity of saints; given to hospitality.</br>"+
				"14. Bless them who persecute you; bless, and curse not.</br>"+
				"15. Rejoice with them that rejoice, and weep with them that weep.</br>"+
				"16. Be of the same mind one towards another. Mind not high things, but condescend to men of low estate. Be not wise in your own conceits.</br>"+
				"17. Recompense to no man evil for evil. Provide things honest in the sight of all men.</br>"+
				"18. If it is possible, as much as lieth in you, live peaceably with all men.</br>"+
				"19. Dearly beloved, avenge not yourselves, but rather give place to wrath: for it is written, Vengeance is mine; I will repay, saith the Lord.</br>"+
				"20. Therefore if thy enemy hungereth, feed him; if he thirsteth, give him drink: for in so doing thou shalt heap coals of fire on his head.</br>"+
				"21. Be not overcome by evil, but overcome evil with good.</br>"},

	val_66: {item: "Worried", vers:"Mat. 6:19 - 34",  class:"emogiWorried",
	itemText:	"19. Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:</br>"+
				"20. But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal.</br>"+
				"21. For where your treasure is, there will your heart be also.</br>"+
				"22. The light of the body is the eye: if therefore thy eye be single, thy whole body will be full of light.</br>"+
				"23. But if thy eye be evil, thy whole body will be full of darkness. If therefore the light that is in thee is darkness, how great is that darkness!</br>"+
				"24. No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.</br>"+
				"25. Therefore I say to you, Be not anxious for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than food, and the body than raiment?</br>"+
				"26. Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?</br>"+
				"27. Which of you by anxious care can add one cubit to his stature?</br>"+
				"28. And why are ye anxious for raiment? Consider the lilies of the field how they grow? they toil not, neither do they spin?</br>"+
				"29. And yet I say to you, that even Solomon in all his glory was not arrayed like one of these.</br>"+
				"30. Wherefore, if God so clotheth the grass of the field, which to-day is, and to-morrow is cast into the oven, will he not much more clothe you, O ye of little faith?</br>"+
				"31. Therefore be not anxious, saying, What shall we eat? or what shall we drink? or, with what shall we be clothed?</br>"+
				"32. (For after all these things do the Gentiles seek) for your heavenly Father knoweth that ye have need of all these things.</br>"+
				"33. But seek ye first the kingdom of God, and his righteousness, and all these things shall be added to you.</br>"+
				"34. Therefore be not anxious for the morrow: for the morrow will be solicitous for the things of itself. Sufficient to the day is its own evil.</br>"},

	val_67: {item: "Worried", vers:"I Peter 5:6 - 7", class:"emogiWorried",
	itemText: 	"6. Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:</br>"+
				"7. Casting all your care upon him; for he careth for you.</br>"},

	val_68: {item: "Afraid", vers:"PSalm 34:4", class:"emogiApprehending",
	itemText: 	"4. I sought the LORD, and he heard me, and delivered me from all my fears.</br>"},

	val_69: {item: "Afraid", vers:"Mat. 10:28", class:"emogiApprehending",
	itemText: 	"28. And fear not them who kill the body, but are not able to kill the soul: but rather fear him who is able to destroy both soul and body in hell.</br>"},

	val_70: {item: "Afraid", vers:"II Tim. 1:7", 
	itemText: 	"7. For God hath not given us the spirit of fear, but of power, and of love, and of a sound mind.</br>"},

	val_71: {item: "Afraid", vers:"Heb. 13:5 - 6", class:"emogiApprehending",
	itemText: 	"5. Let your manner of life be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.</br>"+
				"6. So that we may boldly say, The Lord is my helper, and I will not fear what man shall do to me.</br>"},

	val_72: {item: "Lonely", vers:"PSalm 23", class:"emogiLonely",
	itemText:	"1. A Psalm of David. The LORD is my shepherd; I shall not want.</br>"+
				"2. He maketh me to lie down in green pastures: he leadeth me beside the still waters.</br>"+
				"3. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.</br>"+
				"4. Yes, though I walk through the valley of the shades of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.</br>"+
				"5. Thou preparest a table before me in the presence of my enemies: thou anointest my head with oil; my cup runneth over.</br>"+
				"6. Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.</br>"},

	val_73: {item: "Lonely", vers:"Heb. 13:5 - 6", class:"emogiLonely",
	itemText: 	"5. Let your manner of life be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.</br>"+
				"6. So that we may boldly say, The Lord is my helper, and I will not fear what man shall do to me.</br>"},

	val_74: {item: "Tempted", vers:"PSalm 1", class:"emogiTempted",
	itemText:	"1. Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of scoffers.</br>"+
				"2. But his delight is in the law of the LORD; and in his law doth he meditate day and night.</br>"+
				"3. And he shall be like a tree planted by the rivers of water, that bringeth forth its fruit in season; its leaf also shall not wither; and whatever he doeth shall prosper.</br>"+
				"4. The ungodly are not so: but are like the chaff which the wind driveth away.</br>"+
				"5. Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.</br>"+
				"6. For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish.</br>"},

	val_75: {item: "Tempted", vers:"PSalm 139:23 - 24", class:"emogiTempted",
	itemText: 	"23. Search me, O God, and know my heart; try me, and know my thoughts:</br>"+
				"24. And see if there is any wicked way in me, and lead me in the way everlasting.</br>"},

	val_76: {item: "Tempted", vers:"Mat. 26:41", class:"emogiTempted",
	itemText: 	"41. Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.</br>"},

	val_77: {item: "Tempted", vers:"I Cor. 10:12 - 14", class:"emogiTempted",
	itemText: 	"12. Wherefore let him that thinketh he standeth, take heed lest he fall.</br>"+
				"13. There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above what ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.</br>"+
				"14. Wherefore, my dearly beloved, flee from idolatry.</br>"},

	val_78: {item: "Tempted", vers:"Fil. 4:8", class:"emogiTempted",
	itemText: 	"8. Finally, brethren, whatever things are true, whatever things are honest, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report; if there is any virtue, and if there is any praise, think on these things.</br>"},

	val_79: {item: "Tempted", vers:"Tiago 4:7", class:"emogiTempted",
	itemText: "7. Submit yourselves therefore to God. Resist the devil, and he will flee from you.</br>"},

	val_80: {item: "Tempted", vers:"II Peter 2:9", class:"emogiTempted",
	itemText: 	"9. The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust to the day of judgment to be punished:</br>"},

	val_81: {item: "Tempted", vers:"II Peter 3:17", class:"emogiTempted",
	itemText: 	"17. Ye therefore, beloved, seeing ye know these things before, beware lest ye also, being led away with the error of the wicked, fall from your own steadfastness.</br>"},

	val_82: {item: "Sad", vers:"Mat. 5:4", class:"emogiSad",
	itemText: "4. Blessed are they that mourn: for they shall be comforted.</br>"},

	val_83: {item: "Sad", vers:"II Cor. 1:3 - 4", class:"emogiSad",
	itemText: 	"3. Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all consolation.</br>"+
				"4. Who comforteth us in all our tribulation, that we may be able to comfort them who are in any trouble by the consolation with which we ourselves are comforted by God.</br>"},

	val_84: {item: "Beaten", vers:"PSalm 6", class:"emogiBeaten",
	itemText:	"1. To the chief Musician on Neginoth upon Sheminith, A Psalm of David. O LORD, rebuke me not in thy anger, neither chasten me in thy hot displeasure.</br>"+
				"2. Have mercy upon me, O LORD; for I am weak: O LORD, heal me; for my bones are agitated.</br>"+
				"3. My soul is also greatly disquieted: but thou, O LORD, how long?</br>"+
				"4. Return, O LORD, deliver my soul: Oh save me for thy mercies sake.</br>"+
				"5. For in death there is no remembrance of thee: in the grave who will give thee thanks?</br>"+
				"6. I am weary with my groaning; all the night I make my bed to swim; I water my couch with my tears.</br>"+
				"7. My eye is consumed because of grief; it groweth old because of all my enemies.</br>"+
				"8. Depart from me, all ye workers of iniquity; for the LORD hath heard the voice of my weeping.</br>"+
				"9. The LORD hath heard my supplication; the LORD will receive my prayer.</br>"+
				"10. Let all my enemies be ashamed and greatly disquieted: let them return and be suddenly ashamed.</br>"},

	val_85: {item: "Beaten", vers:"Rom. 8:31 - 39", class:"emogiBeaten",
	itemText:	"31. What shall we then say to these things? If God is for us, who can be against us?</br>"+
				"32. He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?</br>"+
				"33. Who will lay any thing to the charge of God's elect? It is God that justifieth:</br>"+
				"34. Who is he that condemneth? It is Christ that died, or rather that is risen again, who is even at the right hand of God, who also maketh intercession for us.</br>"+
				"35. Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?</br>"+
				"36. As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.</br>"+
				"37. But in all these things we are more than conquerors, through him that loved us.</br>"+
				"38. For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,</br>"+
				"39. Nor hight, nor depth, nor any other creature, will be able to separate us from the love of God which is in Christ Jesus our Lord.</br>"},

	val_86: {item: "Beaten", vers:"I John 1:4 - 9", class:"emogiBeaten",
	itemText:	"4. And these things we write to you, that your joy may be full.</br>"+
				"5. This then is the message which we have heard from him, and declare to you, that God is light, and in him is no darkness at all.</br>"+
				"6. If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth:</br>"+
				"7. But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.</br>"+
				"8. If we say that we have no sin, we deceive ourselves, and the truth is not in us.</br>"+
				"9. If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.</br>"},

	val_87: {item: "Traveling", vers:"PSalm 121", class:"emogiTraveling",
	itemText:	"1. A Song of degrees. I will lift up my eyes to the hills, from whence cometh my help.</br>"+
				"2. My help cometh from the LORD, who made heaven and earth.</br>"+
				"3. He will not suffer thy foot to be moved: he that keepeth thee will not slumber.</br>"+
				"4. Behold, he that keepeth Israel shall neither slumber nor sleep.</br>"+
				"5. The LORD is thy keeper: the LORD is thy shade upon thy right hand.</br>"+
				"6. The sun shall not smite thee by day, nor the moon by night.</br>"+
				"7. The LORD will preserve thee from all evil: he will preserve thy soul.</br>"+
				"8. The LORD will preserve thy going out and thy coming in from this time forth, and even for ever.</br>"}

}


};
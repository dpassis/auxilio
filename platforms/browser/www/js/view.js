
//Define language
var language = navigator.language.split("-"); 
var language_default = language[0];


//Verify if language is PT or EN, if not set the default language as EN
if(language_default != "en" && language_default != "pt" || language_default === " "){
	language_default = "pt";
}


var language_root = language_default; 
                
/**
*
* Render page with the help List
*
**/
var HomeView = function(){

    this.header  = "<div/>";
	this.content = "<div/>";

	this.initialize = function(){
		
		this.content 	= Handlebars.compile($("#content-tpl").html());
		this.header  	= Handlebars.compile($("#header-tpl").html());
	
	};

	this.render = function(){

			
		  	var	items = helpList[language_root];
				

   			var contextHeader  = {title: header[language_root].home.desc, img: header[language_root].home.img };
   			var contextContent = {body:"<div>"+
							                "<h1>"+startPage[language_root].appName_1.content+"</h1>"+
							            "</div>",items: items};

   			 $('#header').html(this.header(contextHeader));
   			 $('#content').html(this.content(contextContent));
	};
	
	this.run = function(){
		
		this.initialize();
		this.render();
	};
	
};



/**
*
* Render the About Page
*
**/
var AboutView = function(){

    this.header  = "<div/>";
	this.content = "<div/>";

	this.initialize = function(){
		
		this.content = Handlebars.compile($("#content-tpl").html());
		this.header = Handlebars.compile($("#header-tpl").html());
	
	};

	this.render = function(){
	
   			var contextHeader  = {title: header[language_root].about.desc, img: header[language_root].about.img };
   			var contextContent = {body:"<div style ='text-align:center; margin-top: 15px;'>"+
							                "<h1>"+about[language_root].aboutTitle+"</h1>"+
							                "<p style ='text-align:center; padding-left: 10px; padding-right: 10px; font-style: italic;font-weight: bold;'>"+about[language_root].aboutSubTitle+"</p>"+
							                "<p style ='text-align:left; padding-left: 40px; padding-right: 10px; font-weight: bold;'>"+about[language_root].exampleTitle+"</p>"+
							                "<p style = 'padding-left: 20px;padding-right: 20px; text-align: justify'>"+about[language_root].exampleContent+"</p>"+
							                "<p style ='text-align:center; padding-left: 10px; padding-right: 10px; font-style: italic;font-weight: bold; text-decoration: underline;'>"+about[language_root].aboutImportant+"</p>"+
							                "<p style = 'padding-left: 20px;padding-right: 20px; text-align: justify'>"+about[language_root].aboutContent+"</p>"+
							                "<div>"+
							                    "<a class='share' href='#' onclick='app.shareApp(\""+util[language_root].downloadThisApp.content+"\")'><span>"+util[language_root].shareThisApp.content+"</span></a>"+
							               "</div>"+
							            "</div>"};

   			 $('#header').html(this.header(contextHeader));
   			 $('#content').html(this.content(contextContent));
	};
	
	this.run = function(){
		
		this.initialize();
		this.render();
	};
};

/**
*
* Render the Help Page
*
**/
var HelpView = function(){
	

	this.header  = "<div/>";
	this.content = "<div/>";


	this.initialize = function(){

		this.content = Handlebars.compile($("#content-tpl").html());
		this.header = Handlebars.compile($("#header-tpl").html());
	

	};


	this.render = function(){

   			var contextHeader  = {title: header[language_root].help.desc, img: header[language_root].help.img };
   			var contextContent = {body:"<div style ='text-align:center; margin-top: 15px;'>"+
							               "<h1>"+help[language_root].helpTitle+"</h1>"+
							               "<p style ='text-align:center; padding-left: 10px; padding-right: 10px; font-style: italic;font-weight: bold;'>"+help[language_root].findReference+"</p>"+
							               "<p style = 'padding-left: 20px;padding-right: 20px; text-align: justify'>"+help[language_root].content+"</p>"+
							               "<p style ='text-align:center; padding-left: 10px; padding-right: 10px; font-style: italic;font-weight: bold;'>"+help[language_root].shareTitle+"</p>"+
							               "<p style = 'padding-left: 20px;padding-right: 20px; text-align: justify'>"+help[language_root].shareContent+"</p>"+
							               "<p style ='text-align:center; padding-left: 10px; padding-right: 10px; font-style: italic;font-weight: bold;'>"+help[language_root].exitTitle+"</p>"+
							               "<p style = 'padding-left: 20px;padding-right: 20px; text-align: justify'>"+help[language_root].exitContent+"</p>"+
							                "<div>"+
							                	"</br>"+
							                    "<a class='share' href='#' onclick='app.shareApp(\""+util[language_root].downloadThisApp.content+"\")'><span>"+util[language_root].shareThisApp.content+"</span></a>"+
							               "</div>"+
							            "</div>"};

   			 $('#header').html(this.header(contextHeader));
   			 $('#content').html(this.content(contextContent));
	};
	
	this.run = function(){
		
		this.initialize();
		this.render();
	};
	


};

/**
*
* Render the Help Page
*
**/
var TextView = function(itemId, classId){
	

	this.header  = "<div/>";
	this.content = "<div/>";

	this.initialize = function(){
		
		this.content 	= Handlebars.compile($("#content-tpl").html());
		this.header  	= Handlebars.compile($("#header-tpl").html());
	
	};

	this.render = function(){

			
		  	var	texto = textList[language_root];

		  	

   			var contextHeader  = {title: '', img: '' };
   			var contextContent = {body:"<div style ='text-align:center'>"+
   											"<br/>"+
							                "<h1 id='"+texto[itemId].class+"'><span class='"+texto[itemId].class+"'></span>"+texto[itemId].item+"</h1>"+
							                "<h2>"+texto[itemId].vers+"</h2>"+
							                "<p style ='text-align:justify; padding-left: 20px; padding-right: 20px;'>"+texto[itemId].itemText+"</p>"+
							                "<a class='share' href='#"+texto[itemId].class+"' onclick='app.socialShare(\""+texto[itemId].class+"\",\""+startPage[language_root].appName_1.content+"\",\""+texto[itemId].item+"\")'><span>"+util[language_root].share.content+"</span></a>"+
							            "</div>"
							        	}

   			 $('#header').html(this.header(contextHeader));
   			 $('#content').html(this.content(contextContent));

   			 

	};
	
	this.run = function(){
		
		this.initialize();
		this.render();
	};
	


};


var AuxilioView = function(){

	this.header = "<div/>";
	this.sideBar = "<div/>";
	this.content = "<div/>";

	this.initialize = function() {
		
		this.header = Handlebars.compile($("#header-tpl").html());
		this.sideBar = Handlebars.compile($("#sidebar-tpl").html());
		this.content = Handlebars.compile($("#content-tpl").html());
		
	};


	this.render = function(){

	var context = {
	  items: menu[language_root]
	};

	var contextHeader  = {header:"<header id='header' style='text-align: center'>",
						 _header:"</header>",
	 					 title: startPage[language_root].appName.content, img: ""};


	var contextContent = {body:"<div id='content' class='scroll'>"+
									"<div class='app' id='pagehome'>"+
							                 "<h1>"+startPage[language_root].appName.content+"</h1>"+
							                "<div id='deviceready' class='blink'>"+
							                    "<p class='event listening'>"+startPage[language_root].starting.content+"</p>"+
							                    "<p class='event received'><a style='color: black; text-decoration:none;' href='#' onclick='app.homeViewNoToggle()'><span>"+startPage[language_root].startApp.content+"</span></a></p>"+
							               "</div>"+
							            "</div>"};


		$(document.body).append(this.header(contextHeader));
		$(document.body).append(this.content(contextContent));
		$(document.body).append(this.sideBar(context));
		
	};
	
	this.run = function(){
		
		this.initialize();
		this.render();
	};

};

 
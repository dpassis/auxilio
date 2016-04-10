
//Define language
var language = navigator.language.split("-"); 
var language_default = language[0];


//Verify if language is PT or EN, if not set the default language as EN
if(language_default != "en" && language_default != "pt"){
	language_default = "en";
}


var language_root = language_default; 
                
/**
*
* Render the Home Page
*
**/
var HomeView = function(){

    this.header  = "<div/>";
    //this.listHelp = "<div/>";
	this.content = "<div/>";

	this.initialize = function(){
		
		this.content 	= Handlebars.compile($("#content-tpl").html());
		this.header  	= Handlebars.compile($("#header-tpl").html());
		//this.listHelp 	= Handlebars.compile($("#listHelp-tpl").html());

	
	};

	this.render = function(){

			
		  	var	items = helpList[language_root];
				

   			var contextHeader  = {title: header[language_root].home.desc, img: header[language_root].home.img };
   			var contextContent = {body:"<div>"+
							                "<h1>"+startPage[language_root].appName.content+"</h1>"+
							            "</div>",items: items};

   			 $('#header').html(this.header(contextHeader));
   			 $('#content').html(this.content(contextContent));
   			 //$('#listHelp').html(this.listHelp(context));
   			 //$(document.body).append(this.listHelp(context));
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
   			var contextContent = {body:"<div class='app' id='pagehome'>"+
							                "<h1>About</h1>"+
							                "<div id='deviceready' class='blink'>"+
							                    "<p class='event listening'>Conectando...</p>"+
							                    "<p class='event received'>All about you</p>"+
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
   			var contextContent = {body:"<div class='app' id='pagehome'>"+
							                "<h1>Help</h1>"+
							                "<div id='deviceready' class='blink'>"+
							                    "<p class='event listening'>Conectando...</p>"+
							                    "<p class='event received'>All about you</p>"+
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
var TextView = function(itemId){
	

	 this.header  = "<div/>";
    //this.listHelp = "<div/>";
	this.content = "<div/>";

	this.initialize = function(){
		
		this.content 	= Handlebars.compile($("#content-tpl").html());
		this.header  	= Handlebars.compile($("#header-tpl").html());
		//this.listHelp 	= Handlebars.compile($("#listHelp-tpl").html());

	
	};

	this.render = function(){

			
		  	var	texto = textList[language_root];

		  	

   			var contextHeader  = {title: header[language_root].home.desc, img: header[language_root].home.img };
   			var contextContent = {body:"<div style ='text-align:center'>"+
							                "<h1>"+texto[itemId].item+"</h1>"+
							                "<h2>"+texto[itemId].vers+"</h2>"+
							                "<p style ='text-align:left'>"+texto[itemId].itemText+"</p>"+
							            "</div>"};

   			 $('#header').html(this.header(contextHeader));
   			 $('#content').html(this.content(contextContent));
   			 //$('#listHelp').html(this.listHelp(context));
   			 //$(document.body).append(this.listHelp(context));
	};
	
	this.run = function(){
		
		this.initialize();
		this.render();
	};
	


};


var MyPreferencesView = function(){

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
							                    "<p class='event received'><a href='#' onclick='app.homeView()'><span>"+startPage[language_root].startApp.content+"</span></a></p>"+
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

 
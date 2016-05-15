
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
   			var contextContent = {body:"<div class='app' id='pagehome'>"+
							                "<h1>"+header[language_root].about.desc+"</h1>"+
							                "<div>"+
							                    "<p>"+about[language_root].content+"</p>"+
							                    "<a href='#' onclick='app.shareApp()'><i class='fa fa-share-alt' style='font-size:24px'></i><span>"+util[language_root].shareThisApp.content+"</span></a>"+
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
							               "<h1>"+header[language_root].help.desc+"</h1>"+
							                "<div>"+
							                    "<p style ='text-align:justify;'>"+help[language_root].content+"</p>"+
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
    //this.listHelp = "<div/>";
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
							                "<h1><span class='"+texto[itemId].class+"'></span>"+texto[itemId].item+"</h1>"+
							                "<h2>"+texto[itemId].vers+"</h2>"+
							                "<p style ='text-align:justify; padding-left: 20px; padding-right: 20px;'>"+texto[itemId].itemText+"</p>"+
							                "<a href='#' onclick='app.socialShare("+header[language_root].about.desc+")'><i class='fa fa-share-alt' style='font-size:24px'></i><span>"+util[language_root].share.content+"</span></a>"+
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

 
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
       
        this.bindEvents();
		new AuxilioView().run();
        //initialize sidebar style left to run or first click
        document.getElementById("sidebar").style.left = "-200px";

    },

    exit: function(){
        navigator.app.exitApp();
    },
	
	/** Call to Render Home Page **/
	homeView: function() {
       this.toggleSideBar();
	   new HomeView().run();
	},
	
    /** Call to Render About Page **/
	aboutView: function() {
        this.toggleSideBar(); 
	    new AboutView().run();
	},
	
    /** Call to Render Help Page **/
	helpView: function() {
        this.toggleSideBar();
	    new HelpView().run();
	},

    /** Call to Render Text Page **/
    textView: function(itemId) {

        new TextView(itemId).run();
    },
	
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false); 
       
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
    },

    onBackKeyDown: function() {
        this.showAlert('Back button is ok','backbutton');
        this.HomeView();
    },

    //Exibe um alert (Nativo de acordo com o SO)
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    toggleSideBar: function(){
		
            var sidebar = document.getElementById("sidebar");


            if(sidebar.style.left == "-200px")
            {
                sidebar.style.left = "0px";
            }
            else
            {
                sidebar.style.left = "-200px";
            }
    },
	
	focusPlaceHolder : function(id){
		 id.value = '';
	},
	
	blurPlaceHolder : function(id, val){
		
		if (id.value == '') {id.value = val;}
		
	},


    socialShare: function(imageName,appName,whenHelp){
    
    var imagePath = '';

    location.href = "#"+imageName;

   setTimeout(function(){

        navigator.screenshot.save(function(error,res){
          if(error){
            console.error(error);
          }else{

            console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
            imagePath = res.filePath;
            window.plugins.socialsharing.share(appName+":"+whenHelp,null,'file://'+imagePath);
            
          }
        },'jpg',50,imageName);
        
        console.log("print and share screen");
    }, 1000);

   console.log("redirect page to top");


      

  

    },

    shareApp: function(){

        window.plugins.socialsharing.share(null, null, 'file:///storage/emulated/0/Pictures/screenshot.jpg');
    },

    /**Show or Hide Div by id **/
    showHideDiv : function(id){

        var idReplace =  id.replace(/ /g, "_");

        
        if(document.getElementById(idReplace).style.display == 'none'){

           
            document.getElementById(idReplace).style.display = 'block';
            
        }
        else if(document.getElementById(idReplace).style.display == 'block'){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            
            document.getElementById(idReplace).style.display = 'none';


        }

    }
    
};

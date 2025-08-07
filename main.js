"use strict";
(() => {
   // let alert = acode.require('alert');
    let toast = acode.require('toast');
    let sidebarApps = acode.require('sidebarApps');
    if (!sidebarApps){
        toast('Error: sidebarApps module not found', 3000);
        return;
    }

var e = {
      "id":"hackesofice.browser"
    }
    
    class browser {
        constructor () {}
        async init(o, d, s) {
            try {
             //   alert(`${this.baseUrl}icon.png`);
                function initMiniApp(container) {
                    container.innerHTML = `
                        <div class="scrall" style="padding-left: 5%; padding-top:20%; background-color:; border:1px solid black; border-radius:20px; height:93%; margin-top:5%; position:relative; box-shadow:0px 0px 12px 2px rgba(0,0,0,0.75)">
                          <style>
                            #inputBox{
                              width:100%;
                              height:30px;
                              
                              border-radius: 15px;
                              margin-left: 3%;
                              box-shadow:0px 0px 6px 2px rgba(0,0,0,0.75)
                            }
                            #title{
                               font-family: Sans-Serif;
                               font-weight: 700;
                               font-size: 36px;
                               padding: 10%;
                               text-align: center;
                               color: black;
                               text-decoration: blink;
                               background-color: transparent;
                               text-shadow: -2px -2px 4px rgba(0, 0, 0, 0.90);
                               -webkit-text-stroke-color: black;
                               -webkit-text-stroke-width: 1px;
                               
                            }
                         #GoButton{
                              margin-left:8%;
                              height:30px;
                              width:80%;
                              border:none;
                              border-radius:10px;
                              background-color:transparent;
                              text-align:center;
                              box-shadow:0px 0px 6px 2px rgba(0,0,0,0.75)
                            }
                            
                          #web-screen{
                              display:flex;
                              flex-direction:column;
                              border:1px solid black;
                              border-radius: 8px;
                              height:40%;
                              margin-top:15%;
                              margin-right:5%;
                              box-shadow:0px 0px 12px 2px rgba(0,0,0,0.75)
                              
                          }
                          
                           .recent-icons-container {
                               display: flex;
                               flex-direction: row;
                               overflow-x: auto; /* Enable horizontal scrolling */
                               white-space: nowrap; /* Prevent icons from wrapping */
                               gap: 10px;
                               padding: 10px;
                               width: 96.5%;
                               box-sizing: border-box;
                               
                               scrollbar-width: thin; /* Firefox support */
                               scrollbar-color: gray transparent; /* Custom scrollbar color */
                           }

                           /* Hide scrollbar in WebKit browsers */
                           .recent-icons-container::-webkit-scrollbar {
                               height: 2px;
                           }
                           .recent-icons-container::-webkit-scrollbar-thumb {
                               background-color: gray;
                               border-radius: 5px;
                           }

                           /* Styling for the individual icons */
                           .main-icon-box {
                               height: 40px;
                               width: 40px;
                               margin-bottom:10px;
                               border: 1px solid black;
                               border-radius: 10px;
                               flex-shrink: 0; /* Prevent shrinking */
                               display: flex;
                               justify-content: center;
                               align-items: center;
                               box-shadow:0px 0px 12px 2px rgba(0,0,0,0.75)
                               
                           }

                           .main-icon-box svg {
                               width: 24px;
                               height: 24px;
                               fill: black; /* Icon color */
                               
                           }
                           
                           
                           .all-avilable-icons-container{
                               position: absolute;
                               bottom:0;
                               display: space-between;
                               flex-wrap: wrap;
                               overflow-y: auto; /* Enable vertical scrolling */
                               white-space: nowrap; /* Prevent icons from wrapping */
                               gap: 10px;
                               padding: 10px;
                               margin-right:5%;
                               margin-bottom:3.5%;
                               max-height:22%;
                               box-sizing: border-box;
                               border-radius:10px;
                               border: px solid black; /* Just for visibility */
                               scrollbar-width: thin; /* Firefox support */
                               scrollbar-color: gray transparent; /* Custom scrollbar color */
                               box-shadow:0px 0px 12px 2px rgba(0,0,0,0.75)
                           }
                           #all_control_buttons_container{
                               display:flex;
                               height:20px;
                               width:90%;
                               border:2px solid black;
                               font-size:2px;
                               justify-content:space-between;
                               margin-left:5%;
                               margin-right:5%;
                               margin-top:4%;
                               border-radius:5px;
                               box-shadow:0px 0px 12px 2px rgba(0,0,0,0.75)
                               
                           }
                           
                           
                           
                           
                           
                          .all-avilable-icons-container2{
                               position: absolute;
                               right:0;
                               bottom:0;
                               display: space-between;
                               flex-wrap: wrap;
                               overflow-y: auto; /* Enable vertical scrolling */
                               white-space: nowrap; /* Prevent icons from wrapping */
                               gap: 10px;
                               padding: 10px;
                               margin-right:5%;
                               margin-bottom:3.5%;
                               max-height:22%;
                               box-sizing: border-box;
                               border-radius:10px;
                               border: px solid black; /* Just for visibility */
                               scrollbar-width: thin; /* Firefox support */
                               scrollbar-color: gray transparent; /* Custom scrollbar color */
                               box-shadow:0px 0px 12px 2px rgba(0,0,0,0.75)
                           }
                            
                          </style>
                          
                          
                            <p id="title">Browser</p>
                            <input type="text" id="inputBox" placeholder="Search or type URL">
                            <div id="suggestions"> </div>
                            <button id="GoButton">Go</button>
                            
                            <icons class="recent-icons-container scroll">
                                         
                                      
                                        <div class="main-icon-box">
                                                   <svg class="social-icon facebook" viewBox="0 0 24 24">
                                                             <path d="M24 12a12 12 0 10-13.875 11.88V15.47H7.078v-3.47h3.047V9.845c0-3.017 1.79-4.685 4.533-4.685 1.316 0 2.692.235 2.692.235v2.96h-1.517c-1.494 0-1.956.93-1.956 1.885v2.26h3.328l-.532 3.47h-2.796v8.41A12.002 12.002 0 0024 12z"/>
                                                   </svg>
                                        </div>
                                
                                         <div class="main-icon-box">
                                                   <svg class="social-icon twitter" viewBox="0 0 24 24">
                                                             <path d="M23.643 4.937a9.558 9.558 0 01-2.675.733 4.6 4.6 0 002.013-2.53 9.166 9.166 0 01-2.92 1.11A4.596 4.596 0 0016.616 3c-2.53 0-4.6 2.072-4.6 4.6 0 .36.04.71.12 1.04-3.83-.19-7.22-2.02-9.5-4.81A4.5 4.5 0 002.4 7.7c0 1.59.81 3 2.06 3.82a4.56 4.56 0 01-2.08-.57v.06c0 2.22 1.58 4.08 3.68 4.5-.38.1-.78.15-1.2.15-.29 0-.58-.03-.86-.08a4.63 4.63 0 004.3 3.2 9.23 9.23 0 01-5.7 1.97c-.38 0-.76-.02-1.13-.07a12.98 12.98 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1v-.6a9.14 9.14 0 002.24-2.36z"/>
                                                   </svg>
                                        </div>
                              
                                         <div class="main-icon-box">
                                                   <svg class="social-icon instagram" viewBox="0 0 24 24">
                                                             <path d="M12 2.2c3.18 0 3.56.01 4.81.07 1.15.06 1.95.23 2.56.85.61.61.79 1.41.85 2.56.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.06 1.15-.23 1.95-.85 2.56-.61.61-1.41.79-2.56.85-1.25.06-1.63.07-4.81.07s-3.56-.01-4.81-.07c-1.15-.06-1.95-.23-2.56-.85-.61-.61-.79-1.41-.85-2.56-.06-1.25-.07-1.63-.07-4.81s.01-3.56.07-4.81c.06-1.15.23-1.95.85-2.56.61-.61 1.41-.79 2.56-.85 1.25-.06 1.63-.07 4.81-.07M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4m6.4-2a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon whatsapp" viewBox="0 0 24 24">
                                                             <path d="M12 .3a11.7 11.7 0 00-10.6 17.1L.2 24l6.9-1.9A11.7 11.7 0 1012 .3m0 21.4a9.7 9.7 0 01-5.1-1.4l-.3-.2-4.1 1.1 1.1-4a9.5 9.5 0 01-1.5-5A9.7 9.7 0 1112 21.7"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon linkedin" viewBox="0 0 24 24">
                                                             <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0M7.06 20.45H3.56V9h3.5zm-1.75-12.3a2 2 0 11-.01-4 2 2 0 010 4zm14.44 12.3h-3.5v-5.6c0-1.3-.02-3-1.83-3s-2.1 1.4-2.1 2.9v5.7h-3.5V9h3.3v1.5h.1a3.64 3.64 0 013.27-1.8c3.5 0 4.14 2.3 4.14 5.3z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon youtube" viewBox="0 0 24 24">
                                                             <path d="M23.5 7.2c-.3-1.3-1.4-2.3-2.7-2.5C18.6 4.5 12 4.5 12 4.5s-6.6 0-8.8.2c-1.3.2-2.4 1.2-2.7 2.5C0 9.4 0 12 0 12s0 2.6.5 4.8c.3 1.3 1.4 2.3 2.7 2.5 2.2.2 8.8.2 8.8.2s6.6 0 8.8-.2c1.3-.2 2.4-1.2 2.7-2.5.5-2.2.5-4.8.5-4.8s0-2.6-.5-4.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                                                   </svg>
                                         </div>
                            </icons>
                            
                            
                            
                            
                            
                            <div id="web-screen">
                                 <div id="all_control_buttons_container">
                                     <div id="navigatiom_buttons_container" style="display:flex; width:40%; height:80%; padding-right=5px; margin-top:2px;">
                                          <button id="BackButton" style="margin-left:2%; color:black; background-color:transparent; margin-left:10%; border:none;"> << </button> 
                                          <button id="ForwardButton" style="margin-right:2%;color:black; background-color:transparent; border:none; margin-left:10%;"> >> </button>
                                     </div>
                                     <div id="window_controler_buttons" style="display:flex; justify-content:flex-end; width:40%; height:80%; padding-right=5px;  margin-top:2px;">
                                          <button id="FullScreenButton" style="color:black; background-color:transparent; border:none; margin-right:5px;"> [ ] </button>
                                          <button id="CloseButton" style="color:black; background-color:transparent; margin-right:10%; border:none;"> X </button>
                                     </div>
                                 </div>
                                 <hr style="margin-top:4%; border:1px solid black;">
                                 <iframe id="iframe-screen" style="flex-grow:1; border:none;zoom:0.5; border-radius:0px 0px 10px 15px"> </iframe>
                            <div>
                            
                            
                            
                            
                            
                            
                            
                         <div>
                            <icons class="all-avilable-icons-container scroll" >
    
                                        <div class="main-icon-box">
                                                   <svg class="social-icon facebook" viewBox="0 0 24 24">
                                                             <path d="M24 12a12 12 0 10-13.875 11.88V15.47H7.078v-3.47h3.047V9.845c0-3.017 1.79-4.685 4.533-4.685 1.316 0 2.692.235 2.692.235v2.96h-1.517c-1.494 0-1.956.93-1.956 1.885v2.26h3.328l-.532 3.47h-2.796v8.41A12.002 12.002 0 0024 12z"/>
                                                   </svg>
                                        </div>
                                
                                         <div class="main-icon-box">
                                                   <svg class="social-icon twitter" viewBox="0 0 24 24">
                                                             <path d="M23.643 4.937a9.558 9.558 0 01-2.675.733 4.6 4.6 0 002.013-2.53 9.166 9.166 0 01-2.92 1.11A4.596 4.596 0 0016.616 3c-2.53 0-4.6 2.072-4.6 4.6 0 .36.04.71.12 1.04-3.83-.19-7.22-2.02-9.5-4.81A4.5 4.5 0 002.4 7.7c0 1.59.81 3 2.06 3.82a4.56 4.56 0 01-2.08-.57v.06c0 2.22 1.58 4.08 3.68 4.5-.38.1-.78.15-1.2.15-.29 0-.58-.03-.86-.08a4.63 4.63 0 004.3 3.2 9.23 9.23 0 01-5.7 1.97c-.38 0-.76-.02-1.13-.07a12.98 12.98 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1v-.6a9.14 9.14 0 002.24-2.36z"/>
                                                   </svg>
                                        </div>
                              
                                         <div class="main-icon-box">
                                                   <svg class="social-icon instagram" viewBox="0 0 24 24">
                                                             <path d="M12 2.2c3.18 0 3.56.01 4.81.07 1.15.06 1.95.23 2.56.85.61.61.79 1.41.85 2.56.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.06 1.15-.23 1.95-.85 2.56-.61.61-1.41.79-2.56.85-1.25.06-1.63.07-4.81.07s-3.56-.01-4.81-.07c-1.15-.06-1.95-.23-2.56-.85-.61-.61-.79-1.41-.85-2.56-.06-1.25-.07-1.63-.07-4.81s.01-3.56.07-4.81c.06-1.15.23-1.95.85-2.56.61-.61 1.41-.79 2.56-.85 1.25-.06 1.63-.07 4.81-.07M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4m6.4-2a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon whatsapp" viewBox="0 0 24 24">
                                                             <path d="M12 .3a11.7 11.7 0 00-10.6 17.1L.2 24l6.9-1.9A11.7 11.7 0 1012 .3m0 21.4a9.7 9.7 0 01-5.1-1.4l-.3-.2-4.1 1.1 1.1-4a9.5 9.5 0 01-1.5-5A9.7 9.7 0 1112 21.7"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon linkedin" viewBox="0 0 24 24">
                                                             <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0M7.06 20.45H3.56V9h3.5zm-1.75-12.3a2 2 0 11-.01-4 2 2 0 010 4zm14.44 12.3h-3.5v-5.6c0-1.3-.02-3-1.83-3s-2.1 1.4-2.1 2.9v5.7h-3.5V9h3.3v1.5h.1a3.64 3.64 0 013.27-1.8c3.5 0 4.14 2.3 4.14 5.3z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon youtube" viewBox="0 0 24 24">
                                                             <path d="M23.5 7.2c-.3-1.3-1.4-2.3-2.7-2.5C18.6 4.5 12 4.5 12 4.5s-6.6 0-8.8.2c-1.3.2-2.4 1.2-2.7 2.5C0 9.4 0 12 0 12s0 2.6.5 4.8c.3 1.3 1.4 2.3 2.7 2.5 2.2.2 8.8.2 8.8.2s6.6 0 8.8-.2c1.3-.2 2.4-1.2 2.7-2.5.5-2.2.5-4.8.5-4.8s0-2.6-.5-4.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                                                   </svg>
                                         </div>
                                         
                                         
                                         
                                         
                                         
                                         
                                        <div class="main-icon-box">
                                                   <svg class="social-icon facebook" viewBox="0 0 24 24">
                                                             <path d="M24 12a12 12 0 10-13.875 11.88V15.47H7.078v-3.47h3.047V9.845c0-3.017 1.79-4.685 4.533-4.685 1.316 0 2.692.235 2.692.235v2.96h-1.517c-1.494 0-1.956.93-1.956 1.885v2.26h3.328l-.532 3.47h-2.796v8.41A12.002 12.002 0 0024 12z"/>
                                                   </svg>
                                        </div>
                                
                                         <div class="main-icon-box">
                                                   <svg class="social-icon twitter" viewBox="0 0 24 24">
                                                             <path d="M23.643 4.937a9.558 9.558 0 01-2.675.733 4.6 4.6 0 002.013-2.53 9.166 9.166 0 01-2.92 1.11A4.596 4.596 0 0016.616 3c-2.53 0-4.6 2.072-4.6 4.6 0 .36.04.71.12 1.04-3.83-.19-7.22-2.02-9.5-4.81A4.5 4.5 0 002.4 7.7c0 1.59.81 3 2.06 3.82a4.56 4.56 0 01-2.08-.57v.06c0 2.22 1.58 4.08 3.68 4.5-.38.1-.78.15-1.2.15-.29 0-.58-.03-.86-.08a4.63 4.63 0 004.3 3.2 9.23 9.23 0 01-5.7 1.97c-.38 0-.76-.02-1.13-.07a12.98 12.98 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1v-.6a9.14 9.14 0 002.24-2.36z"/>
                                                   </svg>
                                        </div>
                              
                                         <div class="main-icon-box">
                                                   <svg class="social-icon instagram" viewBox="0 0 24 24">
                                                             <path d="M12 2.2c3.18 0 3.56.01 4.81.07 1.15.06 1.95.23 2.56.85.61.61.79 1.41.85 2.56.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.06 1.15-.23 1.95-.85 2.56-.61.61-1.41.79-2.56.85-1.25.06-1.63.07-4.81.07s-3.56-.01-4.81-.07c-1.15-.06-1.95-.23-2.56-.85-.61-.61-.79-1.41-.85-2.56-.06-1.25-.07-1.63-.07-4.81s.01-3.56.07-4.81c.06-1.15.23-1.95.85-2.56.61-.61 1.41-.79 2.56-.85 1.25-.06 1.63-.07 4.81-.07M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4m6.4-2a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon whatsapp" viewBox="0 0 24 24">
                                                             <path d="M12 .3a11.7 11.7 0 00-10.6 17.1L.2 24l6.9-1.9A11.7 11.7 0 1012 .3m0 21.4a9.7 9.7 0 01-5.1-1.4l-.3-.2-4.1 1.1 1.1-4a9.5 9.5 0 01-1.5-5A9.7 9.7 0 1112 21.7"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon linkedin" viewBox="0 0 24 24">
                                                             <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0M7.06 20.45H3.56V9h3.5zm-1.75-12.3a2 2 0 11-.01-4 2 2 0 010 4zm14.44 12.3h-3.5v-5.6c0-1.3-.02-3-1.83-3s-2.1 1.4-2.1 2.9v5.7h-3.5V9h3.3v1.5h.1a3.64 3.64 0 013.27-1.8c3.5 0 4.14 2.3 4.14 5.3z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon youtube" viewBox="0 0 24 24">
                                                             <path d="M23.5 7.2c-.3-1.3-1.4-2.3-2.7-2.5C18.6 4.5 12 4.5 12 4.5s-6.6 0-8.8.2c-1.3.2-2.4 1.2-2.7 2.5C0 9.4 0 12 0 12s0 2.6.5 4.8c.3 1.3 1.4 2.3 2.7 2.5 2.2.2 8.8.2 8.8.2s6.6 0 8.8-.2c1.3-.2 2.4-1.2 2.7-2.5.5-2.2.5-4.8.5-4.8s0-2.6-.5-4.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                                                   </svg>
                                         </div>
                                         
                                         
                              </icons>
                            
                            <icons class="all-avilable-icons-container2 scroll" >
                                        <div class="main-icon-box">
                                                   <svg class="social-icon facebook" viewBox="0 0 24 24">
                                                             <path d="M24 12a12 12 0 10-13.875 11.88V15.47H7.078v-3.47h3.047V9.845c0-3.017 1.79-4.685 4.533-4.685 1.316 0 2.692.235 2.692.235v2.96h-1.517c-1.494 0-1.956.93-1.956 1.885v2.26h3.328l-.532 3.47h-2.796v8.41A12.002 12.002 0 0024 12z"/>
                                                   </svg>
                                        </div>
                                
                                         <div class="main-icon-box">
                                                   <svg class="social-icon twitter" viewBox="0 0 24 24">
                                                             <path d="M23.643 4.937a9.558 9.558 0 01-2.675.733 4.6 4.6 0 002.013-2.53 9.166 9.166 0 01-2.92 1.11A4.596 4.596 0 0016.616 3c-2.53 0-4.6 2.072-4.6 4.6 0 .36.04.71.12 1.04-3.83-.19-7.22-2.02-9.5-4.81A4.5 4.5 0 002.4 7.7c0 1.59.81 3 2.06 3.82a4.56 4.56 0 01-2.08-.57v.06c0 2.22 1.58 4.08 3.68 4.5-.38.1-.78.15-1.2.15-.29 0-.58-.03-.86-.08a4.63 4.63 0 004.3 3.2 9.23 9.23 0 01-5.7 1.97c-.38 0-.76-.02-1.13-.07a12.98 12.98 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1v-.6a9.14 9.14 0 002.24-2.36z"/>
                                                   </svg>
                                        </div>
                              
                                         <div class="main-icon-box">
                                                   <svg class="social-icon instagram" viewBox="0 0 24 24">
                                                             <path d="M12 2.2c3.18 0 3.56.01 4.81.07 1.15.06 1.95.23 2.56.85.61.61.79 1.41.85 2.56.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.06 1.15-.23 1.95-.85 2.56-.61.61-1.41.79-2.56.85-1.25.06-1.63.07-4.81.07s-3.56-.01-4.81-.07c-1.15-.06-1.95-.23-2.56-.85-.61-.61-.79-1.41-.85-2.56-.06-1.25-.07-1.63-.07-4.81s.01-3.56.07-4.81c.06-1.15.23-1.95.85-2.56.61-.61 1.41-.79 2.56-.85 1.25-.06 1.63-.07 4.81-.07M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4m6.4-2a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon whatsapp" viewBox="0 0 24 24">
                                                             <path d="M12 .3a11.7 11.7 0 00-10.6 17.1L.2 24l6.9-1.9A11.7 11.7 0 1012 .3m0 21.4a9.7 9.7 0 01-5.1-1.4l-.3-.2-4.1 1.1 1.1-4a9.5 9.5 0 01-1.5-5A9.7 9.7 0 1112 21.7"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon linkedin" viewBox="0 0 24 24">
                                                             <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0M7.06 20.45H3.56V9h3.5zm-1.75-12.3a2 2 0 11-.01-4 2 2 0 010 4zm14.44 12.3h-3.5v-5.6c0-1.3-.02-3-1.83-3s-2.1 1.4-2.1 2.9v5.7h-3.5V9h3.3v1.5h.1a3.64 3.64 0 013.27-1.8c3.5 0 4.14 2.3 4.14 5.3z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon youtube" viewBox="0 0 24 24">
                                                             <path d="M23.5 7.2c-.3-1.3-1.4-2.3-2.7-2.5C18.6 4.5 12 4.5 12 4.5s-6.6 0-8.8.2c-1.3.2-2.4 1.2-2.7 2.5C0 9.4 0 12 0 12s0 2.6.5 4.8c.3 1.3 1.4 2.3 2.7 2.5 2.2.2 8.8.2 8.8.2s6.6 0 8.8-.2c1.3-.2 2.4-1.2 2.7-2.5.5-2.2.5-4.8.5-4.8s0-2.6-.5-4.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                                                   </svg>
                                         </div>
                                         
                                         
                                         
                                         
                                         
                                         
                                        <div class="main-icon-box">
                                                   <svg class="social-icon facebook" viewBox="0 0 24 24">
                                                             <path d="M24 12a12 12 0 10-13.875 11.88V15.47H7.078v-3.47h3.047V9.845c0-3.017 1.79-4.685 4.533-4.685 1.316 0 2.692.235 2.692.235v2.96h-1.517c-1.494 0-1.956.93-1.956 1.885v2.26h3.328l-.532 3.47h-2.796v8.41A12.002 12.002 0 0024 12z"/>
                                                   </svg>
                                        </div>
                                
                                         <div class="main-icon-box">
                                                   <svg class="social-icon twitter" viewBox="0 0 24 24">
                                                             <path d="M23.643 4.937a9.558 9.558 0 01-2.675.733 4.6 4.6 0 002.013-2.53 9.166 9.166 0 01-2.92 1.11A4.596 4.596 0 0016.616 3c-2.53 0-4.6 2.072-4.6 4.6 0 .36.04.71.12 1.04-3.83-.19-7.22-2.02-9.5-4.81A4.5 4.5 0 002.4 7.7c0 1.59.81 3 2.06 3.82a4.56 4.56 0 01-2.08-.57v.06c0 2.22 1.58 4.08 3.68 4.5-.38.1-.78.15-1.2.15-.29 0-.58-.03-.86-.08a4.63 4.63 0 004.3 3.2 9.23 9.23 0 01-5.7 1.97c-.38 0-.76-.02-1.13-.07a12.98 12.98 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1v-.6a9.14 9.14 0 002.24-2.36z"/>
                                                   </svg>
                                        </div>
                              
                                         <div class="main-icon-box">
                                                   <svg class="social-icon instagram" viewBox="0 0 24 24">
                                                             <path d="M12 2.2c3.18 0 3.56.01 4.81.07 1.15.06 1.95.23 2.56.85.61.61.79 1.41.85 2.56.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.06 1.15-.23 1.95-.85 2.56-.61.61-1.41.79-2.56.85-1.25.06-1.63.07-4.81.07s-3.56-.01-4.81-.07c-1.15-.06-1.95-.23-2.56-.85-.61-.61-.79-1.41-.85-2.56-.06-1.25-.07-1.63-.07-4.81s.01-3.56.07-4.81c.06-1.15.23-1.95.85-2.56.61-.61 1.41-.79 2.56-.85 1.25-.06 1.63-.07 4.81-.07M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4m6.4-2a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon whatsapp" viewBox="0 0 24 24">
                                                             <path d="M12 .3a11.7 11.7 0 00-10.6 17.1L.2 24l6.9-1.9A11.7 11.7 0 1012 .3m0 21.4a9.7 9.7 0 01-5.1-1.4l-.3-.2-4.1 1.1 1.1-4a9.5 9.5 0 01-1.5-5A9.7 9.7 0 1112 21.7"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon linkedin" viewBox="0 0 24 24">
                                                             <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0M7.06 20.45H3.56V9h3.5zm-1.75-12.3a2 2 0 11-.01-4 2 2 0 010 4zm14.44 12.3h-3.5v-5.6c0-1.3-.02-3-1.83-3s-2.1 1.4-2.1 2.9v5.7h-3.5V9h3.3v1.5h.1a3.64 3.64 0 013.27-1.8c3.5 0 4.14 2.3 4.14 5.3z"/>
                                                   </svg>
                                         </div>
                               
                                         <div class="main-icon-box">
                                                   <svg class="social-icon youtube" viewBox="0 0 24 24">
                                                             <path d="M23.5 7.2c-.3-1.3-1.4-2.3-2.7-2.5C18.6 4.5 12 4.5 12 4.5s-6.6 0-8.8.2c-1.3.2-2.4 1.2-2.7 2.5C0 9.4 0 12 0 12s0 2.6.5 4.8c.3 1.3 1.4 2.3 2.7 2.5 2.2.2 8.8.2 8.8.2s6.6 0 8.8-.2c1.3-.2 2.4-1.2 2.7-2.5.5-2.2.5-4.8.5-4.8s0-2.6-.5-4.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                                                   </svg>
                                         </div>
                            </icons>
                        </div>
    
                            
                            
                            
                        </div>
                    `;
                    
                    
                /////lets add javascript part
                if (container){
                      container.querySelector('.facebook').addEventListener("click", () => {
                          system.openInBrowser('https://facebook.com/');
                      });
                      container.querySelector('.twitter').addEventListener('click', () => {
                        system.openInBrowser('https://x.com/');
                      });
                      container.querySelector('.instagram').addEventListener('click', () => {
                        system.openInBrowser('https://www.instagram.com/');
                      });
                      container.querySelector('.whatsapp').addEventListener('click', () => {
                        system.openInBrowser('https://api.whatsapp.com/');
                      });
                      container.querySelector('.youtube').addEventListener('click', () => {
                          system.openInBrowser('https://www.youtube.com/');
                      });
                      container.querySelector('.linkedin').addEventListener('click', () => {
                          system.openInBrowser('https://in.linkedin.com/');
                      });
                }
                    
                    
                    
                    
                    // because of i need this in many stage j declared it in gloval scope
                  let web_screen = container.querySelector('#iframe-screen');
                            
                    //CLICK EVENT LISTNERS FOR BACK FORWARD AND GI BUTTONS 
                    
                  container.querySelector('#GoButton').addEventListener('click', () => {
                    start_loading();
                  });
                   
                  container.querySelector('#BackButton').addEventListener('click', () => {
                    GoBack();
                  });
                   
                  container.querySelector('#ForwardButton').addEventListener('click', () => {
                    GoForward();
                  });
                  container.querySelector('#CloseButton').addEventListener('click', () => {
                    web_screen.src = ' ';
                    //console.log('im ckovkerd');
                    web_screen.innerHTML = ' NOTHIG TO SHOW';
                  });
                  container.querySelector('#FullScreenButton').addEventListener('click', () => {
                    toust('Comming soon');
                     
                  });
                   
                   
                   
                   
                  function GoBack(){
                    history.back();
                  }
                   
                  function GoForward(){
                    history.forward();
                  }
                   
                  function start_loading(){
                            let inputQuery = container.querySelector('#inputBox').value;
                            
                            let base_proxey_url = "https://brouser-server.onrender.com/proxy?url=";
                              
                            let url = ""
                            if (!inputQuery){
                              toast('Please search or type url', 3000);
                              return;
                            }else{
                              if(!inputQuery.includes('.')){
                                url = `https://google.com/search?q=${inputQuery}`;
                                web_screen.src = `${base_proxey_url}${encodeURIComponent(url)}`;
                              }else{
                                web_screen.src = `${base_proxey_url}${encodeURIComponent(inputQuery)}`;
                              }
                     
                            }
                    }
                  if (navigator.onLine){
                      container.querySelector("#iframe-screen").src = "https://acode-mini-browser-default-screen.onrender.com/";
                      //container.querySelector("#iframe-screen").src = "https://hackesofice.github.io/who-i-am/";
                  }else{
                    console.log('hello')
                    //container.querySelector("#iframe-screen").contentWindow.document.body.innerHTML = " Your insternet is turned off";
                  }
                }
                // Function that runs when the app is selected
                function onAppSelected(container) {
                    console.log('Mini brwset installed!');
               }

                // ** its a builtin method provided by acode app and adds a icon based on icon class **
                sidebarApps.add(
                    'public',  // Icon class
                    'mini_browser',   // Unique ID
                    'Mini Browser',   // Title
                    initMiniApp,      // Function to initialize UI
                    true,             // Add to left sidebar top
                    onAppSelected     // Function when selected
                );

            }catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        
        async destroy() {
            if (sidebarApps){
                sidebarApps.remove('mini_browser');
            }
        }
    }

    if (window.acode) {
        console.log("acode window gotten")
        let i = new browser();
        acode.setPluginInit(e.id, async (n, o, {
            cacheFileUrl: s, cacheFile: d
        }) => {
            n.endsWith("/") || (n += "/");
            i.baseUrl = n;
            await i.init(o, d, s);
        });
        acode.setPluginUnmount(e.id, () => {
            i.destroy();
        });
    }
})();

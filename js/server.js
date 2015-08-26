var http = require("http");

console.log("Go to http://localhost:8888 in your browser.\n");
console.log("Press CTRL-C to exit.\n");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  response.write("                                                                                                                                                                                dddddddd     \n");
  response.write("HHHHHHHHH     HHHHHHHHH                   lllllll lllllll                       WWWWWWWW                           WWWWWWWW                                 lllllll             d::::::d !!! \n");
  response.write("H:::::::H     H:::::::H                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d::::::d!!:!!\n");
  response.write("H:::::::H     H:::::::H                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d::::::d!:::!\n");
  response.write("HH::::::H     H::::::HH                   l:::::l l:::::l                       W::::::W                           W::::::W                                 l:::::l             d:::::d !:::!\n");
  response.write("  H:::::H     H:::::H      eeeeeeeeeeee    l::::l  l::::l    ooooooooooo         W:::::W           WWWWW           W:::::W ooooooooooo   rrrrr   rrrrrrrrr   l::::l     ddddddddd:::::d !:::!\n");
  response.write("  H:::::H     H:::::H    ee::::::::::::ee  l::::l  l::::l  oo:::::::::::oo        W:::::W         W:::::W         W:::::Woo:::::::::::oo r::::rrr:::::::::r  l::::l   dd::::::::::::::d !:::!\n");
  response.write("  H::::::HHHHH::::::H   e::::::eeeee:::::eel::::l  l::::l o:::::::::::::::o        W:::::W       W:::::::W       W:::::Wo:::::::::::::::or:::::::::::::::::r l::::l  d::::::::::::::::d !:::!\n");
  response.write("  H:::::::::::::::::H  e::::::e     e:::::el::::l  l::::l o:::::ooooo:::::o         W:::::W     W:::::::::W     W:::::W o:::::ooooo:::::orr::::::rrrrr::::::rl::::l d:::::::ddddd:::::d !:::!\n");
  response.write("  H:::::::::::::::::H  e:::::::eeeee::::::el::::l  l::::l o::::o     o::::o          W:::::W   W:::::W:::::W   W:::::W  o::::o     o::::o r:::::r     r:::::rl::::l d::::::d    d:::::d !:::!\n");
  response.write("  H::::::HHHHH::::::H  e:::::::::::::::::e l::::l  l::::l o::::o     o::::o           W:::::W W:::::W W:::::W W:::::W   o::::o     o::::o r:::::r     rrrrrrrl::::l d:::::d     d:::::d !:::!\n");
  response.write("  H:::::H     H:::::H  e::::::eeeeeeeeeee  l::::l  l::::l o::::o     o::::o            W:::::W:::::W   W:::::W:::::W    o::::o     o::::o r:::::r            l::::l d:::::d     d:::::d !!:!!\n");
  response.write("  H:::::H     H:::::H  e:::::::e           l::::l  l::::l o::::o     o::::o             W:::::::::W     W:::::::::W     o::::o     o::::o r:::::r            l::::l d:::::d     d:::::d  !!! \n");
  response.write("HH::::::H     H::::::HHe::::::::e         l::::::ll::::::lo:::::ooooo:::::o              W:::::::W       W:::::::W      o:::::ooooo:::::o r:::::r           l::::::ld::::::ddddd::::::dd     \n");
  response.write("H:::::::H     H:::::::H e::::::::eeeeeeee l::::::ll::::::lo:::::::::::::::o               W:::::W         W:::::W       o:::::::::::::::o r:::::r           l::::::l d:::::::::::::::::d !!! \n");
  response.write("H:::::::H     H:::::::H  ee:::::::::::::e l::::::ll::::::l oo:::::::::::oo                 W:::W           W:::W         oo:::::::::::oo  r:::::r           l::::::l  d:::::::::ddd::::d!!:!!\n");
  response.write("HHHHHHHHH     HHHHHHHHH    eeeeeeeeeeeeee llllllllllllllll   ooooooooooo                    WWW             WWW            ooooooooooo    rrrrrrr           llllllll   ddddddddd   ddddd !!! \n");
  
  response.end();
}).listen(8888);

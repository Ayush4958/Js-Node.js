Settig up Express module of node.js

A) for serving the HTML5 or pug or another template language you need to set language like this 
    :-  app.set('view engine' , 'html');   {In the place of HTML u can set language like PUG}


B) for serving the static files any files to client server set files like this 

1) we will create a folder name Static 
2) and put all those file inside it which is going to be served to client 

    :- app.use('/static' , express.static('static'));

'/static' with this client can access static like this { weblink/static/filename }


C) serving the main content files 

1) while serving the HTML files we always use sendfiles other-wise it will cause an error

    :- res.sendFile("file-name")

2) while serving the Pug file etc. we use render 

    :- res.render("file-name")

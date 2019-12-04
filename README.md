# WoodsFinal
Taylors Final Exam for Server Side Web Development
https://woodsfinalexam.herokuapp.com/
https://github.com/Woods-Taylor/WoodsFinal

I could not remember for certain some of the syntax for the index file and I belive that has caused errors.





Original Text of index.ejs before hardcoding is below

<!doctype html>
<html lang="en">
 <head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/
bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/
Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
 <link rel="stylesheet" href="styles.css">
 <div class = "jumbotron  text-center">
 <title>Nasa Pic of the Day</title>
 </div>
 </head>
 <body>
 <div class = "jumbotron  nasaImage  text-center">
 <h1>"<%= title %>"</h1>
 </div>
 <a img src= "<%= url %>"
 <div class = "text-center  description">
 <p> "<%= explanation %>" </p>
 </div>
 <p> "<%= date %>"" </p>
 <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-
J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
integrity="sha384-
Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
integrity="sha384-
wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
crossorigin="anonymous"></script>
 </body>
</html>
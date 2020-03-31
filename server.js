var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
express = require("express"),
xFrameOptions = require('x-frame-options'),
secure = require('express-force-https'),
app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(xFrameOptions());
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(secure);

// RESTFUL ROUTES
app.get("/", function(req, res){
    res.get('X-Frame-Options') === ('Deny');
    res.redirect("/home");
});

// HOME ROUTE
app.get("/home", function(req, res){
    res.render("other/home");
});

// WORK ROUTE
app.get("/work", function(req, res){
    res.render("workpages/work");
});

// QANTAS AIRLINE ROUTE
app.get("/qantasairline", function(req, res){
    res.render("workpages/qantasairline");
});

// QANTAS LOYALTY ROUTE
app.get("/qantasloyalty", function(req, res){
    res.render("workpages/qantasloyalty");
});

// LORICA HEALTH ROUTE
app.get("/lorica-health", function(req, res){
    res.render("workpages/loricahealth");
});

// SUNCORP ROUTE
app.get("/suncorp", function(req, res){
    res.render("workpages/suncorp");
});

// WIRED2CLOUD ROUTE
app.get("/wired2cloud", function(req, res){
    res.render("workpages/wired2cloud");
});

// SIRC ROUTE
app.get("/sirc", function(req, res){
    res.render("workpages/sirc");
});

// COVATA ROUTE
app.get("/covata", function(req, res){
    res.render("workpages/covata");
});

// CAREERVENTURES ROUTE
app.get("/careerventures", function(req, res){
    res.render("workpages/careerventures");
});

// AIE RUMBLE ACADEMY ROUTE
app.get("/aie-rumble-academy", function(req, res){
    res.render("workpages/aierumbleacademy");
});

// KARTEL DIGITAL ROUTE
app.get("/kartel-digital", function(req, res){
    res.render("workpages/karteldigital");
});

// PLAY2LEAD ROUTE
app.get("/play2lead", function(req, res){
    res.render("workpages/play2lead");
});

// PROJECTS ROUTE
app.get("/projects", function(req, res){
    res.render("projectpages/projects");
});

// RGB COLOUR GUESSING GAME ROUTE
app.get("/rgb-colour-guessing-game", function(req, res){
    res.render("projectpages/rgbcolourgame");
});

// PATATAP CLONE ROUTE
app.get("/patatap-clone", function(req, res){
    res.render("projectpages/patatapclone");
});

// PHOTO BOARD ROUTE
app.get("/photo-board", function(req, res){
    res.render("projectpages/photoboard");
});

// IMAGE GALLERY ROUTE
app.get("/image-gallery", function(req, res){
    res.render("projectpages/imagegallery");
});

// RAW APP ROUTE
app.get("/raw-app", function(req, res){
    res.render("projectpages/rawapp");
});

// GLASS CUP ROUTE
app.get("/glass-cup", function(req, res){
    res.render("projectpages/glasscup");
});

// BLOG ROUTE
app.get("/blog", function(req, res){
    res.render("blogpages/blog");
});

// MY TESTING STORY ROUTE
app.get("/my-testing-story", function(req, res){
    res.render("blogpages/mytestingstory");
});

// WHAT A PRODUCT OWNER WANTS FROM A JUNIOR TESTER ROUTE
app.get("/what-a-product-owner-wants-from-a-junior-tester", function(req, res){
    res.render("blogpages/juniortester");
});

// RESOURCES ROUTE
app.get("/resources", function(req, res){
    res.render("other/resources");
});

// CONTACT ROUTE
app.get("/contact", function(req, res){
    res.render("other/contact");
});

// 500 ROUTE
app.get("/500", function(req, res){
    res.render("errorpages/500");
});

// 404 ROUTE
app.use(function(req, res, next){
    res.status(404);

    // respond with html page
    if(req.accepts('html')) {
        res.render('errorpages/404', {error: 'The resource you where looking for is not available.'});
        return;
    };

    // respond with json
    if(req.accepts('json')) {
        res.send({ error: 'The resource you where looking for is not available.' });
        return;
    }
    // default to plain-text. send()
    res.type('txt').send('The resource you where looking for is not available.');
});

// 500 TRIGGER IF SERVER IS DOWN
app.use(function(err, req, res, next){
    console.log(err);
    // we may use properties of the error object
    // here and next(err) appropriately, or if

    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);

    // respond with html page
    if(req.accepts('html')) {
        res.render('errorpages/500', {error: 'Something is broken on our end, email me at davidhaigh94@gmail.com if this issue persist.'});
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Something is broken on our end, email me at davidhaigh94@gmail.com if this issue persist.');
});

app.listen(process.env.PORT || LOCAL, process.env.IP, function(){
    console.log(`PORTFOLIO IS RUNNING! go to http://localhost:${LOCAL}`);
});

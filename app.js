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
app.use(secure);

// RESTFUL ROUTES
app.get("/", function(req, res){
    res.get('X-Frame-Options') === ('Deny');
    res.redirect("/home");
});

// HOME ROUTE
app.get("/home", function(req, res){
    res.render("home");
});

// WORK ROUTE
app.get("/work", function(req, res){
    res.render("work");
});

// QANTAS ROUTE
app.get("/qantas", function(req, res){
    res.render("qantas");
});

// LORICA HEALTH ROUTE
app.get("/lorica-health", function(req, res){
    res.render("loricahealth");
});

// SUNCORP ROUTE
app.get("/suncorp", function(req, res){
    res.render("suncorp");
});

// WIRED2CLOUD ROUTE
app.get("/wired2cloud", function(req, res){
    res.render("wired2cloud");
});

// SIRC ROUTE
app.get("/sirc", function(req, res){
    res.render("sirc");
});

// COVATA ROUTE
app.get("/covata", function(req, res){
    res.render("covata");
});

// CAREERVENTURES ROUTE
app.get("/careerventures", function(req, res){
    res.render("careerventures");
});

// AIE RUMBLE ACADEMY ROUTE
app.get("/aie-rumble-academy", function(req, res){
    res.render("aierumbleacademy");
});

// KARTEL DIGITAL ROUTE
app.get("/kartel-digital", function(req, res){
    res.render("karteldigital");
});

// PLAY2LEAD ROUTE
app.get("/play2lead", function(req, res){
    res.render("play2lead");
});

// PROJECTS ROUTE
app.get("/projects", function(req, res){
    res.render("projects");
});

// RGB COLOUR GUESSING GAME ROUTE
app.get("/rgb-colour-guessing-game", function(req, res){
    res.render("rgbcolourgame");
});

// PATATAP CLONE ROUTE
app.get("/patatap-clone", function(req, res){
    res.render("patatapclone");
});

// PHOTO BOARD ROUTE
app.get("/photo-board", function(req, res){
    res.render("photoboard");
});

// IMAGE GALLERY ROUTE
app.get("/image-gallery", function(req, res){
    res.render("imagegallery");
});

// RAW APP ROUTE
app.get("/raw-app", function(req, res){
    res.render("rawapp");
});

// GLASS CUP ROUTE
app.get("/glass-cup", function(req, res){
    res.render("glasscup");
});

// BLOG ROUTE
app.get("/blog", function(req, res){
    res.render("blog");
});

// MY TESTING STORY ROUTE
app.get("/my-testing-story", function(req, res){
    res.render("mytestingstory");
});

// WHAT A PRODUCT OWNER WANTS FROM A JUNIOR TESTER ROUTE
app.get("/what-a-product-owner-wants-from-a-junior-tester", function(req, res){
    res.render("WAPOWFAJT");
});

// RESOURCES ROUTE
app.get("/resources", function(req, res){
    res.render("resources");
});

// CONTACT ROUTE
app.get("/contact", function(req, res){
    res.render("contact");
});

// 500 ROUTE
app.get("/500", function(req, res){
    res.render("500");
});

// 404 ROUTE
app.use(function(req, res, next){
    res.status(404);

    // respond with html page
    if(req.accepts('html')) {
        res.render('404', {error: 'The resource you where looking for is not available.'});
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
        res.render('500', {error: 'Something is broken on our end, email me at davidhaigh94@gmail.com if this issue persist.'});
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Something is broken on our end, email me at davidhaigh94@gmail.com if this issue persist.');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("PORTFOLIO IS RUNNING!");
});

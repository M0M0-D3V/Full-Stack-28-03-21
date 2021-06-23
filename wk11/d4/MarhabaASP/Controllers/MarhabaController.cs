using Microsoft.AspNetCore.Mvc;
namespace MarhabaASP.Controllers
{
    public class MarhabaController : Controller // Marhaba now has inherited everything from the Controller class
    {
        // 1. field / property coming soon
        // 2. constructor coming soon
        // 3. member methods
        //for each route this controller is to handle:
        // [HttpGet]       //type of request
        // [Route("")]     //associated route string (exclude the leading /)
        // [HttpGet("")]  // shorthand
        // // @app.route()
        // // def my_function:
        // //    pass
        // // django - url.py: path("route", views.route)
        // public string Index()
        // {
        //     return "Hello World from HelloController!";
        // }
        // ********************** ^^^ before views
        [HttpGet]
        [Route("")]
        public ViewResult Pikachu()
        {
            // will attempt to serve 
            // Views/Hello/Index.cshtml
            // or if that file isn't there:
            // Views/Shared/Index.cshtml
            return View();
        }

        [HttpGet("route/{param}")]
        public ViewResult Another(string param)
        {
            ViewBag.Param = param;
            return View();
        }

        [HttpGet("see")]
        public RedirectToActionResult See()
        {
            return RedirectToAction("Pikachu");
        }
        [HttpGet("move")]
        public RedirectToActionResult Move()
        {
            return RedirectToAction("Look", "Hello");
        }
    }
}


// some snippets
/*
"emmet.includeLanguages": {
        "aspnetcorerazor": "html",
        "razor": "html"
    },
*/
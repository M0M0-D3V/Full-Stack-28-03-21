using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Session.Models;

namespace Session.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpGet("")]
        public IActionResult Index()
        {
            if (HttpContext.Session.GetString("Status") == null)
            {
                return View();
            }
            return RedirectToAction("Welcome");
        }

        [HttpGet("welcome")]
        public IActionResult Welcome()
        {
            HttpContext.Session.SetString("Status", "Start");
            // user details received here
            // ViewBag.Username = HttpContext.Session.GetString("Username");
            // User user = new User();
            // user.Username = HttpContext.Session.GetString("Username");
            // user.Email = HttpContext.Session.GetString("Email");
            // user.Age = Convert.ToInt32(HttpContext.Session.GetInt32("Age"));
            // user.Password = HttpContext.Session.GetString("Password");
            User user = HttpContext.Session.GetObjectFromJson<User>("User");
            return View(user);
        }
        [HttpGet("reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        [HttpPost("letmein")]
        public IActionResult LetMeIn(User u)
        {
            Console.WriteLine("Hey we made something!");
            // HttpContext.Session.SetString("Username", u.Username);
            // HttpContext.Session.SetString("Email", u.Email);
            // HttpContext.Session.SetInt32("Age", u.Age);
            // HttpContext.Session.SetString("Password", u.Password);
            HttpContext.Session.SetObjectAsJson("User", u);
            return RedirectToAction("Welcome");
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

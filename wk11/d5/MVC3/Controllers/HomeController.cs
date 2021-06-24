using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MVC3.Models; // to have access to the User model

namespace MVC3.Controllers
{
    public class HomeController : Controller
    {
        // [HttpGet]
        // [Route("")]
        [HttpGet("")]  //shorthand
        public IActionResult Index()
        {
            // context = {
            //     "key": "value",
            //     "anotherkey": new{"name":"Monica"},
            // }
            // return render("namefile.html", context)
            ViewBag.Example = "Here's the example string";
            ViewBag.Number = 42;
            ViewBag.List = new List<int> { 1, 2, 3, 4, 5 };

            User someUser = new User()
            {
                FirstName = "Sally",
                LastName = "Sanderson"
            };

            User another = new User("Monica", "Hong");

            ViewBag.User = another;
            return View();
        }

        [HttpGet("new/{number}")]
        public IActionResult New(int number)
        {
            ViewBag.Number = number;
            return View();
        }


        [HttpPost("process")]
        public IActionResult Process(User u)
        {
            Console.WriteLine("Reached the Process method");
            User newUser = u;
            if (ModelState.IsValid)
            {
                // return View("Show", newUser);
                return RedirectToAction("Show");
            }
            else
            {
                return View("New");
            }

            // return RedirectToAction("Show");
        }

        [HttpGet("result")]
        public IActionResult Show()
        {
            return View();
        }

        [HttpGet("userinfo")]
        public IActionResult UserDetail()
        {
            // While being hard-coded here, this user instance will eventually come from our DB
            User someUser = new User()
            {
                FirstName = "Sally",
                LastName = "Sanderson"
            };
            // Here we pass this instance to our View
            return View(someUser);
            // If we also need to include the name of our View, we pass our instance as a second argument
            // return View("OtherView", someUser);
        }
    }
}
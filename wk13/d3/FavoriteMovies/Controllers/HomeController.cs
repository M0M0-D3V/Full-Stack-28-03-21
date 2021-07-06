using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FavoriteMovies.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace FavoriteMovies.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _db;
        private int? uid
        {
            get { return HttpContext.Session.GetInt32("UserId"); }
        }
        private bool isLoggedIn
        {
            get { return uid != null; }
        }

        // here we can "inject" our context service into the constructor
        public HomeController(MyContext context)
        {
            _db = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            if (!isLoggedIn)
            {
                return View();
            }
            return RedirectToAction("Dashboard", "Movie");
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            // some stuff to do
            // check the validation
            if (ModelState.IsValid)
            {
                // If a User exists with provided email
                if (_db.Users.Any(u => u.Email == user.Email))
                {
                    // Manually add a ModelState error to the Email field, with provided
                    // error message
                    ModelState.AddModelError("Email", "Email already in use!");
                    return View("Index");
                }
                // validation is good and email is unique
                // save user to db after hashing password
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                _db.Users.Add(user);
                _db.SaveChanges();
                HttpContext.Session.SetInt32("UserId", user.UserId);
                // redirecting to Dashboard() in MovieController
                return RedirectToAction("Dashboard", "Movie");
            }
            // if we made it here, validation is wrong from the start
            return View("Index");
        }
        [HttpPost("letmein")]
        public IActionResult LetMeIn(LoginUser lu)
        {
            if (ModelState.IsValid)
            {
                // checking if everything is good!
                // still gotta check if user pw matches hashed in db
                User getUser = _db.Users.FirstOrDefault(u => u.Email == lu.LoginEmail);
                // If no user exists with provided email
                if (getUser == null)
                {
                    // Add an error to ModelState and return to View!
                    ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                    return View("Index");
                }
                // Initialize hasher object
                var hasher = new PasswordHasher<LoginUser>();
                // verify provided password against hash stored in db
                var result = hasher.VerifyHashedPassword(lu, getUser.Password, lu.LoginPassword);
                if (result == 0) // 0 means failure
                {
                    // handle failure (this should be similar to how "existing email" is handled)
                    ModelState.AddModelError("LoginPassword", "Invalid Email/Password");
                    return View("Index");
                }
                // if we get here, user is good!
                HttpContext.Session.SetInt32("UserId", getUser.UserId);
                return RedirectToAction("Dashboard", "Movie");
            }
            // if we reach here, it is no good
            return View("Index");
        }
        [HttpGet("logout")]
        public IActionResult LogOut()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
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

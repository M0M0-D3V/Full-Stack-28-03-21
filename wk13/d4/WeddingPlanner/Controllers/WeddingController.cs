using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers
{
    public class WeddingController : Controller
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
        public WeddingController(MyContext context)
        {
            _db = context;
        }

        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            // query user and put in container
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            Container container = new Container();
            container.LoggedUser = u;
            container.AllWeddings = _db.Weddings
            .Include(w => w.Guests)
            .ToList();
            return View(container);
        }
        [HttpGet("newwedding")]
        public IActionResult NewWedding()
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            Container container = new Container();
            container.LoggedUser = u;
            // show a view with a form
            return View(container);
        }

        [HttpPost("processwedding")]
        public IActionResult ProcessWedding(Container fromForm)
        {
            // check wedding date if in future
            Console.WriteLine(fromForm.Wedding.WeddingDate);
            if (fromForm.Wedding.WeddingDate < DateTime.Now)
            {
                ModelState.AddModelError("Wedding.WeddingDate", "Wedding Date must be in the future");
            }
            if (ModelState.IsValid)
            {
                // all is good
                fromForm.Wedding.UserId = (int)uid;
                _db.Weddings.Add(fromForm.Wedding);
                _db.SaveChanges();
                Console.WriteLine($"successfully added {fromForm.Wedding.WedderOne} and {fromForm.Wedding.WedderTwo}");
                return RedirectToAction("Dashboard", "Wedding");
            }
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            fromForm.LoggedUser = u;
            // show a view with a form
            return View("NewWedding", fromForm);
        }
        [HttpGet("wedding/{weddingId}")]
        public IActionResult OneWedding(int weddingId)
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            Container container = new Container();
            container.LoggedUser = u;
            container.Wedding = _db.Weddings.FirstOrDefault(w => w.WeddingId == weddingId);
            container.AllRSVPs = _db.RSVPs
            .Where(r => r.WeddingId == weddingId)
            .Include(r => r.Attendee)
            .ToList();
            return View(container);
        }
        [HttpGet("delete/{weddingId}")]
        public IActionResult Delete(int weddingId)
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            Wedding delWedding = _db.Weddings.FirstOrDefault(w => w.WeddingId == weddingId);
            _db.Weddings.Remove(delWedding);
            _db.SaveChanges();
            return RedirectToAction("Dashboard", "Wedding");
        }
        [HttpGet("rsvp/{weddingId}")]
        public IActionResult RSVP(int weddingId)
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            RSVP rsvp = new RSVP();
            rsvp.UserId = (int)uid;
            rsvp.WeddingId = weddingId;
            _db.RSVPs.Add(rsvp);
            _db.SaveChanges();
            return RedirectToAction("Dashboard", "Wedding");
        }
        [HttpGet("unrsvp/{weddingId}")]
        public IActionResult UnRSVP(int weddingId)
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            RSVP delRSVP = _db.RSVPs.FirstOrDefault(r => r.UserId == (int)uid && r.WeddingId == weddingId);
            _db.RSVPs.Remove(delRSVP);
            _db.SaveChanges();
            return RedirectToAction("Dashboard", "Wedding");
        }
    }
}
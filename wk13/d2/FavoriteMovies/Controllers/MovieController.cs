using FavoriteMovies.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FavoriteMovies.Controllers
{
    public class MovieController : Controller
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
        public MovieController(MyContext context)
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
            // query all movies and user info and likes
            List<Movie> allMovies = _db
                .Movies   // gets all movies and properties
                .Include(m => m.PostedBy) // grab PostedBy nav property
                .Include(m => m.Fans)  // grab Fans nav property
                .ToList();
            // call user info and put in viewBag
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            ViewBag.User = u;
            return View(allMovies);
        }
        [HttpGet("movies/new")]
        public IActionResult NewMovie()  // Render page with form
        {
            // call user info and put in viewBag
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            ViewBag.User = u;
            return View();
        }
        [HttpPost("postmovie")]
        public IActionResult PostMovie(Movie movie)
        {
            // check release date if in past
            if (movie.ReleaseDate > DateTime.Now)
            {
                ModelState.AddModelError("ReleaseDate", "Release Date must be in the past");
            }
            // run validation
            if (ModelState.IsValid)
            {
                // store movie in db
                movie.UserId = (int)uid;
                _db.Movies.Add(movie);
                _db.SaveChanges();
                return Redirect($"/movies/{movie.MovieId}");
                // this below one does the same thing
                // return RedirectToAction("Movies", new { movieId = movie.MovieId });
            }
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            ViewBag.User = u;
            return View("NewMovie");
        }

        [HttpGet("movies/{movieId}")]
        public IActionResult Movies(int movieId)
        {
            // query the movie by id
            Movie thisMovie = _db
            .Movies
            .Include(m => m.PostedBy)
            .Include(m => m.Fans)
            .ThenInclude(f => f.Fan)
            .FirstOrDefault(m => m.MovieId == movieId);
            // call user info and put in viewBag
            User u = _db.Users.FirstOrDefault(u => u.UserId == (int)uid);
            ViewBag.User = u;
            return View(thisMovie);
        }
        [HttpGet("delete/{movieId}")]  // movieId has to match the asp-route-movieId
        public IActionResult Delete(int movieId)
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index", "Home");
            }
            // query movies db by id
            Movie delMovie = _db.Movies.FirstOrDefault(m => m.MovieId == movieId);
            // remove from db
            _db.Movies.Remove(delMovie);
            // save changes
            _db.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        [HttpGet("like/{movieId}")]
        public IActionResult Like(int movieId)
        {
            // create new Like instance
            Like like = new Like();
            // reassign UserId and MovieId
            like.UserId = (int)uid;
            like.MovieId = movieId;
            // Add to Likes table in db
            _db.Likes.Add(like);
            // save changes
            _db.SaveChanges();
            // redirect dashboard
            return RedirectToAction("Dashboard");
        }
        [HttpGet("unlike/{movieId}")]
        public IActionResult Unlike(int movieId)
        {
            // query Like from db
            // must match the movieId and userId in the 1 Like relationship
            Like unlike = _db.Likes.FirstOrDefault(l => l.FanOf.MovieId == movieId && l.Fan.UserId == (int)uid);
            // Add to Likes table in db
            _db.Likes.Remove(unlike);
            // save changes
            _db.SaveChanges();
            // redirect dashboard
            return RedirectToAction("Dashboard");
        }
    }
}

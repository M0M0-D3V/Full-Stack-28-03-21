using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DBIntro.Models;

namespace DBIntro.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        // here we can "inject" our context service into the constructor
        public HomeController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            List<Movie> AllMovies = _context.Movies.ToList();
            ViewBag.AllMovies = AllMovies;
            // create Container and add list and movie object
            Container container = new Container();
            container.MovieList = AllMovies;
            container.Movie = new Movie();
            return View(container);
        }
        [HttpPost("process")]
        public IActionResult Process(Movie movie)
        {
            Console.WriteLine("Made it to Process");
            // adding movie to db
            _context.Movies.Add(movie);
            // save changes!
            _context.SaveChanges();
            Console.WriteLine($"Successfully saved! {movie.Title}");
            return RedirectToAction("Index");
        }
        [HttpPost("update/{id}")]
        public IActionResult Update(int id, Movie m)
        {
            // query db with id
            Console.WriteLine($"got id: {id}");
            Movie thisMovie = _context.Movies.FirstOrDefault(m => m.MovieId == id);
            // update values with values from post form
            thisMovie.Title = m.Title;
            thisMovie.Type = m.Type;
            thisMovie.Description = m.Description;
            thisMovie.ReleaseDate = m.ReleaseDate;
            thisMovie.Rate = m.Rate;
            thisMovie.UpdatedAt = DateTime.Now;
            // save changes
            _context.SaveChanges();
            Console.WriteLine($"Successfully saved! {thisMovie.Title}");
            return RedirectToAction("Index");
        }

        [HttpGet("info/{id}")]
        public IActionResult Info(int id)
        {
            // show the 1 info
            // we do the query thing
            var newMovie = _context.Movies.Where(m => m.MovieId == id);
            Movie firstMovie = _context.Movies.FirstOrDefault(m => m.MovieId == id);
            return View(firstMovie);
        }
        [HttpGet("edit/{id}")]
        public IActionResult Edit(int id)
        {
            Movie movie = _context.Movies.FirstOrDefault(m => m.MovieId == id);
            return View(movie);
        }
        [HttpGet("delete")]
        public IActionResult Delete(int id)
        {
            // first query by id
            Movie delMovie = _context.Movies.FirstOrDefault(m => m.MovieId == id);
            // Remove method
            _context.Movies.Remove(delMovie);
            // save changes!
            _context.SaveChanges();
            Console.WriteLine("Deleting movie successfully");
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

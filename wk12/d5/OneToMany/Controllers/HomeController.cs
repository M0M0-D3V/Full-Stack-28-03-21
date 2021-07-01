using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OneToMany.Models;

namespace OneToMany.Controllers
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
            // query all users and their messages
            List<User> userList = _context.Users
            .Include(u => u.CreatedMessages)
            .ToList();

            // query from messages about specific user
            List<Message> messageListwithUser = _context.Messages
            .Include(m => m.Creator).ToList();
            ViewBag.MessageList = messageListwithUser;
            return View(userList);
        }

        [HttpGet("{userId}")]
        public IActionResult UserDetails(int userId)
        {
            // Number of messages created by this User
            int numMessages = _context.Users
                // Including Messages, so that we may query on this field
                .Include(user => user.CreatedMessages)
                // Get a User with userId
                .FirstOrDefault(user => user.UserId == userId)
                // Now, with a reference to a User object, and access to a User's Messages
                // We can get the .Count property of the Messages List
                .CreatedMessages.Count;
            ViewBag.NumMessages = numMessages;
            // User with the longest Message, we can do this in two stages
            // First, find the Length of the longest Message
            int longestMessageLength = _context.Messages.Max(message => message.Content.Length);
            ViewBag.LongestMessage = longestMessageLength;
            // Second, select one User whose CreatedMessages has Any that matches this character count
            // Note here that CreatedMessages is a List, and thus can take a LINQ expression: such as .Any()
            User userWithLongest = _context.Users
                .Include(user => user.CreatedMessages)
                .FirstOrDefault(user => user.CreatedMessages
                    .Any(message => message.Content.Length == longestMessageLength));
            ViewBag.UserWithLongest = userWithLongest;
            // Messages NOT related to this User:
            // Since this query only requires checking a Message's UserId
            // and doesn't require us to check data contained in a Message's Creator
            // We can do this without a .Include()
            List<Message> unrelatedMessages = _context.Messages
                .Where(message => message.UserId != userId)
                .Include(m => m.Creator)
                .ToList();
            ViewBag.UnrelatedMessages = unrelatedMessages;
            return View();
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

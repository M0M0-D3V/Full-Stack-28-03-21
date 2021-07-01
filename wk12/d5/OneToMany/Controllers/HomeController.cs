using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OneToMany.Models;
using Microsoft.AspNetCore.Identity;

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
        // using / as Dashboard page
        [HttpGet("")]
        public IActionResult Index()
        {
            if (HttpContext.Session.GetInt32("UserId") == null)
            {
                return RedirectToAction("SignIn");
            }
            // instantiate Container
            Container container = new Container();
            // query all users and their messages
            List<User> userList = _context.Users
            .Include(u => u.CreatedMessages)
            .ToList();

            // query from messages about specific user
            List<Message> messageListwithUser = _context.Messages
            .Include(m => m.Creator).ToList();
            ViewBag.MessageList = messageListwithUser;

            // store stuff in Container
            container.Messages = messageListwithUser;
            container.Users = userList;
            container.User = _context.Users.FirstOrDefault(u => u.UserId == (int)HttpContext.Session.GetInt32("UserId"));
            container.LoggedUserId = container.User.UserId;
            return View(container);
        }
        [HttpGet("signin")]
        public IActionResult SignIn()
        {
            if (HttpContext.Session.GetInt32("UserId") != null)
            {
                return RedirectToAction("Index");
            }
            // show both the register and login forms
            return View();
        }
        [HttpPost("signup")]
        public IActionResult SignUp(User user)
        {
            // some stuff to do
            // check the validation
            if (ModelState.IsValid)
            {
                // If a User exists with provided email
                if (_context.Users.Any(u => u.Email == user.Email))
                {
                    // Manually add a ModelState error to the Email field, with provided
                    // error message
                    ModelState.AddModelError("Email", "Email already in use!");
                    // You may consider returning to the View at this point
                    return View("SignIn");
                }
                // other code
                // save user to db after hasing password
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                _context.Users.Add(user);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", user.UserId);
                return RedirectToAction("Index");
            }
            return View("SignIn");
        }
        [HttpPost("letmein")]
        public IActionResult LetMeIn(LoginUser lu)
        {
            if (ModelState.IsValid)
            {
                // checking if everything is good!
                // still gotta check if user pw matches hashed in db
                User getUser = _context.Users.FirstOrDefault(u => u.Email == lu.LoginEmail);
                // If no user exists with provided email
                if (getUser == null)
                {
                    // Add an error to ModelState and return to View!
                    ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                    return View("SignIn");
                }
                // if we get here, user is good!
                HttpContext.Session.SetInt32("UserId", getUser.UserId);
                return RedirectToAction("Index");
            }
            // if we reach here, it is no good
            return View("SignIn");
        }
        [HttpPost("processmessage")]
        public IActionResult ProcessMessage(Container mess)
        {
            int userId = (int)HttpContext.Session.GetInt32("UserId");
            if (ModelState.IsValid)
            {
                // provide userID from session
                // if correct, then create
                mess.Message.UserId = userId;
                _context.Messages.Add(mess.Message);
                // save
                _context.SaveChanges();
                // redirect
                return RedirectToAction("Index");
            }
            // if we reach here, then we need to run all the queries again!
            // instantiate Container
            Container container = new Container();
            // query all users and their messages
            List<User> userList = _context.Users
            .Include(u => u.CreatedMessages)
            .ToList();
            // query from messages about specific user
            List<Message> messageListwithUser = _context.Messages
            .Include(m => m.Creator).ToList();
            ViewBag.MessageList = messageListwithUser;
            // store stuff in Container
            container.Messages = messageListwithUser;
            container.Users = userList;
            container.LoggedUserId = userId;
            container.User = _context.Users.FirstOrDefault(u => u.UserId == (int)HttpContext.Session.GetInt32("UserId"));
            return View("Index", container);
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
        [HttpGet("edit/{mId}")]
        public IActionResult Edit(int mId)
        {
            // query the message by messageID
            Message mess = _context.Messages.FirstOrDefault(m => m.MessageId == mId);
            return View(mess);
        }
        [HttpGet("delete/{mId}")]
        public IActionResult Delete(int mId)
        {
            // query the message by messageID
            Message mess = _context.Messages.FirstOrDefault(m => m.MessageId == mId);
            // remove from message table
            _context.Messages.Remove(mess);
            // save changes
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpPost("updatemessage/{id}")]
        public IActionResult UpdateMessage(Message updateMess, int id)
        {
            if (ModelState.IsValid)
            {
                Message mess = _context.Messages.FirstOrDefault(m => m.MessageId == id);
                mess.Content = updateMess.Content;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("Edit", updateMess);
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

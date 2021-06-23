using Microsoft.AspNetCore.Mvc;

namespace MarhabaASP.Controllers
{
    public class HelloController : Controller
    {
        [HttpGet("look")]
        public ViewResult Look()
        {
            return View();
        }
    }
}
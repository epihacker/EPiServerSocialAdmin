using System.Web.Mvc;

namespace EPiServer.Social.Admin.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
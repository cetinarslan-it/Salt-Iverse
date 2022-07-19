using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace StudentPortal.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly StudentContext _context;

        public StudentsController (StudentContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index ( )
        {
            return _context.Students != null ?
                        Ok(await _context.Students.ToListAsync()) :
                        Problem("Entity set 'StudentContext.Student'  is null.");
        }
    }
}

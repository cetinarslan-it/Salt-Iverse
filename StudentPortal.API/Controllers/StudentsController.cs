using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
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
                    Problem("Entity is null.");
        }

        [HttpGet("claims")]
        [Authorize]
        public IActionResult Claims ( )
        {
            string email = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
            return Ok(
                User.Claims.Select(c => new { c.Type, c.Value })
            );
        }
    }
}


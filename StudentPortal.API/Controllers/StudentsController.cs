using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace StudentPortal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize("shouldexists")]
    public class StudentsController : ControllerBase
    {
        private readonly StudentContext _context;
        public StudentsController(StudentContext context)
        {
            _context = context;
        }

        [HttpGet("me")]
        public async Task<IActionResult> UserMe()
        {
            var email = GetUserEmail();
            return _context.Students != null ?
                    Ok(await _context.Students.Include(d => d.Documents)
                    .FirstOrDefaultAsync(s => s.Email == email)) :
            Problem("Entity is null.");
        }

        private string GetUserEmail() =>
            User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
    }
}


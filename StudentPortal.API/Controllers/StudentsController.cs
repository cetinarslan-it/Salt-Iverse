using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentPortal.Api.DTOs;

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
                    Ok(await _context.Students
                    .Include(d => d.Course)
                    .Include(d => d.Documents)
                    .FirstOrDefaultAsync(s => s.Email == email)) :
            Problem("Entity is null.");
        }

        [HttpPatch("/linkedin")]
        public async Task<IActionResult> UpdateLinkedURL([FromBody] AccountLinkUpdateRequest request)
        {
            var email = GetUserEmail();
            var student = await _context.Students.FirstOrDefaultAsync(s=> s.Email == email);
            student.LinkedInUrl = request.Url;
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPatch("/github")]
        public async Task<IActionResult> UpdateGitURL([FromBody] AccountLinkUpdateRequest request)
        {
            var email = GetUserEmail();
            var student = await _context.Students.FirstOrDefaultAsync(s=> s.Email == email);
            student.GitHubUrl = request.Url;
            await _context.SaveChangesAsync();
            return Ok();
        }

        private string GetUserEmail() =>
            User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
    }
}
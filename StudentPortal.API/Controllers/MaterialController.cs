using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentPortal.Api.DTOs;

namespace StudentPortal.Api.Controllers
{
  [ApiController]
  [Route("[controller]/[action]")]
//   [Authorize("shouldexists")]
  public class MaterialController : ControllerBase
  {
    private readonly StudentContext _context;
    private readonly IMapper _mapper;
    public MaterialController(StudentContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
    }

    [HttpGet]
    public async Task<IActionResult> MaterialList()
    {
      var email = "mig.urbonaite@gmail.com";
      var res = await _context
                .WeekTopics
                .Include(w => w.Course)
                .Where(w => w.Course.CourseId == _context.Students.FirstOrDefault(s => s.Email == email).CourseId)
                .Include(w => w.Topics)
                .ToListAsync();
      return _context.WeekTopics != null ?
              Ok(_mapper.Map<List<WeekTopicResponse>>(res)) :
              Problem("Entity is null.");
    }

    private string GetUserEmail() =>
        User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
  }
}


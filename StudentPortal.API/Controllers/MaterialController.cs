using System.Security.Claims;
using AutoMapper;
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
      var email = GetUserEmail();
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

    [HttpGet]
    public async Task<IActionResult> TopicInfo(int selectedTopicId )
    {
      var email = GetUserEmail();
      var res = await _context.Topics
                  .Where(t=>t.Id == selectedTopicId)
                  .Where(w => w.WeekTopic.Course.CourseId == _context.Students.FirstOrDefault(s => s.Email == email).CourseId)
                  .Include(p=>p.Presentations)
                  .Include(p=>p.Labs)
                  .Include(p=>p.Videos)
                  .ToListAsync();
        
      return _context.Topics != null ?
              Ok(_mapper.Map<List<TopicDTO>>(res)) :
              Problem("Entity is null.");
    }

     [HttpGet]
    public async Task<IActionResult> AllLabs()
    {
      //var email = "mig.urbonaite@gmail.com";
      var res = await _context.Labs
                  .Select(l=>l)
                  .ToListAsync();
        
      return _context.Labs != null ?
              Ok(_mapper.Map<List<LabsDTO>>(res)) :
              Problem("Entity is null.");
    }

    private string GetUserEmail() =>
        User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
  }
}
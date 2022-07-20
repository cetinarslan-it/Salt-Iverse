using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace StudentPortal.API
{
  public class HasScopeHandler : AuthorizationHandler<HasScopeRequirement>
  {
    private readonly StudentContext _dbContext;

    public HasScopeHandler(StudentContext dbContext)
    {
      _dbContext = dbContext;
    }
    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, HasScopeRequirement requirement)
    {
      string email = context.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
      if (string.IsNullOrEmpty(email)) return;

      var user = await _dbContext.Students.FirstOrDefaultAsync(s => s.Email == email);
      Console.WriteLine("User for {0} is {1}", email, user?.FullName);
      if (user == null) return;

      context.Succeed(requirement);
    }
  }
}
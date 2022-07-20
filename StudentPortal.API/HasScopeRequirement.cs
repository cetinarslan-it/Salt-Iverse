
using Microsoft.AspNetCore.Authorization;

namespace StudentPortal.API;
public class HasScopeRequirement : IAuthorizationRequirement
{
  public string Issuer { get; }
  public string Scope { get; }

  public HasScopeRequirement()
  {
    
  }
  public HasScopeRequirement(string scope, string issuer)
  {
    Scope = scope ?? throw new ArgumentNullException(nameof(scope));
    Issuer = issuer ?? throw new ArgumentNullException(nameof(issuer));
  }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentPortal.Api.Models;
public class Student
{
  [Key]
  public int Id { get; set; }
  public string AvatarUrl { get; set; }
  public string FullName { get; set; }
  public string Email { get; set; }
  public string MobName { get; set; }
  public string LinkedInUrl { get; set; }
  public string GitHubUrl { get; set; }
  public int CourseId {get; set;}
  public Course Course { get; set; }
  public List<Document> Documents { get; set; }
  public List<AssignmentResult> AssignmentResults { get; set; }
}
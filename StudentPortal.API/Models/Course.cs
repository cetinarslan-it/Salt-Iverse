using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace StudentPortal.Api.Models;
public class Course
{
  [Key]
  public int CourseId { get; set; }
  public string CourseName { get; set; }   

  [JsonIgnore]
  public List<Student> StudentList { get; set;}            
}
using System.ComponentModel.DataAnnotations;

namespace StudentPortal.Api.Models;
public class Course
{
  [Key]
  public int CourseId { get; set; }
  public string CourseName { get; set; }   

  public List<Student> StudentList { get; set;}            
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentPortal.Api.Models;
public class Course
{
  [Key]
  public int CourseId { get; set; }
  public string CourseName { get; set; }   

  public List<Student> StudentList { get; set;}            
}
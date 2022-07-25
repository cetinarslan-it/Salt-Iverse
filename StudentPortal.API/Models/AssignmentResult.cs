using System.ComponentModel.DataAnnotations;

namespace StudentPortal.Api.Models;
public class AssignmentResult
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public bool PassState { get; set; }
    public DateTime? SubmitionDate { get; set; }
    public DateTime Deadline { get; set; }
    
    public int StudentId { get; set; }
    public Student Student { get; set; }
}
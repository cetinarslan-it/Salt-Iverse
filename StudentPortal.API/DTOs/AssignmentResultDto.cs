using System.ComponentModel.DataAnnotations;

namespace StudentPortal.Api.DTOs;
public class AssignmentResultDto
{   
    public string Name { get; set; }
    public bool PassState { get; set; }
    public DateTime? SubmitionDate { get; set; }
    public DateTime Deadline { get; set; }
    
}
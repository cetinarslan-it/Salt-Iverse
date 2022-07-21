using StudentPortal.Api.Models;

namespace StudentPortal.Api.DTOs;
public class TopicDTO
{ 
  public string TopicName { get; set; } 
  public string Description { get; set;}
  public List<Presentation> Presentations { get; set; }    
  public List<Video> Videos { get; set; }    
  public List<Lab> Labs { get; set; }    
}

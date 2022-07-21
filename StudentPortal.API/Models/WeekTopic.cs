using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace StudentPortal.Api.Models;
public class WeekTopic
{
  [Key]
  public int Id { get; set; }
  public string TopicName { get; set; }   
  public int WeekNo { get; set; }
  public Course Course { get; set;}      
  public List<Topic> Topics { get; set; }    
}
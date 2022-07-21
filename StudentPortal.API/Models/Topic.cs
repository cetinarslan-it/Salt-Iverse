namespace StudentPortal.Api.Models
{
  public class Topic
  {
    public int Id { get; set; }
    public string TopicName { get; set; }
    public WeekTopic WeekTopic { get; set; }
    public string Description { get; set;}
    public List<Presentation> Presentations { get; set; }    
    public List<Video> Videos { get; set; }    
    public List<Lab> Labs { get; set; }    
  }
}
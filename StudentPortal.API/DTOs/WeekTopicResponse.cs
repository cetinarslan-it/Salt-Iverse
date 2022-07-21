namespace StudentPortal.Api.DTOs;
public class WeekTopicResponse
{   
  public string TopicName { get; set; }
  public int WeekNo { get; set; }
  public List<TopicShortDTO> Topics { get; set; }
}
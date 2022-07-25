using System.Text.Json.Serialization;

namespace StudentPortal.Api.Models
{
  public class Document
  {
    public int Id { get; set; }
    public string DocumentName { get; set; }
    public string DocumentUrl { get; set; }
    [JsonIgnore]
    public Student Student { get; set; }
    
  }
}
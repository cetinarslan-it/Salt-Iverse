namespace StudentPortal.Api.Models
{
  public class Document
  {
    public int Id { get; set; }
    public string DocumentName { get; set; }
    public string DocumentUrl { get; set; }
    public Student Student { get; set; }
  }
}
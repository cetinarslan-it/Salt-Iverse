using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace StudentPortal.Api.DTOs;
public class TopicShortDTO
{
    public int Id { get; set; }
    public string TopicName { get; set; }
    public string Description { get; set;}
}
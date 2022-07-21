using AutoMapper;
using StudentPortal.Api.Models;
using StudentPortal.Api.DTOs;

namespace StudentPortal.API;

public class DtosMapperProfile : Profile
{
  public DtosMapperProfile()
  {
    CreateMap<Topic, TopicShortDTO>();
    CreateMap<WeekTopic, WeekTopicResponse>();
    CreateMap<Topic, TopicDTO>();
  }
}
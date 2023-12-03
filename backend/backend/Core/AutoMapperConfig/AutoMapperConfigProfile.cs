using AutoMapper;
using backend.Core.Dtos.Company;
using backend.Core.Entities;

namespace backend.Core.AutoMapperConfig
{
    public class AutoMapperConfigProfile : Profile
    {
        public AutoMapperConfigProfile()
        {
            CreateMap<CompanyCreateDto, Company>();
        }
    }
}

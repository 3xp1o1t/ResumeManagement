﻿using AutoMapper;
using backend.Core.Context;
using backend.Core.Dtos.Company;
using backend.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private ApplicationDbContext _context { get; }
        private IMapper _mapper { get; }

        public CompanyController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // CRUD
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateCompany([FromBody] CompanyCreateDto dto)
        {
            Company newCompany = _mapper.Map<Company>(dto);
            await _context.Companies.AddAsync(newCompany);
            await _context.SaveChangesAsync();

            return Ok("Company Created Successfully");
        }

        [HttpGet]
        [Route("Get")]
        public async Task<ActionResult<IEnumerable<CompanyGetDto>>> GetCompanies()
        {
            var companies = await _context.Companies.Where(c => c.IsActive).OrderByDescending(q => q.CreatedAt).ToListAsync();
            var convertedCompanies = _mapper.Map<IEnumerable<CompanyGetDto>>(companies);

            return Ok(convertedCompanies);
        }

        [HttpPut]
        [Route("Put/{companyId}")]
        public async Task<IActionResult> UpdateCompany(long companyId, [FromBody] CompanyUpdateDto dto)
        {
            var existingCompany = await _context.Companies.FindAsync(companyId);

            if (existingCompany == null)
            {
                return NotFound("Company not found");
            }

            existingCompany.Name = dto.Name;
            existingCompany.Size = dto.Size;

            await _context.SaveChangesAsync();

            return Ok("Company updated successfully");
        }

        [HttpPut]
        [Route("Delete/{companyId}")]
        public async Task<IActionResult> DeleteCompany(long companyId)
        {
            var existingCompany = await _context.Companies.FindAsync(companyId);

            if (existingCompany == null)
            {
                return NotFound("Company not found");
            }

            existingCompany.IsActive = false;

            await _context.SaveChangesAsync();

            return Ok("Company delete successfully");
        }

        [HttpPut]
        [Route("DeleteMany")]
        public async Task<IActionResult> DeleteManyCompanies([FromBody] CompanyDeleteManyDto dto)
        {
            if (dto == null || dto.CompanyIds == null || !dto.CompanyIds.Any())
            {
                return BadRequest("No companies id's provided for deletection");
            }

            var companiesToDelete = await _context.Companies.Where(c => dto.CompanyIds.Contains(c.ID)).ToListAsync();

            foreach (var company in companiesToDelete)
            {
                company.IsActive = false;
            }

            await _context.SaveChangesAsync();

            return Ok("Companies deleted successfully");
        }
    }
}

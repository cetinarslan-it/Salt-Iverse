using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using StudentPortal.API;
using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

var conStrBuilder = new SqlConnectionStringBuilder(
        builder.Configuration.GetConnectionString("StudentContext")
        ?? throw new InvalidOperationException("Connection string 'StudentContext' not found."));
conStrBuilder.UserID = builder.Configuration["StudentContext:UserId"];
conStrBuilder.Password = builder.Configuration["StudentContext:Password"];
var connection = conStrBuilder.ConnectionString;

builder.Services.AddAutoMapper(cfg => cfg.AddProfile<DtosMapperProfile>());
builder.Services.AddDbContext<StudentContext>(options =>
    options.UseSqlServer(connection));

// Add services to the container.
builder.Services.AddScoped<IAuthorizationHandler, HasScopeHandler>();
builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =>
  {
      options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}/";
      options.Audience = builder.Configuration["Auth0:Audience"];
  });
builder.Services.AddAuthorization(options =>
{
  options.AddPolicy(
    "shouldexists", policy => policy.Requirements.Add(
      new HasScopeRequirement())
  );
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if ( app.Environment.IsDevelopment() )
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

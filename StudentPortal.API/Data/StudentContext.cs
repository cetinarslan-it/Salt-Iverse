using Microsoft.EntityFrameworkCore;
using StudentPortal.Api.Models;

    public class StudentContext : DbContext
    {
        public StudentContext (DbContextOptions<StudentContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; } = default!;
        public DbSet<Course> Courses { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Lab> Labs { get; set; }
        public DbSet<Presentation> Presentations { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<WeekTopic> WeekTopics { get; set; }
        public DbSet<AssignmentResult> AssignmentResults { get; set; }
    }

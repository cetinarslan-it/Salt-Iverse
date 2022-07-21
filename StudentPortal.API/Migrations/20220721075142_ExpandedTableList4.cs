using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudentPortal.API.Migrations
{
    public partial class ExpandedTableList4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Courses",
                newName: "CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CourseId",
                table: "Courses",
                newName: "Id");
        }
    }
}

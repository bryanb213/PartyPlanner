using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Airports",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Ident = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    LatitudeDeg = table.Column<double>(nullable: true),
                    LongitudeDeg = table.Column<double>(nullable: true),
                    ElevationFt = table.Column<int>(nullable: true),
                    Continent = table.Column<string>(nullable: true),
                    IsoCountry = table.Column<string>(nullable: true),
                    IsoRegion = table.Column<string>(nullable: true),
                    Municipality = table.Column<string>(nullable: true),
                    ScheduledService = table.Column<string>(nullable: true),
                    GpsCode = table.Column<string>(nullable: true),
                    IataCode = table.Column<string>(nullable: true),
                    LocalCode = table.Column<string>(nullable: true),
                    HomeLink = table.Column<string>(nullable: true),
                    WikipediaLink = table.Column<string>(nullable: true),
                    Keywords = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airports", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Runways",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    AirportRef = table.Column<int>(nullable: true),
                    AirportIdent = table.Column<string>(nullable: true),
                    LengthFt = table.Column<int>(nullable: true),
                    WidthFt = table.Column<int>(nullable: true),
                    Surface = table.Column<string>(nullable: true),
                    Lighted = table.Column<int>(nullable: true),
                    Closed = table.Column<int>(nullable: true),
                    LeIdent = table.Column<string>(nullable: true),
                    LeLatitudeDeg = table.Column<string>(nullable: true),
                    LeLongitudeDeg = table.Column<string>(nullable: true),
                    LeElevationFt = table.Column<string>(nullable: true),
                    LeHeadingDegT = table.Column<string>(nullable: true),
                    LeDisplacedThresholdFt = table.Column<string>(nullable: true),
                    HeIdent = table.Column<string>(nullable: true),
                    HeLatitudeDeg = table.Column<string>(nullable: true),
                    HeLongitudeDeg = table.Column<string>(nullable: true),
                    HeElevationFt = table.Column<string>(nullable: true),
                    HeHeadingDegT = table.Column<string>(nullable: true),
                    HeDisplacedThresholdFt = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Runways", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Airports");

            migrationBuilder.DropTable(
                name: "Runways");
        }
    }
}

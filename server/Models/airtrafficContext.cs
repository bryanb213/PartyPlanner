using System;
using Microsoft.EntityFrameworkCore;


namespace server.Models
{
    public partial class airtrafficContext : DbContext
    {
        // public airtrafficContext()
        // {
        // }

        public airtrafficContext(DbContextOptions options)
            : base(options)
        {
        }

        public virtual DbSet<Airports> Airports { get; set; }
        public virtual DbSet<Runways> Runways { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=localhost;user=root;password=password;database=airtraffic", x => x.ServerVersion("8.0.20-mysql"));
            }
        }

       protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Airports>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("airports");

                entity.Property(e => e.Continent)
                    .HasColumnName("continent")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ElevationFt).HasColumnName("elevation_ft");

                entity.Property(e => e.GpsCode)
                    .HasColumnName("gps_code")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.HomeLink)
                    .HasColumnName("home_link")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.IataCode)
                    .HasColumnName("iata_code")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Ident)
                    .HasColumnName("ident")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.IsoCountry)
                    .HasColumnName("iso_country")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.IsoRegion)
                    .HasColumnName("iso_region")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Keywords)
                    .HasColumnName("keywords")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LatitudeDeg).HasColumnName("latitude_deg");

                entity.Property(e => e.LocalCode)
                    .HasColumnName("local_code")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LongitudeDeg).HasColumnName("longitude_deg");

                entity.Property(e => e.Municipality)
                    .HasColumnName("municipality")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ScheduledService)
                    .HasColumnName("scheduled_service")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.WikipediaLink)
                    .HasColumnName("wikipedia_link")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Runways>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("runways");

                entity.Property(e => e.AirportIdent)
                    .HasColumnName("airport_ident")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.AirportRef).HasColumnName("airport_ref");

                entity.Property(e => e.Closed).HasColumnName("closed");

                entity.Property(e => e.HeDisplacedThresholdFt)
                    .HasColumnName("he_displaced_threshold_ft")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.HeElevationFt)
                    .HasColumnName("he_elevation_ft")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.HeHeadingDegT)
                    .HasColumnName("he_heading_degT")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.HeIdent)
                    .HasColumnName("he_ident")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.HeLatitudeDeg)
                    .HasColumnName("he_latitude_deg")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.HeLongitudeDeg)
                    .HasColumnName("he_longitude_deg")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.LeDisplacedThresholdFt)
                    .HasColumnName("le_displaced_threshold_ft")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LeElevationFt)
                    .HasColumnName("le_elevation_ft")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LeHeadingDegT)
                    .HasColumnName("le_heading_degT")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LeIdent)
                    .HasColumnName("le_ident")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LeLatitudeDeg)
                    .HasColumnName("le_latitude_deg")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LeLongitudeDeg)
                    .HasColumnName("le_longitude_deg")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LengthFt).HasColumnName("length_ft");

                entity.Property(e => e.Lighted).HasColumnName("lighted");

                entity.Property(e => e.Surface)
                    .HasColumnName("surface")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.WidthFt).HasColumnName("width_ft");
            });

            OnModelCreatingPartial(modelBuilder);
        } 

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

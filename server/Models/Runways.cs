using System;
using System.Collections.Generic;

namespace server.Models
{
    public partial class Runways
    {
        public int? Id { get; set; }
        public int? AirportRef { get; set; }
        public string AirportIdent { get; set; }
        public int? LengthFt { get; set; }
        public int? WidthFt { get; set; }
        public string Surface { get; set; }
        public int? Lighted { get; set; }
        public int? Closed { get; set; }
        public string LeIdent { get; set; }
        public string LeLatitudeDeg { get; set; }
        public string LeLongitudeDeg { get; set; }
        public string LeElevationFt { get; set; }
        public string LeHeadingDegT { get; set; }
        public string LeDisplacedThresholdFt { get; set; }
        public string HeIdent { get; set; }
        public string HeLatitudeDeg { get; set; }
        public string HeLongitudeDeg { get; set; }
        public string HeElevationFt { get; set; }
        public string HeHeadingDegT { get; set; }
        public string HeDisplacedThresholdFt { get; set; }
    }
}

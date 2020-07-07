using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace HomeController.Controllers {
    [Route ("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase {
        private readonly airtrafficContext _dbContext;

        // here we can "inject" our context service into the constructor
        public HomeController (airtrafficContext context) {
            _dbContext = context;
        }

        [HttpGet ("search/{city}")]
        public IActionResult SearchByCity (string city) {

            var airports = (from airportData in _dbContext.Airports where airportData.Municipality == city &&
                airportData.Type != "heliport" &&
                airportData.Type != "closed"
                select new {
                    airportName = airportData.Name,
                    airportId = airportData.Id,
                    airportCity = airportData.Municipality
                }).ToList ();
            return Ok (airports);
        }

        [HttpGet ("details/{id}")]
        public IActionResult GetTable (int id) {
            var res = (from airportTable in _dbContext.Airports 
                        join runwayTable in _dbContext.Runways 
                        on airportTable.Ident equals runwayTable.AirportIdent 
                        where airportTable.Id == id
                select new {
                    airportName = airportTable.Name,
                        airportType = airportTable.Type,
                        city = airportTable.Municipality,
                        lowEnd = runwayTable.LeIdent,
                        highEnd = runwayTable.HeIdent,
                        airportId = airportTable.Id
                }).ToList ();

            var finalResult =
                from r in res
            group r by new { r.airportName, r.airportType, r.city, r.airportId } into g
            select new {
            g.Key.airportName,
            g.Key.airportType,
            g.Key.city,
            g.Key.airportId,
            lowEnd = g.Select (r => r.lowEnd).Aggregate ((x, y) => x + "," + y),
            highEnd = g.Select (r => r.highEnd).Aggregate ((x, y) => x + "," + y)
            };
            return Ok (finalResult);
        }
    }
}
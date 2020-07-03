using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace HomeController.Controllers {
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase {
        private readonly airtrafficContext _dbContext;

        // here we can "inject" our context service into the constructor
        public HomeController (airtrafficContext context) {
            _dbContext = context;
        }

        [HttpGet("search/{xx}")]
        public IActionResult Search(string xx) {
            xx.ToLower();
            var res = (from airportTable in _dbContext.Airports
                        join runwayTable in _dbContext.Runways
                        on airportTable.Ident equals runwayTable.AirportIdent
                        where airportTable.Name == xx
                        select new{
                            airportTable= airportTable.Name,
                            city = airportTable.Municipality,
                            runwayType = runwayTable.Surface
                        }).ToList();
            foreach(var i in res)
            {
                return Ok(i);
            }

            return Ok(res);
        }

        [HttpGet("join")]
        public IActionResult GetTable() {
            List<Airports> airports = _dbContext.Airports.ToList();
            List<Runways> runways = _dbContext.Runways.ToList();
            var res = from data in airports
                        join st in  runways
                        on data.Ident equals st.AirportIdent
                        select new { City = data.Municipality, he = st.AirportIdent };
            foreach(var i in res) 
            {
                return Ok(i);
            }
            return Ok();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Modelviewc.Models;


namespace Modelviewc.Controllers
{
    [ApiController]
    [Route("maths")]
    public class MathsController : Controller
    {
          [HttpGet("Sum")]
          public IActionResult Sum([FromQuery]MathsModel model){
           return Ok(model.a + model.b);}

          [HttpGet("Sub")]
           public IActionResult Sub([FromQuery]MathsModel model){
           return Ok(model.a - model.b);}

           [HttpGet("Mul")]
           public IActionResult Mul([FromQuery]MathsModel model){
           return Ok(model.a * model.b);}

           [HttpGet("Div")]
           public IActionResult Div([FromQuery]MathsModel model){
           return Ok(model.a / model.b);}
    }
}
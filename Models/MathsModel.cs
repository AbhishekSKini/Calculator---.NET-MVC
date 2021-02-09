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

    public class MathsModel
    {
        public float a{get; set;}

        public float b{get;set;}

    }
}

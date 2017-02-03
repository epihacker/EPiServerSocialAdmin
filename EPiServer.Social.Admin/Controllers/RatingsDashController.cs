using EPiServer.Social.Common;
using EPiServer.Social.Ratings;
using EPiServer.Social.Ratings.Core;
using EPiServer.Social.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EPiServer.Social.Admin.Controllers
{
    public class RatingsDashController : ApiController
    {
        private readonly IRatingService ratingService;

        public RatingsDashController()
        {
            var ratingsServiceFactory = new DefaultRatingServiceFactory();
            this.ratingService = ratingsServiceFactory.Create();
        }

        // GET: api/Ratings
        public RatingsDash Get()
        {
            var ratingDash = new RatingsDash();

            try
            {
                var results = ratingService.Get(
                    new Criteria<RatingFilter>
                    {
                        PageInfo = new PageInfo
                        {
                            CalculateTotalCount = true
                        }
                    }
                );

                ratingDash.TotalCount = results.TotalCount;
            }
            catch (Exception ex)
            {
            }

            return ratingDash;
        }
    }
}

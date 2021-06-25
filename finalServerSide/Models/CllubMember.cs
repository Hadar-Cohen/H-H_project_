using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace finalServerSide.Models
{
    public class CllubMember
    {
        int userId;
        int seriesId;
        public CllubMember() { }
        public CllubMember(int userId, int seriesId)
        {
            this.UserId = userId;
            this.SeriesId = seriesId;
        }

        public int UserId { get => userId; set => userId = value; }
        public int SeriesId { get => seriesId; set => seriesId = value; }
    }
}
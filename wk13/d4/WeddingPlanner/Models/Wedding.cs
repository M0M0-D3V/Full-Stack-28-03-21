using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId { get; set; }
        [Required]
        [Display(Name = "Wedder One")]
        public string WedderOne { get; set; }

        [Required]
        [Display(Name = "Wedder Two")]

        public string WedderTwo { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Wedding Date")]

        public DateTime WeddingDate { get; set; }
        [Required]
        [Display(Name = "Wedding Address")]

        public string WeddingAddress { get; set; }
        // foreign key
        public int UserId { get; set; }
        // navigational property
        public User PlannedBy { get; set; }
        // many to many
        public List<RSVP> Guests { get; set; }
    }
}
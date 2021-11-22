using CRUDProdutosASPNETCoreMVC.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDProdutosASPNETCoreMVC.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Produto> Produto { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=LAPTOP-T19N284C;Initial Catalog=traycorp;Integrated Security=True");
        }
    }
}

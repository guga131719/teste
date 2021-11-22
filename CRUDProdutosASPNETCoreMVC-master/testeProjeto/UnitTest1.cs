using CRUDProdutosASPNETCoreMVC.Models;
using System;
using Xunit;

namespace testeProjeto
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {

            Produto produto = new Produto();
            produto.Nome ="Carlos";
            string testeEsperado = produto.Nome;
            double numero = 0;
            string testeFinal = "";

            if (double.TryParse(testeEsperado, out numero))
                testeFinal = "erro";
            else
                testeFinal = testeEsperado;


            //Assert  
            Assert.Equal(testeEsperado, testeFinal);
        }
    }
}

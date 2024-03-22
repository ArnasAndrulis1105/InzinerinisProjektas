namespace BombasticElectronics.Entities
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public string? description { get; set; }
        public string image { get; set; }
        public Category category { get; set; }
        public decimal price { get; set; }
        public string[,]? properties { get; set; }

        public Product(int id, string name, string image, Category category, decimal price)
        {
            this.id = id;
            this.name = name;
            this.image = image;
            this.category = category;
            this.price = price;
        }

        public Product(int id, string name, string? description, string image, Category category, decimal price, string[,]? properties)
        {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.category = category;
            this.price = price;
            this.properties = properties;
        }
    }
}

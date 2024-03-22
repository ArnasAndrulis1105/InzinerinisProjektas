namespace BombasticElectronics.Entities
{
    public class Category
    {
        public string name { get; set; }
        public string image { get; set; }

        public Category(string name, string image)
        {
            this.name = name;
            this.image = image;
        }
    }
}

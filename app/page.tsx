import { Container, Filters, Title } from "@/components/shared";
import { TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of products */}
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Pizza"
              items={[
                {
                  id: 1,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
                {
                  id: 2,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
                {
                  id: 3,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
                {
                  id: 22,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
                {
                  id: 23,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
              ]}
              categoryId={1}
              listClassName={""}
            />
            <ProductsGroupList
              title="Combo"
              items={[
                {
                  id: 4,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
                {
                  id: 5,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
                {
                  id: 6,
                  name: "Margherita",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d6134bc4150bdd8e792d866ab52.avif",
                  price: 23,
                  items: [{ price: 23 }],
                },
              ]}
              categoryId={2}
              listClassName={""}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

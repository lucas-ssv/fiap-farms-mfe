import type { GoalModel } from "@/domain/models/goal";
import type { ProductModel } from "@/domain/models/product";
import type { SaleModel } from "@/domain/models/sale";
import SectionCards from "@/presentation/components/section-cards";

function App() {
  const goals: GoalModel[] = [
    {
      id: "goal1",
      user: {
        id: "user1",
        name: "User One",
        email: "any_email@example.com",
        username: "user_one",
      },
      product: {
        id: "any_product_id",
        name: "Product 1",
        price: 100,
        cost: 50,
        category: {
          id: "cat1",
          name: "Category 1",
          description: "Description of Category 1",
          image: "category1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        stock: 10,
        minStock: 5,
        maxStock: 20,
        unit: "kg",
        description: "Description of Product 1",
        image: "image1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      currentValue: 100,
      targetValue: 200,
      startDate: new Date(),
      deadline: new Date(),
      status: "in_progress",
      type: "sales",
      description: "Goal for Product 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const products: ProductModel[] = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      cost: 50,
      category: {
        id: "cat1",
        name: "Category 1",
        description: "Description of Category 1",
        image: "category1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      stock: 10,
      minStock: 5,
      maxStock: 20,
      unit: "kg",
      description: "Description of Product 1",
      image: "image1.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "Product 2",
      price: 200,
      cost: 100,
      category: {
        id: "cat2",
        name: "Category 2",
        description: "Description of Category 2",
        image: "category2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      stock: 20,
      minStock: 10,
      maxStock: 30,
      unit: "kg",
      description: "Description of Product 2",
      image: "image2.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const sales: SaleModel[] = [
    {
      id: "sale1",
      paymentMethod: "credit_card",
      product: {
        id: "1",
        name: "Product 1",
        price: 100,
        cost: 50,
        category: {
          id: "cat1",
          name: "Category 1",
          description: "Description of Category 1",
          image: "category1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        stock: 10,
        minStock: 5,
        maxStock: 20,
        unit: "kg",
        description: "Description of Product 1",
        image: "image1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      quantity: 2,
      unitPrice: 100,
      saleDate: new Date(),
      status: "completed",
      createdAt: new Date(),
      updatedAt: new Date(),
      totalPrice: 200,
      unit: "kg",
      user: {
        id: "user1",
        name: "User One",
        email: "user@mail.com",
        username: "user_one",
        userUID: "user_uid_1",
      },
    },
  ];

  return <SectionCards goals={goals} products={products} sales={sales} />;
}

export default App;

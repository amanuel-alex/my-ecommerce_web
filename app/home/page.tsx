import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
];

const HomePage = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="  flex justify-center relative "
    >
      <CarouselPrevious className="fixed left-0" />
      <CarouselContent className="flex justify-between ">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/5 bg-slate-300 "
          >
            <div className="p-4 ">
              <Card className="  ">
                <CardContent className="flex aspect-square items-center justify-center p-6  w-60">
                  <img
                    src={image}
                    alt={`Carousel item ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="fixed right-0 " />
    </Carousel>
  );
};
export default HomePage;

import BrandHeader from "@/components/BrandHeader";
import ColorPalette from "@/components/ColorPalette";
import Typography from "@/components/Typography";
import BrandElements from "@/components/BrandElements";
import BrandShowcase from "@/components/BrandShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BrandHeader />
      <ColorPalette />
      <Typography />
      <BrandElements />
      <BrandShowcase />
    </div>
  );
};

export default Index;

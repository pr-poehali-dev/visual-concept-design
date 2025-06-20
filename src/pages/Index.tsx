import BrandHeader from "@/components/BrandHeader";
import ColorPalette from "@/components/ColorPalette";
import Typography from "@/components/Typography";
import BrandElements from "@/components/BrandElements";
import BrandShowcase from "@/components/BrandShowcase";
import StoreExterior from "@/components/StoreExterior";
import PrivateLabel from "@/components/PrivateLabel";
import Uniform from "@/components/Uniform";
import SocialMedia from "@/components/SocialMedia";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BrandHeader />
      <ColorPalette />
      <Typography />
      <BrandElements />
      <BrandShowcase />
      <StoreExterior />
      <PrivateLabel />
      <Uniform />
      <SocialMedia />
    </div>
  );
};

export default Index;

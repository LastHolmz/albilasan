import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-muted/30 py-8 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="py-8">
            <CheckCircle className="mx-auto h-16 w-16 text-success mb-6" />
            <h1 className="text-2xl font-bold mb-4">تم بنجاح!</h1>
            <p className="text-muted-foreground mb-6">
              تم إرسال مشروعك بنجاح. سيتم مراجعته قريباً.
            </p>
            <Button asChild className="w-full">
              <Link to="/">العودة للرئيسية</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;